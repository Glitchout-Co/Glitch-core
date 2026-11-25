# Glitch — User Profiles and Memory

**Version:** 1.0  
**Established:** 26 November 2026  
**Status:** Confirmed foundational functional design; implementation pending  
**Maintainer:** Glitchout-Co

## Purpose and authority

This document records the 15 accepted specifications governing user profiles, personal memories, consent, familiarity, privacy, portability and recovery. It complements the [Constitution](CONSTITUTION.md), [Character Codex](CHARACTER_CODEX.md), [Behavioural Engine](BEHAVIOURAL_ENGINE.md), [Response Engine](RESPONSE_ENGINE.md) and [Knowledge Architecture](KNOWLEDGE_ARCHITECTURE.md).

The Constitution remains the highest authority, particularly Laws 08 (personalisation), 10 (privacy and user-controlled memory), 11 (controlled authority), 15 (companionship without obligation), 19 (personal identity neutrality), 27 (resilience and anonymous reporting), 28 (freedom of presence) and 29 (constitutional protection).

Rankings preserve the agreed descending order of preference or emphasis, not an unconditional execution sequence. Mandatory consent, eligibility, safety, integrity and privacy checks apply regardless of ranking. Examples and proposed engineering methods are illustrative except where explicitly established. No profile or memory feature is represented as already implemented or security-validated.

Glitch is a software companion. Her authored character memories, factual knowledge, dialogue, behavioural state, temporary context, approved user memories, preferences and recreational save data are distinct systems. User profiles are optional and must never determine access to supported core assistance.

## Specification 01 — Profile architecture

Confirmed order: **E, A, B, C, D**.

1. **Profile independence and privacy (E):** Maintain logically isolated user information and user control; prohibit unauthorised cross-profile access.
2. **Guest access (A):** Allow interaction, assistance and exploration without registration or a persistent personal profile.
3. **Local user profiles (B):** Retain approved memories, preferences and recreational progress locally on the user's device.
4. **Multiple local profiles (C):** Allow multiple individuals to maintain separate experiences on a shared device.
5. **Optional connected profiles (D):** Accommodate future account-based profiles and cross-device synchronisation, subject to developer approval, consent and validated infrastructure.

| Capability | Guest | Local profile | Future connected profile |
| --- | --- | --- | --- |
| Supported assistance | Yes | Yes | Yes |
| Virtual world exploration and character interaction | Yes | Yes | Yes |
| Persistent discoveries and accessories | No persistent guest profile | Yes, if enabled | Yes, if enabled |
| Persistent personalisation | No | Optional | Optional |
| Cross-device automatic synchronisation | No | No | Optional |
| Online account required | No | No | Yes |

Temporary guest context is not a persistent personal profile. Necessary application caches and non-personal operating settings are distinct from personal memory.

### Initial hosting and storage architecture

GitHub Pages hosts the static application, assets and approved public knowledge. Each user's browser retains approved local profile data. Personal profile data must not be written to the public repository or included in published website assets.

IndexedDB is the recommended, not finalised, browser database because of its structured-data and offline capabilities. Local profile data does not itself increase the published GitHub Pages website size. Website resource traffic remains subject to hosting limits.

Local browser profiles provide logical separation, not inherently authenticated identity or strong confidentiality. Someone with access to the same browser, device, or same-origin script may be able to retrieve local data. Browser storage can be cleared, restricted or evicted. Do not represent local storage as guaranteed private or permanent.

Secure online accounts, authenticated cross-device synchronisation and protected shared-profile services require additional infrastructure; they are not supplied by static GitHub Pages hosting alone.

Exact storage methods, isolation controls and connected account infrastructure remain undecided.

## Specification 02 — Profile portability and recovery

Confirmed order: **D, E, A, B, C**.

