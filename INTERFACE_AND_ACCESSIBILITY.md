# Glitch — Interface and Accessibility

**Version:** 1.0  
**Established:** 26 November 2026  
**Status:** Confirmed foundational functional design; implementation pending  
**Maintainer:** Glitchout-Co

## Purpose and authority

This document establishes the 15 accepted specifications for Glitch-Core's user interface, responsive presentation, accessibility, conversation, educational workspace, preferences, onboarding, notifications, transparency, profiles, application navigation, updates and development tools.

It complements the [Constitution](CONSTITUTION.md), [Character Codex](CHARACTER_CODEX.md), [Behavioural Engine](BEHAVIOURAL_ENGINE.md), [Response Engine](RESPONSE_ENGINE.md), [Knowledge Architecture](KNOWLEDGE_ARCHITECTURE.md), [User Profiles and Memory](USER_PROFILES_AND_MEMORY.md) and [Virtual World Mechanics](VIRTUAL_WORLD_MECHANICS.md).

The Constitution remains the highest authority. The interface must not use character expression, visual styling, recreational mechanics or user preferences to bypass privacy, eligibility, consent, security, integrity or authority safeguards.

Rankings preserve the agreed order of preference or design emphasis, not an unconditional execution sequence. Mandatory safeguards apply independently of rankings. Illustrative layouts, dialogue, colours, controls, defaults, sample data and implementation methods are not final selections unless expressly established. No feature is represented as implemented, tested or security-validated.

The confirmed development direction is a single responsive Progressive Web App (PWA) hosted through GitHub Pages. GitHub Pages is the intended long-term hosting platform, with no planned migration to a personal server. Future backend requirements, if any, require separate assessment and approval. The application should remain modular rather than unnecessarily tied to a hosting provider.

## Specification 01 — Fundamental interface structure

Confirmed order: **E, B, D, C, A**.

1. **Consistent and accessible interface design (E):** Maintain readable text, recognisable controls, predictable navigation and accessible functionality across supported devices.
2. **Persistent quick-access navigation (B):** Provide immediate access to assistance, approved knowledge, applications, inventory, profiles and settings.
3. **Alternative interface modes (D):** Support immersive exploration, simplified companionship and assistance-focused presentation.
4. **Contextual interface panels (C):** Present controls relevant to the current task or activity, avoiding unnecessary clutter.
5. **World-first interface (A):** Offer Glitch's virtual world as a primary visual environment for immersive recreational use.

### Shared presentation modes

| Mode | Intended presentation |
| --- | --- |
| World | Interactive 2D environments, exploration, Glitch's independent activities, optional recreation and immediate access to assistance. |
| Companion | Simplified presentation of Glitch, dialogue and supported companion interactions without requiring the full environmental rendering system. |
| Assistant | Conversation, knowledge and technical work emphasised; optional visual character presentation and direct supported interactions. |

All three modes share the same underlying systems and supported core assistance. A mode is a presentation choice, not a separate profile, personality or level of service. Switching modes must preserve approved progress, preferences and relevant active conversational context; avoid unnecessary reloads or resets. Relevant unfinished activities should remain resumable where supported.

Quick access must not depend on navigating a fictional scene, solving a puzzle, maintaining companionship, completing onboarding or creating a profile. Compact navigation may use a clearly labelled accessible menu rather than displaying every item simultaneously.

Contextual panels may expose deeper features as required. Essential controls, warnings and permission disclosures must remain available regardless of presentation mode.

The precise default mode, layout, navigation placement, panel behaviour, responsive technology and character presentation remain undecided.

## Specification 02 — Responsive design and device compatibility

Confirmed order: **E, B, A, D, C**. Progressive Web App architecture is explicitly approved.

1. **Consistent cross-device functionality (E):** Preserve supported core capabilities regardless of screen size, device type or input method.
2. **Mobile-optimised interface (B):** Adapt navigation, touch controls, environmental presentation and conversation to smaller screens.
3. **Desktop interface (A):** Use larger displays for expanded environments, simultaneous panels and comfortable programming interactions.
4. **Orientation adaptability (D):** Support portrait and landscape without unnecessarily restricting functionality.
5. **Tablet-adaptive interface (C):** Balance desktop functionality with touchscreen accessibility and flexible layouts.

| Interface area | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Navigation | Expanded toolbar or equivalent | Adaptive toolbar | Compact toolbar or accessible menu |
| Conversation | Side panel or expanded workspace | Flexible panel | Expandable or focused panel |
| Exploration | Larger viewport | Adaptive viewport | Compact viewport with equivalent controls |
| Coding editor | Expanded or split layout | Resizable where practical | Full-screen or focused option |
| Input | Mouse and keyboard | Touch, keyboard or pointer | Touch and other supported input methods |
| Core assistance | Supported | Supported | Supported |

