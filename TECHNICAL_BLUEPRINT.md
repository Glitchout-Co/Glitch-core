# Glitch — Technical Blueprint

**Version:** 1.0  
**Established:** 27 November 2026  
**Status:** Confirmed technical direction; implementation pending  
**Maintainer:** Glitchout-Co

## Purpose and authority

This document consolidates the ten confirmed technical decisions of Phase 2 into an implementation-oriented blueprint for Glitch-Core. It translates the 215 foundational entries from Phase 1 into a practical technical direction, without replacing or amending those entries.

The governing documents remain the [Constitution](CONSTITUTION.md), [Character Codex](CHARACTER_CODEX.md), [Behavioural Engine](BEHAVIOURAL_ENGINE.md), [Response Engine](RESPONSE_ENGINE.md), [Knowledge Architecture](KNOWLEDGE_ARCHITECTURE.md), [User Profiles and Memory](USER_PROFILES_AND_MEMORY.md), [Virtual World Mechanics](VIRTUAL_WORLD_MECHANICS.md), [Interface and Accessibility](INTERFACE_AND_ACCESSIBILITY.md), [Integration Architecture](INTEGRATION_ARCHITECTURE.md) and [Testing and Validation](TESTING_AND_VALIDATION.md).

The Constitution is the highest authority. The technical architecture must enforce its applicable requirements independently of character dialogue, optional preferences, host messages and future AI output. Initial assistance remains advisory only. No permission, persistent retention, external connection or expanded execution authority is granted by this blueprint.

Rankings preserve the confirmed preference order and combination of technical approaches; they are not unconditional execution priorities. Examples, file names, API shapes, version identifiers, tools not expressly selected and milestone details described as proposed remain subject to implementation decisions and validation.

Glitch-Core is intended to be an extensible, modular, standalone PWA hosted through GitHub Pages, with separately distributed compatible integrations in future. No production application, private knowledge repository, deployed build or executed software test is established by this document.

## Specification 01 — Technology stack

Confirmed order: **E, A**.

1. **Modular hybrid development (E):** Use native web technologies for the foundation and introduce specialist libraries only where their practical benefits justify additional dependencies.
2. **Vanilla web development (A):** Begin with HTML5, CSS3, JavaScript ES modules, JSON and native browser APIs.

| Component | Selected direction |
| --- | --- |
| Architecture | Modular hybrid |
| Primary language | JavaScript ES modules |
| Interface | HTML5 and CSS3 |
| Structured data | JSON |
| Persistent storage | IndexedDB |
| Lightweight settings | LocalStorage for small, non-sensitive settings |
| Rendering | Canvas and DOM, according to purpose |
| Development tooling | Node.js |
| Asset processing | Python, where useful |
| Hosting | GitHub Pages |
| Application format | PWA, including service workers for supported offline resources |
| Generative AI | Deferred |

The development environment uses VS Code, Git, GitHub and browser DevTools. Node.js provides local development, testing and build tooling; it is not a required production server. Python may support asset processing or developer utilities without becoming a mandatory browser runtime.

TypeScript, React and specialist 2D frameworks are not initial commitments. They may be considered later if a concrete requirement justifies them. Do not introduce a dependency simply because it could theoretically support a future feature.

The public application must remain compatible with static hosting. Confidential credentials, secure backend authentication, private server-side processing and future AI services require separate validated infrastructure; they cannot be supplied merely by static browser code.

Exact dependency versions, Node.js version, browser support matrix, build tooling and specialist library selection remain implementation decisions.

## Specification 02 — Software architecture

Confirmed order: **E, D, C, B**.

1. **Modular hybrid architecture (E):** Combine independent functional engines, defined architectural layers and controlled communication beneath a protected foundation.
2. **Component-based architecture (D):** Develop reusable, independently testable components with clear responsibilities.
3. **Event-driven architecture (C):** Coordinate relevant events and state changes through validated communication.
4. **Layered architecture (B):** Separate presentation, functional logic, data and infrastructure.

Monolithic architecture (A) is excluded as the primary approach.

### Conceptual system boundaries

