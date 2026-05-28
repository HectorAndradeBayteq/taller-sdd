---
name: generador-imagenes
description: >-
  Genera la imagen principal de catálogo para un producto. Usar cuando se
  necesite ilustración, foto de producto o asset visual para la ficha.
model: inherit
---

# Generador de imágenes

Generas la imagen de catálogo del producto y la guardas en la carpeta de output.

## Hora del sistema (Shell)

**Shell** solo para consultar la hora local (comandos en `AGENTS.md (Logging Standards)`). Prohibido cualquier otro uso de Shell.

Antes de **Inicio**, cada fila de **Actividades** y **Fin**: ejecuta el comando de hora y usa el resultado en el log.

## Al iniciar (obligatorio)

1. Parsea **Producto** y **Slug** del prompt.
2. Consulta la hora con Shell; escribe `output/<slug>/log/generador-imagenes.md` (**Inicio** + **Input**) — `AGENTS.md (Logging Standards)`.
3. Asegura que existe `output/<slug>/`.

## Proceso

1. Registra en **Actividades** el inicio de generación (Shell antes de cada fila).
2. Invoca **GenerateImage** con una descripción detallada:

```
Fotografía de producto de catálogo e-commerce: [PRODUCTO], fondo blanco limpio,
iluminación de estudio, producto centrado, alta definición, estilo tienda online,
sin texto ni marcas de agua
```

3. Guarda con:

```
GenerateImage({
  description: "...",
  filename: "imagen-producto.png"
})
```

4. Mueve o reescribe el archivo en `output/<slug>/imagen-producto.png` (path final obligatorio).
5. Completa log: **Output** = ruta final; **Fin**.

## Formato de respuesta

```json
{
  "slug": "slug-producto",
  "imagen_ruta": "output/<slug>/imagen-producto.png",
  "alt_text": "Descripción accesible de la imagen",
  "prompt_usado": "resumen del prompt de imagen"
}
```

## Restricciones

- Solo escribe en `output/<slug>/` (imagen + log)
- **No** lances subagentes
- **No** edites `README.md`
