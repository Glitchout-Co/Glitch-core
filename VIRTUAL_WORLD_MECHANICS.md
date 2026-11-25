# Glitch — Virtual World Mechanics

**Version:** 1.0  
**Established:** 26 November 2026  
**Status:** Confirmed foundational functional design; implementation pending  
**Maintainer:** Glitchout-Co

## Purpose and authority

This document records the 15 accepted specifications governing the design, exploration, interaction, recreation, environmental simulation, persistence, performance and expansion of Glitch's fictional digital world.

It complements the [Constitution](CONSTITUTION.md), [Character Codex](CHARACTER_CODEX.md), [Behavioural Engine](BEHAVIOURAL_ENGINE.md), [Response Engine](RESPONSE_ENGINE.md), [Knowledge Architecture](KNOWLEDGE_ARCHITECTURE.md) and [User Profiles and Memory](USER_PROFILES_AND_MEMORY.md).

The Constitution remains the highest authority. The world is an optional recreational environment, not a prerequisite for assistance, knowledge, personalisation or access to other Glitchout-Co applications. Glitch is a software companion; her world, wildlife, emotions, abilities, hazards and activities are authored simulations, not actual living beings or real-world events.

Rankings preserve the agreed descending order of preference or emphasis, not an unconditional execution sequence. Mandatory accessibility, safety, integrity, privacy, consent and non-disruption requirements apply regardless of ranking. Examples, region and species names, diagrams, visual references, numerical parameters and proposed implementation technologies are illustrative unless explicitly established.

The initial direction is an original, browser-based, two-dimensional, single-player world hosted with Glitch-Core through GitHub Pages. The rendering framework, world layout, content catalogue and actual implementation remain undecided.

## Specification 01 — Fundamental world structure

Confirmed order: **E, A, C, B, D**. Navigation to other Glitchout-Co applications is explicitly included.

1. **Independent companion accessibility (E):** Allow direct access to Glitch's assistance and interactions without navigating or exploring the world.
2. **Central home environment (A):** Establish her fox den as the primary sanctuary, containing her resting area, archive, belongings and access to other regions.
3. **Expandable world architecture (C):** Support additional environments and discoveries without rebuilding the existing world.
4. **Interconnected explorable regions (B):** Provide optional surrounding environments connected through navigable pathways.
5. **Interactive environments (D):** Support meaningful interaction with environmental objects, wildlife, hidden passages and Glitch herself.

The den occupies the original environment in which Glitch's fragmented components merged into her fox-spirit form. Preserve its connection to that established origin and its blend of nature and digital elements.

Illustrative initial topology: a central den connected to woodland, riverside, quiet clearing and fragmented landscapes, with opportunities for expansion. These labels and connections are not a final world map. Prefer a small, detailed and interactive initial world rather than a large empty landscape.

### Glitchout-Co application navigation

Use the established portal lore to represent optional functional navigation to supported Glitchout-Co applications. Provide equivalent access through ordinary menus or quick-access controls so users do not have to explore the den to find an application.

| Potential destination | Intended status |
| --- | --- |
| Python Pocket Lab | Existing educational website; Glitch integration not implemented. |
| Pokédex Lab | Planned application gateway; Glitch integration not implemented. |
| CardHub | Potential application gateway; Glitch integration not implemented. |

The portal chamber is a proposed presentation of these connections. Available, locked, disconnected or unstable visual states must reflect actual availability where they represent real applications. Fictional portals within the virtual world remain distinct from real application connections.

Opening a destination is navigation, not automatic integration, permission to read profile data, installation, execution authority or access to the destination's private resources. Real integration requires a developer-established, authorised connection under Character Codex Entry 18 and the future Integration Architecture.

Only supported destinations may be presented as functional. Unimplemented connections must be labelled appropriately. Preserve the independent functionality of destination applications.

The exact navigation catalogue, portal presentation, launch methods, availability checks and integration infrastructure remain development decisions.

## Specification 02 — Navigation and exploration

Confirmed order: **E, B, C, A, D**. The revised scene-based exploration direction is accepted.

