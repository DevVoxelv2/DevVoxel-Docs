# Changelog Plugin – Official Documentation

Welcome to the official documentation for the **Changelog Plugin** – a lightweight and user‑friendly solution to display plugin updates directly in a GUI inside Minecraft.

> Resource link: [SpigotMC – Changelog Plugin](https://www.spigotmc.org/resources/changelog-plugin-%E2%80%93-anzeige-von-updates-in-einer-gui.123100/)

---

## 📌 Overview

The **Changelog Plugin** allows you to show update logs and patch notes in an in‑game GUI. Players can open the changelog with a simple command and browse through paginated entries with intuitive navigation buttons.

---

## ✨ Features

* GUI‑based changelog display
* Multi‑language support (EN/DE by default)
* Configurable navigation buttons and borders
* Pagination for long changelogs
* Reload command for quick updates without restarting
* Lightweight and easy to configure

---

## 📥 Installation

1. Download the plugin from the [SpigotMC page](https://www.spigotmc.org/resources/changelog-plugin-%E2%80%93-anzeige-von-updates-in-einer-gui.123100/).
2. Place the jar file in your server’s `/plugins` folder.
3. Restart the server – a default config will be generated.
4. Edit the `config.yml` to add your changelog entries.
5. Use `/changelog reload` to apply changes.

---

## ⚙️ Configuration Example

```yaml
language: "en"  # Available: "en", "de"

messages:
  en:
    changelog_title: "&5Changelog – Page {page}/{max_page}"
    previous_page: "&aPrevious Page"
    next_page: "&aNext Page"
    reload_success: "&aChangelog config reloaded."
    no_permission: "&cYou don't have permission."
    no_previous_page: "&cNo previous page."
    no_next_page: "&cNo next page."
    menu_closed: "&eMenu closed!"
  de:
    changelog_title: "&5Änderungsprotokoll – Seite {page}/{max_page}"
    previous_page: "&aVorherige Seite"
    next_page: "&aNächste Seite"
    reload_success: "&aKonfiguration neu geladen."
    no_permission: "&cKeine Berechtigung."
    no_previous_page: "&cKeine vorherige Seite."
    no_next_page: "&cKeine nächste Seite."
    menu_closed: "&eMenü geschlossen!"

navigation:
  previous:
    material: "ARROW"
    display_name: "&a« Previous"
    lore:
      - "&7Go to the previous page"
  next:
    material: "ARROW"
    display_name: "&aNext »"
    lore:
      - "&7Go to the next page"

entries_per_page: 8
gui_border:
  enabled: true
```

---

## 🔧 Commands & Permissions

| Command             | Description             | Permission         |
| ------------------- | ----------------------- | ------------------ |
| `/changelog`        | Opens the changelog GUI | `changelog.use`    |
| `/changelog reload` | Reloads the config      | `changelog.reload` |

---

## 🌟 Future Ideas

* Automatic sync with external changelog sources (GitHub, website)
* Richer GUI customization (icons, categories)
* PlaceholderAPI support for displaying latest version info

---

✨ *The Changelog Plugin provides a clean, GUI‑based way to keep your players informed about new updates without leaving the game.*