These layouts are illustrative. Use responsive capabilities and available space rather than assuming device category determines input method or ability. Orientation changes and virtual keyboards must not unnecessarily discard work or hide essential controls. Core tasks must remain usable without precise gestures or a particular orientation.

### Approved PWA and hosting direction

Glitch-Core is one shared web application, usable in supported browsers and optionally installable on compatible devices. Installation must not be mandatory. Installation availability and behaviour vary by browser and operating system.

The PWA is intended to support offline core assistance, companionship, approved fundamental knowledge and downloaded environmental resources. Offline access depends on successful initial downloads, implemented caching and the continued availability of retained resources. Browsers may limit or evict storage; do not guarantee permanent offline access.

Local profiles, preferences and progression remain subject to User Profiles and Memory. PWA installation does not itself provide authenticated accounts, cross-device synchronisation or additional data protection.

The user explicitly chose to retain GitHub Pages indefinitely as the hosting direction, rather than plan a migration to a private Windows server. The personal server remains a possible host for a separate Minecraft project, not a committed Glitch-Core dependency. No Glitch backend, home-server configuration or server purchase is authorised by this design.

Maintain modular hosting-independent software boundaries where practical. Assess any future authenticated backend, AI gateway, protected runtime knowledge or synchronisation infrastructure separately. GitHub Pages alone does not supply these services. Keep privileged credentials and unpublished private material out of the public website.

Exact manifest, service-worker design, caching and update strategy, supported browser matrix, breakpoints, input controls, orientation behaviour and device testing remain engineering work.

## Specification 03 — Visual identity and interface theming

Confirmed revised order: **E, A, D, B, C**. The user explicitly selected an interface adapted to the design of Glitch's world, with the Glitchout-Co colour scheme as the default.

1. **Accessibility-first visual design (E):** Prioritise contrast, readability, recognisable controls and visual clarity over decorative complexity.
2. **Glitchout-Co visual identity (A):** Establish the company colour scheme and consistent branding as the application's default identity.
3. **Environmental interface adaptation (D):** Allow interface appearance to reflect the current environment and its atmosphere.
4. **Light and dark themes (B):** Provide comfortable appearances for different lighting conditions and preferences.
5. **Customisable accent colours (C):** Permit selected colour personalisation without altering Glitch's established identity.

The interface should feel connected to the surrounding world rather than behave as an unrelated visual frame. Environmental adaptation changes appearance, not functionality, the meaning of controls or navigation structure. Users may disable environmental adaptation and retain a fixed preferred theme.

| Illustrative environment | Proposed visual direction |
| --- | --- |
| Default | Glitchout-Co's established branding. |
| Woodland | Natural greens with digital accents. |
| Riverside | Soft aquatic blues. |
| Fragmented landscapes | Violet tones and restrained digital details. |
| Night | Quiet midnight tones and gentle illumination. |

Example accent colours, charcoal and light backgrounds, and proposed sans-serif typography from interface demonstrations are not final brand assets or validated contrast combinations. The exact Glitchout-Co palette must be established from approved branding before implementation.

Preserve Glitch's Character Codex appearance and identity independently of interface themes. Use consistent icons, labels, typography and interaction behaviour. Accessibility settings, contrast requirements and reduced-motion preferences override decorative styling. Do not communicate required information through colour alone.

The exact colour tokens, typography, branding assets, default light/dark selection, environmental transition rules, contrast-validated combinations and theming framework remain undecided.

## Specification 04 — Dialogue and communication interface

Confirmed order: **E, A, D, B, C**.

1. **Unified communication continuity (E):** Preserve relevant conversation context across World, Companion and Assistant modes within approved context boundaries.
2. **Dedicated conversation panel (A):** Provide a conventional interface for questions, explanations, troubleshooting and extended conversations.
3. **Expandable technical workspace (D):** Open longer examples, code, technical explanations and exercises in a dedicated presentation without requiring a conversation restart.
4. **In-world dialogue bubbles (B):** Allow natural character communication during exploration and recreation.
5. **Contextual interaction choices (C):** Offer relevant selectable responses, suggestions and actions alongside supported free-text communication.

The Response Engine is shared across presentation modes. Changing presentation does not create permission to retain the conversation persistently or share it with other applications. Current context, approved personal memory, fictional character lore, knowledge and technical workspace contents remain distinct.

Illustrative in-world interaction: Glitch notices a simulated bridge problem and offers investigation, explanation, a direct solution or the option to decline. Selecting an educational option may open the shared technical workspace with the relevant puzzle and context. The visitor can return to exploration without unnecessarily losing the active task.

Free-text input remains available for supported queries. Selectable choices are aids, not compulsory dialogue gates. Guided discovery remains the default assistance methodology, while direct answers and collaborative assistance are available as requested under the Response Engine.