1. **Quick access and accessibility (E):** Provide immediate access to assistance, home, archive, applications, settings and previously available locations without requiring travel.
2. **Scene-based exploration (B):** Establish interconnected two-dimensional environments with movement and optional exploration.
3. **Direct environmental interaction (C):** Allow selection of objects, entrances, wildlife and interactive programming mechanisms.
4. **Location-based navigation (A):** Offer convenient destination selection through an interactive map or location menu.
5. **Companion-guided exploration (D):** Allow Glitch to accompany users and optionally guide them towards interesting locations.

The user selected an exploration style inspired by Poptropica and Club Penguin: Poptropica-style environmental adventures, hidden passages and puzzles combined with Club Penguin-style interconnected locations, relaxed interactions and quick navigation. The world must retain its own original artwork, characters, environments and mechanics; these games are design references, not assets to reproduce.

| Navigation method | Intended purpose |
| --- | --- |
| World map or location menu | Select available regions directly. |
| Click or tap | Move towards or interact with an environmental target. |
| Connected pathways | Explore naturally between scenes. |
| Return home | Immediately access the den. |
| Follow Glitch | Optional guided exploration. |
| Ask Glitch | Access supported assistance from anywhere. |

Mouse, touchscreen and optional keyboard movement should support ordinary exploration. No essential functionality depends on precise platforming or solving an environmental puzzle.

Dynamic programming puzzles form part of the exploration experience and are governed by Specification 06. Recreational secrets may require discovery; essential controls and ordinary application navigation must not.

Exact perspective, scene transitions, movement controls, navigation interface and rendering technology remain undecided.

## Specification 03 — Player representation and control

Confirmed order: **E, B, A, C, D**. Multiplayer is explicitly deferred.

1. **Accessible movement controls (E):** Support straightforward mouse, touchscreen and keyboard navigation without requiring precise movement skills for ordinary exploration.
2. **Independent Glitch movement (B):** Allow Glitch to move, investigate and react independently according to her behavioural system.
3. **Customisable player avatar (A):** Allow optional visual representation and cosmetic customisation of the visitor.
4. **Companion movement modes (C):** Allow Glitch to accompany the player or continue her independent activities.
5. **Observer mode (D):** Permit users to watch Glitch and interact with the environment without controlling an avatar.

Illustrative avatar concepts include a small digital adventurer, digital spirit, digital construct or floating fragment. A digital spirit or fragment was recommended because it fits the world without requiring personal identity characteristics. No avatar design has been selected. Customisation must not require sensitive personal information or infer personal characteristics.

| Proposed movement mode | Intended behaviour |
| --- | --- |
| Follow | Glitch accompanies the avatar. |
| Explore together | Glitch independently investigates nearby points of interest. |
| Free roam | Glitch continues her own context-appropriate activities. |
| Stay here | Glitch remains within a selected area where practical. |
| Observer | The user watches and interacts without controlling an avatar. |

These modes are illustrative. Glitch retains her independent character and may interrupt recreation for direct assistance under the Behavioural Engine. The player does not directly control her personality or grant additional authority by selecting a movement mode.

### Multiplayer development boundary

The initial virtual world is single-player. Multiplayer development is deferred until significant user activity justifies reconsideration. There is no established activity threshold, multiplayer release commitment or approved online social infrastructure.

Modular world design may leave room for future expansion, but no multiplayer servers, public chat, matchmaking, competitive online leaderboards or multiplayer minigames are required for the initial release. Any later decision must consider infrastructure, privacy, moderation, accessibility, cost and developer approval.

Avatar artwork, movement physics, control bindings, customisation options and default companion mode remain undecided.

## Specification 04 — Den and home functionality

Confirmed order: **E, A, B, D, C**. Limited player-controlled CSS customisation is explicitly included.

1. **Preservation of character identity (E):** Protect significant aspects of the den and its belongings from changes that would contradict established lore or identity.
2. **Functional areas (A):** Provide areas for resting, studying, accessing knowledge, recreation and application navigation.
3. **Interactive furnishings (B):** Support meaningful interactions with furnishings, toys, books and treasured objects.
4. **Environmental storytelling (D):** Use objects, hidden details and discoverable fragments to reveal approved character history.
5. **Optional home customisation (C):** Permit individual cosmetic personalisation within the user's experience.

Illustrative functional layout:

| Area | Purpose |
| --- | --- |
| Resting nook | Glitch's treasured bed and resting activities. |
| Knowledge archive | Independent reading, studying and approved assistance. |
| Portal chamber | Optional navigation to supported applications. |
| Play area | Toys, Pixel Berries and recreational interactions. |
| Common area | General companionship and conversation. |
| Memory corner | Discoverable fragments of authored history. |

