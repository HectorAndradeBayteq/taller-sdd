# US-001: Acceso demo de la aplicación

<!-- us:status=Ready -->
**Estado:** Ready
**Fecha de creación:** 2026-06-24
**Última actualización:** 2026-10-12
**Repositorios:** tripot-client
**INVEST:** 🟢 4 · 🟡 2 / 6
**DoR:** 🟢 6 / 6

## Descripción

**COMO** usuario nuevo de la aplicación
**QUIERO** acceder a una demo que me permita navegar por toda la aplicación con datos ficticios
**PARA** conocer las funcionalidades del producto antes de registrarme o iniciar sesión

## Contexto

La aplicación requiere autenticación para acceder a sus funcionalidades completas. Muchos usuarios potenciales necesitan evaluar el valor del producto antes de comprometerse con el registro. Un modo demo de solo lectura, alimentado por datos ficticios, reduce la fricción de adopción y permite una exploración guiada de las capacidades del sistema sin riesgo de alterar datos reales ni depender del backend.

El modo demo opera de forma aislada: los datos se cargan desde archivos JSON ubicados en `public/data/demos`. Cada archivo sigue una convención de nombre en formato slug con prefijo `demo-` (p. ej. `demo-user-us.json`, `demo-user-es.json`). La lógica de selección del archivo concreto se define en la tarea técnica correspondiente (catálogo en AppManager).

Cada archivo JSON DEBE incluir registros ficticios para las entidades `spaces`, `transactions`, `budgets`, `contacts`, `contactTransactions`, `contactBalances`, `scheduledTransactions` y `terms`.

Los intentos de crear o modificar se interceptan y derivan al flujo de autenticación mediante un modal; la eliminación, tras confirmación, muestra una notificación indicando que no está permitida en modo demo.

La sesión demo persiste únicamente en memoria: si el usuario cierra la aplicación o la pestaña, debe volver a seleccionar la opción de demo en `/auth` para reingresar. El detalle visual de la interfaz (punto de entrada, indicador de demo y modal de conversión) se define en la tarea técnica; los criterios funcionales de usabilidad quedan cubiertos por los AC correspondientes.

## Reglas de negocio

- **BR-01:** El sistema DEBE ofrecer un modo demo accesible sin autenticación previa → verificado por AC-001
- **BR-02:** El modo demo DEBE cargar exclusivamente datos ficticios definidos en archivos JSON ubicados en `public/data/demos`, con nombres en formato slug (p. ej. `demo-user-us.json`, `demo-user-es.json`) → verificado por AC-002, AC-010
- **BR-03:** Cada archivo de demo DEBE contener registros para las entidades `spaces`, `transactions`, `budgets`, `contacts`, `contactTransactions`, `contactBalances`, `scheduledTransactions` y `terms` → verificado por AC-002
- **BR-04:** El modo demo NO DEBE permitir crear ni modificar datos persistentes → verificado por AC-003, AC-004
- **BR-05:** Cuando el usuario en modo demo manifieste intención de crear o modificar, el sistema DEBE mostrar un modal que permita iniciar sesión o registrarse → verificado por AC-004
- **BR-06:** Cuando el usuario en modo demo confirme una eliminación, el sistema NO DEBE eliminar el registro y DEBE mostrar una notificación indicando que la eliminación no está permitida en modo demo → verificado por AC-005
- **BR-07:** El usuario en modo demo DEBE poder navegar por todas las secciones funcionales de la aplicación en modo de solo lectura → verificado por AC-006
- **BR-08:** El modo demo NO DEBE sincronizar datos con el backend ni persistir cambios locales más allá de la sesión demo → verificado por AC-007
- **BR-09:** La sesión demo DEBE persistir únicamente en memoria; al cerrar la aplicación el usuario DEBE volver a seleccionar la opción de demo en `/auth` para reingresar → verificado por AC-011

## Criterios de aceptación

