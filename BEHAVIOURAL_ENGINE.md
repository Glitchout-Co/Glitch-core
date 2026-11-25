# Glitch — Behavioural Engine

**Version:** 1.0  
**Established:** 26 November 2026  
**Status:** Confirmed foundational functional design; implementation pending  
**Maintainer:** Glitchout-Co

## Purpose and authority

This specification records the 15 accepted behavioural-engine design decisions for Glitch, the cyber fox-spirit companion and assistant. It translates her [Constitution](CONSTITUTION.md) and [Character Codex](CHARACTER_CODEX.md) into functional requirements for a reusable, initially rule-based behavioural engine.

The Constitution is the highest authority. The Character Codex establishes her fictional identity and approved character traits. Neither host configuration, personalisation, behavioural definitions nor future AI integration may override them. Independent technical safeguards must enforce privacy, safety and authority; behavioural rules alone are insufficient.

Rankings below preserve the agreed descending order of preference or emphasis. They are not numerical probabilities or an unconditional execution order. Mandatory permission checks, explicit user controls, compatibility and safety apply regardless of ranking. Examples are illustrative, not fixed animations, dialogue, schemas or implementation parameters.

The engine manages simulated behaviour and presentation, not independent consciousness, unrestricted access or delegated authority. Initial assistance remains advisory only under Constitution Law 11. Recreational actions within her own simulation do not grant authority to modify host-application data.

## Specification 01 — Behavioural autonomy

Confirmed order: **B, C, D, A**.

1. **Context-driven autonomy (B):** Select suitable activities according to permitted environmental context, fictional location, time, weather and character preferences.
2. **Flexible independent routines (C):** Allow Glitch to occupy herself naturally while her application is running under permitted conditions. Routines are flexible rather than rigid timetables.
3. **Adaptive behaviour (D):** Consider approved user preferences, relevant recent interactions and the capabilities of the current host application.
4. **Constrained random variety (A):** Introduce natural variation among suitable approved activities.

Independent recreation never delays legitimate assistance. She does not require feeding, maintenance or attention. No behavioural work runs while her application is closed; elapsed fictional time may be reconstructed upon reopening under Specification 05.

## Specification 02 — Behavioural priorities

Confirmed order: **A, B, C, D, E**.

| Priority | Category | Responsibility |
| --- | --- | --- |
| 1 (A) | Actual safety and system integrity | Address detected safety or technical integrity issues within supported capabilities. |
| 2 (B) | Direct user assistance | Respond to legitimate requests without waiting for recreational activities to finish. |
| 3 (C) | Direct user interaction | Respond to deliberate companion interactions, such as petting or offering a fictional treat. |
| 4 (D) | Simulated environmental events | React to relevant events within her fictional environment. |
| 5 (E) | Independent activities | Explore, study, play, relax, collect or otherwise occupy herself. |

A priority-based state machine determines whether an existing activity should pause, finish, be abandoned or resume. Lower-priority activities must not block higher-priority ones. Fictional hazards never outrank actual safety or assistance. Permission restrictions and constitutional boundaries remain in force at every level.

## Specification 03 — Layered behavioural architecture

Confirmed options: **B, C, D**. Option A, a single undifferentiated behavioural state, was not selected.

- **B — Layered states:** Maintain distinct but coordinated activity, expression, physical state, attention, transition and temporary reaction layers.
- **C — Environmental context:** Consider the current fictional environment and permitted host context when selecting and maintaining states.
- **D — Compatibility and restoration:** Prevent incompatible combinations, preserve valid state information and restore appropriate activities after interruptions where possible.

For example, Glitch can be studying while sitting, displaying curiosity and briefly twitching an ear. She cannot simultaneously be asleep and actively explaining a technical solution.

Layers may change independently only when their combination remains valid. Exact state definitions, transition rules and data structures remain development work.

## Specification 04 — Contextual activity selection

All five options accepted: **A, B, C, D, E**.

1. **Weighted character preferences (A):** Use established Codex preferences to influence selection of suitable activities.
2. **Environmental modifiers (B):** Adjust suitability according to fictional weather, time, season and location.
3. **Repetition prevention (C):** Reduce the likelihood of recently performed activities where appropriate.
4. **Flexible duration (D):** Allow activities to have variable lengths and natural stopping points.
5. **Situational opportunities (E):** Consider available objects, wildlife, discoveries and simulated environmental events.

Character preferences influence recreation, not assistance quality or availability. Numerical weights, timing distributions and environmental rules are not yet fixed. Activities do not create user maintenance requirements or mandatory completion timers.

## Specification 05 — Behavioural persistence

