# Glitch — Knowledge Architecture

**Version:** 1.0  
**Established:** 26 November 2026  
**Status:** Confirmed foundational functional design; implementation pending  
**Maintainer:** Glitchout-Co

## Purpose and authority

This document records the 15 accepted knowledge-architecture specifications for Glitch, the cyber fox-spirit companion and assistant. It complements her [Constitution](CONSTITUTION.md), [Character Codex](CHARACTER_CODEX.md), [Behavioural Engine](BEHAVIOURAL_ENGINE.md) and [Response Engine](RESPONSE_ENGINE.md).

The archive stores, organises, validates, distributes and maintains approved knowledge. Its initial purpose is to support rule-based assistance, independent reading and guided discovery without requiring generative AI.

The Constitution remains the highest authority. Glitch cannot independently approve or permanently rewrite factual knowledge, acquire unrestricted information, or expand her execution authority. Factual knowledge, dialogue, character canon, behavioural logic, temporary conversational context and personal memory remain distinct.

Rankings preserve the agreed descending order of emphasis or preference. Mandatory approval, compatibility, permission, safety and privacy safeguards apply irrespective of ranking. Examples, package contents, numerical estimates, interface concepts and engineering methods are illustrative unless explicitly established. This document describes intended capabilities, not an implemented or validated service.

## Specification 01 — Modular knowledge structure

Confirmed order: **E, D, A, B, C**.

1. **Knowledge isolation and permissions (E):** Separate knowledge by purpose, accessibility and authorisation. Prevent unauthorised access and unintended information sharing.
2. **Modular knowledge packages (D):** Support independently versioned packages that can be introduced, updated or removed without rebuilding the central engine.
3. **Central knowledge library (A):** Provide fundamental, universally available knowledge across supported applications.
4. **Subject-specific libraries (B):** Organise specialised knowledge by subject, such as programming languages, mathematics and computer fundamentals.
5. **Application-specific libraries (C):** Maintain information relevant to individual applications, including functionality, instructions and troubleshooting.

Libraries and packages remain separate from the Character Codex, dialogue library and user memory. Exact library contents and the boundary between fundamental and specialist topics remain to be established.

### Confirmed two-repository architecture

During the knowledge-design discussion, the following separation was accepted:

| Repository | Intended visibility | Responsibility |
| --- | --- | --- |
| Glitch-Core | Public | Core software, established design documents, fundamental knowledge, user interface, virtual world, assets and integration framework. |
| Glitch-Knowledge | Private | Authoritative development archive for extended knowledge, sources, drafts, review records, specialist and application packages, troubleshooting records and historical revisions. |

The initial hosting platform is GitHub Pages. Fundamental knowledge must remain self-contained within Glitch-Core rather than depending on access to the extended private archive.

The initial distribution approach is to validate and export approved knowledge packages from the private development archive for public use. The private repository remains inaccessible to ordinary website visitors. Publicly distributed knowledge is not confidential merely because its source repository is private. Pending submissions, unpublished drafts, private review records, credentials and other unauthorised material must never be included in public exports.

Illustrative distribution:

```text
Glitch-Knowledge (private development archive)
  -> Structural, factual, licensing and compatibility review
  -> Developer approval
  -> Export approved public packages
  -> Glitch-Core / approved distribution location
  -> GitHub Pages / compatible application
  -> On-demand loading and optional local caching
```

Do not embed private repository credentials or privileged access tokens in public JavaScript, website resources or client-side configuration. A static public website cannot securely conceal credentials or privately retrieve protected repository data on behalf of unauthenticated visitors.

If genuinely private runtime knowledge is later required, a secure backend/API with appropriate authentication and authorisation may be considered. This is not an approved initial implementation or a grant of additional Glitch authority.

Glitch-Knowledge has not yet been created as part of this design work. Exact repository layout, export tooling, publication locations and access infrastructure remain undecided.

## Specification 02 — Structured knowledge entries

Confirmed order: **E, A, B, C, D**.