| System | Responsibility |
| --- | --- |
| Protected foundation | Constitution, Character Codex and independent safeguards |
| Core controller | Lifecycle, prioritisation, module coordination and permission checks |
| Controlled event system | Defined communication between engines |
| Behavioural Engine | Activity selection, state transitions and character decisions |
| Response Engine | Intent interpretation and dialogue composition |
| Knowledge Engine | Retrieval of applicable approved knowledge |
| Memory Engine | Authorised recollection and profile-related information |
| World Engine | Environment, simulation and recreational interactions |
| Integration Engine | Supported host application communication |
| Presentation layer | Character rendering, animation, interface and accessible controls |
| Data and infrastructure layers | Storage, resource access, diagnostics and technical services |

The controller must coordinate rather than absorb the engines' responsibilities. Avoid turning the controller into a monolith. Shared protected requirements and validation may cross module boundaries, but unrelated optional components should not create unnecessary dependencies.

Illustrative interaction sequences:

- Assistance while sleeping: receive request, validate and assign priority, interrupt sleeping appropriately, interpret request, retrieve approved knowledge, compose and validate response, present response.
- Petting: validate interaction, select compatible reaction, present animation and optional dialogue, then resume or select a suitable activity.
- Environmental rendering failure: detect and isolate affected functionality, use supported fallback presentation, communicate genuine limitation and preserve unaffected assistance.
- Unauthorised host request: validate permission independently, deny restricted access, communicate limitation and retain supported authorised operation.

These sequences illustrate cooperation, not a required synchronous execution order. A presentation failure must not block essential assistance unnecessarily. Host applications must remain independently functional, and disabling Glitch must stop relevant integration activity.

Events and module declarations are not security boundaries by themselves. Permission enforcement, lifecycle controls, data validation and failure containment must be implemented and tested appropriately.

The exact event contracts, module interfaces, controller API, state ownership and error-handling boundaries remain undecided.

## Specification 03 — Repository and file structure

Confirmed order: **E, B, C**.

1. **Modular hybrid organisation (E):** Combine architectural layers, feature directories, structured content, resources and development tooling.
2. **Feature-based organisation (B):** Group each engine's related implementation together.
3. **Layer-based organisation (C):** Separate functional logic, presentation, infrastructure and data.

File-type organisation (A) is excluded as the primary approach. Multi-package organisation (D) is deferred until independently distributed packages justify its added complexity.

### Proposed expandable repository layout

```text
Glitch-core/
├── README.md
├── CONSTITUTION.md
├── CHARACTER_CODEX.md
├── BEHAVIOURAL_ENGINE.md
├── RESPONSE_ENGINE.md
├── KNOWLEDGE_ARCHITECTURE.md
├── USER_PROFILES_AND_MEMORY.md
├── VIRTUAL_WORLD_MECHANICS.md
├── INTERFACE_AND_ACCESSIBILITY.md
├── INTEGRATION_ARCHITECTURE.md
├── TESTING_AND_VALIDATION.md
├── TECHNICAL_BLUEPRINT.md
├── index.html
├── manifest.webmanifest
├── service-worker.js
├── package.json
├── .gitignore
├── src/
│   ├── main.js
│   ├── core/
│   │   ├── controller.js
│   │   ├── events.js
│   │   ├── lifecycle.js
│   │   ├── permissions.js
│   │   └── validation.js
│   ├── engines/
│   │   ├── behaviour/
│   │   ├── response/
│   │   ├── knowledge/
│   │   ├── memory/
│   │   ├── world/
│   │   └── integration/
│   ├── presentation/
│   │   ├── character/
│   │   ├── interface/
│   │   ├── animation/
│   │   ├── rendering/
│   │   └── styles/
│   └── infrastructure/
│       ├── storage/
│       ├── diagnostics/
│       └── resources/
├── data/
│   ├── character/
│   ├── behaviour/
│   ├── dialogue/
│   ├── knowledge/
│   ├── world/
│   └── configuration/
├── assets/
│   ├── characters/
│   ├── environments/
│   ├── wildlife/
│   ├── items/
│   ├── effects/
│   ├── icons/
│   └── audio/
├── tools/
│   ├── laboratories/
│   │   ├── behaviour/
│   │   ├── response/
│   │   ├── knowledge/
│   │   ├── memory/
│   │   ├── world/
│   │   ├── interface/
│   │   ├── integration/
│   │   └── validation/
│   ├── asset-processing/
│   └── knowledge-validation/
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── regression/
│   ├── accessibility/
│   ├── security/
│   └── fixtures/
├── docs/
│   ├── architecture/
│   ├── development/
│   ├── integration/
│   └── releases/
└── .github/
    └── workflows/
```