The floor plan and exact furnishings are not final. Preserve the den's natural-digital sanctuary identity, Glitch's treasured bed, her original collar and meaningful lore-related objects. Cosmetic variations must not remove or rewrite their significance.

Distinguish protected character elements, customisable decorations and discoverable souvenirs or cosmetic rewards. Users customise their own local experience, not a global shared world or Glitch's permanent canon.

### Restricted CSS customisation

The user requested that players be able to experiment with minor CSS aspects of the world. Provide restricted cosmetic customisation as an optional learning and recreational feature.

A visual editor and restricted CSS editor are proposed complementary methods. Changes should provide immediate visual feedback and a reset to supported original styling.

| Illustrative cosmetic property | Intended treatment |
| --- | --- |
| Background and furniture colours | Permitted on designated elements. |
| Decorative borders and border radius | Permitted within validated ranges. |
| Ambient lighting and opacity | Permitted within accessibility limits. |
| Selected decorative animations | Permitted subject to reduced-motion and performance settings. |
| Hiding essential controls or warnings | Prohibited. |
| Modifying security or permission interfaces | Prohibited. |
| External resource injection | Prohibited. |
| Altering Glitch's core identity or authoritative content | Prohibited. |

Do not apply arbitrary user-authored CSS to the entire application. Restrict and validate properties, values and targets; protect essential controls, privacy notices, accessibility settings and security boundaries. Imported cosmetic settings must undergo the same validation. No CSS feature grants script execution, network access or host-system authority.

The exact CSS allowlist, validation mechanism, visual editor, persistence method and home layout remain undecided.

## Specification 05 — Environmental simulation

Confirmed order: **E, D, A, B, C**.

1. **Configurable environmental simulation (E):** Allow users to customise, pause or simplify environmental changes for comfort, accessibility and performance.
2. **Environmental behavioural influence (D):** Let Glitch react naturally to environmental conditions within her established personality.
3. **Dynamic day and night cycle (A):** Represent changing daylight, dusk, nighttime and dawn, with corresponding activities and lighting.
4. **Dynamic weather (B):** Support changing fictional weather such as sunshine, rainfall, fog, snowfall and occasional thunderstorms.
5. **Seasonal environments (C):** Allow seasonal variation in scenery, wildlife and recreational opportunities.

The fictional clock is independent of the real world. Optional visual synchronisation with the user's local time may be offered under Character Codex Entry 16; real-world location access is not necessary.

Glitch's reactions should reflect established preferences, including gentle rain and dusk. She may rest, watch weather, explore or comment on changes when relevant. Notification and interruption settings remain respected.

Illustrative environmental effects include emerging wildlife at dawn, quieter activities at night, sheltering during thunderstorms and optional programming challenges involving simulated environmental controllers.

No environmental condition may permanently restrict essential functionality, cause loss of earned progress or require the user to maintain the world. Temporary recreational opportunities must recur or otherwise remain obtainable without permanent missability.

Respect reduced-motion settings, visual clarity, audio controls and user preferences. No background world processing is required while the application is closed.

Exact time-cycle durations, weather probabilities, season lengths, environmental transition rules and asset requirements remain undecided.

## Specification 06 — Dynamic coding puzzles

Confirmed order: **E, A, D, B, C**.

1. **Safe and validated code interaction (E):** Restrict code interactions so they cannot compromise the application, profile data, host applications or device.
2. **Environmental coding puzzles (A):** Integrate programming challenges into the virtual environment; successful completion produces a meaningful simulated change.
3. **Companion-assisted problem solving (D):** Offer contextual explanations, progressive hints, guided discovery and direct solutions on request.
4. **Dynamic puzzle variation (B):** Use approved templates with changing variables, conditions or configurations for repeatable challenges.
5. **Progressive difficulty (C):** Support different experience levels without requiring completion of introductory challenges first.

The player may repair a bridge, open a hidden passage or restore a malfunctioning mechanism through an educational simulation. The change is limited to authorised recreational world state.

