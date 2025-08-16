# MySQL Player Sync – Official Wiki

Welcome! This wiki is your complete guide to installing, configuring, and troubleshooting **PlayerDataSync** — the cross‑server data synchronization plugin for Spigot/Paper networks.

> **Last updated:** 2025‑08‑16

***

## 📌 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Configuration](#configuration)
   * [Core settings](#core-settings)
   * [Data types to sync](#data-types-to-sync)
   * [Messages & localization](#messages--localization)
6. [Database Setup](#database-setup)
7. [How It Works](#how-it-works)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)
10. [FAQ](#faq)
11. [Compatibility](#compatibility)
12. [Downloads & Support](#downloads--support)

***

## Overview

**PlayerDataSync** keeps all essential player data consistent across multiple Spigot/Paper servers by syncing to a shared database. Ideal for **BungeeCord** and **Velocity** networks.

***

## Features

* ✅ **Cross‑server sync** of inventory, ender chest, XP, levels, health, hunger, gamemode, potion effects, location (optional), and advancements/achievements.
* ✅ **MySQL/MariaDB support** with automatic reconnect and configurable connection pool.
* ✅ **Per‑feature toggles** for maximum flexibility.
* ✅ **Multi‑language support** with `messages_en.yml` and `messages_de.yml`.
* ✅ **Color codes support** (`&0-&9`, `&a-&f`, `&l`, `&n`, `&o`, `&m`, `&r`).
* ✅ **Lightweight and performance‑friendly**, tested on production networks.

***

## Requirements

* **Java 17+**
* **Spigot / Paper / Purpur** server software
* **MySQL or MariaDB** database
* **Minecraft versions:** 1.20.4 – 1.21.7

***

## Installation

1. Download the latest **PlayerDataSync.jar** from the [SpigotMC resource page](https://www.spigotmc.org/resources/playerdatasync-1-20-4-1-21-7-cross-server-data-synchronization.123166/).
2. Place the jar in your server’s `/plugins` folder.
3. Restart the server — configuration files will be generated automatically.
4. Edit `config.yml` with your database credentials and sync preferences.
5. Restart again to apply changes.

💡 **Upgrading?** Stop server → back up configs → replace jar → restart. The plugin is designed to keep configs compatible across updates.

***

## Configuration

### Core settings

```yaml
language: "en"   # en or de

mysql:
  host: "127.0.0.1"
  port: 3306
  database: "minecraft_db"
  user: "mcuser"
  password: "strong-password"
  pool-size: 10
  reconnect: true   # auto database reconnect

settings:
  sync-on-join: true     # load data when player joins
  save-on-quit: true     # save data when player leaves
  periodic-save-seconds: 300  # optional periodic save

server:
  id: "lobby-1"   # unique identifier for diagnostics
```

### Data types to sync

```yaml
sync:
  inventory: true
  enderchest: true
  xp: true
  level: true
  health: true
  hunger: true
  gamemode: true
  potion-effects: true
  location:
    enabled: false     # set to true to sync location
    include-world: true
    include-rotation: true
  advancements: true   # achievements/advancements
```

### Messages & localization

```yaml
# messages_en.yml
prefix: "&ePlayerDataSync &7»&r "
loaded: "&aYour data was loaded successfully!"
saved: "&aYour data has been saved."
error: "&cAn error occurred while syncing your data."
```

Create `messages_de.yml` for German. **& color codes are supported**.

***

## Database Setup

```sql
CREATE DATABASE minecraft_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'mcuser'@'%' IDENTIFIED BY 'strong-password';
GRANT ALL PRIVILEGES ON minecraft_db.* TO 'mcuser'@'%';
FLUSH PRIVILEGES;
```

✔ Secure MySQL with IP restrictions and firewall rules. ✔ Ensure remote access is enabled for your game servers.

***

## How It Works

* On **join**, PlayerDataSync loads the player’s last snapshot from the database.
* On **quit** or during periodic saves, it writes updated data back.
* Every backend server with the plugin installed reads/writes from the same database, ensuring consistency.

📌 **Proxy note:** Do not install on BungeeCord/Velocity itself — only on backend servers.

***

## Best Practices

* Disable `location` syncing if your servers have different spawns or worlds.
* Increase `mysql.pool-size` for large networks.
* Keep your database optimized (indexes, SSD storage, backups).
* Always test updates on a staging server before production.

***

## Troubleshooting

**❌ Can’t connect to MySQL**

* Check credentials, firewall, and ensure `reconnect: true` is enabled.

**⚠️ Data not syncing (XP, hunger, etc.)**

* Verify `sync:` toggles are set to `true`.
* Check logs for SQL errors.
* Ensure plugin versions match across servers.

**🔄 Teleport loops or incorrect spawns**

* Disable `sync.location.enabled`.

**🐢 Lag spikes**

* Increase `mysql.pool-size`.
* Optimize database performance.

***

## FAQ

**Does it work across multiple servers?** ✔ Yes, as long as all servers use the same database.

**Does it support advancements/achievements?** ✔ Yes — enable `advancements: true`.

**Which versions are supported?** ✔ 1.20.4 – 1.21.7.

**Does it work with proxies like Bungee/Velocity?** ✔ Yes. Install on backend servers only.

**Can I use color codes?** ✔ Yes, all `&` codes are supported in messages and configs.

***

## Compatibility

* **Minecraft:** 1.20.4 – 1.21.7
* **Server software:** Spigot, Paper, Purpur
* **Database:** MySQL, MariaDB

***

## Downloads & Support

* 📥 **Download / Changelog / Reviews:** [SpigotMC resource page](https://www.spigotmc.org/resources/playerdatasync-1-20-4-1-21-7-cross-server-data-synchronization.123166/)
* 🛠 **Issues & Feature Requests:** Post in the Spigot discussion/support thread
* 💬 **Community Help:** Join our Discord (link on SpigotMC page)

***

✨ _Thanks for using PlayerDataSync! If this wiki helped you, please leave a review on the resource page to support development._