This is a proposed target layout, not an instruction to create all directories and files at once. Preserve existing foundational documentation at its current paths. Add working files progressively as actual development requires them.

The first scaffold may be limited to the application entry point, package configuration, main module, core controller, initial behavioural engine, character presentation and stylesheet, character assets, activity definitions and tests. Exact paths may be refined when implementing the first vertical slice.

### Separation of software and content

| Format | Responsibility |
| --- | --- |
| JavaScript | Functional logic and independently enforced rules |
| JSON | Approved activity, dialogue, knowledge and configuration definitions |
| CSS | Interface appearance and supported animation effects |
| Images | Character and environment artwork |
| Audio | Optional ambience, music and character sounds |
| Markdown | Requirements, technical decisions and development documentation |

An approved activity definition may declare an identifier, category, animation, duration range, interruption eligibility, contextual requirements and optional dialogue. The engine validates the definition and remains responsible for its execution; data declarations cannot override protected priorities.

Public source may contain approved software, published knowledge, approved artwork, public documentation and synthetic test fixtures. It must not contain private API keys, user profiles, personal memories, authentication credentials, private diagnostic records or confidential source material. Development-only tools and tests should be omitted from production builds where appropriate, but omitting them from deployment does not make public repository source confidential.

Exact filenames, schemas, naming conventions and directory boundaries remain open to practical refinement.

## Specification 04 — Rendering and animation

Confirmed order: **E, A, C**.

1. **Hybrid rendering and animation (E):** Combine independent rendering techniques appropriate to character presentation, environment and interface.
2. **Sprite-based animation (A):** Use illustrated character frames to preserve Glitch's approved original appearance.
3. **Procedural vector animation (C):** Use native drawing and animation techniques for supplementary digital effects.

Skeletal animation (B) and specialist 2D rendering frameworks (D) are deferred until their advantages justify their complexity.

| Rendering layer | Responsibility |
| --- | --- |
| Character sprites | Official appearance, physical movements and expressions |
| Procedural effects | Pixel fragmentation, glow, trails and particles |
| Canvas environment | Terrain, wildlife, movement, lighting and environmental objects as required |
| HTML and CSS interface | Dialogue, navigation, settings, archive and accessible controls |

Separate behavioural state, animation playback and visual rendering. An activity may request a named animation with parameters such as direction or looping; the presentation system handles frame selection and timing. Behavioural logic must not depend on individual artwork frames.

Illustrative interface only:

```javascript
animation.play("walk", {
    direction: "left",
    loop: true
});
```

### Initial animation priorities

| Animation | Proposed priority |
| --- | --- |
| Idle and breathing | Essential |
| Walking | Essential |
| Sleeping | Essential |
| Petting reaction | Essential |
| Thinking | Essential presentation target |
| Waking | High |
| Tail and ear movement | High |
| Eating Pixel Berries | High |
| Playful movement and stretching | Later |
| Pixel fragmentation and reconstruction | Later |

These priorities guide asset planning; the first prototype's minimum functional scope is defined in Specification 10. A suitable static or simplified expression may support early functionality before dedicated artwork is ready.

### Proposed asset standards

Use approved original Glitch reference artwork, transparent PNG character assets initially, sprite sheets for animation, PNG/WebP/SVG environment assets as appropriate and JSON animation definitions. Maintain consistent proportions and character features across frames. Separate original artwork, placeholders and approved production assets.

Initial engineering may use placeholder artwork to avoid blocking functional development. Replace placeholders through the rendering interface without rewriting behaviour. Provide reduced-motion and static alternatives; genuine rendering failures must fall back safely rather than be disguised as fictional glitches.

Performance configurations may simplify visual effects or environment complexity but must not reduce the quality of core knowledge or assistance. Maintain accessible HTML controls independently of the visual scene.