| Illustrative environmental challenge | Potential concept |
| --- | --- |
| Restore fragmented bridge components | Python loops and functions. |
| Unlock a hidden passage | Conditional statements. |
| Customise decorative objects | CSS. |
| Repair an interactive mechanism | JavaScript. |
| Reconstruct a digital structure | HTML. |
| Organise the archive | Lists and dictionaries. |
| Stabilise an unstable portal | Debugging and error handling. |
| Restore an environmental controller | Boolean logic. |

For example, an approved template may generate a bridge with a variable number of missing fragments, then ask the user to complete the corresponding loop. A validated solution causes a visible bridge restoration. Numerical or structured-input validation is sufficient for an initial challenge; this example does not require unrestricted Python execution.

Dynamic templates must be developer-approved and validated for solvability, appropriate difficulty and correct expected outcomes. Accept multiple valid solutions where the challenge supports them. Incorrect attempts incur no penalties. Hints and direct solutions must remain available. Guided discovery is the established default assistance methodology, not a requirement to struggle before receiving an answer.

Puzzles may unlock optional recreational discoveries but must never gate core assistance, approved educational knowledge, essential settings or ordinary application navigation.

Review and reuse suitable Python Pocket Lab challenges where appropriate rather than duplicate work. Any imported educational content remains subject to Knowledge Architecture validation and approval.

Initial structured and validated puzzles are recommended before introducing free-form editors. If actual code execution is later introduced, isolate it from application privileges, credentials, profile storage, unrestricted network access and host operations; enforce resource and execution limits appropriate to the selected technology. A puzzle's fictional code effect is not a grant of real execution authority to Glitch.

Exact initial languages, difficulty taxonomy, puzzle templates, generation algorithms, validation methods and secure execution technology remain undecided.

## Specification 07 — Wildlife and environmental inhabitants

Confirmed order: **E, A, C, B, D**.

1. **Peaceful coexistence (E):** Keep wildlife interaction peaceful, without hunting, combat or mandatory care.
2. **Independent wildlife behaviour (A):** Allow creatures to move, rest and interact naturally with their surroundings.
3. **Environmental wildlife variation (C):** Adjust wildlife appearances and behaviours according to habitat, time, weather and seasons.
4. **Interactive wildlife (B):** Allow Glitch and visitors to observe, approach and play with compatible creatures.
5. **Wildlife-related discoveries (D):** Offer optional opportunities to discover creatures, observe unusual behaviours and document them.

Glitch remains the only established intelligent digital inhabitant of her home world. Ordinary wildlife behaves naturally without human-like intelligence or dialogue. The world simulation does not represent actual living or conscious creatures.

| Proposed species name | Illustrative behaviour |
| --- | --- |
| Pixel Butterflies | Peaceful woodland creatures that Glitch may playfully follow. |
| Byte Birds | Small birds active around trees and clearings. |
| Fragment Wisps | Floating creatures associated with fragmented landscapes. |
| Datafish | Aquatic creatures visible in digital rivers and ponds. |

These names and species designs are provisional. Other ordinary wildlife may be added through approved content, consistent with Character Codex Entries 15 and 24.

Glitch may watch fish, follow butterflies, rest near familiar creatures or invite a visitor to observe interesting behaviour. Optional habitat-related puzzles may teach programming concepts through isolated simulated effects.

Wildlife should remain independent rather than become a mandatory collection or upkeep system. No feeding obligation, survival simulation, combat system or penalty for absence is required.

Exact species catalogue, appearances, habitats, behaviour probabilities, animations and discovery rules remain undecided.

## Specification 08 — Environmental events and digital anomalies

Confirmed order: **E, B, C, D, A**.

1. **Non-disruptive event design (E):** Protect saved progress, assistance, privacy and functionality from recreational event effects.
2. **Digital anomalies (B):** Introduce simulated environmental glitches, fragmented objects and malfunctioning digital mechanisms.
3. **Interactive event resolution (C):** Allow optional investigation or resolution through programming and environmental interactions.
4. **Independent event responses (D):** Let Glitch observe, investigate and react naturally to events according to her established character.
5. **Natural environmental events (A):** Offer occasional events such as falling stars, changing wildlife activity and glowing vegetation.

| Illustrative event | Potential interaction |
| --- | --- |
| Fragmentation event | Reconstruct a simulated object using functions or structured input. |
| Digital storm | Explore harmless corrupted-pixel effects or a logic puzzle. |
| Loop anomaly | Correct a simulated repeating mechanism. |
| Falling fragments | Discover optional souvenirs or environmental details. |
| Unstable passage | Investigate a fictional gateway using conditional logic or debugging. |