1. **Validation and completeness requirements (E):** Require structural validation and factual review before activating an entry.
2. **Unique identification (A):** Provide a stable unique identifier, title, category and relevant search terminology.
3. **Modular information components (B):** Separate definitions, explanations, examples, analogies, warnings and practical applications where applicable.
4. **Knowledge metadata (C):** Record sources, entry version, verification date, difficulty and applicable software versions where relevant.
5. **Knowledge relationships (D):** Reference related subjects, prerequisites, troubleshooting guidance and advanced concepts.

Illustrative entry structure:

| Field or component | Example |
| --- | --- |
| Identifier | python.collections.list |
| Title | Python — Lists |
| Subject/category | Python / Collections |
| Difficulty | Beginner |
| Entry version | 1.0 (illustrative) |
| Plain definition | An ordered collection of items that can be changed. |
| Technical definition | A mutable sequence that can contain references to objects of different types. |
| Analogy | A shopping list whose items can be added, removed or rearranged. |
| Example | Create a list and append an item. |
| Considerations | Zero-based indexing; duplicate items are permitted. |
| Relationships | Tuples, indexing, mutability, iteration and list methods. |
| Source | Applicable Python documentation on built-in types and mutable sequences. |

This is not a final schema or a reviewed production record. A single authoritative concept may contain separately retrievable components for different explanation styles and contexts. Not every entry requires every possible component; do not manufacture unnecessary information to fill a template.

Mandatory fields, optional fields, identifier conventions, component schemas and validation methods remain development decisions.

## Specification 03 — Knowledge reliability and verification

Confirmed order: **B, A, C, E, D**.

1. **Developer approval (B):** Require developer review before new or changed knowledge becomes available to Glitch.
2. **Source attribution (A):** Reference identifiable, trustworthy sources where applicable.
3. **Verification status (C):** Record whether an entry is approved, under review, outdated, disputed or withdrawn.
4. **Contradiction management (E):** Identify and restrict conflicting information until appropriately resolved.
5. **Periodic review (D):** Identify knowledge requiring reassessment according to age, subject and software dependencies.

Proposed lifecycle: draft -> source verification -> developer review -> approval -> reassessment when defects or changes are identified. Reassessment may result in correction, reapproval, restriction or withdrawal.

| Status | Intended availability |
| --- | --- |
| Draft | Unavailable to the active archive. |
| Awaiting review | Unavailable to the active archive. |
| Approved | Available subject to permissions, integrity and compatibility. |
| Outdated | Restricted to verified applicable versions or historical contexts. |
| Disputed | Restricted pending investigation; do not use unsupported conclusions. |
| Withdrawn | Unavailable. |

Review effort should reflect the nature of the knowledge. Basic mathematics and stable programming concepts may require less frequent reassessment than external software functionality, security recommendations or application instructions affected by releases. These are qualitative examples, not scheduled review intervals.

Glitch may identify possible defects or review needs but cannot approve, replace or rewrite permanent knowledge herself. Approved status does not guarantee perpetual correctness. The Knowledge Management Laboratory will support inspection, source review, contradiction handling and approval management.

## Specification 04 — Knowledge versioning and compatibility

Confirmed order: **C, E, A, B, D**.

1. **Environment compatibility (C):** Identify applicable software versions, operating systems and application environments.
2. **Version conflict resolution (E):** Select compatible approved knowledge; ask for clarification or acknowledge uncertainty if applicability cannot be established.
3. **Entry-level versioning (A):** Maintain individual knowledge revisions and documented changes.
4. **Package-level versioning (B):** Version collections of entries independently for compatible distribution.
5. **Historical knowledge preservation (D):** Retain previous verified knowledge where relevant to older environments.

The newest entry must not automatically supersede the most applicable one. Historical records that have been withdrawn for accuracy or safety reasons must not become usable simply because they match an older version.

For example, structural pattern matching was introduced in Python 3.10. A user on Python 3.9 should receive an explanation of the compatibility restriction and a suitable alternative, such as conditional statements. If the version is unknown, Glitch can ask the user to check it or provide appropriately qualified guidance.