Exact sprite dimensions, frame counts, frame timings, coordinate conventions, asset budgets and rendering implementation remain undecided. No production sprite sheets are established by this document.

## Specification 05 — Behavioural implementation

Confirmed order: **E, A, D, C**.

1. **Hybrid behavioural system (E):** Coordinate validated states, reactive events and contextual decisions.
2. **Finite state machines (A):** Control valid states and transitions.
3. **Event-driven behaviour (D):** Respond to user interactions, environmental changes, completion events and authorised application context.
4. **Utility-based decisions (C):** Use contextual activity weights and variation to select eligible independent activities.

Behaviour trees (B) remain deferred until sufficiently complex activities justify their introduction. The confirmed mechanisms may be reconsidered during practical development without weakening foundational requirements.

### Protected behavioural priorities

The existing Behavioural Engine priority hierarchy remains authoritative:

1. Actual safety and system integrity.
2. Direct user assistance.
3. Direct character interaction.
4. Simulated environmental events.
5. Independent character activity.

Priority evaluation precedes recreational activity selection. User disablement and lifecycle controls must be honoured. Validate whether an activity can be interrupted, paused, completed, abandoned or resumed; do not treat a numeric comparison alone as the complete transition algorithm.

### State separation

Avoid a single variable representing every aspect of Glitch's current behaviour. Maintain distinct activity, physical state, expression, attention and transition information, with validated compatibility and interruption eligibility.

Illustrative state record:

```json
{
    "activity": "exploring",
    "physicalState": "walking",
    "expression": "curious",
    "attention": "environment",
    "transition": null,
    "interruptible": true
}
```

Glitch may be curious while walking or attentive while resting. The record is not a final schema.

### Activity selection and scheduling

| Mechanism | Proposed implementation |
| --- | --- |
| Movement | Time-based bounded movement |
| Activity duration | Configurable scheduling |
| Independent activity selection | Weighted contextual evaluation of eligible activities |
| User interactions | Prioritised events |
| Animation updates | Browser animation frame scheduling |
| Repetition control | Recent activity tracking |
| Behaviour validation | Approved activity definitions and state compatibility |
| Inactive application | Reduced or suspended non-essential processing |
| Application closure | Terminate active simulation |

Filter ineligible activities before selecting among weighted candidates. Context may include environment, fictional time, authorised preferences, available space and recent activities. Weights influence selection rather than requiring the highest-scoring activity every time. Higher-priority events override recreational choices regardless of their calculated weights.

Behavioural scheduling and visual frame rendering should operate at appropriate separate frequencies. Avoid recalculating every possible activity each frame. Use controlled timing, reproducible random sources and synthetic conditions for tests where useful. Glitch does not continue unauthorised background activity after closure.

The initial implementation uses programmed logic, not a neural network or external AI service. It may support limited independent decisions within validated rules, not unrestricted autonomy or self-modification.

Exact states, event contracts, transition rules, probabilities, timing units and scheduling frequencies remain implementation decisions.

## Specification 06 — Data architecture

Confirmed order: **E, D, B, C**.

1. **Hybrid data architecture (E):** Separate structured files, validated modular packages, temporary state and local persistence according to purpose and authority.
2. **Modular data packages (D):** Independently version and validate specialist knowledge, definitions and applicable expansion content.
3. **File-based data architecture (B):** Use structured JSON resources for approved, version-controlled information.
4. **Database-driven architecture (C):** Use IndexedDB for supported structured local profiles, preferences, memories and progression.

Centralised data architecture (A) is excluded as the primary approach.

### Data authority and lifecycle

| Information | Selected or proposed storage | Authority |
| --- | --- | --- |
| Constitution | Markdown and enforceable program rules | Developer |
| Character identity and lore | Versioned JSON and approved assets | Developer |
| Behaviour and dialogue | Validated JSON definitions | Developer |
| Approved knowledge | Versioned JSON packages | Developer |
| World definitions | Validated JSON packages | Developer |
| Lightweight non-sensitive interface settings | LocalStorage | User |
| Structured preferences and eligible authorised memories | IndexedDB | User |
| Optional local world progression | IndexedDB | User |
| Current conversational context | Temporary runtime memory | Session |
| Offline application resources | Browser Cache Storage | Application |

