# Audio Player App

Aplicație desktop simplă pentru redarea fișierelor MP3, construită cu Electron.

## Screenshot

![Audio Player App](images/image.png)


## Tech stack

- **Electron** (`^44.5.1`) — procesul principal creează fereastra și dialogul de alegere a fișierului
- **HTML / CSS / JavaScript** — interfața din `index.html`, stilurile din `styles/main.css`, logica din `scripts/app.js`
- **Node.js** — folosit de procesul principal (`index.js`) și de preload script
- Fără framework-uri sau dependințe runtime suplimentare

## Ce face aplicația

- Deschide un fișier MP3 de pe disc printr-un dialog nativ al sistemului
- Redă / oprește piesa cu butonul Play / Pause
- Afișează timpul curent și durata totală în format `mm:ss`
- Ferestre de 600x280 px, fără meniu vizibil

## Structura proiectului

```
audio-player-app/
├── index.js          # procesul principal Electron: fereastra + dialogul de fișiere
├── preload.js        # bridge securizat (contextBridge) expune window.electronAPI
├── index.html        # interfața aplicației
├── styles/main.css   # stilurile paginii
├── scripts/app.js    # logica playerului (Audio API)
└── package.json
```

## Instalare și rulare

Cerințe: [Node.js](https://nodejs.org) (care include npm).

```bash
npm install     # instalează dependențele (Electron)
npm start       # pornește aplicația
```

## Licență

ISC
