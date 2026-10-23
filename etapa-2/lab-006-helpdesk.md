# Laboratorio 6: HelpDesk Lite

Este laboratorio recorre [SDD Devkit](https://github.com/juanca202/sdd-devkit) durante tres bloques, sobre un producto con interfaz y API en repositorios distintos. El insumo de producto es el PRD. El grupo lo convierte en especificación, diseño, historias, código y pruebas.

HelpDesk Lite es una aplicación web de demostración para incidencias de soporte interno: registrarlas, consultarlas, seguirlas con comentarios y cambios de estado, y ver cuatro indicadores de carga. El detalle, el alcance y lo que queda fuera están en [PRD-helpdesk.md](./assets/PRD-helpdesk.md). Descárgalo y úsalo como archivo de entrada del agente.

La guía indica qué skill invocar, qué artefacto debe existir al terminar el paso y qué decisiones cierra el grupo. El agente pregunta antes de crear archivos. Esas respuestas las da el grupo, a partir del PRD y de lo que ya quedó escrito en el repositorio.

## Objetivo

Dejar HelpDesk Lite integrado, con las seis historias del corte de abajo en su estado real, y con evidencia de los criterios del PRD.

1. Reconocer el PRD y fijar alcance, restricciones y Definition of Done.
2. Dejar operativo un multirepo: repositorio de especificaciones, interfaz y API.
3. Acordar el modelo, los límites entre interfaz y API, el ciclo de vida, el contrato y las pantallas.
4. Implementar los datos de demostración, el registro y la consulta, y después el detalle, los estados y el dashboard.
5. Verificar el sistema completo y contrastar el recorrido con el del laboratorio 5.

## Pre-requisitos

- Cursor, Node.js 22+ y Git.
- SDD Devkit instalado. Instala el plugin completo, no skills sueltos. Es compatible con cualquier agente que soporte el estándar abierto Agent Plugins, entre ellos:

**Cursor**

```text
/add-plugin https://github.com/juanca202/sdd-devkit
```

**Kiro**

Panel de Powers → Add Custom Power → Import power from GitHub → pega `https://github.com/juanca202/sdd-devkit`

**Claude Code** (tiene su propio sistema de plugins, no usa el estándar Agent Plugins):

```text
/plugin marketplace add juanca202/sdd-devkit
/plugin install sdd-devkit@juanca202
```

- El PRD: [PRD-helpdesk.md](./assets/PRD-helpdesk.md).

## Definition of Done

Al terminar el día 8, HelpDesk Lite cumple AC-001 a AC-008 del PRD. Cada día tiene una meta propia. Lo que documenten ese día es el estado real del trabajo.

**Día 6. Queda acordado cómo será el sistema, todavía sin programarlo.**

Pueden mostrar tres repositorios conectados (especificaciones, interfaz y API), un SRS que respeta el alcance del PRD, y el diseño para construir: modelo de la incidencia, límite entre interfaz y API, ciclo de vida, contrato con ejemplos de petición, respuesta y error, y pantallas revisadas. Las seis historias están en Ready. El stack y la persistencia en SQLite quedaron escritos en un ADR.

**Día 7. Hay datos de ejemplo, y ya se puede crear una incidencia y encontrarla.**

Luis Gómez está activo, hay 30 incidencias de ejemplo y los datos siguen ahí después de reiniciar la API. Desde la interfaz se registra una incidencia válida, se rechaza una inválida con un mensaje claro, y el listado filtra, ordena y pagina de 10 en 10. Ese recorrido tiene pruebas que se pueden ejecutar. El `progress.md` de US-001, US-002 y US-003 dice qué tareas quedaron hechas.

**Día 8. El recorrido completo funciona y cada criterio tiene un resultado.**

Se puede abrir el detalle, comentar y cambiar el estado solo con las transiciones del PRD. El dashboard muestra las cuatro cifras de acuerdo con los datos. Las historias que se integraron tienen sus tareas en Done. AC-001 a AC-008 tienen una prueba, un recorrido hecho o una brecha escrita.

## Corte de las seis historias

`/work-define` propone el corte y espera confirmación antes de crear las carpetas. La respuesta de este laboratorio es esta propuesta. Si el SRS numeró los requisitos de otra forma, se conserva el comportamiento y se enlaza el identificador real del SRS.

Los dos repositorios de cada historia son `helpdesk-lite-web` y `helpdesk-lite-api`. La compatibilidad con navegadores entra como criterio en cada historia que tenga interfaz.

| Historia | Depende de | Pantalla | Comportamiento que debe quedar escrito |
| -------- | ---------- | -------- | -------------------------------------- |
| US-001 Usuarios de demostración, datos iniciales y persistencia | Ninguna | — | Tres usuarios predefinidos, con Luis Gómez activo por defecto. La selección se conserva al recargar y ese usuario es el autor de registros y comentarios. Se cargan 30 incidencias de ejemplo una sola vez. Esos datos y los nuevos siguen ahí al reiniciar la API. |
| US-002 Registrar una incidencia | US-001 | WF-002 | Id secuencial, fecha, registrante y estado Open. Título hasta 120 caracteres y descripción hasta 2000. Un texto vacío o solo con espacios se rechaza con un mensaje. La prioridad empieza en Media y la categoría no. Al registrar se abre el detalle. |
| US-003 Consultar, filtrar y paginar incidencias | US-001 | WF-001 | Filtros por estado, prioridad y categoría, y orden por fecha en los dos sentidos. Páginas de 10, y vuelta a la primera al cambiar filtro u orden. Mensaje claro si no hay resultados. Filtros, orden y página se conservan al volver del detalle. Hay estado de carga y de error con reintento. |
| US-004 Ver el detalle y comentar una incidencia | US-001 | WF-003 | El detalle muestra datos, estado, fechas y comentarios en orden cronológico. Un id inexistente dice que no fue encontrada. Un comentario vacío o de más de 1000 caracteres se rechaza. Los comentarios no se editan ni se eliminan. |
| US-005 Cambiar el estado de una incidencia | US-004 | WF-003 | Las tres transiciones válidas se aplican con un clic, sin confirmación, y se ven en el detalle y en el listado. Otra transición, el mismo estado o un estado desactualizado se rechaza con un mensaje y sin cambios. La fecha de resolución se fija al resolver y se borra al reabrir. |
| US-006 Dashboard con indicadores | US-003 y US-005 | WF-004 | Muestra el total y las cantidades por estado, al abrir y al pulsar «Actualizar». Cada indicador abre el listado filtrado, y «Total» lo abre sin filtro. Hay error con reintento. El tiempo de respuesta queda por debajo de 2 s (p95). |

# Repositorios y diseño (1 h 45 min)

## Paso 1. Problema, alcance y Definition of Done (10 min)

Lean el PRD en grupo antes de llamar a un skill. Marquen el ciclo de una incidencia (registro, consulta, seguimiento, indicadores), el fuera de alcance y la tabla AC-001 a AC-008. Esa tabla es la aceptación del producto. La Definition of Done de arriba es la del proceso.

## Paso 2. Carpeta de trabajo (5 min)

Fuera de este repositorio, crea una carpeta vacía llamada `exercise-helpdesk` y ábrela. Copia ahí [PRD-helpdesk.md](./assets/PRD-helpdesk.md). A partir del paso siguiente, el chat del agente trabaja dentro de esa carpeta. Cuando `/arch-init` proponga el repositorio de especificaciones, usen esta carpeta como raíz.

## Paso 3. Del PRD al SRS (15 min)

`/requirement-refine` guarda el PRD tal cual y redacta un SRS. El PRD ya trae requisitos y criterios. El skill los expresa en el formato del kit. El alcance no crece: lo que la sección 4.2 deja fuera sigue fuera.

### Llamado

```text
/requirement-refine
```

Adjunta en ese mensaje `PRD-helpdesk.md`.

### Qué cierran ustedes

Cuando pregunte si investigan el stack o ya está decidido cómo se construye, respondan **Ya lo tengo decidido**. El ejercicio parte de estos proyectos base:

- Proyecto base frontend: `https://github.com/juanca202/angular-base.git`
- Proyecto base backend: `https://github.com/juanca202/fastify-base.git`

La solución tiene dos repositorios de aplicación más el de especificaciones. La interfaz se llama `helpdesk-lite-web` y parte de `angular-base`. La API se llama `helpdesk-lite-api` y parte de `fastify-base`. La persistencia de la API es **SQLite**. Si ofrece dibujar las pantallas en este paso, pueden dejarlas para el paso 6, cuando ya existan el modelo y el contrato.

### Antes de seguir

- El PRD original está en `references/` de la carpeta del SRS, sin reescritura.
- El SRS cubre RF-01 a RF-06 y RNF-06, y no incorpora autenticación, adjuntos, SLA ni permisos reales.
- La sección de repositorios nombra `helpdesk-lite-web` y `helpdesk-lite-api`, con sus proyectos base.
- El SRS deja la persistencia en SQLite, en la API.

## Paso 4. Multirepo (25 min)

`/arch-init` crea el repositorio de especificaciones y agrega la interfaz y la API como submódulos. Registra el rol de cada uno, deja el contexto compartido en la raíz y prepara el harness de los tres.

`base` significa que ese remoto queda como `upstream` y el repositorio del ejercicio es nuevo. Los dos proyectos ya quedaron elegidos en el paso 3.

### Llamado

```text
/arch-init base https://github.com/juanca202/angular-base.git base https://github.com/juanca202/fastify-base.git
El SRS está en esta carpeta. La solución es multirepo: repositorio de especificaciones en exercise-helpdesk. El submódulo helpdesk-lite-web es la interfaz y parte de angular-base. El submódulo helpdesk-lite-api es la API y parte de fastify-base.
```

### Qué cierran ustedes

- Topología: Multirepo.
- Nombres: `helpdesk-lite-web` (interfaz) y `helpdesk-lite-api` (API).
- Los dos son proyecto base y quedan como `upstream`.
- Descripción de la solución y la de cada repositorio.
- Si un archivo del harness no coincide con el formato vigente, si lo normalizan con `/plugin-migrate`.
- Conservar `docs/` del SRS al traer un proyecto base o al inicializar el repositorio.

### Antes de seguir

- `git submodule status` lista los dos submódulos.
- `.sdd-devkit/settings.json` y `.agents/MEMORY.md` están solo en `exercise-helpdesk`.
- Cada raíz tiene su `AGENTS.md` y un `README.md` que dice qué hace ese repositorio.
- `docs/specs/` sigue en el repositorio de especificaciones.
- Todavía no hace falta commit. El primer commit llega cuando el grupo lo pida con `/git-commit`.

## Paso 5. Seis historias (15 min)

`/work-define` descompone el SRS. Primero propone el corte y espera confirmación. No crea las carpetas hasta que el grupo responda.

### Llamado

```text
/work-define SRS-001
```

Sustituye `SRS-001` por el identificador real si el agente usó otro.

### Qué cierran ustedes

Cuando presente la propuesta y pida la decisión antes de crear las historias, respondan que cree las seis de la sección «Corte de las seis historias», con esas dependencias, pantallas y criterios. Si su numeración de FR no coincide con la del SRS, conserven el comportamiento y enlacen el FR real.

Si el agente ofrece casos de prueba documentados (`/test-define`), el grupo decide si los escribe ahora o si las pruebas nacen con `/work-implement`. La Definition of Done pide pruebas ejecutables. Los `TC-XXX` previos son opcionales.

### Antes de seguir

- Hay seis carpetas, US-001 a US-006, cada una en Ready.
- Los criterios cubren AC-001 a AC-008 del PRD, más los usuarios de demostración, los datos iniciales y la persistencia.
- La sección de historias derivadas del SRS apunta a esas seis.
- Cada historia nombra `helpdesk-lite-web` y `helpdesk-lite-api`.

## Paso 6. Modelo, límites, ciclo de vida y contrato (30 min)

`/design-define` escribe la documentación técnica en `docs/architecture/` del repositorio de especificaciones. Un grupo de API (`API-XXX`) reúne las operaciones de las incidencias: campos, códigos de error y ejemplos de solicitud y respuesta. Las historias enlazan ese markdown. Si el grupo quiere además un archivo OpenAPI, pídanlo en el mismo llamado y enlázenlo desde el `API-XXX`.

### Llamado

```text
/design-define
Documenta la capability de incidencias de HelpDesk Lite, a partir del SRS y de US-001 a US-006.

Incluye:
- el modelo de la incidencia y el del comentario
- la persistencia en SQLite, en la API
- un diagrama de componentes con el límite entre la interfaz y la API
- el flujo del ciclo de vida, con las transiciones permitidas y el rechazo de las demás
- el contrato de la API: operaciones, errores y ejemplos de solicitud y respuesta
- los wireframes de las pantallas del SRS
```

### Qué cierran ustedes

Varias decisiones ya están en el corte: SQLite, tres usuarios con Luis Gómez por defecto, 30 incidencias de ejemplo, id secuencial, límites de 120, 2000 y 1000 caracteres, prioridad inicial Media y páginas de 10. El agente pregunta lo que el corte no fija, como el catálogo de categorías y de prioridades y el cuerpo de los errores. Una respuesta que agregue autenticación, adjuntos o permisos reales se corrige antes de dejar el documento.

Los wireframes salen en gris, dentro de la carpeta del SRS: WF-001 listado, WF-002 registro, WF-003 detalle y WF-004 dashboard. El agente los presenta en lote y pregunta una vez si hay cambios.

### Antes de seguir

- Existen modelo, diagrama, flujo y grupo de API, enlazados desde el índice de la capability.
- El flujo de estados coincide con RF-05.
- Cada operación del contrato tiene ejemplo y al menos un error comprensible.
- Los wireframes quedaron revisados, aprobados o con el cambio pendiente escrito.

## Paso 7. Decisiones y ajuste de historias (5 min)

`/arch-manage` registra el porqué de las decisiones que el diseño fijó: stack de cada submódulo, SQLite como persistencia de la API y forma de los errores. El ADR de SQLite vive en el submódulo de la API. Una decisión que cruza los dos repositorios se registra donde el grupo acuerde, y el otro repositorio la referencia.

Vuelvan a las seis historias. Si el contrato cambió un criterio, actualícenlo con `/work-define` sobre esa US. Una historia en Ready no debería contradecir el `API-XXX`.

Con eso cierra el día 6.

---

# Datos de demostración, registro y consulta (1 h 50 min)

## Paso 8. Revisar y planificar US-001, US-002 y US-003 (20 min)

Lean el contrato, los criterios y las dependencias antes de escribir código. `/work-plan` parte cada historia en tareas por repositorio. No escribe código. Primero muestra el corte y pregunta si materializa planes completos o borradores.

### Llamado

```text
/work-plan US-001 US-002 US-003
```

### Qué cierran ustedes

- Planes completos, para poder implementar hoy.
- Cada tarea con un repositorio concreto: `helpdesk-lite-web` o `helpdesk-lite-api`.
- El orden: US-002 y US-003 dependen de US-001. Lo que la interfaz necesita de la API queda como dependencia, y un escenario de punta a punta queda al final.
- Las mismas decisiones del día 6. Si una tarea reabre una laguna, ciérrenla en el contrato y después en la tarea.

### Antes de seguir

- Las tareas de US-001, US-002 y US-003 están en Ready.
- Ninguna tarea deja el repositorio en «Por definir».

## Paso 9. Entorno y pruebas (10 min)

Preparen los dos submódulos para implementar: dependencias instaladas, forma de arrancar cada uno y una dirección de API que la interfaz pueda usar. Acuerden cómo van a demostrar un error de validación y un listado vacío.

`/work-implement` ejecuta las pruebas de los archivos que toca. La batería completa del repositorio corre después, en `/work-integrate`. Si el día 6 dejaron casos de prueba documentados, este paso los tiene en cuenta. Si no, las pruebas de la historia se escriben junto al código.

Comprueben que `helpdesk-lite-web` y `helpdesk-lite-api` arrancan antes de agregar comportamiento de HelpDesk Lite.

## Paso 10. Implementar US-001 (25 min)

### Llamado

Dentro de `exercise-helpdesk`:

```text
/work-implement US-001
```

### Qué cierran ustedes

El skill pregunta cómo tratar cambios sin commitear, si hay casos de prueba, si usa worktree y cómo organiza las ramas. US-001 toca los dos submódulos: la rama de cada uno sale del código de ese repositorio, y el `progress.md` vive en el repositorio de especificaciones.

También se detiene entre tareas. Si el grupo quiere recorrer la historia dentro del tiempo, díganlo en la respuesta.

### Antes de seguir

- Hay tres usuarios de demostración y Luis Gómez queda activo por defecto.
- La selección se conserva al recargar, y ese usuario es el autor de lo que se registre después.
- Las 30 incidencias de ejemplo se cargan una sola vez.
- Esos datos y los nuevos siguen ahí al reiniciar la API.
- `progress.md` de US-001 marca en Done solo las tareas terminadas.

## Paso 11. Implementar US-002 (25 min)

### Llamado

```text
/work-implement US-002
```

US-002 depende de US-001. La rama tiene que ver ese código. Si el agente propone ramas independientes desde `main`, el registro no vería los usuarios ni la base SQLite.

### Antes de seguir

- Una solicitud válida crea una incidencia con id secuencial, fecha, registrante y estado Open, y la interfaz abre el detalle.
- La prioridad llega preseleccionada en Media y la categoría no.
- Un título o una descripción vacíos, solo con espacios, o por encima de 120 y 2000 caracteres, se rechazan con un mensaje y no crean la incidencia.
- `progress.md` de US-002 está al día.

## Paso 12. Implementar US-003 (20 min)

### Llamado

```text
/work-implement US-003
```

US-003 también depende de US-001. La rama de este paso tiene que ver el código de US-001 y el de US-002, para que el listado y el registro convivan.

### Antes de seguir

- El listado filtra por estado, prioridad y categoría, y ordena por fecha en los dos sentidos.
- La página es de 10 y vuelve a la primera al cambiar filtro u orden.
- Una consulta sin resultados se entiende.
- Filtros, orden y página se conservan al volver del detalle.
- Hay estado de carga y de error con reintento.
- `progress.md` de US-003 está al día.

## Paso 13. Contraste con el PRD (10 min)

Ejecuten las pruebas de las tareas cerradas. Anoten cualquier diferencia entre el código y los criterios de US-001, US-002 y US-003. Corrijan las que impidan elegir usuario, registrar o encontrar una incidencia. El resto queda escrito con el estado real, para el día siguiente.

---

# Detalle, estados, dashboard y verificación (1 h 50 min)

## Paso 14. Implementar US-004 (25 min)

Planifiquen e implementen en el mismo bloque.

### Llamado

```text
/work-plan US-004
```

Cuando las tareas estén en Ready:

```text
/work-implement US-004
```

US-004 depende de US-001. La rama tiene que ver el listado y el registro ya implementados.

### Antes de seguir

- El detalle muestra datos, estado, fechas y comentarios en orden cronológico.
- Un id inexistente informa que la incidencia no fue encontrada.
- Un comentario vacío o de más de 1000 caracteres se rechaza.
- Los comentarios no se editan ni se eliminan, y el autor es el usuario de demostración activo.
- `progress.md` de US-004 está al día.

## Paso 15. Implementar US-005 (20 min)

### Llamado

```text
/work-plan US-005
```

Cuando las tareas estén en Ready:

```text
/work-implement US-005
```

US-005 depende de US-004. La rama tiene que ver el detalle.

### Antes de seguir

- Open → In Progress, In Progress → Resolved y Resolved → In Progress se aplican con un clic, sin confirmación, y se ven en el detalle y en el listado.
- Otra transición, el mismo estado o un estado desactualizado responde con un mensaje y deja el estado anterior.
- La fecha de resolución se fija al resolver y se borra al reabrir.
- `progress.md` de US-005 está al día.

## Paso 16. Implementar US-006 (15 min)

### Llamado

```text
/work-plan US-006
```

Cuando las tareas estén en Ready:

```text
/work-implement US-006
```

US-006 depende de US-003 y de US-005. La rama tiene que ver el listado y los cambios de estado.

### Antes de seguir

- La pantalla muestra el total y las cantidades por estado, al abrir y al pulsar «Actualizar».
- Cada indicador abre el listado filtrado, y «Total» lo abre sin filtro.
- Hay estado de error con reintento.
- `progress.md` de US-006 está al día.

## Paso 17. Integrar y comprobar el contrato (20 min)

`/work-integrate` hace merge de una historia cuando todas sus tareas están en Done, después de tres puertas: `quality-check`, `code-review` y `coverage-verify`. Una tarea en Pending bloquea el merge. El grupo decide si integra cada historia contra `main` o si integra la pila completa desde la última rama, como en un solo repositorio. En multirepo la integración ocurre en cada submódulo que la historia tocó, y el repositorio de especificaciones conserva el `progress.md`.

### Llamado

Desde el worktree que tiene el código a integrar:

```text
/work-integrate
```

### Qué cierran ustedes

- Rama base de cada submódulo.
- Si ejecutan las tres puertas ahora.
- Qué hacer con una puerta en rojo: corregir y repetir, o dejar la historia sin integrar y anotar el veredicto.

Además, comprueben el contrato entre repositorios: una operación del `API-XXX` que la interfaz llama existe en la API, con el mismo camino, el mismo cuerpo y los mismos errores. Un desajuste se corrige en el contrato y en el código, o queda escrito como brecha.

Arranquen la API y la interfaz y recorran un caso de punta a punta: crear, filtrar, abrir el detalle, comentar, pasar a In Progress y a Resolved, reabrir, y mirar el dashboard.

## Paso 18. Trazabilidad (15 min)

Revisen en grupo el recorrido de cada criterio del PRD, de AC-001 a AC-008. Para cada uno, señalen la historia, la tarea y la prueba o el recorrido que lo cubre. `/coverage-verify` ya contrastó criterios contra pruebas. Esta revisión mira la cadena completa, desde el PRD hasta el código.

Si un criterio no tiene historia, tarea o prueba, queda dicho en voz alta. Corrijan solo lo que impida la demostración del paso siguiente. El resto se deja con el estado que ya tienen las historias. Una tarea que no está hecha sigue fuera de Done.

## Paso 19. Demostración y cierre (15 min)

Demuestren el recorrido de punta a punta con Luis Gómez y los datos del grupo. Después respondan, por escrito y en corto:

- Qué decisión del día 6 tuvieron que cambiar al implementar.
- Dónde el resultado se apartó del PRD.
- Qué cambió al trabajar con dos repositorios respecto del laboratorio 5, que recorría un solo repositorio con las respuestas ya fijadas.

---

# Cierre

Al terminar, el repositorio de especificaciones conserva el PRD, el SRS, las seis historias y el diseño. La interfaz y la API contienen el código integrado, o el estado real de lo que no llegó a `main`. AC-001 a AC-008 tienen evidencia o una brecha escrita.

El PRD fijaba el qué. El grupo fijó el corte, los repositorios, el contrato y las lagunas que el PRD no enumeraba. La implementación sale de esas especificaciones, y la integración espera a que las puertas y las tareas en Done lo permitan.