Separate versioning layers include the Glitch-Core application version, knowledge schema version, package version, entry revision and applicable external software versions. Exact numbering conventions, dependency rules and historical retention remain undecided.

## Specification 05 — Knowledge classification and relationships

Confirmed order: **E, C, A, D, B**.

1. **Relationship validation (E):** Ensure relationships are accurate, relevant and developer-approved before use.
2. **Knowledge relationship mapping (C):** Establish explicit connections among concepts, dependencies, similarities, alternatives and practical applications.
3. **Hierarchical classification (A):** Organise knowledge into subjects, categories and subcategories.
4. **Learning progression mapping (D):** Identify foundational concepts, helpful prerequisites and potential progression to advanced topics.
5. **Tag-based classification (B):** Support multiple descriptive tags and alternative discovery paths.

Illustrative relationship types:

| Relationship | Purpose |
| --- | --- |
| Prerequisite | Helpful foundational understanding. |
| Component | A constituent part of a concept. |
| Related concept | Complementary information. |
| Alternative | Another valid approach. |
| Comparison | Meaningful differences or similarities. |
| Troubleshooting | Relevant errors and diagnostic guidance. |
| Practical application | Uses of the concept. |
| Advanced concept | Opportunities for further learning. |

For example, functions may link to variables, parameters, return values, scope, methods and decorators. These connections can assist guided discovery but do not constitute a final dependency graph.

Learning prerequisites are recommendations, not locks. Users may skip introductory material, explore advanced topics or ask directly for an explanation. Educational progression must remain distinct from technical dependencies (Specification 10).

Reuse suitable approved relationships from existing Glitchout-Co projects where possible. The taxonomy, relationship schema and validation rules remain undecided.

## Specification 06 — Knowledge indexing and search

Confirmed order: **C, D, A, B, E**.

1. **Contextual search filtering (C):** Restrict results according to permissions, subject, current application and environment compatibility.
2. **Relevance-ranked searching (D):** Rank eligible entries according to their relevance to a request.
3. **Identifier-based indexing (A):** Support exact retrieval through stable identifiers.
4. **Terminology and synonym indexing (B):** Recognise approved synonyms, abbreviations and alternative terminology.
5. **Search optimisation and maintenance (E):** Maintain efficient, independently updateable and rebuildable indexes.

Synonyms must be context-sensitive; similarity between a Python list and a JavaScript array does not make their semantics identical. Search relevance does not override approval, compatibility or permissions.

Support exact identifiers, ordinary terminology, abbreviations and contextual terms using programmed search rules initially. More sophisticated semantic search may be introduced later.

Indexes are derived resources, not the authoritative archive. Rebuild damaged or outdated indexes from valid records without deleting the original knowledge. Package changes should permit independent index updates or reconstruction rather than repeatedly scanning every complete entry.

Exact indexing technology, relevance algorithms, index structures and performance targets remain development work.

## Specification 07 — Knowledge availability and loading

Confirmed order: **E, A, D, B, C**.

1. **Graceful availability management (E):** Recognise inaccessible, corrupted, incompatible or unavailable packages and preserve remaining supported functionality.
2. **Essential knowledge preloading (A):** Load fundamental knowledge and essential assistance resources at startup; keep necessary identity and dialogue components available through their separate systems.
3. **Application-specific preloading (D):** Load approved knowledge relevant to the current host.
4. **On-demand loading (B):** Retrieve specialised packages when needed.
5. **Intelligent caching (C):** Temporarily retain frequently accessed resources to improve efficiency.

Illustrative loading policy:

| Resource | Intended loading |
| --- | --- |
| Fundamental knowledge | Preload. |
| Host-specific documentation | Preload for the relevant host. |
| Specialist subject libraries | On demand where not essential to the current host. |
| Virtual world information | Available in the standalone world; restricted or unnecessary in integrated applications. |