Separate who Glitch is, what she knows, fictional experiences, temporary context and what she is authorised to remember. User preferences cannot rewrite protected identity. Glitch cannot autonomously publish new knowledge. Personal information is subject to the established eligibility, consent, review, deletion and privacy rules.

### Two-repository knowledge architecture

The user explicitly reconfirmed the additional knowledge repository during this specification.

| Repository | Status and visibility | Responsibility |
| --- | --- | --- |
| Glitchout-Co/Glitch-core | Existing public repository | Core software, foundational documents, approved character definitions, fundamental knowledge, published approved packages, application assets and public PWA |
| Glitchout-Co/Glitch-Knowledge | Planned private repository; not yet created | Specialist knowledge development, unpublished entries, source references, factual review, approval records, historical revisions and package preparation |

Knowledge publication lifecycle:

    Private specialist source
      -> Knowledge Management Laboratory validation
      -> explicit developer approval
      -> approved versioned export
      -> public Glitch-Core distribution or approved public hosting
      -> compatibility and integrity validation
      -> normal knowledge retrieval

Glitch's static public application must not directly access private GitHub resources through embedded credentials. Only approved distributable knowledge is exported. Published packages are public even when prepared in a private repository. Neither repository is a storage destination for personal user profiles or memories.

The private repository is not a mandatory runtime dependency. Core assistance must degrade honestly when a specialist package is unavailable. Private repository creation, access configuration and publication automation remain future implementation work.

### Package definitions and validation

A proposed package manifest may include a unique identifier, display name, package version, schema version, core compatibility requirement, category, dependencies, approval status and entry file. A self-declared approved status does not establish authenticity or developer approval.

Illustrative manifest:

```json
{
    "id": "knowledge_python_fundamentals",
    "name": "Python Fundamentals",
    "version": "1.0.0",
    "schemaVersion": 1,
    "minimumCoreVersion": "0.1.0",
    "category": "programming",
    "dependencies": [],
    "status": "approved",
    "entries": "entries.json"
}
```

This is a hypothetical schema, not a published package. Validate compatibility, provenance, approval, integrity, dependencies and entry eligibility before activation. Maintain historical knowledge applicability separately from current approved information. Never recover a withdrawn or unsafe package merely because it is cached.

### Persistence and migration

Identify the current schema, verify compatibility, perform controlled migration, validate preserved eligible records and permissions, and activate only after successful validation. Failed migration must not unnecessarily destroy valid information or restore deleted memories and revoked permissions.

IndexedDB and LocalStorage are not inherently encrypted or secure authentication systems. Storage may be cleared or evicted by the browser. Namespaces and separate databases do not guarantee cross-application isolation, particularly on a shared origin. Maintain the established disclosure:

> Note that my current profile security is heavily limited. Please avoid sharing any personal information for the sake of your privacy.

Maintain all applicable consent and memory-reliability disclosures from User Profiles and Memory. Guest operation and initial prototype functionality must remain available without personal profiles. Initial prototype conversational memory is temporary only; persistent personal memory is deferred.

Exact database schemas, validation mechanisms, storage limits, package authentication and migration procedures remain undecided.

## Specification 07 — Communication implementation

Confirmed order: **E, B, C, D, A**.

1. **Hybrid communication engine (E):** Coordinate request interpretation, approved information retrieval, response composition and safeguards.
2. **Intent-based recognition (B):** Determine the underlying purpose of supported requests.
3. **Contextual interpretation (C):** Resolve relevant follow-up questions, references and corrections.
4. **Modular response composition (D):** Assemble responses from approved knowledge, explanations, examples and character dialogue.
5. **Keyword recognition (A):** Support recognition and retrieval through suitable terms and phrases.

### Proposed communication pipeline

    User request
      -> input normalisation and validation
      -> intent recognition
      -> relevant contextual interpretation
      -> approved knowledge retrieval
      -> modular response composition
      -> response and safeguard validation
      -> character presentation