Keep long technical material readable and accessible; support text selection, code copying and expanded views as appropriate. Dialogue bubbles must not obscure essential controls or require audio or a fleeting animation to understand important information. Preserve user control over spontaneous dialogue and dismissals.

Exact conversation layout, dialogue placement, panel resizing, workspace transitions and permitted retention controls remain undecided.

## Specification 05 — Accessibility and inclusive interaction

Confirmed order: **E, C, A, D, B**.

1. **Independent accessibility preferences (E):** Let users configure and combine accessibility features without requiring disclosure of personal circumstances or reducing supported functionality.
2. **Cognitive accessibility (C):** Provide clear instructions, simplified layouts, adjustable information density and predictable interactions.
3. **Visual accessibility (A):** Support readable typography, adjustable text sizes, accessible contrast and alternatives to colour-dependent information.
4. **Sensory accessibility (D):** Allow reduced motion, elimination of flashing effects, muting and reduction of non-essential stimulation.
5. **Motor and navigation accessibility (B):** Support keyboard navigation, comfortable touch targets and alternatives to precise pointer movements or gestures.

The development target is **WCAG 2.2 Level AA** for the web interface. See the [W3C WCAG 2.2 recommendation](https://www.w3.org/TR/WCAG22/). This is a target, not a claim of conformance. Actual accessibility must be demonstrated through implementation and testing, including appropriate manual and assistive-technology testing.

| Requirement | Intended design |
| --- | --- |
| Keyboard-only interaction | Supported for essential functionality; provide alternatives for recreational movement where necessary. |
| Screen reader compatibility | Required for essential controls, status information and content. |
| Colour-independent communication | Required for meaningful information. |
| Adjustable text size | Support readable scaling without losing essential controls. |
| Reduced motion and flashing | Provide reduced-motion settings and avoid unsafe flashing. |
| High-contrast presentation | Supported with validated contrast. |
| Touch targets | Comfortable, distinguishable and appropriately spaced. |
| Mandatory timed interaction | Avoid; provide accessible alternatives where applicable. |
| Personal disclosure | Never required to use accessibility features. |
| Assistance quality | Never diminished by accessibility preferences. |

Accessibility preferences override conflicting environmental themes, animations, audio, custom cosmetic styling and automatic performance adjustments. For example, entering a fragmented region must not re-enable an effect disabled by the user's sensory preferences.

Do not infer a diagnosis, disability or level of intelligence from preferences, input methods or requests for simpler explanations. Do not persist prohibited personal characteristics. Honour relevant accessibility settings independently of the recreational profile or memory system.

Exact controls, defaults, supported assistive technologies, accessibility audit process and implementation details remain undecided.

## Specification 06 — Settings and preference management

Confirmed order: **E, A, B, C, D**.

1. **Transparent and reversible configuration (E):** Explain what settings change, preserve unrelated preferences and provide appropriate reset options.
2. **Categorised settings (A):** Organise configuration into clearly named groups.
3. **Quick-access settings (B):** Provide convenient access to frequently adjusted preferences.
4. **Searchable settings (C):** Locate supported settings through descriptive keywords and ordinary language.
5. **Preference presets (D):** Offer optional group configurations that can be individually adjusted afterwards.

Proposed categories:

| Category | Example contents |
| --- | --- |
| General | Interface mode, startup and language preferences |
| Appearance | Themes, branding and environmental styling |
| Behaviour | Expression, initiative and spontaneous interaction |
| Communication | Explanation depth and assistance methodology |
| Accessibility | Visual, cognitive, sensory and navigation preferences |
| Virtual world | Time, weather, exploration and recreation |
| Performance | Rendering and resource management |
| Audio | Ambience, music and character sounds |
| Profiles and memory | Consent, approved saved information and personalisation |
| Privacy and security | Permissions, data management and security limitations |
| Applications | Navigation and authorised integrations |
| Storage and updates | Offline resources, backups and updates |

These categories and example settings are proposed; final grouping and defaults remain undecided.

Distinguish three kinds of setting changes:

- **Ordinary preferences:** Reversible cosmetic and behavioural choices, normally applied without unnecessary confirmation.
- **Permissions:** Explicitly authorised changes involving personal retention, privacy, sharing or application access.
- **Destructive operations:** Potentially irreversible deletions, resets and similar changes, requiring clear scope, consequences and appropriate confirmation.

Provide individual or category-specific resets. A preset or appearance reset must not silently change privacy permissions, erase memories or delete recreational progress. Explain which settings a preset changes, and preserve explicit accessibility requirements and safety safeguards.

Preferences remain optional; users should not have to complete extensive configuration before using Glitch. Save approved preferences locally where enabled, respecting profile boundaries and storage limitations. Search must not reveal restricted settings or privileged developer controls.

Exact category names, presets, default values, settings schema, persistence mechanisms and reset interfaces remain undecided.

## Specification 07 — First-time experience and onboarding

Confirmed order: **E, A, D, B, C**.

1. **Unrestricted entry (E):** Allow visitors to skip tutorials, introductions and configuration without mandatory profile or account creation.
2. **Character-led introduction (A):** Let Glitch introduce her identity, purpose, limitations and world in her established voice.
3. **Contextual feature discovery (D):** Introduce functionality naturally when first encountered rather than explaining everything at launch.
4. **Interactive guided tour (B):** Provide an optional, replayable tour of the den, archive, assistance and application portals.
5. **Initial preference configuration (C):** Offer a brief opportunity to adjust appearance, accessibility and interaction preferences.

Established introductory character dialogue includes:

> I'm a cyber fox-spirit! Though I am just pixels and code.

> I'm always happy to help, but I won't pretend to know everything.

Additional introductions in prototypes are illustrative; final dialogue sequence remains to be authored under the Codex and Response Engine.

| First-launch element | Intended treatment |
| --- | --- |
| Account or profile creation | Optional |
| Introductory dialogue | Skippable |
| Guided tour | Optional and replayable |
| Accessibility settings | Immediately available |
| Direct assistance | Immediately available |
| Feature explanations | Contextual and dismissible |
| Memory retention | Explicit consent and eligibility requirements |
| PWA installation | Optional |

A visitor may choose to meet Glitch, explore immediately, configure preferences or request direct assistance. Contextual explanations may accompany first use of the archive, Pixel Berries, programming mechanisms or other available features. Dismissed optional tutorials must not repeatedly interrupt the visitor.

Required privacy notices, memory-consent disclosures, capability limitations and significant technical warnings remain applicable when relevant even if onboarding is skipped.

Do not misrepresent fictional character activity as real consciousness or claim unimplemented features. PWA installation prompts must respect user choice and actual browser support.

Exact introductory dialogue, tutorial steps, startup defaults, installation prompts and onboarding completion tracking remain undecided.

## Specification 08 — Notifications and interruption management

Confirmed order: **E, B, D, A, C**.

1. **Interruption priority and user control (E):** Distinguish essential technical warnings from optional communication; respect concentration settings and allow suppression of spontaneous interactions.
2. **Non-intrusive presentation (B):** Prefer subtle indicators, dialogue bubbles and dismissible notices for optional communication.
3. **Configurable notification categories (D):** Independently manage recreational suggestions, environmental announcements, discoveries and optional development information.
4. **Contextual notifications (A):** Communicate relevant environmental changes, discoveries and authorised application events.
5. **Notification centre (C):** Provide a reviewable location for recent relevant notices.

| Communication type | Intended treatment |
| --- | --- |
| Critical security or data-integrity issue | Immediate, clear warning when relevant |
| Technical functionality issue | Appropriate contextual notice |
| Direct user request | Prompt response, not suppressed as spontaneous dialogue |
| Relevant knowledge or feature update | Optional communication |
| Environmental discovery | Optional non-intrusive indicator |
| Recreational invitation | Optional dismissible suggestion |
| Casual character dialogue | Subject to configured frequency and preferences |

Illustrative interaction profiles include Silent, Focus, Balanced and Social. These labels are not final defaults or a fixed frequency schedule.

### Focus Mode

Provide a concentration mode intended for programming, study and troubleshooting. While active, suppress or defer optional spontaneous conversation and recreational invitations. Glitch may continue supported independent recreational activity while running, subject to visibility, performance and user settings. Direct assistance, manually initiated recreation and necessary technical notices remain available.

Respect dismissed notices and interaction cooldowns. Do not turn deferred optional notices into an interruption backlog when the user leaves Focus Mode. Avoid coercive badges, repeated update prompts or unnecessary alerts.

Notification history is distinct from permanent conversational memory. Its retention and scope must follow privacy, permission and deletion rules. No initial background push-notification infrastructure is required. Full disablement of Glitch stops her contextual monitoring, recreational activity and notifications under Constitution Law 28; necessary application-level warnings remain the responsibility of the running application.

Exact presentation styles, category defaults, history retention, frequency, cooldowns and concentration-mode implementation remain undecided.

## Specification 09 — Knowledge archive and information presentation

Confirmed order: **E, B, A, C, D**.

1. **Progressive information disclosure (E):** Present understandable explanations first, with optional technical detail, examples, related concepts, sources and advanced information.
2. **Universal knowledge search (B):** Search accessible, approved knowledge using supported keywords, terminology and natural-language queries.
3. **Categorised knowledge library (A):** Provide a browsable reference archive covering subjects, terminology, troubleshooting and authorised application-specific knowledge.
4. **Interactive educational presentation (C):** Provide approved code examples, visual explanations, analogies and optional demonstrations.
5. **Personal knowledge organisation (D):** Support bookmarks, reading lists and revisiting recently accessed information where permitted.

The immersive virtual archive and functional searchable reference library must use the same approved underlying knowledge. The functional archive is accessible from every presentation mode, without requiring exploration, achievements, familiarity or profile creation.

| Entry information | Proposed presentation |
| --- | --- |
| Plain explanation | Default, with user-requested technical alternatives |
| Technical definition | Expandable or selectable |
| Analogy | Optional |
| Code example | Where applicable; readable and copyable |
| Interactive demonstration | Where supported and explicitly identified |
| Common mistakes | Expandable |
| Related concepts | Navigable where accessible |
| Sources, versions and approval-related information | Accessible as appropriate |
| Environment or application compatibility | Displayed when relevant |

Progressive disclosure must not conceal essential warnings, prerequisites, limitations or compatibility details. The user's explicit request for technical depth must be respected.

Search only eligible, approved and accessible knowledge, using the relevant compatibility and permission checks. Do not expose private source repositories, draft entries, credentials, withdrawn content or unrelated profile information. An unavailable package or unsupported query must be explained accurately rather than filled with invented knowledge.

Python Pocket Lab provides an existing design reference for plain and technical explanations, analogies, terminology, troubleshooting and coding puzzles. Review reusable material and structures under Knowledge Architecture before import; nothing is automatically approved by this specification.

Examples must distinguish predefined expected output, structured simulated output and actual runtime output. The technical workspace may be opened from an approved entry where appropriate.

Bookmarks and reading lists belong to user-controlled profile data, not the authoritative knowledge archive. Reading history, if supported, must respect user permissions and retention choices.

Exact search implementation, reference layout, entry components, bookmark organisation, demonstration technology and package presentation remain undecided.

## Specification 10 — Technical workspace and code interaction

Confirmed revised order: **A, E, B, D, C**. The integrated code editor is explicitly prioritised as a primary feature.

1. **Integrated code editor (A):** Establish a dedicated reusable workspace for viewing, writing and modifying supported code.
2. **Safe and independent code interaction (E):** Isolate supported code interaction from application privileges, user data and device resources.
3. **Interactive code demonstrations (B):** Allow experimentation with approved examples and show clearly identified expected, simulated or actual outputs.
4. **Collaborative problem-solving interface (D):** Provide contextual hints, supported mistake identification and guided problem solving without forcing automatic completion.
5. **Technical workspace tools (C):** Provide useful editing features, including syntax highlighting, line numbering, indentation assistance, copying and resetting examples.

Safety, privacy, authorisation and execution isolation remain mandatory regardless of ranking. The integrated editor is a primary educational feature, not merely a supplementary output viewer.

### Shared technical workspace

Reuse a common workspace with context-specific capabilities across environmental coding puzzles, approved knowledge examples, guided lessons, troubleshooting exercises, restricted CSS customisation and future authorised application-specific educational activities. Illustrative presentations include a split editor and guidance panel on larger screens, and a focused expanded editor with collapsible assistance on smaller displays.

| Feature | Intended treatment |
| --- | --- |
| Editable examples | Supported |
| Syntax highlighting and line numbers | Supported with accessible alternatives |
| Automatic indentation | Configurable |
| Copy, undo and redo | Supported |
| Reset example | Supported; avoid unintended loss of edited work |
| Progressive hints | Supported |
| Direct solution | Available on request |
| Output previews | Explicitly identified as expected, simulated or actually executed |
| Actual execution | Only where implemented and independently safety-validated |
| Access to personal files | Not granted merely by opening the workspace |
| Automatic project modifications | Not supported initially; advisory-only authority |

For example, a structured loop exercise can validate a limited supported pattern and preview corresponding output without executing arbitrary Python. Such a validator must not imply that unsupported input is invalid Python. Actual execution and pattern-based previews require distinct labels and accurate capability descriptions.

Do not execute arbitrary user code in the privileged application context. Any future execution environment must be independently validated and appropriately isolated from profile storage, credentials, host application authority and unrestricted network or device access, with suitable resource and execution limits. Provide understandable error and cancellation controls where relevant.

Pyodide, previously explored in Python Pocket Lab, is a candidate for browser-based Python execution; it is not a selected or security-validated execution framework for Glitch-Core. Browser-based execution alone does not establish adequate isolation.

Guided discovery remains the default assistance method, while explicit direct-answer requests are respected. Do not require repeated unsuccessful attempts before providing an available solution. Diagnostic suggestions must reflect actual supported evidence and capabilities. Do not claim access to external projects, terminals or files merely because code is displayed.

Exact editor framework, supported languages, execution technology, diagnostics, resource limits, work-in-progress storage and validation methods remain undecided.

## Specification 11 — Application status and system transparency

Confirmed order: **E, C, B, A, D**.

1. **Honest and distinguishable system communication (E):** Distinguish fictional character behaviour from genuine technical operations, warnings, limitations and failures.
2. **Error and recovery interface (C):** Explain genuine technical issues, affected functionality, consequences and supported recovery options.
3. **Operation and progress feedback (B):** Provide accurate feedback for loading, downloads, validation, saving and other genuine operations.
4. **Application status indicators (A):** Communicate relevant connectivity, offline resource availability and component status.
5. **Detailed system information (D):** Offer optional versions, storage usage, resource availability and sanitised technical diagnostics.

| Situation | Communication |
| --- | --- |
| Glitch's visual fragmentation | Authored character behaviour |
| Fictional bridge malfunction | Optional recreational simulation |
| Missing knowledge package | Actual capability or resource limitation, if detected |
| Failed profile save | Actual data-integrity warning, if detected |
| Unsupported question | Honest assistance limitation |
| Genuine application failure | Technical error and recovery options |
| Environment download | Actual operation feedback |

A simulated anomaly must not be displayed as a real failure; a genuine failure must not be disguised as fictional mischief. Glitch may express her established personality around technical issues, but clarity, seriousness and accuracy take precedence.

Three proposed levels of transparency are ordinary status indicators, understandable explanatory information, and optional detailed technical diagnostics. Keep ordinary status unobtrusive and expose deeper information when relevant or requested.

Progress indicators must reflect measured operations, or use indeterminate loading when measurable progress is unavailable. Do not invent percentages, claim a save succeeded before verification or announce recovery before establishing actual success. Report actual available resources rather than assuming internet connectivity implies a specific package is accessible.

Recovery must be non-destructive where possible, preserve unrelated functionality and respect existing permissions and deletions. Any optional diagnostic submission requires explicit permission and validated privacy safeguards under the Constitution and User Profiles and Memory. Diagnostic displays and logs must not unnecessarily expose sensitive or private information.

Exact indicators, error classifications, operation feedback, recovery mechanisms and diagnostic interface remain undecided.

## Specification 12 — Profile and memory management interface

Confirmed order: **E, B, A, C, D**.

1. **Privacy transparency and user control (E):** Clearly communicate what eligible information is stored, its location, purpose, permissions and limitations of protection.
2. **Memory management interface (B):** Allow review, editing and selective removal of approved personal memories.
3. **Profile management dashboard (A):** Provide central access to creating, selecting, renaming and managing optional local profiles.
4. **Conversational memory management (C):** Support eligible, authorised memory-management requests through conversation.
5. **Profile portability interface (D):** Provide understandable import, export, backup and restoration controls.

A proposed dashboard includes Overview, Memories, Privacy and Portability areas. Show only records and operations available within the current authorised profile context. Guest access remains supported without mandatory account or profile creation.

Personal memory and recreational progression must remain independently manageable. Deleting personal memories must not unintentionally remove discoveries, accessories, completed challenges or unrelated preferences. Likewise, resetting recreational progression must not silently erase approved personal memories.

| Category | User management |
| --- | --- |
| Approved personal memories | Review, edit, selectively remove and reset |
| Communication and appearance preferences | Individually configurable |
| Recreational progress and collectibles | Manage or reset within supported scope |
| Knowledge bookmarks | Manage separately |
| Application permissions | Review and revoke |
| Established character lore and authoritative knowledge | Read approved material; not user-editable as permanent canon or authoritative knowledge |

Preserve established consent and security disclosures from User Profiles and Memory:

> Would you like me to remember your provided info?

> Note that my current profile security is heavily limited. Please avoid sharing any personal information for the sake of your privacy.

> I may not reliably remember all information you give me…but I'll try my best.

These statements must remain truthful to the implemented capabilities and relevant at the consent or memory introduction stage. Do not imply stronger protection, reliable recall or actual deletion beyond validated capabilities.

Conversational operations must apply the same eligibility, permission and confirmation safeguards as interface controls. A user may decline memory requests, revoke permission or select individual records for removal. No persistent retention is inferred from silence, continued interaction or recreational engagement. Prohibited information cannot become eligible merely through consent.

The initial profile architecture is local browser storage. Profiles provide logical separation, not guaranteed strong authentication. No remote storage or automatic cross-device synchronisation is supplied by GitHub Pages alone.

Import and export must provide selection, preview, validation and conflict handling. A portable file is a snapshot, not synchronisation. External copies are outside Glitch's deletion control. Recovery must respect current deletion and permission state; do not automatically restore questionable records.

Exact profile screens, storage technology, file format, consent controls, confirmation steps and deletion/recovery interfaces remain undecided.

## Specification 13 — Application navigation and integration interface

Confirmed order: **E, A, C, D, B**.

1. **Independent application access and permission transparency (E):** Preserve straightforward navigation, independent application functionality and understandable permissions.
2. **Centralised application directory (A):** Provide an organised directory of supported destinations with descriptions, availability and direct navigation.
3. **Visual integration indicators (C):** Distinguish ordinary navigation, Glitch-enabled applications, knowledge integrations and authorised shared functionality.
4. **Personalised application shortcuts (D):** Allow users to bookmark, reorder or hide supported shortcuts.
5. **Contextual application recommendations (B):** Recommend relevant applications without becoming intrusive or promotional.

Both the immersive portal chamber and functional application directory use the same underlying application connection definitions. Ordinary links must not be described as actual integration or permission sharing.

| Connection classification | Meaning |
| --- | --- |
| External navigation | Opens a supported destination. |
| Glitch-enabled application | Contains an authorised Glitch companion or assistance implementation. |
| Knowledge integration | Provides approved application-specific knowledge through compatible mechanisms. |
| Profile integration | Supports explicitly authorised profile information sharing. |
| Unavailable application | Planned or currently inaccessible destination; no misleading functional access claim. |

These classifications describe capabilities that may coexist, not a mandatory progression of integration levels. Current capability labels must reflect actual verified availability and permissions.

Illustrative directory entries:

| Application | Current planning status |
| --- | --- |
| [Python Pocket Lab](https://glitchout-co.github.io/Python-Pocket-Lab/) | Existing website; Glitch integration not implemented. |
| Pokédex Lab | Planned destination; Glitch integration not implemented. |
| CardHub | Planned destination; Glitch integration not implemented. |

Navigation alone must not pass personal information, grant host execution authority, create shared accounts or imply cross-device profile synchronisation. Validate applicable connection definitions and authorised capabilities before enabling integrated features. Do not confuse an available link with a verified live backend connection.

Preferences for shortcuts must not remove essential navigation or hide required permission disclosures. Users remain free to use unrelated software; recommendations must comply with Constitution Laws 12 and 20. Avoid treating the directory as an advertising platform.

Actual integration contracts, adapter interfaces, host permissions, directory schema and synchronisation protocols belong to Integration Architecture. Exact layout, indicator design and shortcut-management controls remain undecided.

## Specification 14 — Application updates and feature discovery

Confirmed order: **E, A, D, C, B**. The user explicitly requires update information to be optional.

1. **Non-disruptive update management (E):** Preserve progress, preferences and unfinished activities, and separate optional feature announcements from significant technical notices.
2. **Version history and changelog (A):** Provide optional access to release history, improvements, fixes and implemented capabilities.
3. **Character-led update explanations (D):** Let Glitch explain relevant significant changes when requested or permitted.
4. **Contextual feature indicators (C):** Optionally identify newly introduced functionality within relevant interfaces.
5. **Interactive feature demonstrations (B):** Offer optional, dismissible and replayable demonstrations.

Update information must be optional rather than automatically forced on users whenever a new version becomes available. Users may suppress optional development announcements, update summaries and new-feature indicators entirely. Do not require review of changelogs or demonstrations before continuing ordinary use.

Required security, compatibility, data-integrity and functional warnings remain distinct from optional development information. Disabling update information does not itself disable application or knowledge-package updates; actual update controls and policies remain to be designed consistently with Knowledge Architecture.

| Update classification | Proposed communication |
| --- | --- |
| New region or recreation | Optional contextual discovery or changelog entry |
| New approved knowledge | Archive and optional changelog information |
| New capability | Optional explanation or demonstration |
| Interface improvement | Optional contextual explanation |
| Character addition | Approved lore or optional changelog |
| Ordinary bug fix | Changelog |
| Significant security issue | Clear technical notice when relevant |
| Save compatibility issue | Explicit warning and supported recovery options |

### PWA update safeguards

Avoid unnecessary reloads during conversations, coding exercises or unfinished activities. Preserve approved progress and work in progress wherever supported. Validate application, knowledge package and save compatibility. Distinguish a detected or downloaded update from an activated version. Do not imply successful installation, migration or correction before verification.

Provide a safe activation and recovery approach appropriate to the selected service-worker architecture, without restoring withdrawn unsafe knowledge or deleted/revoked profile information. Necessary security action may require a different treatment from an optional feature update; explain the real consequence.

Optional announcements must respect notification preferences and dismissals. Do not accumulate mandatory catch-up announcements for returning visitors. Character-led explanations should be contextual, truthful and consistent with established identity. A planned capability must never be presented as implemented.

Exact versioning scheme, changelog layout, announcement defaults, update activation process, migration strategy and service-worker implementation remain undecided.

## Specification 15 — Development and validation tools

Confirmed order: **E, A, C, D, B**.

1. **Interface consistency and integrity validation (E):** Ensure changes preserve accessibility, predictable navigation, user permissions and supported functionality.
2. **Reusable interface component library (A):** Establish consistent shared controls, navigation, dialogue, settings, editors and status elements.
3. **Device and accessibility testing (C):** Test screen sizes, input methods, contrast, text scaling, reduced motion and assistive technologies.
4. **Interface state simulation (D):** Simulate loading, offline conditions, genuine technical failures, optional anomalies, notifications, incomplete data and permission changes.
5. **Visual interface development environment (B):** Preview layouts, presentation modes, themes and environmental styling.

The **Interface and Accessibility Laboratory** is the sixth established development laboratory.

| Proposed module | Intended purpose |
| --- | --- |
| Component Library | Reusable buttons, navigation, dialogue, preference controls, code editors and status components. |
| Interface Studio | World, Companion and Assistant previews; responsive layouts; brand and environmental styling. |
| Accessibility Auditor | Contrast, keyboard navigation, text scaling, motion, screen reader and related checks. |
| State Simulator | Offline operation, resource failures, saving issues, permission changes and update conditions. |
| Interface Integrity Auditor | Essential control availability, predictable navigation, compatibility, preference preservation and permission transparency. |

The reusable component library should separate behaviour, accessibility semantics and interaction rules from cosmetic themes. A shared theming system may supply Glitchout-Co defaults, environmental styling and permitted user preferences to all presentation modes. Improving a shared component should not require three independent implementations.

Automated accessibility checks supplement manual testing, not replace it. Test keyboard workflows, focus behaviour, assistive technology, responsive reflow, readable scaling, colour-independent cues, motion settings and interaction targets on relevant supported devices. Accessibility claims require evidence; no laboratory concept itself establishes conformance.

Use synthetic profiles and controlled state fixtures for tests. Developer tools must remain separate from ordinary user capabilities and must not expose personal profile contents, credentials or private development records. A hidden control on a public website is not an authorisation mechanism.

| Established laboratory | Responsibility |
| --- | --- |
| Glitch Behaviour Laboratory | Character behaviour and activity |
| Glitch Response Laboratory | Communication and assistance |
| Knowledge Management Laboratory | Knowledge authoring, validation and publication |
| Profile and Memory Laboratory | Privacy, permissions, persistence and recovery |
| Virtual World Laboratory | Environments, puzzles and simulation |
| Interface and Accessibility Laboratory | Shared components, presentation, usability and accessibility |

A unified Glitch Developer Toolkit remains a proposed implementation, not a selected framework. The component structure, interface framework, preview tooling, accessibility test suite and laboratory implementation remain undecided.

## Cross-cutting implementation boundaries

- Preserve the Constitution, Character Codex and previously established functional specifications. User interface preferences do not override mandatory privacy, authority, eligibility, consent, safety or integrity checks.
- Maintain direct access to supported core assistance, knowledge, essential controls and relevant warnings regardless of profile status, presentation mode, recreation, onboarding, graphics or audio preferences.
- Use a single responsive PWA with GitHub Pages as the intended long-term hosting direction. Do not assume a personal server or future backend; separately approve any services requiring additional infrastructure.
- Preserve Glitchout-Co's default visual identity while supporting environment-adaptive styling, fixed themes and accessible alternatives. Do not alter essential functionality or Glitch's established identity through styling.
- Target WCAG 2.2 Level AA, subject to implementation and validation. Accessibility overrides conflicting visual or sensory effects and never requires disclosure of disabilities.
- Reuse the conversation, knowledge and technical workspace systems across presentation modes. Keep technical demonstrations and actual code execution clearly distinguished; enforce independent execution safeguards.
- Respect user control over optional introductions, recreational dialogue, notifications and update information. Maintain relevant essential technical warnings independently.
- Keep fictional simulation, character dialogue, actual technical status and genuine diagnostics distinguishable. Report measured or validated outcomes, not invented progress or assurances.
- Keep personal memory, recreational saves, configuration and authoritative knowledge distinct. Provide transparent, independently scoped management, consent, deletion, import/export and recovery.
- Use one application connection directory for ordinary navigation and portals. Do not represent a link as permission, integration or shared data access.
- Preserve approved progress, preferences and work in progress through presentation changes and updates where supported; communicate limitations honestly.
- Build reusable accessible components and controlled developer validation tools. Do not claim software implementation, security or accessibility conformance before evidence exists.

These 15 specifications complete foundational Interface and Accessibility design. The exact branding palette, layouts, interface framework, supported browser matrix, component library, editor and execution technology, accessibility validation suite, storage and update mechanisms, and development laboratory implementation remain engineering work.

Integration Architecture is the next design stage, followed by Testing and Validation.

## Amendment history

| Version | Date | Change |
| --- | --- | --- |
| 1.0 | 2026-11-26 | Established all 15 confirmed interface and accessibility specifications, including PWA architecture, indefinite GitHub Pages hosting direction, Glitchout-Co default branding with environment-adaptive styling, integrated editor priority, optional update information and the sixth development laboratory. |
