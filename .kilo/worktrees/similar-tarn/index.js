const {app, BrowserWindow} = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 280,
  })

  win.loadFile('index.html')
  win.setMenuBarVisibility(false)
}
app.whenReady().then(() => {
  createWindow()
})