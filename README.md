<div align="center">

# 🎧 Audio Player App

![Electron](https://img.shields.io/badge/Electron-44.5.1-47848F?logo=electron&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-required-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue)
![Status](https://img.shields.io/badge/status-stable-success)

A simple desktop app for playing MP3 files, built with Electron.

[View the live demo](https://itsiamdev.github.io/audio-player-app/) · [Report an issue](https://github.com/itsiamdev/audio-player-app/issues)

</div>

---

## 📸 Screenshot

<p align="center">
  <img src="images/image.png" alt="Audio Player App" width="420">
</p>

---

## 🛠️ Tech stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| Shell | **Electron** `^44.5.1` | Main process: window + native file dialog |
| Bridge | **ContextBridge** | Secure `window.electronAPI` exposed via `preload.js` |
| UI | **HTML / CSS** | Markup and styles (`index.html`, `styles/main.css`) |
| Logic | **JavaScript** | Player behaviour built on the Web Audio `Audio` API |
| Runtime | **Node.js** | Used by the main process and the preload script |

> No frameworks and no extra runtime dependencies — only Electron as a dev dependency.

---

## ✨ Features

- 📂 Open an MP3 file from disk through the native system dialog
- ▶️ Play / pause the track with a single button
- ⏱️ Live current time and total duration in `mm:ss` format
- 🪟 Compact 600x280 px window with a hidden menu bar
- 🔒 Context isolation enabled, Node integration disabled

---

## 📁 Project structure

```text
audio-player-app/
├── index.js          # Electron main process: window + file dialog
├── preload.js        # secure bridge exposing window.electronAPI.openFile()
├── index.html        # app UI
├── styles/main.css   # page styles
├── scripts/app.js    # player logic (Audio API)
├── images/           # assets used in this README
└── package.json
```

**How it works**

1. `index.js` creates the `BrowserWindow` and handles the `dialog:openFile` IPC event.
2. `preload.js` exposes a single, safe method: `window.electronAPI.openFile()`.
3. `scripts/app.js` sets the returned path as the `Audio` source and updates the play state and timer.

---

## 🚀 Installation and usage

**Requirements:** [Node.js](https://nodejs.org) (npm is bundled).

```bash
git clone https://github.com/itsiamdev/audio-player-app.git
cd audio-player-app
npm install     # install dependencies (Electron)
npm start       # launch the app
```

---

## 📄 License

Released under the [ISC License](LICENSE).