All loading remains subject to package availability and authorisation. Distinguish information Glitch does not possess from installed or distributed information she temporarily cannot access.

Clearing a derived knowledge cache must never delete authoritative knowledge, user memories, preferences or recreational progress. Optional offline downloads and transient caches may have different retention policies. Loading mechanisms, cache limits, storage layout and performance requirements remain undecided.

## Specification 08 — Knowledge updates and distribution

Confirmed order: **B, D, A, C, E**.

1. **Update validation (B):** Verify package authenticity, integrity, developer approval, schema compatibility and dependencies before activation.
2. **Rollback and recovery (D):** Retain or restore previous safe, approved, compatible knowledge following failed updates, excluding versions withdrawn for safety or accuracy reasons.
3. **Independent knowledge updates (A):** Distribute knowledge corrections and packages independently of complete engine updates.
4. **User-controlled updates (C):** Offer manual or automatic update settings and relevant notification controls.
5. **Incremental distribution (E):** Update changed entries or packages rather than unnecessarily downloading the complete archive.

Proposed workflow: identify an available update; verify authenticity and integrity; check compatibility and dependencies; prepare the update separately; validate before activation; preserve or restore a safe compatible version if activation fails.

Only approved public-export material may be published from Glitch-Knowledge. Verify publication contents as well as runtime compatibility. A failed update must not expose private records or invalidate unrelated packages unnecessarily.

Optional character reactions to newly received knowledge may reflect Glitch's curiosity, but must respect notification preferences and Constitution Law 21. Required security, functionality and data-integrity warnings remain distinct from promotional or recreational notices.

Updates cannot independently modify the Constitution, character canon, personal memory or execution permissions. Authenticity verification, release infrastructure, update defaults, rollback storage and incremental-distribution mechanisms remain undecided.

## Specification 09 — Controlled knowledge acquisition

Confirmed order: **E, B, A, C, D**.

1. **Controlled acquisition pipeline (E):** Isolate newly acquired knowledge until structural validation, source verification and developer approval have been completed.
2. **Existing knowledge importation (B):** Convert suitable knowledge from existing Glitchout-Co projects into the approved format.
3. **Manual knowledge authoring (A):** Enable developers to create structured knowledge entries directly through the Knowledge Management Laboratory.
4. **External source integration (C):** Prepare knowledge from trustworthy documentation, authorised APIs and appropriately licensed external resources.
5. **Community knowledge suggestions (D):** Permit voluntary suggestions or corrections for developer consideration, subject to the Constitution's future approval gates and privacy safeguards.

Proposed pipeline: author, import or receive a suggestion -> isolate in a staging area -> validate structure -> verify source and licence -> developer review -> approve or reject -> publish eligible knowledge.

Potential import sources from the previously established Python Pocket Lab inventory:

| Record type | Previously recorded count |
| --- | ---: |
| Dictionary entries | 158 |
| Programming puzzles | 21 |
| Troubleshooting guides | 18 |
| Computer analogies | 67 |
| Troubleshooting analogies | 10 |
| Total potential source records | 274 |

This is a previously discussed candidate inventory, not a fresh repository audit, an import result or a count of approved Glitch knowledge entries. Review compatibility, correctness, licensing and conversion requirements before reuse. An import utility may eventually convert compatible records into a staging format for review.

Glitch does not independently learn from the internet, accept user claims as authoritative facts or approve permanent changes. External source integration in this specification is a developer-controlled acquisition process, not a grant of runtime internet research or execution authority.

Optional anonymous suggestions must be reviewable and explicitly consented to. Exclude sensitive characteristics, identity, email, device identifiers, personal memories, conversation history and retained IP addresses under Constitution Laws 19, 26 and 27. Do not launch a submission mechanism until its privacy safeguards are validated. Broader community knowledge contribution systems require future developer approval.

Import formats, conversion tools and acquisition workflows remain development work.

## Specification 10 — Integrity and dependency management

Confirmed order: **B, C, D, E, A**.

