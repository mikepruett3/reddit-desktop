// main.js

// https://www.electronforge.io/config/makers/squirrel.windows
if (require('electron-squirrel-startup')) return;

const { app, shell, BrowserWindow, Menu, MenuItem } = require('electron');

// Disable Hardware Acceleration
// https://www.electronjs.org/docs/latest/tutorial/offscreen-rendering
app.disableHardwareAcceleration()

createWindow = () => {
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        title: 'Reddit Desktop',
        icon: __dirname + '/images/Reddit.ico',
        autoHideMenuBar: true,
        webPreferences: {
            spellcheck: true,
            webSecurity: true,
            contextIsolation: false,
            webviewTag: true,
            nodeIntegration: true,
            nativeWindowOpen: true
        }
    });

    // Open links with External Browser
    // https://stackoverflow.com/a/67409223
    window.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });

    window.loadURL(`https://reddit.com/`);

    // Sets the spellchecker to check English US and French
    window.webContents.session.setSpellCheckerLanguages(['en-US'])

    // An array of all available language codes
    const possibleLanguages = window.webContents.session.availableSpellCheckerLanguages

    window.webContents.on('context-menu', (event, params) => {
        const menu = new Menu()

        // Add each spelling suggestion
        for (const suggestion of params.dictionarySuggestions) {
            menu.append(new MenuItem({
                label: suggestion,
                click: () => window.webContents.replaceMisspelling(suggestion)
            }))
        }

        // Allow users to add the misspelled word to the dictionary
        if (params.misspelledWord) {
            menu.append(
                new MenuItem({
                    label: 'Add to dictionary',
                    click: () => window.webContents.session.addWordToSpellCheckerDictionary(params.misspelledWord)
                })
            )
        }

        menu.popup()
    })
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