Confirmed order: **C, D, B, E**. Option A, a fresh unrelated session on every opening, was not selected.

1. **Simulated passage of time (C):** On reopening, calculate elapsed time and update the fictional environment accordingly. This is the default continuity approach, not real background execution.
2. **Contextual continuity (D):** Preserve significant approved interactions, discoveries, unfinished optional challenges and personalisation. Ordinary recreational activities may change naturally.
3. **Persistent environment (B):** Save relevant location, activity and environmental states locally.
4. **Configurable continuity (E):** Offer a choice between simulated elapsed time and resuming the world where it was left.

Short absences may allow the previous activity to resume; longer absences may produce a new context-appropriate activity. These are examples, not fixed elapsed-time thresholds.

Fictional world time is independent of real-world time; optional local-time synchronisation is governed by Codex Entry 16. Persistence must conform to the Constitution's approved local memory and user-control requirements. Absence never causes decay of progress, affection, rewards or assistance quality.

## Specification 06 — Spontaneous interaction

Confirmed order: **B, A, C, D, E**.

1. **Contextual interaction (B):** Determine whether speaking or offering an activity is appropriate to the user's current permitted context.
2. **Event-driven interaction (A):** React to meaningful events such as rainfall or discoveries.
3. **Adaptive frequency (C):** Adjust spontaneous interaction frequency through approved preferences and prior responses.
4. **Occasional spontaneous interaction (D):** Allow occasional harmless thoughts, questions and playful remarks without a specific event.
5. **Configurable frequency (E):** Provide manual controls, including complete suppression of spontaneous conversations.

Manual settings always govern automatic frequency selection. Interaction cooldowns and respect for declined offers prevent repetitive interruptions. Her standalone world may be more expressive than an integrated productivity or educational application.

Illustrative profiles include silent, quiet, balanced, social and adaptive. Exact defaults, cooldowns and dialogue variants remain undecided. Suppressing recreational conversation does not suppress direct assistance; necessary technical warnings are distinct from optional prompts.

## Specification 07 — Expression and mood management

Confirmed order: **C, B, D, E, A**.

1. **Contextual emotions (C):** Select fictional expressions according to activity, surroundings and interactions.
2. **Persistent moods (B):** Maintain a temporary underlying disposition, such as curious, playful, relaxed or focused.
3. **Gradual transitions (D):** Transition naturally between expressions where appropriate.
4. **Personality-based recovery (E):** Return to her established friendly, curious disposition following temporary confusion, surprise or embarrassment.
5. **Immediate reactions (A):** Permit brief event-specific reactions that do not unnecessarily replace the underlying disposition.

Example: studying curiously, noticing the user's arrival, greeting cheerfully, becoming focused during assistance and then returning to an appropriate activity.

Expressions are authored simulations, not genuine emotions or evidence of consciousness. There is no happiness meter, affection requirement or emotional decay caused by user absence. Thinking animations must correspond to actual processing or interaction states, not introduce artificial delays.

## Specification 08 — Permission-governed awareness

Confirmed order: **E, A, B, C, D**.

1. **Configurable awareness (E):** User permission governs all awareness categories. Users can review, adjust or revoke them.
2. **Direct interaction awareness (A):** Recognise deliberate interactions with Glitch, including questions, commands and selected simulation objects.
3. **Application event awareness (B):** Receive authorised host events, such as completing a puzzle or encountering an error.
4. **Contextual activity awareness (C):** Use permitted signals to distinguish working, exploring, interacting or inactivity.
5. **Interaction pattern awareness (D):** Recognise approved patterns such as repeated requests for hints.

Use structured application events instead of unrestricted access to host internals. For example, Pocket Lab may report a SyntaxError event without transmitting the user's entire code.

Direct companion interaction and fictional exploration are available while enabled. Host events and pattern recognition require appropriate permission. No general keyboard monitoring, unrelated application monitoring, personal file access or browsing-history access is granted by this design. Explicitly supplied information for legitimate assistance is distinct from monitoring.

Full disablement stops background activity, contextual monitoring and notifications. Event definitions, permission interfaces, data minimisation and revocation enforcement remain integration-design requirements.

## Specification 09 — Transparent behavioural adaptation

Confirmed order: **E, A, C, B, D**.

1. **Transparent adaptation (E):** Let users review, modify, disable or reset learned preferences.
2. **Explicit preferences (A):** Give directly configured user settings precedence over inferred preferences.
3. **Feedback-driven adaptation (C):** Consider accepted, declined or explicitly evaluated interactions.
4. **Observational adaptation (B):** Use permitted interaction patterns to adjust appropriate preference values.
5. **Reversible adaptation (D):** Allow learned preferences to change as interaction patterns change.