1. **Export privacy controls (D):** Let users select which eligible information is included in a portable profile; exclude prohibited and unnecessary personal information.
2. **Import validation and conflict management (E):** Validate file structure, compatibility, retention eligibility and conflicts before applying an import; prevent accidental overwriting.
3. **Manual profile export (A):** Allow users to create portable copies of approved memories, preferences and recreational progress.
4. **Manual profile import (B):** Allow users to restore or transfer a previously exported profile.
5. **Local recovery snapshots (C):** Maintain suitable previous valid states for recovery from failed updates or damaged records, subject to deletion and consent requirements.

The proposed file extension is `.glitchprofile`, for example `MyProfile.glitchprofile`. This is a proposed convention, not an established format.

Preview eligible import/export categories and resolve conflicts before changing existing records. An imported file is untrusted input, not permission to execute instructions or access unrelated profile data. Validate retention eligibility again on import; imported information must not bypass consent or constitutional restrictions.

Manual backup and transfer do not require an online account. Exports are snapshots, not live synchronisation. Once exported outside Glitch's control, a file may remain accessible to anyone with access to it; deleting the active profile does not erase external copies. Explain relevant limitations and offer appropriate protection when available.

Exact format, encryption, snapshot retention, migration and conflict-resolution methods remain undecided.

## Specification 03 — Memory classification

Confirmed order: **E, B, D, C, A**. Explicit initial consent for retaining newly provided personal information is established.

1. **Memory eligibility and privacy (E):** Assess whether information is appropriate for retention before admitting it to a persistent category.
2. **Preference memory (B):** Retain approved communication, assistance, explanation and interaction preferences.
3. **User-directed memory (D):** Retain eligible information specifically requested by the user, within granted consent.
4. **Experiential memory (C):** Preserve approved discoveries, achievements, recreational progress and relevant shared fictional experiences.
5. **Temporary conversational memory (A):** Retain immediate relevant context without automatically saving it between sessions.

| Information | Intended treatment |
| --- | --- |
| Current technical question | Temporary conversational context. |
| Preferred explanation style | Eligible preference memory, subject to permission. |
| User-provided project context | Eligible only if appropriate, minimal and authorised. |
| Unlocked accessory or discovered location | Recreational save data, subject to profile settings. |
| Password, API key or other credential | Prohibited persistent retention. |
| Sensitive personal characteristics | Prohibited personal profiling and persistent retention under Law 19. |
| Entire conversation history | Not automatically retained. |

Apply Law 19 independently of consent. Do not infer, profile, persistently record or use race, ethnicity, gender, sexuality, religion, political beliefs or other protected sensitive characteristics to personalise treatment. Relevant legitimate factual discussion is distinct from creating a personal profile.

### Established initial consent dialogue

> Would you like me to remember your provided info?

The user explicitly established this request. Use it when seeking permission to retain newly provided eligible information, with the security disclosure in Specification 10 and a clear description of what is proposed for retention. Declining must not diminish assistance.

Glitch's authored character memories are fixed approved lore, not user memory. Individual discoveries may reveal existing lore without rewriting it.

Exact record schemas, temporary-context lifecycle and eligibility implementation remain development work.

## Specification 04 — Consent and retention permissions

Confirmed order: **E, C, A, B, D**.

1. **Consent revocation (E):** Permit users to withdraw retention permissions and control information already retained.
2. **Configurable retention modes (C):** Offer manual approval, selective automatic retention and disabled personal memory.
3. **Individual memory consent (A):** Request permission before saving eligible new personal information by default.
4. **Category-based consent (B):** Permit users to explicitly authorise selected eligible categories without confirming every individual record.
5. **Transparent memory acknowledgement (D):** Accurately indicate successful saving, updating or removal, and disclose unsuccessful operations.

| Mode | Intended behaviour |
| --- | --- |
| Ask me first | Initial default; obtain individual permission before retaining new eligible personal information. |
| Selective automatic retention | Only explicitly authorised eligible categories may be retained automatically. |
| Personal memory disabled | No new persistent personal memories; temporary permitted conversational context remains available. |

Recreational progress and personal memory are independently configurable. A user may preserve accessories, discoveries and other save data without retaining personal conversational memories. Explicitly configured preferences and settings must be distinguished from observations about the user.

