# DevVoxel Docs

Dieses Projekt stellt einen kleinen Node.js-Server bereit, der Markdown-Dateien direkt aus einem GitHub-Repository lädt und sie als HTML rendert. Die Startseite `/` zeigt automatisch die Datei `README.md`, sodass das Wiki stets den aktuellen Stand des Repos widerspiegelt.

Eine Seitenleiste (`sidebar.md`) hält Verweise auf weitere Dokumentationsseiten bereit. Eigene Seiten können als Markdown-Dateien angelegt und in der Sidebar verlinkt werden.

## Nutzung

1. Node.js (Version 18 oder höher) installieren.
2. Optional die Ziel‑Repository über Umgebungsvariablen festlegen:
   - `GITHUB_OWNER` – Besitzer des Repos (Standard: `DevVoxel`)
   - `GITHUB_REPO` – Name des Repos (Standard: `DevVoxel-Docs`)
   - `GITHUB_BRANCH` – Branch, aus dem geladen wird (Standard: `main`)
3. Server starten:

   ```
   npm start
   ```
4. Im Browser `http://localhost:3000/` aufrufen, um die `README.md` zu sehen. Weitere Pfade wie `/foo` laden `foo.md` aus dem festgelegten Repo.

   Die Navigationsleiste oben enthält Links zur Startseite und zum GitHub-Repository.

## Entwicklung

Zurzeit existieren keine automatischen Tests; `npm test` gibt lediglich einen Hinweis aus.
