const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.setIcon(path.join(__dirname, 'icons/icon.png'));

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'views/index.html'),
            protocol: 'file',
            slashes: true,
        })
    );
});