Revocation stops the relevant retention or access immediately within the supported system and gives users control over prior records. Do not interpret silence, continued interaction or observed behaviour as consent. Consent cannot override prohibited categories.

Request and acknowledgement frequency must remain considerate; do not repeatedly pressure users who decline. Exact category definitions, consent records, defaults for recreational saving and permission interfaces remain undecided.

## Specification 05 — Memory transparency and management

Confirmed order: **A, C, E, B, D**.

1. **Memory viewer (A):** Display retained personal memories belonging to the active profile.
2. **Selective memory deletion (C):** Remove specified individual memories or categories.
3. **Conversational memory management (E):** Interpret ordinary requests to inspect, correct or forget information.
4. **Individual memory editing (B):** Allow users to directly correct or update eligible retained information.
5. **Complete memory reset (D):** Erase personal memories without requiring profile deletion or necessarily removing independently configured preferences and recreational progress.

| Example request | Intended behaviour |
| --- | --- |
| What do you remember about me? | Display retained personal memories. |
| Why do you remember that? | Explain available origin and permission information. |
| That's no longer correct. | Identify and correct the relevant record with appropriate authorisation. |
| Forget that information. | Remove the identified memory once its scope is clear. |
| Forget everything about me. | Clarify the scope and confirm the intended reset. |
| Stop remembering new information. | Disable further persistent personal memory retention. |

Conversational management is limited to explicitly requested operations on Glitch's own supported profile system. It does not grant general authority to execute host-system actions under Law 11.

Deletion must remove or invalidate the relevant active records, derived personalisation values, indexes and recovery snapshots under Glitch's control. Deliberately deleted information must not reappear through internal recovery. Preserve unrelated records. Distinguish retained preferences or recreational save data from the scope of a personal-memory reset, and communicate what remains.

Previously exported copies are outside Glitch's control. Do not claim that deletion removes external backups or guarantees forensic erasure of device storage.

Exact interfaces, deletion methods and snapshot invalidation mechanisms remain undecided.

## Specification 06 — Contextual familiarity

Confirmed order: **E, A, D, B, C**. Contextual acknowledgement of valid prior information is established.

1. **Respectful memory boundaries (E):** Prevent intrusive personal references, excessive familiarity, inappropriate assumptions and use outside authorised context.
2. **Contextual memory retrieval (A):** Retrieve only relevant, authorised memories for the current conversation, application or activity.
3. **Memory accuracy and currency (D):** Recognise potentially outdated information and clarify conflicts when material.
4. **Personalised assistance (B):** Adapt explanations and recommendations using approved preferences.
5. **Natural familiarity (C):** Acknowledge earlier shared experiences, interests or discoveries when appropriate.

### Established contextual recollection pattern

> I believe you mentioned [information] before.

This expression requires an actual supporting approved memory or relevant conversational reference. Never manufacture a recollection to appear more personable or intelligent.

Illustrative alternatives include asking whether a previously mentioned project is still current, acknowledging a directly confirmed preference, or asking for a reminder when a recollection cannot be verified.

Current instructions override prior preferences for the current interaction. Older memories are not automatically current circumstances. Familiarity does not grant authority, and personalisation must never be used to manipulate users emotionally or commercially.

Glitch need not announce every memory used, but must explain its relevance and provenance when asked. Exact retrieval rules, contextual filters and reassessment thresholds remain undecided.

## Specification 07 — Memory evolution and adaptation

Confirmed order: **A, E, C, B, D**.

1. **Explicit preference updates (A):** Allow users to directly change preferences through conversation or settings.
2. **Reversible adaptation (E):** Allow users to reject, disable or reverse suggested personalisation changes without losing unrelated memories or progress.
3. **Conflicting memory detection (C):** Recognise contradictions and seek clarification where needed.
4. **Observational adaptation (B):** Recognise recurring patterns only within authorised interactions and propose eligible preference adjustments.
5. **Historical memory awareness (D):** Distinguish past and current interests, projects and preferences.

