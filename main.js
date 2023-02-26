// main.js

const { app, BrowserWindow } = require('electron');

// Disable Hardware Acceleration
// https://www.electronjs.org/docs/latest/tutorial/offscreen-rendering
app.disableHardwareAcceleration()

createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        title: 'Reddit Desktop',
        icon: __dirname + '/images/Reddit.ico',
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            webviewTag: true,
            nodeIntegration: true,
            nativeWindowOpen: true,
        }
    });

    win.loadURL(`https://reddit.com/`);
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});