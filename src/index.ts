import {Server, ServerOptions, Namespace} from 'socket.io';
import {client} from 'websocket';
import express = require('express');
import * as https from 'https';
import * as fs from 'fs';
import {app, BrowserWindow} from 'electron';

const authCatch = express();

https.createServer({
    key: fs.readFileSync('cert.key'),
    cert: fs.readFileSync('cert.pem')
}, authCatch).listen(8080);

authCatch.get('/', (request, response) => {
    console.log(request.query);
    response.send();
});

function createWindow() {

    let authURLPart = `redirect_uri=${encodeURIComponent('https://127.0.0.1:8080')}&client_id=${encodeURIComponent('NJTH5XPUULK9EYTSNZ127OR4KDFRNEKY')}%40AMER.OAUTHAP`;
    let authURL = `https://auth.tdameritrade.com/auth?response_type=code&${authURLPart}`
    console.log(authURL);

    let authWindow = new BrowserWindow({
        title: 'Login to TD Ameritrade',
        show: false,
        webPreferences: {
            nodeIntegration: false,
            webSecurity: false,
            allowRunningInsecureContent: true,
        }
    });

    authWindow.loadURL(authURL);
    authWindow.show();
}

app.whenReady().then(createWindow)
// SSL/TSL: this is the self signed certificate support
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    // On certificate error we disable default behaviour (stop loading the page)
    // and we then say "it is all fine - true" to the callback
    event.preventDefault();
    callback(true);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})