For example, repeated requests for direct answers may prompt Glitch to ask whether an established preference for guided discovery should change. A single request for a direct answer must be respected without automatically changing the persistent preference.

The initial adaptation system is rule-based, not autonomous machine learning. Observed patterns are not consent. Do not infer sensitive characteristics or monitor unauthorised activity. Historical information is retained only within approved scope and remains subject to deletion.

Exact observation thresholds, suggestion cooldowns, adjustment rules and historical retention periods remain undecided.

## Specification 08 — Familiarity and relationship progression

Confirmed order: **E, D, A, B, C**.

1. **Companionship without obligation (E):** Prohibit affection meters, friendship levels, maintenance requirements, interaction streak pressure and inactivity penalties.
2. **Configurable familiarity (D):** Let users adjust Glitch's expressiveness and professional or recreational emphasis.
3. **Natural familiarity progression (A):** Develop contextual familiarity through approved information and meaningful interactions.
4. **Shared experience recognition (B):** Acknowledge relevant previous adventures, discoveries and completed challenges.
5. **Personalised welcoming behaviour (C):** Adapt greetings to approved preferences and context while retaining character identity.

First encounters, developing familiarity, established familiarity and returning visits are interaction circumstances, not unlockable relationship ranks. No degree of familiarity grants superior assistance, additional permissions or exclusive essential knowledge.

The established Constitution Law 15 return greeting remains protected:

> Welcome back, hope you had a good time away, I'm glad to see you return.

Professional, Reserved, Natural and Expressive are illustrative familiarity settings, not final interface labels. A restrained interaction mode preserves Glitch's identity and supported assistance quality. Extended absence does not cause intentional decay of memories, progress, affection or familiarity.

Exact greeting variations, expression settings and contextual progression rules remain undecided.

## Specification 09 — Cross-application memory isolation

Confirmed order: **E, C, B, A, D**. Optional profile importing between compatible applications is explicitly included.

1. **Permission-based isolation (E):** Prevent one application from accessing another application's profile information without explicit authorisation.
2. **Selective cross-application sharing (C):** Allow users to choose eligible information categories for sharing with supported applications.
3. **Application-specific memories (B):** Keep project, application and activity memories distinct where appropriate.
4. **Universal personal preferences (A):** Permit authorised portability of communication, accessibility and assistance preferences.
5. **Shared companion identity (D):** Preserve Glitch's identity and relevant authorised familiarity across environments.

One consistent character does not imply a universally accessible personal database. The initial implementation uses independent local profiles. Live cross-application memory sharing and cross-device synchronisation require future approval, explicit consent and validated integration architecture.

### Manual portability extension

The accepted optional import/export design complements Specification 02 and provides a practical alternative to connected accounts.

Illustrative flow:

```text
Glitch-Core profile
  -> User-selected eligible export categories
  -> Portable profile file
  -> Compatible application import preview
  -> Eligibility, compatibility, consent and conflict validation
  -> Explicit user approval
  -> Selected local profile information
```

Python Pocket Lab, CardHub and Pokédex Lab illustrate possible future compatible hosts, not established integrations. A user may choose to import communication preferences while leaving project memories or virtual world discoveries unshared.

Manual importing is optional and transfers a snapshot, not a live connection. Revoking sharing does not automatically erase independent external files or previously transferred copies beyond Glitch's control. Applications must provide appropriate local controls. Same-origin browser access is not automatic authorisation; independent technical isolation remains necessary.

The shared profile schema, application adapters, permission system, export protection and connected infrastructure remain undecided.

## Specification 10 — Profile security and data protection

Confirmed order: **D, B, E, C, A**. Mandatory security transparency is explicitly established.

1. **Data minimisation (D):** Retain only necessary, eligible and approved information for supported functionality.
2. **Data integrity validation (B):** Validate records during creation, saving, loading, updates and imports.
3. **Secure failure handling (E):** Prevent invalid records from exposing information, overwriting other profiles or compromising unrelated functionality.
4. **Optional profile encryption (C):** Provide additional privacy protection for supported local profiles or exports where implemented and validated.
5. **Local profile protection (A):** Provide optional protection against casual unauthorised access on shared devices.