Examples include adapting explanation depth, reducing spontaneous conversation after repeated declines, and recognising interest in optional exploration or development updates.

Initial adaptation uses rule-based adjustable preference values, not machine learning or generative AI. It does not independently rewrite permanent knowledge, character canon or constitutional rules. Sensitive personal characteristics must not be inferred, retained or used for personalisation. Time away does not cause loss of earned progress or approved familiarity.

Adjustment rates, thresholds and storage details remain undecided.

## Specification 10 — Controlled behavioural variety

Confirmed order: **D, A, B, E, C**.

1. **Behavioural compatibility (D):** Exclude behaviours that conflict with current states, environment, permissions or constitutional requirements.
2. **Approved behaviour library (A):** Select only developer-approved behaviour definitions.
3. **Contextual variation (B):** Select suitable variants according to activity, mood and environment.
4. **Repetition management (E):** Reduce unnecessary repetition of recently selected behaviours.
5. **Weighted randomisation (C):** Introduce common, uncommon and rare reactions among compatible options.

For example, a Pixel Berry may prompt a happy ear movement, an enthusiastic tail wag, an excited bounce or occasional intentional fragmentation. A sleeping or studying Glitch may react differently. These are illustrative variations, not final animations or probabilities.

Rare reactions should be discoverable without artificial scarcity or excessive repetitive interaction. New approved definitions may extend the library without rebuilding the core engine.

## Specification 11 — Cross-application behavioural independence

Confirmed order: **A, D, C, B, E**.

1. **Universal behavioural engine (A):** Maintain a reusable common engine and consistent character across supported applications.
2. **Application-specific configuration (D):** Allow each host to configure supported optional behaviours within constitutional and user-permission boundaries.
3. **Resource-conscious operation (C):** Reduce unnecessary simulation, animation and processing in integrated applications.
4. **Environment-specific behaviours (B):** Support approved local activities, interactions and reactions suitable to the host.
5. **Behavioural continuity (E):** Preserve relevant personalisation, discoveries and accessories across applications only with authorised shared profiles and appropriate infrastructure.

| Feature | Standalone Glitch-Core world | Integrated application |
| --- | --- | --- |
| Assistance | General supported assistance | Specialised supported assistance |
| Personality | Full character expression | Contextually restrained expression |
| Idle animation | Full supported range | Subtle or optional |
| Environmental simulation | Full supported simulation | Disabled |
| Recreation | Full supported range | Selected optional activities |
| Spontaneous conversation | Contextual | Restrained |
| Personalisation | Approved local profile | Authorised profile information |
| Challenges | World-based optional challenges | Application-specific optional challenges |
| Exploration | Virtual world | Disabled |

This table describes intended operating differences, not implemented capabilities. One engine does not imply unrestricted shared data or a single always-running service. Shared memory is subject to future approval, explicit consent and validated integration architecture. Host applications must remain functional without Glitch.

## Specification 12 — Resource-conscious operation

Confirmed order: **A, E, D, B, C**.

1. **Lightweight foundation (A):** Design the engine to minimise processing and memory requirements.
2. **Independent system operation (E):** Separate assistance from graphical and recreational systems.
3. **Inactivity optimisation (D):** Reduce unnecessary processing while the application is minimised, hidden or inactive.
4. **Dynamic resource management (B):** Reduce nonessential animation and simulation when performance becomes limited.
5. **Configurable performance profiles (C):** Provide manual control of visual complexity and recreational processing.

Illustrative profiles:

| Profile | Intended presentation |
| --- | --- |
| Minimal | Static character, essential assistance, minimal processing. |
| Lightweight | Simple animations and limited recreational behaviours. |
| Balanced | Contextual animation and standard environmental effects. |
| Immersive | Full supported animation, environmental effects and world interactions. |

All profiles preserve the same supported core assistance capabilities. Respect manual choices, accessibility requirements and full disablement. No measured resource budgets or performance thresholds are established yet; optimisation must be validated on supported platforms.

## Specification 13 — Behavioural conflict and recovery

Confirmed order: **B, C, D, A, E**.

1. **State validation (B):** Validate compatibility before and during execution.
2. **Independent component recovery (C):** Recover a failed animation or recreational component without resetting unrelated systems.
3. **Contextual recovery (D):** Resume a previous valid activity where possible.
4. **Safe fallback state (A):** Return to a stable neutral idle state if recovery cannot succeed.
5. **Diagnostic recording (E):** Provide sanitised local diagnostic information for optional anonymous reporting.