For example, a fountain that runs one extra cycle could introduce an off-by-one loop challenge. Solving the approved puzzle changes only the simulated fountain's behaviour. This is an educational example, not a real software fault.

The dominant world atmosphere remains peaceful. Glitch is not a combatant, antivirus program or actual security tool. Simulated hazards and threats must remain isolated from genuine user resources and permissions.

Never disguise an actual software error as an authored recreational anomaly. Real failures require honest technical acknowledgement and appropriate recovery. Intentional fragmentation, harmless mischief and environmental glitches must be distinguishable from real data corruption or instability.

Events must not destroy persistent progress, memories or collectibles; require repairs; or interrupt essential assistance. Optional discoveries must not be permanently missable.

Exact event types, frequencies, durations, triggers, rewards and visual effects remain undecided.

## Specification 09 — Discoveries and exploration rewards

Confirmed order: **E, B, A, D, C**.

1. **Pressure-free discovery (E):** Keep discovery optional; prohibit expiring rewards, completion pressure and permanently missed opportunities.
2. **Environmental secrets (B):** Reward curiosity with hidden passages, concealed objects and unusual interactions.
3. **Discovery journal (A):** Record meaningful discoveries, wildlife, anomalies and fragments of approved lore.
4. **Dynamic discovery opportunities (D):** Allow discoveries to arise from different environmental conditions or interactions.
5. **Cosmetic rewards (C):** Provide optional accessories, decorations, souvenirs and cosmetic choices.

A discovery journal may provide categories for locations, lore, wildlife, anomalies and mysteries. Some secrets should deliberately remain unlisted rather than become a compulsory checklist. Discovery itself is a meaningful reward.

Illustrative rewards include fragments of Glitch's earliest memories, decorative accessories, a digital plant for the den or access to an optional hidden environment. All lore fragments must reveal developer-approved canon rather than generate or rewrite permanent character history.

| Mechanism | Intended design |
| --- | --- |
| Expiring rewards | None. |
| Daily login rewards or compulsory streaks | None. |
| Collection completion requirements | None. |
| Permanently missable discoveries | None. |
| Hidden interactions and locations | Supported. |
| Changing environmental discovery conditions | Supported, with opportunities recurring or remaining obtainable. |
| Essential knowledge gated by puzzles | Prohibited. |

Recognition and cosmetic rewards must be proportionate, optional and free of participation pressure. Respect a user's preferred degree of guidance; offer progressive hints or direct explanations when requested without forcing recreational play.

Exact discovery catalogue, conditions, journal interface, reward distribution and rarity classifications remain undecided.

## Specification 10 — Recreational activities and minigames

Confirmed order: **E, B, A, C, D**. Educational minigames were explicitly prioritised above general companion activities and traditional recreation.

1. **Voluntary and accessible participation (E):** Keep activities optional, replayable and free from mandatory scoring, penalties and participation requirements.
2. **Educational minigames (B):** Offer programming, logical reasoning, problem-solving and pattern-recognition activities.
3. **Interactive companion activities (A):** Support playing with Glitch, petting, offering Pixel Berries and simple shared activities.
4. **Traditional recreational minigames (C):** Provide opportunities to relax and play without requiring educational content.
5. **Independent recreational participation (D):** Allow Glitch to suggest, initiate or independently enjoy suitable activities within her behavioural boundaries.

Illustrative activities include gathering fictional Pixel Berries, playing fetch, observing Datafish, matching digital fragments, and possible future chess or checkers minigames. These are candidate activities, not an approved initial release catalogue.

Educational recreation is a priority, but not every interaction must become a lesson. Optional personal-best scores may be offered without ranking users' intelligence, requiring participation or diminishing assistance. Timers or scoring, if included in a particular activity, must not become mandatory world-maintenance or relationship mechanisms.

Glitch's suggestions respect user preferences, declined invitations and direct assistance priority. She can independently enjoy recreational activities while the application is running, without creating obligations for the user.

No hunger meter, happiness meter, required daily activity, inactivity penalty or assistance restriction is permitted. Competitive online leaderboards and multiplayer minigames remain deferred under Specification 03.

Exact minigames, educational objectives, accessibility alternatives, scoring, rewards and implementation methods remain undecided.