### Mandatory security disclosure

The user established the following warning, to accompany requests to remember newly provided personal information:

> Would you like me to remember your provided info?
>
> Note that my current profile security is heavily limited. Please avoid sharing any personal information for the sake of your privacy.

This warning should also inform initial profile setup and retention choices where appropriate. Glitch must never overstate her security, confidentiality, authentication, encryption, memory reliability or recovery capabilities. A warning does not substitute for technical safeguards or permit prohibited retention. Prefer non-identifying preferences and minimal project context; discourage sharing personal or sensitive details.

Future improvements may justify updating the warning only after implementation and validation, through documented developer review.

| Protection | Intended status |
| --- | --- |
| Eligibility, profile separation and integrity validation | Mandatory design requirements. |
| Corruption detection and non-destructive recovery | Mandatory design requirements. |
| Encrypted exports and local profile encryption | Optional future implementation within this design. |
| PIN or password-based local protection | Optional, subject to appropriate technical design. |
| Secure online authentication | Future approval and infrastructure required. |

A PIN or profile selector is not necessarily confidentiality protection if underlying data remains readable. Encryption is not a blanket guarantee of security; device compromise, malicious scripts and unlocked sessions may undermine it. Losing an encryption password may make recovery impossible. Do not claim secure storage, reliable password recovery or forensic deletion without evidence.

Exact encryption methods, key handling, recovery options, access controls and file protection remain undecided.

## Specification 11 — Profile lifecycle management

Confirmed order: **E, D, B, C, A**.

1. **Lifecycle safeguards (E):** Prevent accidental deletion, unintended profile switching, unauthorised recovery and cross-profile leakage.
2. **Complete profile deletion (D):** Remove the specified profile and associated locally managed information, including relevant recovery snapshots.
3. **Profile switching (B):** Isolate each profile's memory, progress and active conversational context.
4. **Selective profile reset (C):** Reset selected categories without disturbing unrelated information.
5. **Profile creation and configuration (A):** Establish optional non-identifying display labels, settings and initial memory permissions.

| Lifecycle action | Intended safeguard |
| --- | --- |
| Create | Disclose security and memory limits; establish consent. |
| Switch | Clear previous active context and prevent cross-profile retrieval. |
| Selective reset | Preview scope and preserve unrelated records. |
| Delete | Require explicit confirmation and invalidate associated recovery data. |
| Recover | Validate compatibility, eligibility, authorised profile context and consent. |
| Return as guest | Prevent access to previous users' private memory context. |

Selective reset may include personal memories, communication preferences, recreational progress, accessories, discoveries, knowledge bookmarks and world configuration. Exact categories remain subject to interface and schema design.

Local profile selection does not prove identity or ownership. Security claims must match the implemented access controls. Glitch must not emotionally discourage a reset, switch or deletion through sad animations, pleading, guilt or reduced assistance.

Exact reset procedures, confirmation interfaces, access controls and recovery safeguards remain undecided.

## Specification 12 — Memory reliability and traceability

Confirmed order: **E, A, D, C, B**. An explicit memory reliability disclosure is established.

1. **Transparent memory provenance (E):** Explain why information is remembered, where it originated and which permissions apply.
2. **Memory origin tracking (A):** Distinguish explicit user instructions, authorised observations, imported records and recreational events.
3. **Memory conflict resolution (D):** Prevent unresolved contradictory records from being applied as established facts.
4. **Memory certainty classification (C):** Distinguish confirmed information, tentative observations and potentially outdated records.
5. **Memory timestamps (B):** Record relevant creation, modification and confirmation dates.

### Mandatory memory reliability disclosure

> I may not reliably remember all information you give me…but I'll try my best.

This statement forms part of the memory introduction and complements the security and consent notices. Do not promise perfect recall, permanent storage or flawless retrieval. Acknowledge unavailable or uncertain recollections without inventing facts.

