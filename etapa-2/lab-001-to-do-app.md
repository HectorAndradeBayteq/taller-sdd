# Dia 1: Laboratorio 1: To-Do App

# Objetivo

Comprender el proceso completo de desarrollo de un proyecto nuevo utilizando Specification-Driven Development (SSD), desde la configuración del *AI Harness* hasta la implementación de la primera funcionalidad. El ejercicio se enfocará en definir claramente **qué** se desea construir mediante especificaciones, requisitos y criterios de aceptación, evitando prescribir **cómo** debe implementarse. De esta manera, se otorgará al agente de IA la libertad de proponer y ejecutar la solución técnica más adecuada dentro de las restricciones y estándares establecidos por el proyecto.

# Paso 1: Instalar proyecto base

```bash
git clone https://github.com/juanca202/exercise-to-do.git
npm install
```

# Harness base

```mermaid
flowchart TD

A[Proyecto]

A --> B[Contexto estático]
A --> C[Contexto dinámico]
A --> D[Skills]
A --> E[Quality Gate]

B --> B1[AGENTS.md]
B --> B2[Stack]
B --> B3[Convenciones]

C --> C1[ADR]
C --> C2[APIs]
C --> C3[Modelos]
C --> C4[Diagramas]

D --> D1[Skills globales]
D --> D2[Skills del proyecto]

E --> E1[Lint]
E --> E2[Formato]
E --> E3[Pruebas]
E --> E4[Cobertura]
E --> E5[Calidad de código]
```

## Paso 2: Configuración de instrucciones persistentes

### Qué es el AGENTS.md

Define **el comportamiento operativo y las reglas generales** que los agentes de IA deben seguir dentro del repositorio.

AGENTS.md

```markdown
# Agents

## Reglas operativas y arquitectónicas
- @.agents/MEMORY.md — memoria persistente del proyecto
- @docs/adr/README.md — índice de Architecture Decision Records (decisiones arquitectónicas vigentes)

### Consideraciones

- Si la información es arquitectónica → consultar ADRs
- Si es preferencia o regla operativa → usar MEMORY.md
- Si hay conflicto → ADRs tienen prioridad sobre MEMORY.md

## Reglas generales

## Stack tecnológico
```

CLAUDE.md

```markdown
@AGENTS.md
```

## Paso 3: Herramientas para SDD

```bash
# Nos sugiere skills para nuestro stack tecnológico
npx autoskills

# Instalacion de SDD-Devkit

# Instalación como skills
npx skills add https://github.com/juanca202/ai

# Instalación como plugin
/plugin marketplace add juanca202/ai
/plugin install sdd-devkit@juanca202

# Instalación de OpenSpec
npm install -g @fission-ai/openspec@latest

# Instalación de Superpowers

# Instalación como skills
npx skills add https://github.com/obra/superpowers --skill brainstorming

# Instalación como plugin
/plugin install superpowers@claude-plugins-official
```

## Paso 4: Definición de ADRs base

### Qué son los ADRs

Son documentos donde registras **decisiones arquitectónicas importantes** de un proyecto.

Sirven para: 

- Evitar perder el **“por qué”** de decisiones
- Mantener coherencia técnica
- Ayudar a humanos y agentes de IA a no romper arquitectura

Los ADRs se limitan a registrar la decisión y pueden incluir ejemplos básicos. Cuando la implementación implique complejidad técnica, se pueden utilizar **skills** para asegurar que la ejecución se realice correctamente y de forma consistente.

### Fitness functions

Una fitness function es una prueba automatizada que verifica que una característica arquitectónica siga cumpliéndose a medida que el sistema evoluciona.

### Definición de ADRs

- ADR: La arquitectura del proyecto debe ser featured based
- ADR: La documentación del código se hará usando TSDoc, se debe documentar mientras se desarrolla, no como tarea diferida, no es necesario documentar, no se exige documentar en lógica simple o trivial
- ADR: Se adopta la siguiente estrategia para pruebas unitarias:
    - se utilizará Vitest + Testing Library para la implementación
    - Ubicación de archivos junto al código bajo prueba
    - Utilizar el patrón AAA
    - Utilizar el patrón Object Mother Pattern
    - Cobertura de pruebas de mínimo de 80%
    - Debe considerarse aislamiento y determinismo
- ADR: Uso de Playwight para las pruebas E2E
- ADR: Se adopta un Quality Gate (shift left) con los siguientes componentes
    - Lint
    - Formato (Prettier)
    - Pruebas y cobertura (Vitest)
    - Git hooks (Husky)
    - Ejecución solo en archivos modificados (lint-staged)
    - Pruebas E2E (Playwight)
    - Calidad de código (Sonar scanner)
- ADR: Usar como estrategia de branching GitFlow con commits convencionales
- ADR: Solo utilizar App Router descargar el uso de Page Router
- ADR: Uso de Tailwindcss como framework de presentación
- ADR: Uso de Base UI como libreria de componentes
- ADR: Uso de Zurtand para manejo de estado

También podemos agregar reglas generales indicandolo al agente:

```bash
Agrega como regla general que el nombre de nombres de clases, variables, metodos y rutas siempre deben estar en inglés
```

## Paso 5: Instalación, configuración y verificación del harness base

Necesitamos que el *stack* tecnológico quede claramente establecido en las instrucciones persistentes (`AGENTS.md`). Para ello, le indicamos al agente lo siguiente:

```bash
Actualiza el stack tecnológico en AGENTS.md
```

Ejecutar la auditoria de ADRs para validar que el código base sea coherente con los ADRs definidos:

```bash
/adr-audit
```