- **AC-001 (Casos de uso):** El sistema DEBE permitir a un usuario no autenticado acceder al modo demo desde la ruta `/auth` mediante una opción visible de explorar la demo.
- **AC-002 (Procesamiento de datos):** El sistema DEBE poblar todas las vistas del modo demo utilizando los registros definidos en los archivos JSON de `public/data/demos`, que DEBEN incluir datos ficticios para `spaces`, `transactions`, `budgets`, `contacts`, `contactTransactions`, `contactBalances`, `scheduledTransactions` y `terms`.
- **AC-003 (Reglas de negocio):** El sistema NO DEBE ejecutar operaciones de creación ni modificación de datos mientras el usuario esté en modo demo.
- **AC-004 (Interacción de usuario):** Cuando el usuario en modo demo intente crear o modificar un registro, el sistema DEBE mostrar un modal con opciones para iniciar sesión o registrarse, sin completar la operación solicitada.
- **AC-005 (Interacción de usuario):** Cuando el usuario en modo demo confirme la eliminación de un registro, el sistema NO DEBE eliminar el registro y DEBE mostrar una notificación indicando que la eliminación no está permitida en modo demo.
- **AC-006 (Casos de uso):** El usuario en modo demo DEBE poder navegar por todas las secciones funcionales de la aplicación y visualizar el detalle de los registros ficticios disponibles.
- **AC-007 (Seguridad):** El sistema NO DEBE enviar solicitudes de mutación al backend ni almacenar cambios del usuario demo más allá de la sesión activa.
- **AC-008 (Usabilidad):** Al ingresar al modo demo, el sistema DEBE mostrar un indicador de que el usuario se encuentra en modo demo.
- **AC-009 (Usabilidad):** El modal de autenticación derivado desde el modo demo DEBE permitir volver a la demo sin obligar al registro o inicio de sesión.
- **AC-010 (Procesamiento de datos):** Los archivos de demo en `public/data/demos` DEBEN seguir una convención de nombre en formato slug con prefijo `demo-` (p. ej. `demo-user-us.json`, `demo-user-es.json`).
- **AC-011 (Fiabilidad):** El sistema DEBE mantener la sesión demo únicamente en memoria; al cerrar la aplicación o la pestaña, la sesión demo NO DEBE retomarse automáticamente y el usuario DEBE acceder nuevamente a la demo desde `/auth`.

## Observaciones

- **Punto de entrada:** confirmado — opción visible en la ruta `/auth`.
- **Comportamiento por tipo de mutación:** confirmado — crear y modificar muestran modal de registro/login; eliminar muestra notificación tras confirmación.
- **Datos ficticios:** confirmado — archivos JSON slug en `public/data/demos` (`demo-user-us.json`, `demo-user-es.json`, etc.).
- **Entidades a poblar:** confirmado — `spaces`, `transactions`, `budgets`, `contacts`, `contactTransactions`, `contactBalances`, `scheduledTransactions`, `terms`.
- **Catálogo y selección de archivo:** implementación en tarea técnica (catálogo en AppManager).
- **Sesión demo:** confirmado — solo en memoria; al cerrar la app hay que reingresar desde `/auth`.

---

## Validación

### Complejidad sugerida

- **Story points:** 8
- **Justificación:** Alcance transversal (navegación completa, capa de datos, interceptación de mutaciones, modal de auth, ocho entidades en archivos JSON slug en `public/data/demos`). Riesgo medio por cubrir todas las entidades y puntos de mutación. Puede dividirse en incrementos si el equipo lo estima necesario.

### INVEST

| Letra | Criterio      | Resultado | Notas                                                                                                                                              |
| ----- | ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **I** | Independiente | Partial   | Depende del flujo de autenticación existente (`cross/auth`) y de la capa de persistencia; no bloquea otras US pero requiere integración con ambas. |
| **N** | Negociable    | Met       | Contenido concreto de cada archivo JSON es negociable; persistencia y flujos de UI funcionales ya definidos.                                       |
| **V** | Valiosa       | Met       | Reduce fricción de adopción y permite evaluar el producto sin registro.                                                                            |
| **E** | Estimable     | Met       | Entidades, ubicación (`public/data/demos`) y convención de nombres confirmadas. Selección de archivo concreto en tarea técnica.                    |
| **S** | Pequeña       | Partial   | Toca toda la aplicación y ocho entidades; puede requerir división en historias hijas por módulo si supera un sprint.                               |
| **T** | Testeable     | Met       | Criterios verificables por entidad, convención de nombres y bloqueo de mutaciones.                                     |

### Definition of Ready (DoR)

| Criterio DoR                       | Estado | Notas                                                                                                                                                                                                     |
| ---------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dependencias listas                | Met    | Flujo de auth existente disponible; inventario de entidades confirmado.                                                                                                                                   |
| Inputs/outputs claros              | Met    | Input: archivos JSON slug en `public/data/demos` con ocho entidades. Output: navegación demo, modal en crear/modificar, notificación en eliminar, sesión en memoria. Selección de archivo: tarea técnica. |
| Repositorios definidos             | Met    | Campo **Repositorios:** de la cabecera poblado con `tripot-client`.                                                                                                                                       |
| Sin decisiones técnicas pendientes | Met    | Catálogo en AppManager, selección de archivo, carga y detalle visual delegados a tarea técnica por acuerdo.                                                                                               |
| Referencias de UI                  | Met    | Requisitos funcionales de UI en AC; detalle visual en tarea técnica.                                                                                                                                      |
| Sin aclaraciones pendientes        | Met    | Ninguna.                                                                                                                                                                                                  |
