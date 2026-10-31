---
name: reporte-pruebas
description: Convierte los resultados de pruebas automatizadas de Karate (archivos Cucumber JSON de target/karate-reports) en un reporte Word de evidencia de ejecución, entendible para usuarios no técnicos, usando una plantilla .docx. Úsala cuando el usuario pida un reporte, informe o evidencia de pruebas, "pasar los resultados de Karate a Word", "documentar la ejecución de pruebas" o similares.
---
# Reporte de evidencia de pruebas

Genera un reporte Word a partir de los resultados de Karate. El script de la skill calcula los números y llena la plantilla; tú aportas los datos del proyecto y la explicación de los fallos en lenguaje simple.

Archivos de esta skill (rutas relativas a la carpeta de la skill, `.kiro/skills/reporte-pruebas/`):

- `scripts/generar_reporte.py` — analiza el JSON de Karate y genera el Word.
- `scripts/requirements.txt` — dependencia del script (`docxtpl`).
- `assets/plantilla-reporte.docx` — plantilla del reporte.

## Instrucciones

1. **Ubica la entrada.** Usa el archivo o carpeta que indique el usuario. Si no indica nada, busca `target/karate-reports/*.json` en el workspace. Si no encuentras nada, pide la ruta y detente.

2. **Verifica la dependencia.** Ejecuta `python -c "import docxtpl"`. Si falla, pide permiso al usuario para instalarla con:
   ```
   python -m pip install -r .kiro/skills/reporte-pruebas/scripts/requirements.txt
   ```

3. **Analiza los resultados:**
   ```
   python .kiro/skills/reporte-pruebas/scripts/generar_reporte.py analizar <entrada>
   ```
   La salida es un JSON con `resumen`, `escenarios` y `fallos`. Los conteos y porcentajes del reporte salen **solo** de este script: no los recalcules ni los corrijas.

4. **Obtén los datos del proyecto** que el JSON de Karate no trae: proyecto, ambiente (DEV, QA, UAT…), versión probada y responsable.
   - **Primero búscalos en un archivo de configuración complementario.** Busca `target/karate-reports/config.json` en el workspace (o el que indique el usuario). Si existe, léelo y toma de ahí los campos que coincidan (`proyecto`, `ambiente`, `version`, `responsable` o equivalentes). Usa esos valores sin preguntar.
   - **Solo pregunta por lo que falte.** Si el archivo no existe o no trae alguno de los campos, pídele al usuario **únicamente los campos faltantes** en una sola pregunta.
   - Si el usuario tampoco conoce alguno, usa "No especificado". No inventes valores.

5. **Redacta el contenido para usuarios no técnicos:**
   - `resumen_ejecutivo`: 2 a 4 oraciones con cuántas pruebas se ejecutaron, cuántas fallaron y qué funcionalidades del negocio se ven afectadas.
   - `explicaciones`: una por cada fallo, con la clave igual a su `numero`. Explica qué se probó, qué se esperaba y qué pasó realmente, en términos del negocio (pedidos, clientes, pagos), no de HTTP ni JSON. Ejemplo: "status code was: 500, expected: 409" → "el sistema debía rechazar el pedido con un aviso claro, pero respondió con un error interno".
   - No afirmes causas que el mensaje de error no muestre. Si sugieres una, preséntala como posible.

6. **Guarda los datos** en `evidencias/reporte-pruebas-<AAAAMMDD-HHMM>.datos.json`:
   ```json
   {
     "proyecto": "...",
     "ambiente": "...",
     "version": "...",
     "responsable": "...",
     "resumen_ejecutivo": "...",
     "explicaciones": { "4": "...", "7": "..." }
   }
   ```

7. **Genera el reporte:**
   ```
   python .kiro/skills/reporte-pruebas/scripts/generar_reporte.py generar <entrada> --datos evidencias/reporte-pruebas-<AAAAMMDD-HHMM>.datos.json --salida evidencias/reporte-pruebas-<AAAAMMDD-HHMM>.docx
   ```
   Si el usuario pide otra plantilla, agrega `--plantilla <ruta.docx>`. Cualquier campo adicional del JSON de datos queda disponible en la plantilla como `{{ campo }}`.

8. **Informa al usuario** la ruta del `.docx`, el resultado general (APROBADO / NO APROBADO) y los conteos. No abras ni edites el `.docx` a mano.

## Reglas

- No copies al reporte los logs HTTP de Karate (`doc_string`): contienen tokens y cabeceras `Authorization`. El script ya los excluye; no los agregues en el resumen ni en las explicaciones.
- Si hay escenarios fallidos, el resultado general es NO APROBADO aunque el porcentaje de éxito sea alto. No lo suavices.
- Si no hay fallos, `explicaciones` queda vacío (`{}`) y el reporte lo indica solo.