This pipeline illustrates responsibilities rather than prescribing a rigid one-pass algorithm. Context and intent may require iterative interpretation. Ask clarifying questions when necessary, distinguish missing knowledge from unsupported capability and do not fabricate facts or certainty.

The initial system may combine rule-based classification, phrase variants, structured session context, indexed search and approved response components. Different expressions of the same supported request should map to the appropriate intent, where recognised. For example, "What is a variable?" and "Explain variables" may refer to the same explanation; "Can you give me an example?" may use the relevant preceding subject.

Approved knowledge may provide plain-language explanations, technical detail, analogies, practical examples and guided discovery prompts. Preserve guided discovery as the established default, while respecting explicit requests for direct answers or other appropriate methodology. Use character dialogue where suitable, without weakening factual accuracy or mandatory disclosures.

| Capability | Initial approach | Possible future enhancement |
| --- | --- | --- |
| Intent recognition | Rules and phrase matching | Trained classifier |
| Context interpretation | Structured session context | Language model interpretation |
| Knowledge retrieval | Indexed search | Semantic search |
| Response composition | Approved components | Knowledge-grounded generation |
| Character presentation | Codex and dialogue rules | Controlled contextual expression |
| Permissions | Independent program logic | Remains independently enforced |

Future AI integration or training is not approved by this specification. Any later provider or model must remain subordinate to validated authority, knowledge, privacy and identity safeguards. No production API credentials may be embedded in the static application.

The first prototype supports a small set of greetings, character questions, relevant simple follow-ups and uncertainty responses. Extensive specialist assistance is deferred.

Exact recognition algorithms, confidence thresholds, context formats, knowledge indexing and response schemas remain implementation decisions.

## Specification 08 — Testing infrastructure

Confirmed order: **E, A, C, B, D**.

1. **Hybrid testing infrastructure (E):** Combine appropriate automated, browser-based and manual validation.
2. **Native automated testing (A):** Use Node.js's built-in testing framework for deterministic functions, rules and engine logic.
3. **Custom development laboratories (C):** Develop the eight established laboratories alongside the corresponding systems.
4. **Browser-based automated testing (B):** Introduce browser interaction and interface validation as functional UI becomes available.
5. **Continuous integration testing (D):** Automate relevant validation and deployment checks through GitHub Actions as development progresses.

### Proposed tooling and introduction

| Tool | Purpose | Introduction |
| --- | --- | --- |
| Node.js Test Runner | Automated unit and component testing | Initial development |
| Node.js Assert | Expected result validation | Initial development |
| Browser DevTools | Debugging and performance inspection | Initial development |
| Custom laboratories | Controlled state inspection and simulation | Alongside respective engines |
| Playwright | Proposed browser automation | Functional interface |
| axe-core | Proposed automated accessibility checks | Functional interface |
| GitHub Actions | Continuous integration and approved build checks | Early development |
| npm audit | Dependency vulnerability checks where applicable | When dependencies are installed |

A representative early test could verify that direct assistance takes priority over independent activity. Test the actual priority function when implemented, including equal priorities, interruption eligibility, lifecycle controls and protected safeguards. A faulty numeric comparison is an illustrative defect, not the full behavioural model.

### Laboratory alignment

| Laboratory | Implementation relationship |
| --- | --- |
| Behaviour Laboratory | Behavioural Engine |
| Response Laboratory | Response Engine |
| Knowledge Management Laboratory | Knowledge Engine and publication tooling |
| Profile and Memory Laboratory | Memory Engine and persistence |
| Virtual World Laboratory | World Engine |
| Interface and Accessibility Laboratory | Presentation and interaction systems |
| Integration Architecture Laboratory | Integration Engine and synthetic hosts |
| Testing and Validation Laboratory | Coordinated evidence and requirement coverage |

Do not build all eight laboratories before Glitch herself. Introduce a minimal relevant test harness alongside the system being developed; expand it as needed. A unified developer toolkit remains an implementation option, not a prerequisite.

Use synthetic data, controlled failure scenarios, reproducible timing and random seeds where relevant. Link validation evidence to the applicable foundational requirements and tested versions. Automated checks do not replace manual character, accessibility, security and real-device evaluation.