## Specification 11 — Inventory and collectible management

Confirmed order: **E, A, B, C, D**.

1. **Unrestricted ownership of earned rewards (E):** Protect earned collectibles from artificial inventory pressure, expiration, forced purchases and inactivity penalties.
2. **Categorised inventory (A):** Organise items into understandable categories.
3. **Interactive item functionality (B):** Allow supported items to be used, equipped, displayed, examined or offered to Glitch.
4. **Collectible provenance (C):** Record an item's origin, acquisition method and applicable lore.
5. **Customisable displays (D):** Allow users to display selected collectibles in the den or a dedicated collection area.

| Item category | Illustrative use | Intended behaviour |
| --- | --- | --- |
| Treats | Offer Pixel Berries to Glitch. | Voluntary consumables. |
| Toys | Play fetch with a digital ball. | Reusable. |
| Accessories | Equip optional decorations. | Reusable and removable. |
| Decorations | Display a digital plant or ornament. | Reusable. |
| Lore fragments | Examine discovered authored memories. | Revisit without consumption. |
| Souvenirs | Display keepsakes from exploration. | Reusable. |

Specific items such as a cyan bow, fragment ball, glowing bonsai or woodland crystal are illustrative, not final catalogue entries.

Consumables may be voluntarily used and renewable resources may replenish, but Glitch never requires treats or items to remain healthy, happy or willing to assist. Voluntary consumption or user-directed removal is distinct from involuntary loss of earned rewards. Protected lore and identity objects remain subject to Specification 04.

Avoid artificial scarcity and forced inventory management. Finite technical storage and performance constraints must be handled transparently rather than presented as punitive game mechanics.

An initial world without in-game currency was recommended; no currency system has been approved or ruled out for later consideration. Items may be obtained through exploration, educational challenges and shared activities. Any future economy must remain consistent with the Constitution's commercial integrity and pressure-free recreation.

Exact inventory schema, quantities, item catalogue, acquisition methods, displays and possible currency remain undecided.

## Specification 12 — World persistence and progression

Confirmed order: **E, A, D, B, C**.

1. **Protected progression (E):** Prevent intentional loss of earned progress through absence, ordinary recreation, environmental events or application updates.
2. **Persistent environmental changes (A):** Save significant repairs, restored pathways and discoveries within the approved local profile.
3. **Replayable experiences (D):** Allow completed puzzles and meaningful discoveries to be revisited without undoing achievements.
4. **Activity continuation (B):** Preserve unfinished optional puzzles, exploration activities and recreational challenges where supported.
5. **Natural environmental renewal (C):** Allow renewable resources, wildlife appearances and ordinary environmental events to provide recurring opportunities.

| World element | Intended persistence |
| --- | --- |
| Completed significant repairs and restored pathways | Saved progression. |
| Discovered locations and earned accessories | Saved progression. |
| Den cosmetic and validated CSS settings | Saved when enabled. |
| Unfinished puzzles | Resumable where supported. |
| Pixel Berry vegetation | Renewable. |
| Wildlife positions, weather and lighting | Dynamic. |
| Glitch's current activity | Dynamic, with contextual continuity. |

Permanent progression means protected from intentional game-driven decay while approved save data remains available. It does not override explicit user resets, profile deletion, browser storage loss or the security and reliability limitations established in User Profiles and Memory.

The default continuity approach is simulated elapsed fictional time upon reopening, as established in Behavioural Engine Specification 05. Users may instead choose to resume where the world was left. Ordinary environmental conditions may change; earned progress and approved familiarity do not decay. No continuous background execution is required while the application is closed.

Replay completed puzzles independently of permanent repair state. A user may experiment with alternative solutions or dynamic variations without losing the original achievement.

Returning visitors receive the established Constitution Law 15 greeting where appropriate:

> Welcome back, hope you had a good time away, I'm glad to see you return.

Guest access remains available without a persistent personal profile. Recreational save permissions remain independently configurable from personal memory. Profile portability, import/export, deletion and recovery are governed by User Profiles and Memory.

Exact world-state schema, storage, renewal intervals, replay mechanics, migration and continuity calculations remain undecided.

## Specification 13 — Performance and graphical scalability

Confirmed order: **E, A, B, D, C**.

