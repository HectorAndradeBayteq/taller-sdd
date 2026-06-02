# Ejercicio 2: Posición consolidada

## Ejecución del flujo

### Paso 1: Transformar Historia de Usuario en una Spec

Invoca el skill `/speckit-specify` incluyendo la historia de usuario y los documentos técnicos relacionados.

<img src="../assets/LB-001-img-0.png" style="width: 400px; max-width: 100%;" />

### Paso 2: Planifica la implementación

Ejecuta la planificación de la especificación con `/speckit-plan`:

<img src="../assets/LB-001-img-1.png" style="width: 400px; max-width: 100%;" />

Durante la planificación, refina la spec con los siguientes prompts:

**Escribir en el chat:** `/speckit-clarify` La sección de listado de cuentas debe ser un componente llamado `accounts-carousel`. (Incluir screenshot)

**Escribir en el chat:** `/speckit-clarify` El navbar también debe ser un componente con el nombre `navbar`. (Incluir screenshot)

**Escribir en el chat:** `/speckit-clarify` En el icono junto a "Hola, Demo", agrega un menú que, al hacer clic, despliegue la opción de cerrar sesión.

**Escribir en el chat:** `/speckit-clarify` `MovementsSection.tsx` debe llamarse `MovementsList.tsx` y `ShortcutsSection.tsx` solo `Shortcuts.tsx`.

### Paso 3: Crea las tareas de implementación

<img src="../assets/LB-001-img-2.png" style="width: 400px; max-width: 100%;" />

### Paso 4: Analiza la coherencia entre artefactos

Ejecuta `/speckit-analyze` para revisar que la spec, el plan y las tareas estén alineados. Corrige las inconsistencias detectadas antes de implementar.

<img src="../assets/LB-002-img-1.png" style="width: 400px; max-width: 100%;" />

### Paso 5: Implementa el Spec

<img src="../assets/LB-001-img-3.png" style="width: 400px; max-width: 100%;" />

### Paso 6: Valida y corrige

Revisa que los criterios de aceptación se cumplan, si hay inconsistencias en UI, puedes pedir correcciones, por ejemplo:

**Escribir en el chat:** Usa el MCP de Figma y revisa que el diseño del HTML sea fiel al de Figma; si es necesario, rehazlo.

## Paso 7: Despliegue

Luego de implementar si ya estamos conformes con el resultado y queremos pasar a los distintos ambientes de despliegue, podemos preparar la entrega en 2 pasos:

### Ejecutamos un Code Review

<img src="../assets/LB-000-img-9.png" style="width: 400px; max-width: 100%;" />

Esto ejecuta el suite completo de control y pruebas para garantizar la calidad del entregable si es necesario correcciones el agente los pruebe resolver proactivamente.

### Proponemos un Pull Request para el despliegue en ambientes

<img src="../assets/LB-000-img-10.png" style="width: 400px; max-width: 100%;" />

De esta manera hemos cubierto el proceso de desarrollo de punta a punta totalmente asistido por el agente de IA.

## Conclusión

Este laboratorio continúa el recorrido de **Specification-Driven Development (SDD)** sobre la app de banca móvil, pero con un alcance mayor que el ejercicio anterior: una **historia de usuario con múltiples tareas** que construye la **pantalla de posición consolidada**, el punto central de consulta del usuario autenticado.

El recorrido extiende el flujo Speckit del ejercicio 1 con etapas adicionales de refinamiento y verificación:

1. **Especificación** (`/speckit-specify`): la historia de usuario y los documentos técnicos del repositorio se transforman en una especificación con alcance, criterios de aceptación y requisitos verificables.
2. **Planificación y clarificación** (`/speckit-plan` + `/speckit-clarify`): durante la planificación se refinan decisiones concretas de diseño —componentes `accounts-carousel` y `navbar`, menú de usuario con opción de cerrar sesión, nombres de componentes como `MovementsList` y `Shortcuts`— antes de que el agente genere código.
3. **Tareas** (`/speckit-tasks`): el plan se descompone en trabajo concreto que cubre cada pieza de la interfaz y su integración.
4. **Análisis de coherencia** (`/speckit-analyze`): se revisa que spec, plan y tareas estén alineados entre sí, corrigiendo inconsistencias entre artefactos antes de implementar.
5. **Implementación** (`/speckit-implement`): el agente produce la pantalla de posición consolidada alineada a la spec refinada.
6. **Validación y corrección**: la persona revisa el resultado frente al diseño en Figma (vía MCP) y corrige desvíos visuales antes de dar por cerrada la entrega.

Este ejercicio deja dos aprendizajes centrales. El primero: **a mayor complejidad de pantalla, mayor valor tiene clarificar la spec durante la planificación** —cuando una vista agrupa varios componentes reutilizables y comportamientos de sesión, dejar nombres, responsabilidades e interacciones implícitas genera implementaciones inconsistentes. El segundo: **`/speckit-analyze` cierra la brecha entre documentación y ejecución** —aunque cada artefacto se genere por separado, solo un análisis explícito de coherencia garantiza que spec, plan y tareas describan el mismo alcance antes de escribir código.

Al terminar este ejercicio tendrás la **pantalla de posición consolidada** implementada —con carrusel de cuentas, barra de navegación, listado de movimientos, accesos directos y control de sesión— y habrás practicado cómo escalar el flujo Speckit de una tarea a **múltiples tareas coordinadas**, con refinamiento y verificación de artefactos. Ese resultado prepara el terreno para el laboratorio siguiente: el **flujo de transferencia entre cuentas propias** (asistente multi-paso con reglas de negocio) y, más adelante, **modificaciones** sobre funcionalidades ya existentes.