The release process must not approve a stable build with unresolved mandatory failures. Do not claim that tests have passed merely because simulated controls were marked as passed. Preserve honest limitations and reporting boundaries.

Exact dependency versions, test naming and coverage conventions, automation configuration, laboratory interfaces and approval mechanisms remain undecided. No software installation or actual Glitch-Core tests are recorded here.

## Specification 09 — Build and deployment

Confirmed order: **E, C, B, D, A**.

1. **Hybrid build and deployment architecture (E):** Coordinate local development, validated production preparation and controlled publication.
2. **Separate development and production environments (C):** Protect approved releases from experimental changes.
3. **Build-based deployment (B):** Prepare a dedicated production artifact containing the required public application resources.
4. **Automated deployment (D):** Use GitHub Actions for applicable build, validation and approved publication workflows.
5. **Direct static deployment (A):** Preserve static web compatibility with GitHub Pages.

### Proposed branch and publication direction

Retain the existing `Master` branch as the approved source direction. Introduce a separate `Development` branch when practical implementation begins. These branch names and separation are carried forward as the proposed implementation convention; no additional branch has yet been created under this blueprint.

    Local development
      -> development branch
      -> applicable automated and manual validation
      -> developer approval
      -> validated production artifact
      -> GitHub Pages
      -> compatible PWA update

Development changes must not automatically become approved public releases. Build and verify the artifact intended for deployment before publication. GitHub Pages should receive approved production resources rather than automatically exposing every repository file through the application deployment.

### Production artifact

A production directory provisionally named `dist/` may contain the entry page, PWA manifest, service worker, required application modules, approved data packages and assets. Initially, a straightforward Node.js build script may be sufficient; more advanced tooling is deferred until justified.

| Resource | Published application |
| --- | --- |
| Required core engines and interface | Included |
| Approved artwork and knowledge | Included as needed |
| PWA resources | Included |
| Development laboratories | Excluded where development-only |
| Automated tests and synthetic fixtures | Excluded |
| Asset processing utilities | Excluded |
| Foundational documentation | Optional |

Production exclusion is not confidentiality when source remains public. Private material must never be placed in the public repository.

### PWA update behaviour

Distinguish discovered, downloaded, validated and activated updates. Avoid unexpectedly reloading while the user is interacting or has unsaved work. Activate updates through a compatible, controlled process; preserve eligible information and handle failed updates without unsafe recovery.

Optional update announcements remain user-configurable. Technical compatibility and security warnings are separate. Offline functionality depends on supported retained resources and browser behaviour; it is not guaranteed merely by installing a PWA.

### Proposed versioning

Semantic versioning is the proposed convention: MAJOR.MINOR.PATCH with appropriate pre-release identifiers. Major versions represent incompatible changes to an established public interface; minor versions represent backward-compatible features and patch versions backward-compatible corrections. During initial 0.x development, interfaces may change significantly.

Illustrative versions:

| Version | Intended meaning |
| --- | --- |
| 0.1.0-alpha.1 | Early companion prototype |
| 0.1.0 | First usable development milestone |
| 0.1.1 | Compatible correction |
| 0.2.0 | Additional capability milestone |
| 1.0.0 | First stable public API commitment |

These are examples, not existing releases. Maintain independent knowledge package versions and validate compatibility before use. The planned private Glitch-Knowledge repository follows its own review and publication lifecycle without exposing private credentials to the client.

Exact branch protection, build scripts, versioning implementation, Actions workflows, cache strategy and deployment configuration remain practical decisions. No repository settings, branches or Pages deployments are changed by this document.

## Specification 10 — Prototype implementation scope

Confirmed order: **E, B, A, C, D**.

1. **Integrated foundational prototype (E):** Implement a limited working combination of core coordination, presentation, behaviour, communication and environment.
2. **Independent companion prototype (B):** Make autonomous activities and contextual reactions the primary focus.
3. **Character presentation prototype (A):** Establish recognisable character presence and supported movements.
4. **Conversational assistant prototype (C):** Introduce basic intent recognition, approved information and relevant communication.
5. **Virtual environment prototype (D):** Provide a small initial interactive scene and bounded movement.

The proposed milestone title is **The First Awakening**, provisionally identified as `0.1.0-alpha.1`. Both are working identifiers, not an established release or mandatory canon.

