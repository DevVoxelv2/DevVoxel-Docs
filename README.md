# 🚀 Welcome to DevVoxel

**DevVoxel** is a development platform focused on building high‑quality plugins, tools, and documentation for **Minecraft server networks**. Our mission is to deliver **seamless integrations**, **powerful features**, and **user‑friendly solutions** that help administrators and developers succeed.

---

## 🌟 What We Offer

* ✅ **Minecraft Plugins & Tools** – Reliable, optimized, and production‑ready
* ✅ **Comprehensive Documentation** – Clear, step‑by‑step setup guides
* ✅ **Developer API** – Extensible and flexible for custom integrations
* ✅ **Community Support** – Active Discord and forum for real‑time help

---

## 📌 Featured Projects

🔹 [**PlayerDataSync**](https://www.spigotmc.org/resources/playerdatasync-1-20-4-1-21-7-cross-server-data-synchronization.123166/) – Synchronize inventories, stats, and more across multiple servers

🔹 [**BungeeSystem**](https://www.spigotmc.org/resources/bungeesystem-powerful-proxy-addon-%E2%9A%A1-mysql-chat-commands.119339/) – Powerful proxy addon for BungeeCord & Velocity with MySQL, stats, and chat commands

---

## 🛠 Who is DevVoxel For?

* **Minecraft Server Owners** – Boost performance and add modern features
* **Plugin Developers** – Build and extend using our robust API
* **Community Managers** – Simplify server management with automation

---

## 📞 Get Involved

* 💬 **Join our Discord** → Real‑time support and developer discussions
* 📢 **Follow us on SpigotMC** → Stay updated with the latest plugins and releases
* ⭐ **Contribute on GitHub** → Open source projects and community contributions

---

✨ *DevVoxel – powering the future of Minecraft servers.*

---

## 📚 Local Docs Server

This repository contains a lightweight Node.js server that renders the Markdown files in this project. The server reads the files from disk and periodically runs `git pull` in the background to fetch updates from GitHub.

```bash
npm start
```

By default the repository is checked for updates every five minutes. Set `UPDATE_INTERVAL_MS` to override the interval (milliseconds).
