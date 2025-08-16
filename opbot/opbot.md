# OPBot

A modular, Discord bot built with **Node.js** and **discord.js**, designed for reliability, modularity, and easy customization. Slash commands are automatically registered and kept up-to-date per guild.

---

## ✨ Features

* ⚙️ **Modular architecture** with clear directories: `commands/`, `events/`, `interaction/`
* ⚡ **Slash commands** auto-registered per guild
* 🔒 **Environment-based configuration** via `.env`
* 🧩 **Extendable codebase** – ideal for adding custom features
* 📊 **Guild-specific settings** (multi-guild ready)
* 📈 **Statistics tracking** (commands usage, guild data)
* 🛠️ **Admin utilities** like moderation commands
* 🌐 **Dashboard-ready** (planned web integration)
* 🔔 **Notifications & logging** (audit log integration, live logs planned)
* 💬 **Live chat bridge** (planned integration with web dashboard & Discord)

---

## 📥 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DevVoxelv2/OPBot.git
   cd OPBot
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Copy the environment file and configure it:

   ```bash
   cp .env.example .env
   ```

   Fill in your `DISCORD_TOKEN`, `OWNER_ID`, and database credentials if needed.
4. Start the bot:

   ```bash
   node index.js
   ```

---

## ⚙️ Configuration

Environment variables are managed via `.env`.

```ini
DISCORD_TOKEN=your-bot-token
OWNER_ID=123456789012345678
MONGODB_URI=mongodb://localhost:27017/opbot
PREFIX=!   # fallback for legacy commands
PORT=3030   # for dashboard integration
```

* **DISCORD\_TOKEN** → Bot token from the [Discord Developer Portal](https://discord.com/developers/applications)
* **OWNER\_ID** → Your Discord user ID (for dev commands)
* **MONGODB\_URI** → Optional database for stats, configs, and dashboard
* **PREFIX** → Optional legacy prefix support
* **PORT** → Dashboard port (Express-based)

---

## 📂 Project Structure

```
/commands       # Slash commands (categories: mod, fun, admin, botowner)
/events         # Event handlers (ready, message, etc.)
/interaction    # Core command interaction logic
/dashboard      # Planned web dashboard integration (Express + EJS)
/utils          # Helper functions and services
/database       # Database models and schemas (MongoDB/MySQL)
/config         # Config & localization files
.gitignore
.env.example
index.js        # Bot entry point
package.json
```

---

## 🚀 Quick Start

| Step | Action                                          |
| ---- | ----------------------------------------------- |
| 1    | Clone this repo                                 |
| 2    | Run `npm install`                               |
| 3    | Configure `.env` with your bot token & owner ID |
| 4    | Run `node index.js` to launch                   |

---

## 📜 Commands Overview

### General

| Command            | Description                      | Permission |
| ------------------ | -------------------------------- | ---------- |
| `/help`            | Show all commands and categories | Everyone   |
| `/ping`            | Test bot latency                 | Everyone   |
| `/stats`           | Show bot or user stats           | Everyone   |
| `/userinfo [user]` | Display info about a user        | Everyone   |
| `/changelog`       | Show the latest bot updates      | Everyone   |

### Moderation

| Command                 | Description     | Permission        |
| ----------------------- | --------------- | ----------------- |
| `/ban [user] [reason]`  | Ban a member    | `Ban Members`     |
| `/kick [user] [reason]` | Kick a member   | `Kick Members`    |
| `/mute [user]`          | Mute a member   | `Manage Messages` |
| `/unmute [user]`        | Unmute a member | `Manage Messages` |
| `/warn [user] [reason]` | Warn a member   | `Manage Messages` |

### Developer / Owner

| Command   | Description                              | Permission |
| --------- | ---------------------------------------- | ---------- |
| `/eval`   | Developer-only evaluation command        | Owner      |
| `/reload` | Reload configs/events without restarting | Owner      |

---

## 📊 Planned Dashboard Features

* ✅ **Web-based command logs**
* ✅ **Guild-specific settings** (prefix, automod, welcome messages)
* ✅ **Live chat bridge** between Discord and dashboard
* ✅ **User management panel**
* ✅ **Statistics overview** (commands usage, guild analytics)

---

## 🤝 Contributing

We welcome contributions! You can:

* Add new slash commands
* Create new event handlers
* Improve existing functionality
* Work on the **dashboard integration**
* Extend the database layer (MongoDB/MySQL)

Open a PR or suggest features in the issues tab.

---

## 📜 License

Currently **no license specified** – consider adding an open-source license (e.g., MIT) for clarity.

---

✨ *OPBot provides a clean, scalable foundation for your Discord server. Extend it, customize it, and build the bot your community deserves!*