1. **Independent assistance performance (E):** Separate core assistance from graphical rendering and recreation so optional visual complexity does not unnecessarily interfere with assistance.
2. **Modular environmental loading (A):** Load scenes and associated resources as needed instead of loading the entire world at startup.
3. **Scalable graphical settings (B):** Provide adjustable animations, lighting, particles, environmental effects and wildlife density.
4. **Simplified world presentation (D):** Maintain essential interactions, navigation and coding puzzles with a lightweight presentation.
5. **Automatic resource optimisation (C):** Reduce optional graphical complexity when appropriate, subject to user settings.

Illustrative profiles, consistent with the Behavioural Engine:

| Feature | Minimal | Lightweight | Balanced | Immersive |
| --- | --- | --- | --- | --- |
| Supported core assistance | Available | Available | Available | Available |
| Supported exploration, interactions and puzzles | Available | Available | Available | Available |
| Detailed animations | Reduced | Reduced | Standard | Full supported |
| Environmental particles | Off | Low | Medium | High |
| Dynamic lighting | Off | Off | On | On |
| Wildlife density | Reduced | Low | Medium | High |

Labels, effects and detail levels are proposed, not measured performance presets. Manual preferences govern automatic optimisation, including reduced motion, accessibility requirements and simplified presentation. Do not make discoveries or puzzle solutions dependent solely on optional visual effects.

Initial loading of the den and essential resources is recommended. Load additional regions, wildlife, animation and audio assets as needed; optionally download supported resources for offline exploration.

GitHub Pages and proposed PWA constraints remain those established in Knowledge Architecture. On-demand loading reduces initial downloads but does not remove resources from the published-site size budget. Offline functionality depends on the relevant downloaded resources remaining accessible; do not promise indefinite browser retention.

A missing or failed recreational asset must not unnecessarily block assistance or unrelated world components. Integrated host applications do not require the full world or its rendering resources.

Exact rendering technology, asset formats, performance budgets, default preset, automatic adjustment thresholds and supported-device measurements remain engineering decisions.

## Specification 14 — Environmental audio and sound design

Confirmed order: **E, A, C, D, B**.

1. **Independent audio controls and accessibility (E):** Provide independent audio-category controls and complete muting; no essential information or puzzle solution may rely exclusively on sound.
2. **Contextual environmental ambience (A):** Use appropriate environmental sounds to establish atmosphere.
3. **Character sound effects (C):** Give Glitch recognisable, subtle expressive sounds.
4. **Interactive environmental audio (D):** Provide context-appropriate feedback from objects, portals, mechanisms and discoveries.
5. **Dynamic background music (B):** Offer optional instrumental music suited to locations, conditions and activities.

Illustrative soundscape:

| Environment | Ambience | Optional music direction |
| --- | --- | --- |
| Den | Soft digital humming. | Peaceful instrumental. |
| Woodland | Birds, wind and leaves. | Gentle acoustic. |
| Riverside | Flowing water. | Relaxing atmospheric. |
| Fragmented landscapes | Subtle electronic distortion. | Mysterious ambient. |
| Portal chamber | Digital resonance. | Minimal electronic. |
| Nighttime | Crickets and quiet wind. | Quiet atmospheric. |

Character sound candidates include a gentle resting purr, discovery chime, fox-like chirps, fragmentation sounds and quiet digital humming. These are proposed sound assets, not finalised recordings.

Independent controls should cover environmental ambience, background music, character effects, interactive sounds and any future character voice. Muting must not remove required information. Provide equivalent visual or textual feedback for important sound cues. Respect user interaction and notification settings; sound should not compete unnecessarily with assistance or educational activities.

Her future voice remains consistent with Character Codex Entries 43 and 44: soft, youthful, feminine, calm and articulate; Australian English by default with possible configurable accents. Voice synthesis is a future capability, not an implemented requirement.

Original music and sound effects are recommended to establish the world's own creative identity. Use appropriately authorised assets, efficient formats, reusable effects and modular audio loading to respect hosting and device constraints.

Exact sound catalogue, audio assets, music compositions, default volumes, playback rules and implementation technology remain undecided.

## Specification 15 — Development and expansion tools

Confirmed order: **E, B, C, A, D**.