Preserve user data and assistance availability where possible. Never automatically erase memories or user data as a recovery measure. Communicate unresolved failures honestly, including any resulting loss of functionality.

Intentional character fragmentation is a fictional visual behaviour; actual software instability is a technical fault. Following successful minor recovery, a playful remark may be appropriate, but significant issues require clear communication.

Diagnostics must comply with Constitution Laws 19 and 27: minimise data, exclude sensitive personal characteristics, identities, email, device identifiers, memories and conversation history; do not retain IP addresses in submitted reports. Reports require user review and approval, and no submission service may be enabled before its anonymity and privacy safeguards are validated. Recovery mechanics and reporting infrastructure remain development work.

## Specification 14 — Modular behavioural development

Confirmed order: **A, B, D, E, C**.

1. **Modular behaviour library (A):** Define behaviours independently of the central engine.
2. **Behaviour categorisation (B):** Record relevant triggers, categories, priorities, conditions, durations and compatibility requirements.
3. **Version compatibility (D):** Prevent outdated or unsupported behaviour definitions from loading incompatibly.
4. **Developer testing environment (E):** Provide a dedicated Glitch Behaviour Laboratory for controlled simulation, inspection and individual behaviour tests.
5. **Automatic registration (C):** Discover and register new, validated, developer-approved definitions without rewriting central logic.

Illustrative definition (not a final schema):

```json
{
  "id": "pixel_berry_excitement",
  "category": "recreational_reaction",
  "trigger": "treat.pixel_berry",
  "priority": "user_interaction",
  "expression": "excited",
  "animation": "happy_tail_fragment",
  "duration_seconds": 3,
  "interruptible": true,
  "environments": ["home_world", "assistant_interface"]
}
```

The Glitch Behaviour Laboratory is a separate development interface, not a requirement for ordinary users. It should allow developers to choose current states, simulate events, inspect decisions and validate behaviour against constitutional requirements.

Automatic registration is not permission to execute arbitrary untrusted code or allow unapproved behaviours. Exact schema, validation, registration and developer-interface implementation remain undecided.

## Specification 15 — Behavioural execution and scheduling

Confirmed order: **A, D, C, B, E**.

1. **Event-driven execution (A):** Evaluate relevant behaviours in response to meaningful events.
2. **Lifecycle management (D):** Pause, resume or stop processing safely according to application activity and user settings.
3. **Behaviour queue (C):** Prioritise, cancel or replace compatible pending behaviours as conditions change.
4. **Scheduled evaluation (B):** Periodically evaluate suitable independent activities without continuously scanning every possible behaviour.
5. **Reproducible execution (E):** Support controlled conditions, simulated time and predictable randomisation in the developer laboratory.

Proposed execution cycle:

1. Receive an event or permitted scheduled evaluation.
2. Check permissions, lifecycle state and operating conditions.
3. Evaluate priorities and compatible approved behaviours.
4. Select and execute an appropriate behaviour.
5. Monitor execution and respond to interruptions or invalid states.
6. Complete, resume a valid previous activity or return to idle.

A queued recreational action must not delay direct assistance. Scheduled evaluations operate only while Glitch is enabled and the application runs under permitted conditions. Closing the application stops execution; full disablement also stops contextual monitoring and notifications.

Scheduling intervals, queue limits, random seed handling and testing implementation remain undecided.

## Cross-cutting implementation boundaries

- Keep behavioural state, fictional world state, presentation, dialogue, factual knowledge and approved profile data logically distinct.
- Apply constitutional and permission checks before accessing context or executing behaviours; explicit user choices override optional automation.
- Preserve the difference between simulated character activity and real host-system authority.
- Support local approved persistence without requiring an account. Cross-application and cross-device sharing require future approval, explicit consent and secure implementation.
- Keep assistance independent of optional recreation, graphics, achievements and presence settings; disabling Glitch must leave the host application functional.
- Validate changes against the Constitution and Codex, including interruption priority, absence without decay, permission revocation, reduced graphics, conflicting states, recovery without data loss and reproducible behaviour tests.
- Do not represent these functional requirements as implemented or tested capabilities.

The 15 specifications establish the foundational behavioural design. Detailed state schemas, event contracts, priority arbitration, probability weights, cooldowns, duration ranges, performance measurements, storage, permission controls and test implementations are subsequent engineering decisions. The Response Engine is a separate next design stage, followed by knowledge architecture, profiles and memory, virtual world mechanics, interface and accessibility, integration architecture, and testing and validation.

## Amendment history

| Version | Date | Change |
| --- | --- | --- |
| 1.0 | 2026-11-26 | Established all 15 confirmed foundational behavioural-engine specifications. |