### First prototype scope

| Category | Planned capabilities |
| --- | --- |
| Character | Replaceable artwork, idle and breathing, independent walking, sleeping and waking, petting reaction |
| Behavioural intelligence | Automatic activity scheduling, finite state transitions, weighted activity selection, prioritised user interactions, recent activity tracking |
| Communication | Greetings and basic conversation, simple intent recognition, approved character information, basic relevant follow-ups, honest uncertainty |
| Environment | One simple scene, movement boundaries, designated resting location, optional Pixel Berries |
| Technical foundation | Modular engine structure, core event system, pause and disable controls, reduced-motion support, initial automated tests |

The prototype operates in guest mode without persistent personal memories or mandatory user profiles. Pixel Berries and other companionship interactions are voluntary and do not introduce care obligations, hunger penalties or assistance restrictions.

### Deferred capabilities

Extensive programming knowledge; persistent personal memories; multiple profiles; complete virtual world; dynamic coding puzzles; wildlife simulation; application integrations; voice synthesis; generative AI; complete developer toolkit.

Deferral is not cancellation. Each future capability remains governed by its applicable foundational specification and must be introduced with relevant validation.

### Proposed implementation sequence

| Step | Objective |
| --- | --- |
| 01 — Establish the foundation | Set up minimal repository structure, local development and core controller. |
| 02 — Give Glitch a presence | Render replaceable character artwork and a simple interface. |
| 03 — Give Glitch movement | Implement basic animation playback and bounded movement. |
| 04 — Give Glitch independence | Introduce activity scheduling, validated states and contextual selection. |
| 05 — Give Glitch interaction | Add petting, rest, waking and optional treats. |
| 06 — Give Glitch a voice | Introduce text-based conversation and approved response components. |
| 07 — Validate the prototype | Consolidate applicable automated tests, manual observations and failure recovery. |

Testing occurs throughout development, not solely at Step 07. Use placeholder artwork initially if necessary and prepare production assets separately. Add files and capabilities incrementally rather than constructing all engines in full before obtaining a functional vertical slice.

### Prototype acceptance direction

The first prototype should demonstrate that Glitch:

- Can be opened and observed making limited independent choices without requiring manual activity selection.
- Can walk, rest and perform supported activities within valid movement boundaries.
- Responds appropriately to petting and supported questions, including interruption of lower-priority activities.
- Can resume or select an appropriate activity after an interaction.
- Communicates unsupported requests or uncertainty honestly.
- Respects pause, full disablement, reduced-motion preferences and relevant lifecycle controls.
- Preserves essential functionality when optional presentation components fail, where supported.
- Does not require personal data, external AI, a private repository connection or unnecessary backend infrastructure.

This is an initial acceptance direction, not evidence of completed or passing tests. Release approval remains subject to applicable Testing and Validation requirements. Exact prototype assets, activity timings, minimum acceptance thresholds and implementation details remain open to practical refinement.

## Phase completion and implementation boundaries

| Specification | Confirmed order |
| --- | --- |
| 01 — Technology stack | E, A |
| 02 — Software architecture | E, D, C, B |
| 03 — Repository and file structure | E, B, C |
| 04 — Rendering and animation | E, A, C |
| 05 — Behavioural implementation | E, A, D, C |
| 06 — Data architecture | E, D, B, C |
| 07 — Communication implementation | E, B, C, D, A |
| 08 — Testing infrastructure | E, A, C, B, D |
| 09 — Build and deployment | E, C, B, D, A |
| 10 — Prototype implementation scope | E, B, A, C, D |

Phase 1 established 215 foundational entries: 29 constitutional laws, 66 character entries and 120 functional specifications. Phase 2 establishes ten additional technical decisions, for 225 confirmed design and technical entries overall.

The next phase is practical core development, starting with a small local scaffold and the first functional companion milestone. Resolve smaller implementation decisions as they arise. No fixed deadline is imposed. Asset production and validation may overlap practical development.

The blueprint does not amend foundational requirements, establish unapproved technologies, create a private knowledge repository, approve a software release or represent any capability as implemented. Existing foundational documents remain authoritative and unchanged.
