# Core development — first scaffold

Development-only build 0.0.1. The proposed First Awakening milestone remains pending.

## Run locally

Install Node.js 22 or newer (a supported LTS version is recommended). In VS Code, open the repository root on the Development branch and run:

    npm test
    npm run dev

Open http://127.0.0.1:8000/ in a browser. Stop the local server with Ctrl+C. No npm packages need to be installed for this scaffold.

## Folder responsibilities

- src/core/: lifecycle, events, priorities and controller.
- src/presentation/styles/: application shell styling.
- tests/unit/: native Node.js tests.
- tools/: local development utilities, not production resources.
- docs/development/: practical development instructions.

The remaining blueprint folders (engines, character assets, data packages, infrastructure and laboratories) will be added with working resources as they become necessary. Git does not track empty directories.

The core shell demonstrates start, pause, resume and disable lifecycle transitions, not a complete companion. It stores no personal information, makes no external requests and provides no host integration or AI capabilities. Priority comparison is not a complete interruption policy. No service worker, PWA installation, release deployment or production artwork has been implemented.

The development-only local server binds to loopback and serves only the entry point and permitted JS/CSS source paths. It is not a production security boundary. The selected internal state names, file names, scaffold version and temporary palette are implementation choices, not changes to the foundational documents.