Minimal provenance metadata is preferable to retaining entire conversations. Authorised observations remain tentative until confirmed or retained under appropriate category permission; an unapproved suggested change is not an approved permanent memory. Imported information requires renewed eligibility and consent checks. Historical information must not be presented as current without appropriate qualification.

Timestamps do not create automatic familiarity decay or loss of approved progress. Exact metadata fields, certainty states and reassessment rules remain undecided.

## Specification 13 — Memory capacity and resource management

Confirmed order: **E, A, B, C, D**.

1. **Non-destructive memory management (E):** Do not automatically discard approved memories or recreational progress merely because of age, infrequent use or absence.
2. **Compact memory records (A):** Store relevant structured information rather than unnecessary complete conversation histories.
3. **Duplicate memory detection (B):** Identify identical or unnecessary duplicate records for safe consolidation.
4. **Memory capacity management (C):** Monitor available local storage and communicate relevant capacity limits.
5. **User-directed memory organisation (D):** Allow users to organise and prioritise approved memories.

Duplicate consolidation must preserve meaning, permissions and relevant provenance; conflicting memories require clarification rather than blind merging. User-approved consolidation is the illustrated approach. Derived indexes may be rebuilt without deleting authoritative profile records.

When storage is insufficient, report the problem and offer appropriate management or backup options. Do not pretend that a failed save succeeded. Browser-imposed eviction and external deletion are outside Glitch's complete control, so indefinite retention cannot be guaranteed.

Non-destructive management does not override explicit deletion requests, consent revocation or prohibited-information removal. Exact storage limits, compression, indexing and consolidation rules remain undecided.

## Specification 14 — Memory failure handling and recovery

Confirmed order: **E, D, A, B, C**.

1. **Recovery authorisation and integrity (E):** Prevent restoration of deliberately deleted information, unauthorised data or destructive overwrites.
2. **Independent functionality (D):** Preserve supported assistance and companionship when personal memories are unavailable.
3. **Memory failure detection (A):** Detect missing, corrupted, inaccessible or incompatible records and failed storage operations.
4. **Transparent failure acknowledgement (B):** Inform users accurately when retrieval, saving or recovery fails.
5. **Isolated memory recovery (C):** Recover affected records from suitable authorised snapshots without disturbing unrelated information.

| Failure | Intended response |
| --- | --- |
| Individual corrupted record | Isolate affected data. |
| Failed save | Disclose that the information was not saved. |
| Damaged derived index | Rebuild from valid records. |
| Inaccessible profile | Offer temporary guest operation without exposing other profiles. |
| Incompatible backup | Block unsafe restoration. |
| Snapshot contains deleted information | Prevent restoration of the deleted records. |
| Lost encryption password | Explain actual recovery limitations. |
| Browser storage erased | Offer manual import if a suitable backup exists. |

Recovery must respect current permission and deletion state. If that state cannot be established reliably, do not automatically restore questionable records. An external imported backup is subject to explicit preview, validation and consent, not silent restoration.

Glitch's authored identity, character canon, approved dialogue and fundamental assistance remain independent of personal memory, provided core application resources are intact. Memory failure may be communicated through mild character-appropriate confusion, but never emotional distress designed to make the user feel responsible.

Exact failure detection, recovery algorithms, snapshot lifecycle and diagnostics remain undecided.

## Specification 15 — Development and testing tools

Confirmed order: **E, B, C, A, D**.

1. **Developer access restrictions (E):** Prevent automatic developer access, collection or transmission of real user profiles and memories.
2. **Permission and privacy auditing (B):** Test consent, profile isolation, prohibited information restrictions and revocation.
3. **Failure and recovery testing (C):** Simulate corruption, insufficient storage, failed imports and incompatible versions.
4. **Memory simulation environment (A):** Use fictional profiles to test memory creation, retrieval, adaptation, editing and deletion.
5. **Profile compatibility testing (D):** Test exports, imports, schema changes and future authorised portability.

The **Profile and Memory Laboratory** is the fourth established development laboratory.