> Para el manejo de ADRs hay disponibles estos 3 skills:
- **/adr-manage** - Crear o actualizar Architecture Decision Records en `docs/adr/`
- **/adr-discover** - Analiza un repositorio y proponer ADRs candidatos a partir de decisiones implícitas
- **/adr-audit** - Auditar el cumplimiento de los ADR y de `AGENTS.md` contra el estado real del repo, generando un informe priorizado en `docs/adr/audits/`
> 

## Paso 6: Sistema de diseño

### Qué es el DESIGN.md

Define el **sistema de diseño compartido** del proyecto para que humanos y agentes de IA generen interfaces consistentes.

Su objetivo es centralizar las reglas visuales, patrones de UX y convenciones de UI que deben respetarse durante la generación o implementación de interfaces.

`DESIGN.md` funciona como la fuente de verdad del diseño del producto.

Extraer DESIGN.md con (https://designmd.me/)[https://designmd.me/]

---

# Implementación del Spec

| Framework | Contexto | Verbosidad típica | Curva de aprendizaje |
| --- | --- | --- | --- |
| Agile | Stories + Tasks | Baja | Baja |
| Speckit | Specs + Implementation Plans | Media-Alta | Media |
| OpenSpec | Specs + Change Proposals | Media | Media |
| Superpowers | Specs + Plans | Media | Media |
| BMAD | PRDs + Engineering Workflows | Alta | Alta |
| GSD | Context + Execution State | Baja-Media | Media |
| AgentOS | Workflows + Cognitive Runtime | Media | Media |
| Kiro | Intent + Structured Context | Media | Baja-Media |

## Prerequisitos

```bash
# Inicializar OpenSpec
openspec init
```

## Flujo de trabajo

![img-001.png](images/img-001.png)

***Requerimiento:*** 

> 
> 
> 
> ***Aplicación simple de to-dos** que permita **gestionar tareas de forma completa.*** 
> 
> ***Incluye:***
> 
> - Registro y listado de tareas
> - Creación y edición de tareas
> - Eliminación de tareas
> - Ordenamiento por prioridad
> - Marcado de tareas como completadas
> 
> **Reglas de negocio:**
> 
> - Cada tarea debe tener una descripción obligatorio y una fecha de vencimiento
> - La prioridad solo puede ser: alta, media o baja
> - Las tareas completadas deben distinguirse visualmente de las pendientes
> - El listado debe ordenarse por prioridad (alta → media → baja) de forma predeterminada
> 
> **Consideraciones técnicas:**
> 
> - No requiere autenticación
> - La persistencia se hará usando localStorage
> - No existe backend

## Paso 1: Definición de historia de usuario

```bash
/work-define [REQUERIMIENTO]
```

## Paso 2: Definir casos de prueba

```bash
# Si estamos en la misma sesión de chat nos va a sugerir usar las historias creadas, sino podemos indicarle los códigos de las historias a utilizar
/test-define
```

## Paso 3: Definición de spec

```bash
/openspec-propose [URL DE HISTORIA DE USUARIO]
```

## Paso 4: Implementación del spec

```bash
# Implementa el Spec
/openspec-apply-change
```

Al finalizar la implementación archivamos el spec y lo sincronizamos con el spec del proyecto

```bash
# Archiva el Spec y lo agrega al Spec del feature
/openspec-archive-change
```

## Paso 5: Implementación requerimiento con Superpowers

## Flujo de trabajo

![img-002.png](images/img-002.png)

> **Requerimiento:**
> 
> 
> Agregar una sección de **Notes** para que los usuarios puedan guardar notas de texto libre.
> 
> La navegación principal tendrá dos opciones: **To-do** y **Notes**. Al ingresar a **Notes**, el usuario verá el listado de notas registradas y podrá crear nuevas notas, así como editar y eliminar las existentes. Para crear o editar una nota solo se mostrará un área de texto donde el usuario podrá escribir libremente y guardar los cambios.
> 
> **Cambios**
> 
> - Agregar la opción **Notes** junto a **To-do**.
> - Mostrar un listado con las notas registradas.
> - Agregar una opción para crear una nueva nota.
> - Permitir editar una nota existente.
> - Permitir eliminar una nota existente.
> - La creación y edición de una nota mostrarán únicamente un área de texto para ingresar el contenido.
> - Al guardar una nota nueva o los cambios realizados en una existente, esta deberá reflejarse en el listado.
> - Al eliminar una nota, esta deberá desaparecer del listado.

## Paso 6: Definición de historia de usuario

```bash
/work-define [REQUERIMIENTO]
```

## Paso 7: Definir casos de prueba

```bash
# Si estamos en la misma sesión de chat nos va a sugerir usar las historias creadas, sino podemos indicarle los códigos de las historias a utilizar
/test-define
```

## Paso 8: Definición de spec

```bash
/brainstorming [URL DE HISTORIA DE USUARIO]
```

## Paso 9: Implementación del spec

```bash
/writing-plans 
```

## Paso 10: Implementación del spec

```bash
/executing-plans
```

# Conclusión

En este ejercicio se recorrió el proceso completo de desarrollo de un proyecto utilizando Specification-Driven Development (SSD), comenzando por la configuración del *AI Harness* y la definición del contexto del proyecto mediante instrucciones persistentes, ADRs y *skills*. Posteriormente, la implementación se guió por especificaciones, requisitos y criterios de aceptación, priorizando la definición de **qué** debía construirse antes que **cómo** implementarlo.

Este enfoque demuestra que, al proporcionar al agente un contexto claro, restricciones arquitectónicas y criterios de calidad, es posible delegar gran parte de las decisiones de implementación sin perder consistencia. Así, el desarrollador puede concentrarse en comprender el problema y definir correctamente los requisitos, mientras el agente genera una solución alineada con los estándares del proyecto.