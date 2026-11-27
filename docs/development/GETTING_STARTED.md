# Core development — character presentation increment

Development-only build 0.0.1. This increment adds a minimal scene, lifecycle-linked character renderer, bounded manual movement and six user-selected poses. Start the core, then use the visible movement and pose buttons; focus the scene and press the left/right arrow keys to move, or Home to return Glitch to the centre. Every pose is an exact extraction from the user-supplied approved character reference sheet and has not been generatively reinterpreted. The broader First Awakening milestone remains pending.

## Run locally

Install Node.js 22 or newer (a supported LTS version is recommended). In VS Code, open the repository root on the Development branch and run:

    npm test
    npm run dev

Open http://127.0.0.1:8000/ in a browser. Stop the local server with Ctrl+C. No npm packages need to be installed for this scaffold.

## Folder responsibilities

- src/core/: lifecycle, events, priorities and controller.
- src/presentation/character/: character rendering isolated from lifecycle control.
- src/presentation/styles/: application shell styling.
- assets/characters/glitch/references/: approved source artwork retained intact.
- assets/characters/glitch/sprites/: renderer-ready poses extracted from approved artwork.
- data/character/: non-authoritative presentation copy and asset metadata.
- tests/unit/: native Node.js tests.
- tools/: local development utilities, not production resources.
- docs/development/: practical development instructions.

The remaining blueprint folders (engines, broader data packages, infrastructure and laboratories) will be added with working resources as they become necessary. Git does not track empty directories.

The core shell demonstrates start, pause, resume and disable lifecycle transitions plus a presentation-only idle effect, user-controlled movement and explicit pose selection. Movement and pose controls are unavailable while paused or disabled. It is not autonomous behaviour or a complete companion. It stores no personal information, makes no external requests and provides no host integration or AI capabilities. Priority comparison is not a complete interruption policy. No service worker, PWA installation or release deployment has been implemented. Reduced-motion preferences suppress the idle effect and movement transition, and missing character resources use a text fallback without blocking lifecycle controls.

The development-only local server binds to loopback and serves only the entry point and allowlisted JS, CSS, character JSON and active PNG pose paths. It is not a production security boundary. The selected internal state names, file names, scaffold version and temporary palette are implementation choices, not changes to the foundational documents.