1. **Dependency validation (B):** Check that required knowledge is approved, available and compatible before activating dependent functionality.
2. **Isolated failure handling (C):** Prevent individual defects from unnecessarily affecting unrelated sections.
3. **Graceful degradation (D):** Continue providing independently supported information when complementary knowledge is unavailable.
4. **Integrity recovery (E):** Rebuild derived indexes, restore safe approved records and identify unresolved defects for developer review.
5. **Dependency mapping (A):** Record relationships between dependent entries and packages.

Distinguish:

- **Hard dependencies:** Required for the validity or reliable operation of a knowledge component. Missing hard dependencies restrict affected functionality.
- **Soft dependencies:** Supplementary information, examples or analogies whose absence does not invalidate independently supported knowledge.

Learning prerequisites are not automatically hard technical dependencies. An unavailable analogy should not prevent an accurate standalone explanation.

| Failure | Intended behaviour |
| --- | --- |
| Extended archive unavailable | Continue using self-contained fundamental knowledge. |
| Internet unavailable | Use locally retained resources. |
| Specialist package corrupted | Isolate the affected package. |
| Incompatible package | Reject incompatible activation. |
| Soft dependency unavailable | Continue with independently supported information. |
| Hard dependency unavailable | Restrict affected functionality. |
| Search index damaged | Rebuild from valid authoritative records. |

Fundamental assistance must not depend on extended specialist archive availability. Actual dependency definitions, validation, integrity checks and recovery mechanisms remain undecided.

## Specification 11 — Offline knowledge and companionship

Confirmed order: **A, C, E, B, D**. Offline interaction with Glitch is explicitly required.

1. **Offline fundamental knowledge (A):** Preserve essential knowledge and locally supported assistance after necessary resources have been downloaded and retained.
2. **Automatic offline detection (C):** Recognise connectivity or resource-access problems and accurately adjust available capabilities.
3. **Storage management (E):** Let users inspect downloaded packages, their storage requirements and remove optional packages without affecting fundamental functionality or personal data.
4. **Selective knowledge downloads (B):** Permit optional download of specialist packages for offline use.
5. **Knowledge synchronisation (D):** Check for compatible updates after connectivity returns according to update preferences.

### Offline companionship

Glitch must remain interactive without internet access, provided the necessary local resources are present.

| Capability | Intended offline availability |
| --- | --- |
| Casual rule-based conversation | Yes. |
| Petting and affection interactions | Yes. |
| Offering fictional Pixel Berries | Yes. |
| Independent character activities | Yes. |
| Local environmental simulation | Yes. |
| Exploring locally available virtual areas | Yes. |
| Discovering locally available secrets | Yes. |
| Accessories and local personalisation | Yes. |
| Locally supported fundamental assistance | Yes. |
| Downloaded, valid specialist knowledge | Yes. |
| Undownloaded or inaccessible online knowledge | No. |
| Receiving new online knowledge updates | No. |
| Future cloud-dependent AI capabilities | No. |

A Progressive Web App (PWA) architecture, similar to Python Pocket Lab, is the proposed approach. It requires an initial successful resource download and appropriate browser caching. Browsers can limit storage, clear data or evict cached resources; permanent offline availability cannot be guaranteed. Report actual resource availability rather than claiming offline capability that has not been implemented or retained.

Connectivity limitations should be communicated when relevant, not through repeated intrusive reminders. No companion maintenance obligations or progress decay arise from being offline. Local simulation runs only while the application is running under permitted conditions; it is not continuous background activity.

Exact service-worker design, caching strategy, storage limits and reconnection behaviour remain undecided. Knowledge update synchronisation is distinct from synchronising personal profiles, which requires separate consent and future approval.

## Specification 12 — Knowledge transparency and user access

Confirmed order: **E, A, B, C, D**.