1. **World integrity and compatibility validation (E):** Ensure additions preserve approved lore, saved progress, accessibility and core functionality.
2. **Modular world content management (B):** Support independent additions of regions, wildlife, collectibles, activities and environmental events.
3. **Coding puzzle workshop (C):** Create, configure and test environmental programming challenges, variable templates, expected solutions and hints.
4. **Visual environment editor (A):** Construct scenes, place objects, configure pathways and define interaction triggers.
5. **Environmental simulation testing (D):** Test fictional time, weather, wildlife, anomalies and different graphical configurations.

The **Virtual World Laboratory** is the fifth established development laboratory.

| Laboratory | Responsibility |
| --- | --- |
| Glitch Behaviour Laboratory | Character behaviour, activities, reactions and transitions. |
| Glitch Response Laboratory | Communication, interpretation, retrieval and assistance. |
| Knowledge Management Laboratory | Knowledge authoring, validation, approval and distribution. |
| Profile and Memory Laboratory | Privacy, profiles, persistence, permissions and recovery. |
| Virtual World Laboratory | Scene creation, world content, recreational puzzles, environmental simulation and integrity. |

A unified Glitch Developer Toolkit containing these laboratories is a proposed future implementation, not a selected framework.

Illustrative content expansion workflow:

1. Design an original environment or new modular content package.
2. Configure assets, pathways, environmental behaviour and interactions.
3. Author optional educational puzzles, hints and valid solution criteria.
4. Test simulation, behaviour, accessibility, performance and offline-resource handling.
5. Validate lore, privacy, safety, existing progression, compatibility and dependencies.
6. Obtain developer approval and publish the approved content.

Development tools should support identifying missing assets, broken pathways, unreachable essential controls, incompatible save changes, invalid puzzle variations and other integrity defects. Use controlled synthetic profiles and reproducible simulation inputs rather than real private user data.

No world package, developer tool, CSS customisation or puzzle may bypass the Constitution or grant arbitrary code execution or access to user information. New permanent lore and content require developer approval; knowledge additions remain governed by Knowledge Architecture. Preserve user-directed deletion and revoked permissions during save migration and recovery.

The world should expand without unnecessarily rewriting the Response Engine, memory system or existing environments. Exact content schemas, editor technology, rendering framework, test implementation and unified toolkit remain undecided.

## Cross-cutting implementation boundaries

- Preserve the Constitution and Character Codex as authoritative. World mechanics must not rewrite Glitch's identity, approved lore, permissions or assistance responsibilities.
- Provide direct access to supported assistance and essential controls without requiring exploration, a profile, puzzle completion, care, affection or achievements.
- The initial world is original, two-dimensional and single-player, inspired by scene-based adventure and social-world navigation; multiplayer is deferred until significant activity warrants a separate decision.
- Application portals and equivalent menus provide optional navigation only. Navigation must not imply actual integration, profile sharing or execution authority.
- Dynamic coding puzzles and restricted CSS customisation are isolated recreational and educational features. Validate input and protect essential interfaces, user data and device resources.
- Keep the world peaceful, optional and pressure-free. Simulated anomalies are not real faults. No mandatory maintenance, permanent missability, expiring rewards, relationship decay or intentional progress loss.
- Store recreational progression separately from personal conversational memory, subject to user permissions and the documented limitations of local storage.
- Environmental time, wildlife and ordinary activities may change independently while the application is running; elapsed fictional time is reconstructed on reopening by default rather than processed continuously while closed.
- Support accessible navigation, reduced graphical complexity, audio alternatives and offline exploration where necessary local resources remain available.
- Keep assistance independent of optional world rendering, audio, activities and integration-specific resources.
- Use original or appropriately authorised content and developer-approved modular additions; validate save compatibility, accessibility, privacy, safety, dependencies, and performance before release.

These 15 specifications complete foundational Virtual World Mechanics design. The exact world map, scene layouts, avatar artwork, wildlife and item catalogues, CSS allowlist, rendering framework, puzzle execution and validation technology, audio assets, persistence implementation, performance measurements and laboratory tooling remain engineering work. No virtual world feature is represented as implemented.

Interface and Accessibility is the next design stage, followed by Integration Architecture, and Testing and Validation.

## Amendment history

| Version | Date | Change |
| --- | --- | --- |
| 1.0 | 2026-11-26 | Established all 15 confirmed virtual world specifications, including scene-based exploration, quick access, dynamic coding puzzles, limited CSS customisation, application navigation, deferred multiplayer and the Virtual World Laboratory. |
