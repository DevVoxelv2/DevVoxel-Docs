# BungeeSystem – Official Wiki

Welcome to the official wiki for **BungeeSystem** — a powerful proxy addon for **BungeeCord** and **Velocity**, designed to enhance your network with essential commands, MySQL support, chat features, and more.

## Overview

**BungeeSystem** is a modular proxy plugin that extends BungeeCord and Velocity with network‑wide commands, private messaging, moderation, MySQL statistics, and webhook support. Lightweight, highly configurable, and production‑ready.

---

## Features

* ✅ **Core proxy commands**: `/hub`, `/lobby`, `/list`, `/ping`, `/find`, `/serverlist`, `/play`
* ✅ **Private messaging system**: `/msg`, `/reply`, `/ignore` with optional notification sounds
* ✅ **Moderation tools**: `/ban`, `/unban`, `/mute`, `/unmute`, `/report`, `/viewreports`
* ✅ **Statistics system**: `/onlinetime`, `/stats`, `/top` (requires MySQL)
* ✅ **Team utilities**: `/teamchat`, `/joinme`, `/vanish`, `/togglenotify`
* ✅ **Discord webhook integration** for reports & logs
* ✅ **Multi‑language support** (EN/DE)
* ✅ **Performance optimized** with caching & async database handling

---

## Requirements

* **Java 21+**
* **BungeeCord** or **Velocity (3.4.0‑SNAPSHOT+)**
* **MySQL/MariaDB** (required for online time and stats)
* **Minecraft versions:** 1.19 – 1.21.7

---

## Installation

1. Download the latest **BungeeSystem.jar** from the [SpigotMC resource page](https://www.spigotmc.org/resources/bungeesystem-powerful-proxy-addon-%E2%9A%A1-mysql-chat-commands.119339/).
2. Place the jar into your proxy’s `/plugins` directory.
3. Restart the proxy — configuration files will be generated.
4. Edit `config.yml` with your preferences and database credentials.
5. Restart again to apply settings.

💡 For Velocity, support is currently **in Beta** — test before production use.

---

## Configuration

The main `config.yml` includes:

* Database connection (MySQL)
* Message prefixes & colors (supports `&` codes)
* Toggle modules (enable/disable features)
* Language (EN/DE)

Example:

```yaml
mysql:
  host: "127.0.0.1"
  port: 3306
  database: "network"
  user: "proxyuser"
  password: "strong-pass"

settings:
  language: "en"
  enable-teamchat: true
  enable-reports: true
  enable-stats: true
```

---

## Commands & Permissions

| Command(s)                  | Description                       | Permission                                |
| --------------------------- | --------------------------------- | ----------------------------------------- |
| `/hub`, `/lobby`            | Send player to hub                | –                                         |
| `/list`                     | Show online players per server    | –                                         |
| `/ping`                     | Show your ping                    | –                                         |
| `/find <player>`            | Locate a player                   | –                                         |
| `/serverlist`               | List available servers            | –                                         |
| `/msg`, `/reply`, `/ignore` | Private messages & ignore system  | `bungeesystem.msg`, `bungeesystem.ignore` |
| `/onlinetime`               | Show player online time           | `bungeesystem.onlinetime`                 |
| `/stats`, `/top`            | Player statistics                 | `bungeesystem.stats`                      |
| `/ban`, `/unban`            | Ban system                        | `bungeesystem.ban`                        |
| `/mute`, `/unmute`          | Mute system                       | `bungeesystem.mute`                       |
| `/report`, `/viewreports`   | Player reporting                  | `bungeesystem.report`                     |
| `/teamchat`                 | Team chat                         | `bungeesystem.teamchat`                   |
| `/vanish`                   | Hide from player list             | `bungeesystem.vanish`                     |
| `/joinme`                   | Invite others to join your server | `bungeesystem.joinme`                     |
| `/togglenotify`             | Toggle notifications              | `bungeesystem.notify`                     |

---

## Changelog

* **v1.2.1‑BETA (2025‑07‑22)**

  * Added Velocity support (Beta)
  * Improved MySQL handling & reconnect
  * Extended multi‑language support
* **v1.2.0 (2025‑05‑13)**

  * New stats system (`/stats`, `/top`)
  * Punishment system overhaul
  * Performance improvements & caching
* **v1.1.9 (2025‑03‑31)**

  * Added lobby/hub utilities, multi‑language configs
* **v1.1.8 (2025‑03‑22)**

  * Introduced `/msg`, `/reply`, `/ignore` with sounds
  * MySQL improvements
* **Earlier versions**

  * Discord webhook system, maintenance mode, command fixes

---

## Best Practices

* Use **MySQL with SSL** for secure connections.
* Test **Velocity support** before enabling in production.
* Use `bungeesystem.teamchat` and `bungeesystem.report` for structured staff communication.
* Regularly back up your database.

---

## Troubleshooting

**❌ MySQL not connecting**

* Check firewall & credentials.
* Ensure MySQL remote access is enabled.

**⚠️ Private messages not working**

* Ensure correct permissions (`bungeesystem.msg`).

**🔄 Velocity issues**

* Remember support is **Beta** — test and report bugs.

**🐢 Performance problems**

* Increase database pool size.
* Disable unused modules in `config.yml`.

---

## FAQ

**Is MySQL required?**
Only if you want `/onlinetime`, `/stats`, and reporting features.

**Does it work with Velocity?**
Yes — but currently in **Beta**.

**Which versions are supported?**
Minecraft **1.19 – 1.21.7**.

**Can I customize messages?**
Yes — via language files (`messages_en.yml`, `messages_de.yml`) with `&` color codes.

---

## Compatibility

* **Minecraft:** 1.19 – 1.21.7
* **Proxy software:** BungeeCord & Velocity
* **Database:** MySQL, MariaDB

---

## Downloads & Support

* 📥 **Download / Changelog / Reviews:** [SpigotMC resource page](https://www.spigotmc.org/resources/bungeesystem-powerful-proxy-addon-%E2%9A%A1-mysql-chat-commands.119339/)
* 🛠 **Issues & Feature Requests:** Post in the SpigotMC discussion thread
* 💬 **Community Help:** Join our Discord (link on SpigotMC page)

---

✨ *Thanks for using BungeeSystem! If this wiki helped, please leave a review on the resource page to support development.*
