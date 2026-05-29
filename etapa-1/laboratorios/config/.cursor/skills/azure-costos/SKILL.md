---
name: azure-costos
description: >-
  Estima costos de servicios Azure con precios retail en tiempo real vía Azure MCP Server.
  Hace preguntas clave, invoca la herramienta pricing get y presenta un desglose mensual.
  Usar cuando pidan calcular, estimar o comparar costos/precios de Azure, VMs, storage,
  bases de datos, App Service u otros servicios cloud de Microsoft.
---

# Azure Costos

Skill simple para estimar costos usando el **Azure MCP Server** oficial (`@azure/mcp`).

## Prerrequisitos

- MCP configurado en `.cursor/mcp.json` con el servidor `Azure MCP Server`.
- Node.js 20+ disponible en PATH (`npx` funcional).
- La herramienta de pricing **no requiere autenticación** (API pública de retail prices).

Antes de invocar cualquier tool, **lee el schema** en la carpeta MCP del proyecto.

## Flujo

### 1. Entender la solicitud

Si el usuario da poca información, preguntar lo mínimo necesario (en un solo mensaje, no de a uno):

| Pregunta | Por qué |
|----------|---------|
| ¿Qué servicio de Azure? | Ej.: Virtual Machines, Storage, SQL Database, App Service |
| ¿SKU o tier concreto? | Ej.: `Standard_D2s_v5`, `P1v3`, `Standard_LRS` |
| ¿Región? | Ej.: `eastus`, `westeurope`, `brazilsouth` |
| ¿Modelo de precio? | Consumption (pay-as-you-go), Reservation, DevTestConsumption |
| ¿Patrón de uso? | Horas/día, días/mes, GB, transacciones, etc. |
| ¿Moneda? | Por defecto USD |

**No inventar SKUs.** Si solo mencionan un servicio genérico (“una VM”, “storage”), pedir el SKU o tier antes de consultar precios.

### 2. Consultar precios con MCP

Servidor MCP: `Azure MCP Server`

Herramienta: `pricing get` (namespace `pricing`, operación `get`).

Parámetros útiles (al menos uno de filtro es obligatorio):

| Parámetro | Ejemplo |
|-----------|---------|
| `sku` | `Standard_D2s_v5` |
| `service` | `Virtual Machines` |
| `region` | `eastus` |
| `serviceFamily` | `Compute`, `Storage`, `Databases` |
| `priceType` | `Consumption`, `Reservation`, `DevTestConsumption` |
| `currency` | `USD`, `EUR` |
| `includeSavingsPlan` | `true` para planes de ahorro (no usar `SavingsPlan` como priceType) |

Si la primera consulta devuelve demasiados resultados, refinar con `sku` + `region` + `priceType`.

### 3. Calcular el costo

Usar el `retailPrice` / `unitPrice` del meter que coincida con el escenario:

| Unidad | Fórmula típica |
|--------|----------------|
| Por hora | `precio × horas_mes` (730 h = 24/7) |
| Por día | `precio × días_mes` |
| Por GB/mes | `precio × GB` |
| Por millón de operaciones | `precio × (operaciones / 1_000_000)` |

Indicar siempre la unidad (`unitOfMeasure`) y el `priceType` usados.

### 4. Responder

Usar esta plantilla:

```markdown
## Estimación de costos Azure

**Servicio:** [nombre]
**SKU:** [sku]
**Región:** [region]
**Modelo:** [Consumption / Reservation / …]

| Concepto | Precio unitario | Uso | Costo estimado |
|----------|-----------------|-----|----------------|
| [meter]  | [precio + moneda + unidad] | [cantidad] | [subtotal] |

**Total estimado:** [monto] [moneda] / mes

### Supuestos
- [horas, días, GB, etc.]
- Precios retail públicos; no incluyen descuentos EA/CSP, impuestos ni soporte.
- Fuente: Azure Retail Prices API vía Azure MCP Server.
```

Si comparan regiones o SKUs, repetir la consulta por variante y presentar tabla comparativa.

## Reglas

- Responder en español.
- Citar precios obtenidos del MCP; no usar cifras de memoria.
- Si el MCP no está disponible, indicarlo y sugerir verificar `.cursor/mcp.json` y Node.js.
- Para varios recursos (p. ej. plantilla Bicep/ARM), consultar cada SKU y sumar.
- Avisar que es una **estimación orientativa**, no una factura.

## Ejemplo rápido

**Usuario:** “¿Cuánto cuesta una D2s v5 en eastus 24/7?”

**Acciones:**
1. Confirmar: SKU `Standard_D2s_v5`, región `eastus`, Consumption, 730 h/mes.
2. Invocar `pricing get` con esos filtros.
3. Tomar el meter `Consumption` de Linux (o el SO que el usuario indique).
4. Multiplicar precio/hora × 730 y presentar desglose.