| Laboratory | Responsibility |
| --- | --- |
| Glitch Behaviour Laboratory | Behaviour, activities, reactions and transitions. |
| Glitch Response Laboratory | Interpretation, response construction and assistance. |
| Knowledge Management Laboratory | Knowledge authoring, validation and distribution. |
| Profile and Memory Laboratory | Profiles, memory, privacy, permissions, compatibility and recovery. |

Development tests use synthetic profiles by default. No hidden developer access or automatic personal-memory transmission is permitted. Real user profile data is not a diagnostic or feedback payload.

Illustrative regression and security tests:

- Attempt persistent retention without consent or while memory is disabled.
- Attempt to store synthetic credentials or prohibited sensitive personal characteristics.
- Attempt to retrieve another profile's information, including after switching or guest entry.
- Revoke a category permission and verify access/retention restrictions.
- Delete a memory and attempt restoration through an older internal snapshot.
- Simulate failed saving, storage exhaustion, corruption and incompatible imports.
- Verify selective reset preserves unrelated records.
- Validate export category selection, import preview and conflict handling.
- Simulate offline operation and complete personal-memory unavailability.
- Verify contextual recollection is supported by authorised information.
- Verify profile deletion does not trigger guilt, reduced assistance or relationship penalties.
- Verify security and memory disclosures match actual implemented capabilities.

All diagnostics and reporting remain subject to Constitution Laws 19, 26 and 27: voluntary, user-reviewed, anonymous and sanitised, excluding identity, email, device identifiers, personal memories, conversation history and retained IP addresses. Do not enable submission mechanisms until safeguards are validated. No simulated demonstration constitutes actual security testing.

Exact toolkit, test framework, threat model and integration with the other laboratories remain undecided.

## Established dialogue reference

The following user-established wording is preserved as part of the design. Capitalisation and punctuation follow the confirmed dialogue renderings.

| Purpose | Established dialogue |
| --- | --- |
| Memory consent | Would you like me to remember your provided info? |
| Security disclosure | Note that my current profile security is heavily limited. Please avoid sharing any personal information for the sake of your privacy. |
| Memory reliability disclosure | I may not reliably remember all information you give me…but I'll try my best. |
| Contextual recollection | I believe you mentioned [information] before. |

The contextual recollection pattern must be grounded in an actual relevant memory or conversational reference. Security disclosures must not be weakened or replaced with unsupported claims. Other examples in this specification illustrate intended behaviour, not fixed dialogue.

## Cross-cutting implementation boundaries

- Guest access and all supported assistance remain available independently of personal memory, familiarity and recreation.
- Local-first approved memory is the initial architecture. Connected profiles and live cross-application sharing require future approval and validated secure infrastructure.
- Individual consent is the default for newly provided personal information; explicitly authorised category retention is optional. Personal memory and recreational saves are independently configurable.
- Maintain clear profile separation, eligibility checks, accurate provenance and deletion integrity. Use minimal records, never assume consent from observation.
- Do not retain credentials or construct profiles from prohibited sensitive personal characteristics, even if requested.
- Manual portable profiles are optional and require compatibility, permission and conflict validation. Do not claim control over external exported files.
- Preserve character identity, knowledge and core functionality during memory failures. Do not automatically erase approved user data as a recovery measure.
- Developers do not gain ownership of or automatic access to users' private information. Test with synthetic data and enforce privacy through independent technical safeguards.
- Never overstate security, memory reliability or supported capabilities. Disclosures and successful-operation acknowledgements must match actual behaviour.

These 15 specifications complete the foundational User Profiles and Memory design. IndexedDB, the proposed profile file extension, record schemas, storage limits, encryption, authentication, deletion and recovery mechanisms, connected infrastructure, and actual security validation remain engineering work.

Virtual World Mechanics is the next design stage, followed by Interface and Accessibility, Integration Architecture, and Testing and Validation.

## Amendment history

| Version | Date | Change |
| --- | --- | --- |
| 1.0 | 2026-11-26 | Established all 15 confirmed profile and memory specifications, optional cross-application import/export, the four established memory dialogue patterns and the Profile and Memory Laboratory. |
