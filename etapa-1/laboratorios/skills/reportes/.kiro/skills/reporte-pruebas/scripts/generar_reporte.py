"""Convierte reportes Cucumber JSON de Karate en un reporte Word de evidencia.

Uso:
    python generar_reporte.py analizar <entrada>
    python generar_reporte.py generar <entrada> --datos datos.json --salida reporte.docx [--plantilla plantilla.docx]

<entrada> puede ser un archivo .json de Karate (target/karate-reports/*.json)
o una carpeta que los contenga.
"""
import argparse
import json
import sys
from datetime import datetime
from pathlib import Path

SKILL_DIR = Path(__file__).resolve().parent.parent
PLANTILLA_POR_DEFECTO = SKILL_DIR / "assets" / "plantilla-reporte.docx"

ESTADOS = {
    "passed": ("Aprobado", "C6EFCE"),
    "failed": ("Fallido", "FFC7CE"),
    "skipped": ("Omitido", "FFEB9C"),
}
MAX_ERROR = 600


def cargar_features(entrada: Path) -> tuple[list[dict], list[str]]:
    archivos = sorted(entrada.glob("*.json")) if entrada.is_dir() else [entrada]
    features, fuentes = [], []
    for archivo in archivos:
        try:
            datos = json.loads(archivo.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            continue
        # Un reporte Cucumber es una lista de features con "elements".
        if isinstance(datos, list) and all(isinstance(f, dict) and "elements" in f for f in datos):
            features.extend(datos)
            fuentes.append(archivo.name)
    if not features:
        sys.exit(f"No se encontró ningún reporte Cucumber JSON de Karate en: {entrada}")
    return features, fuentes


def estado_de(pasos: list[dict]) -> str:
    estados = [p.get("result", {}).get("status", "skipped") for p in pasos]
    if "failed" in estados:
        return "failed"
    if estados and all(e == "passed" for e in estados):
        return "passed"
    return "skipped"


def segundos(pasos: list[dict]) -> float:
    # Karate expresa la duración de cada paso en nanosegundos.
    return sum(p.get("result", {}).get("duration", 0) for p in pasos) / 1e9


def formato_duracion(s: float) -> str:
    if s < 60:
        return f"{s:.2f} s".replace(".", ",")
    return f"{int(s // 60)} min {s % 60:.0f} s"


def recortar_error(mensaje: str) -> str:
    mensaje = mensaje.strip()
    return mensaje if len(mensaje) <= MAX_ERROR else mensaje[:MAX_ERROR] + " […]"


def analizar(features: list[dict], fuentes: list[str]) -> dict:
    escenarios, fallos, inicios = [], [], []
    for feature in features:
        funcionalidad = feature.get("description", "").split("\n")[0].strip() or feature.get("name", "")
        fondo: list[dict] = []
        for elemento in feature.get("elements", []):
            # Karate repite el Background antes de cada escenario; sus pasos cuentan para el siguiente.
            if elemento.get("type") == "background":
                fondo = elemento.get("steps", [])
                continue
            pasos = fondo + elemento.get("steps", [])
            fondo = []
            estado = estado_de(pasos)
            numero = len(escenarios) + 1
            if elemento.get("start_timestamp"):
                inicios.append(elemento["start_timestamp"])
            texto, color = ESTADOS[estado]
            escenarios.append({
                "numero": numero,
                "funcionalidad": funcionalidad,
                "escenario": elemento.get("name", ""),
                "etiquetas": " ".join(t["name"] for t in elemento.get("tags", [])),
                "estado": estado,
                "resultado": texto,
                "color": color,
                "segundos": round(segundos(pasos), 3),
                "duracion": formato_duracion(segundos(pasos)),
            })
            if estado == "failed":
                paso = next(p for p in pasos if p.get("result", {}).get("status") == "failed")
                fallos.append({
                    "numero": numero,
                    "funcionalidad": funcionalidad,
                    "escenario": elemento.get("name", ""),
                    "paso": f"{paso.get('keyword', '').strip()} {paso.get('name', '')}".strip(),
                    "linea": paso.get("line"),
                    "error": recortar_error(paso["result"].get("error_message", "")),
                })

    total = len(escenarios)
    aprobados = sum(e["estado"] == "passed" for e in escenarios)
    fallidos = sum(e["estado"] == "failed" for e in escenarios)
    inicio = min(inicios) if inicios else None
    return {
        "fuentes": fuentes,
        "fecha_ejecucion": inicio,
        "resumen": {
            "total": total,
            "aprobados": aprobados,
            "fallidos": fallidos,
            "omitidos": total - aprobados - fallidos,
            "porcentaje_exito": round(aprobados * 100 / total, 1) if total else 0.0,
            "duracion_total": formato_duracion(sum(e["segundos"] for e in escenarios)),
            "resultado_general": "APROBADO" if fallidos == 0 else "NO APROBADO",
        },
        "funcionalidades": sorted({e["funcionalidad"] for e in escenarios}),
        "escenarios": escenarios,
        "fallos": fallos,
    }


def fecha_legible(iso: str | None) -> str:
    if not iso:
        return "No disponible"
    fecha = datetime.fromisoformat(iso.replace("Z", "+00:00"))
    return fecha.strftime("%d/%m/%Y %H:%M UTC")


def generar(analisis: dict, datos: dict, plantilla: Path, salida: Path) -> None:
    from docxtpl import DocxTemplate

    explicaciones = {str(k): v for k, v in datos.get("explicaciones", {}).items()}
    faltantes = [f["numero"] for f in analisis["fallos"] if str(f["numero"]) not in explicaciones]
    if faltantes:
        sys.exit(f"Faltan explicaciones para los escenarios fallidos: {faltantes}")

    fallos = [{**f, "explicacion": explicaciones[str(f["numero"])]} for f in analisis["fallos"]]
    resumen = analisis["resumen"]
    # Los campos extra de datos.json quedan disponibles en la plantilla como {{ campo }}.
    contexto = {
        **datos,
        "proyecto": datos.get("proyecto", "No especificado"),
        "ambiente": datos.get("ambiente", "No especificado"),
        "version": datos.get("version", "No especificada"),
        "responsable": datos.get("responsable", "No especificado"),
        "resumen_ejecutivo": datos.get("resumen_ejecutivo", ""),
        "fecha_ejecucion": fecha_legible(analisis["fecha_ejecucion"]),
        "fecha_reporte": datetime.now().strftime("%d/%m/%Y %H:%M"),
        "funcionalidades": ", ".join(analisis["funcionalidades"]),
        "fuentes": ", ".join(analisis["fuentes"]),
        "resumen": {**resumen, "porcentaje_exito": f"{resumen['porcentaje_exito']}".replace(".", ",") + " %"},
        "color_general": "C6EFCE" if resumen["fallidos"] == 0 else "FFC7CE",
        "escenarios": analisis["escenarios"],
        "fallos": fallos,
    }
    documento = DocxTemplate(str(plantilla))
    documento.render(contexto, autoescape=True)
    salida.parent.mkdir(parents=True, exist_ok=True)
    documento.save(str(salida))
    print(f"Reporte generado: {salida}")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="comando", required=True)
    p_analizar = sub.add_parser("analizar", help="Imprime en JSON el resumen y los fallos")
    p_analizar.add_argument("entrada", type=Path)
    p_generar = sub.add_parser("generar", help="Genera el reporte Word")
    p_generar.add_argument("entrada", type=Path)
    p_generar.add_argument("--datos", type=Path, required=True)
    p_generar.add_argument("--salida", type=Path, required=True)
    p_generar.add_argument("--plantilla", type=Path, default=PLANTILLA_POR_DEFECTO)
    args = parser.parse_args()

    sys.stdout.reconfigure(encoding="utf-8")
    analisis = analizar(*cargar_features(args.entrada))
    if args.comando == "analizar":
        print(json.dumps(analisis, ensure_ascii=False, indent=2))
    else:
        datos = json.loads(args.datos.read_text(encoding="utf-8"))
        generar(analisis, datos, args.plantilla, args.salida)


if __name__ == "__main__":
    main()
