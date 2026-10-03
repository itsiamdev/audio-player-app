# Audio Player App

A simple desktop app for playing MP3 files, built with Electron.

## Screenshot

![Audio Player App](images/image.png)

## Tech stack

- **Electron** (`^44.5.1`) — the main process creates the window and the native file dialog
- **HTML / CSS / JavaScript** — UI in `index.html`, styles in `styles/main.css`, logic in `scripts/app.js`
- **Node.js** — used by the main process (`index.js`) and the preload script
- No frameworks or extra runtime dependencies

## What the app does

- Opens an MP3 file from disk through the native system dialog
- Plays / pauses the track with the Play / Pause button
- Shows the current time and total duration in `mm:ss` format
- Runs in a 600x280 px window with a hidden menu bar

## Project structure

```
audio-player-app/
├── index.js          # Electron main process: window + file dialog
├── preload.js        # secure bridge (contextBridge) exposing window.electronAPI
├── index.html        # app UI
├── styles/main.css   # page styles
├── scripts/app.js    # player logic (Audio API)
├── images/           # assets used in this README
└── package.json
```

## Installation and usage

Requirements: [Node.js](https://nodejs.org) (which includes npm).

```bash
npm install     # install dependencies (Electron)
npm start       # launch the app
```

## Links

- Live demo: [itsiamdev.github.io/audio-player-app](https://itsiamdev.github.io/audio-player-app/)

## License

[ISC](LICENSE)
