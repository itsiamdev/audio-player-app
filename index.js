const {app, BrowserWindow, dialog, ipcMain} = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 280,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  win.loadFile(path.join(__dirname, 'index.html'))
}

ipcMain.handle('dialog:openFile', async () => {
  const { canceled, filePaths} = await dialog.showOpenDialog({
    filters: [{ name: 'Audio Files', extensions: ['mp3'] }],
    properties: ['openFile']
  });
  if(canceled || filePaths.length === 0) {
    return null;
  }else {
    return filePaths[0];
  }
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})