1. **Access and privacy protection (E):** Expose only authorised, approved knowledge; keep private development records, pending submissions and other users' personal information inaccessible.
2. **Browsable knowledge archive (A):** Allow independent exploration of available subjects, categories and knowledge entries.
3. **Direct knowledge search (B):** Provide archive search without requiring conversation with Glitch.
4. **Source transparency (C):** Allow inspection of sources, verification dates, applicable versions and relevant limitations.
5. **Personal knowledge organisation (D):** Support bookmarks, reading lists and saved references without changing authoritative knowledge.

Users may read approved information directly or request Glitch's assistance. Neither method is gated behind achievements, secrets, companion interactions or educational prerequisites.

The virtual archive may represent these knowledge records as books or organised sections. Users could select and read a book, or ask Glitch for an explanation. Optional contextual assistance must respect interaction settings and declined offers.

Publicly distributed content must already be safe and authorised for public access. Client-side hiding is not a privacy mechanism. Personal bookmarks and reading lists belong to approved user profile data rather than the factual archive.

The exact archive interface, navigation, bookmark storage and source display remain development decisions.

## Specification 13 — Knowledge portability

Confirmed order: **E, A, B, C, D**.

1. **Independent application functionality (E):** Ensure supported applications retain essential functionality if Glitch or her extended knowledge archive is unavailable.
2. **Universal knowledge format (A):** Establish a standard format that compatible applications can interpret.
3. **Shared knowledge packages (B):** Reuse approved packages rather than manually maintaining multiple divergent knowledge copies.
4. **Application-specific knowledge extensions (C):** Support specialised application information, examples and instructions.
5. **Knowledge adapters (D):** Provide conversion mechanisms for differing application data structures.

Glitch-Knowledge will serve as a central developer-maintained knowledge resource for the compatible Glitchout-Co ecosystem. An approved correction can be distributed to compatible applications through versioned packages. Applications may retain valid local copies for independent and offline functionality.

| Information | Sharing boundary |
| --- | --- |
| Approved factual knowledge and examples | Share through authorised packages. |
| Approved public application documentation and troubleshooting | Share where compatible. |
| Private development drafts and review material | Do not include in public packages. |
| User conversation history | Not part of shared knowledge packages. |
| Personal preferences and profile data | Governed separately by memory and consent requirements. |
| Repository credentials | Never distribute. |

Existing applications do not require immediate rewriting to adopt the common format. No cross-application knowledge distribution implies permission to access user data or execute host actions.

The common schema, distribution mechanisms, adapter interfaces and migration plans remain undecided.

## Specification 14 — Storage and resource optimisation

Confirmed order: **E, B, A, C, D**.

1. **Knowledge quality protection (E):** Preserve accuracy, completeness and maintainability during optimisation.
2. **Shared information references (B):** Reduce unnecessary duplication using approved references to common definitions, explanations and examples.
3. **Compact knowledge storage (A):** Use lightweight structured data formats.
4. **Storage budget management (C):** Monitor package sizes, the complete published website and locally downloaded resources.
5. **Automated optimisation (D):** Provide tools to identify duplicates, unused resources, broken references and opportunities for compression.

For example, entries describing Python lists, dictionaries and sets may reference a shared definition of mutability instead of duplicating it. Preserve context-specific distinctions, necessary warnings and independent validity. Shared references remain subject to hard/soft dependency validation.

Optimisation tools may identify or propose changes but must not independently delete authoritative records or merge entries with different meanings. Maintain human-readable development records separately from compact distribution exports where appropriate.

### Hosting and storage planning

The accepted initial hosting direction is GitHub Pages, with the two-repository architecture described in Specification 01. During discussion, the published website size limit was identified as 1 GB, with a recommended source repository size of 1 GB. These are hosting constraints to reverify against [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) when implementing or deploying; they are not measured project usage.

Moving the development archive to a private repository does not exempt publicly deployed knowledge packages from the published site size limit. Count all assets actually included in the site output. On-demand loading can reduce initial browser downloads but does not reduce the deployed size of files still hosted in the same site.

Proposed, unconfirmed initial budget:

| Resource | Illustrative budget |
| --- | ---: |
| Core software | 10 MB |
| Fundamental knowledge | 20 MB |
| Artwork and animations | 100 MB |
| Audio and sound effects | 50 MB |
| Published specialist knowledge | 20 MB |
| Total initial allocation | 200 MB |

Proposed internal milestones: target below approximately 200 MB initially; warning at 500 MB; maximum internal development budget of 800 MB; external published-site limit of 1 GB as identified during planning. The figures are illustrative and provisional, not approved hard project limits, actual storage measurements or a guarantee of available capacity. Monitor hosting requirements, repository growth, deployment output and browser storage separately.

If specialist packages eventually exceed the practical hosting budget, separate approved public distribution storage or a future secure knowledge API may be considered. Do not expose private repository credentials to achieve this.

Exact storage formats, compression, measurement tools and final internal budgets remain undecided.

## Specification 15 — Knowledge management and development tools

Confirmed order: **D, C, A, E, B**.

1. **Publication management (D):** Provide controlled validation, approval and export of packages from Glitch-Knowledge for public distribution.
2. **Automated knowledge auditing (C):** Identify missing fields, duplicate identifiers, broken references, incompatible versions, contradictions and review requirements.
3. **Visual knowledge editor (A):** Enable straightforward authoring, editing and review without requiring manual JSON editing.
4. **Development history and recovery (E):** Preserve revisions, comparisons and safe recovery options for authorised developers.
5. **Bulk knowledge management (B):** Support efficient imports, exports, categorisation and updates across multiple records.

The Knowledge Management Laboratory complements the two previously established developer tools:

| Laboratory | Responsibility |
| --- | --- |
| Glitch Behaviour Laboratory | Tests behaviour, activity transitions, reactions and recovery. |
| Glitch Response Laboratory | Tests interpretation, retrieval, composition, uncertainty and validation. |
| Knowledge Management Laboratory | Creates, reviews, audits, maintains and prepares approved knowledge for distribution. |

The laboratories may eventually share a unified developer toolkit. This is a proposed implementation possibility, not a selected application framework.

Knowledge management requires genuine developer authorisation. A hidden interface on the public website is not sufficient to protect private data or repository credentials. Separate privileged editing and publication operations from public reading and runtime assistance. Bulk operations must remain reviewable and must not bypass approval, integrity, compatibility or privacy safeguards.

Audits can identify structural defects and potential conflicts but do not independently guarantee factual correctness. The visual editor, authentication, revision handling, developer toolkit and publication mechanisms remain undecided.

## Cross-cutting implementation boundaries

- Preserve the Constitution as the highest authority, including intellectual honesty, controlled authority, privacy, personal identity neutrality and freedom of presence.
- Maintain separate systems for approved factual knowledge, dialogue, character canon, behavioural logic, response logic, temporary context and personal memory.
- Require developer approval for permanent factual changes and authorisation for publication. Never include private source material or credentials in public exports.
- Keep fundamental knowledge and offline character interaction self-contained where resources are retained; extended packages improve rather than determine core availability.
- Preserve independent host functionality, approved compatibility constraints, user update and storage controls, and non-destructive recovery.
- Knowledge access and learning progression must not require recreational participation, affection, achievements or mandatory completion of introductory material.
- Knowledge suggestions and reports require consent, review and validated anonymity safeguards. Broader community participation and private runtime services remain subject to approval.
- Validate structural, factual-support, licensing, permission, compatibility, dependency, offline and distribution requirements before release; do not claim these safeguards have been implemented until they have been validated.

These 15 specifications complete the foundational Knowledge Architecture design. User Profiles and Memory is the next stage, followed by Virtual World Mechanics, Interface and Accessibility, Integration Architecture, and Testing and Validation. Detailed schemas, actual knowledge content, repository creation, publication tooling, performance targets, offline implementation and access infrastructure remain engineering work.

## Amendment history

| Version | Date | Change |
| --- | --- | --- |
| 1.0 | 2026-11-26 | Established all 15 confirmed knowledge-architecture specifications, including the two-repository design and offline companionship. |
