"use strict";
exports.__esModule = true;
var express = require("express");
var https = require("https");
var fs = require("fs");
var electron_1 = require("electron");
var authCatch = express();
https.createServer({
    key: fs.readFileSync('cert.key'),
    cert: fs.readFileSync('cert.pem')
}, authCatch).listen(8080);
authCatch.get('/', function (request, response) {
    console.log(request.query);
    response.send();
});
function createWindow() {
    var authURLPart = "redirect_uri=" + encodeURIComponent('https://127.0.0.1:8080') + "&client_id=" + encodeURIComponent('NJTH5XPUULK9EYTSNZ127OR4KDFRNEKY') + "%40AMER.OAUTHAP";
    var authURL = "https://auth.tdameritrade.com/auth?response_type=code&" + authURLPart;
    console.log(authURL);
    var authWindow = new electron_1.BrowserWindow({
        title: 'Login to TD Ameritrade',
        show: false,
        webPreferences: {
            nodeIntegration: false,
            webSecurity: false,
            allowRunningInsecureContent: true
        }
    });
    authWindow.loadURL(authURL);
    authWindow.show();
}
electron_1.app.whenReady().then(createWindow);
// SSL/TSL: this is the self signed certificate support
electron_1.app.on('certificate-error', function (event, webContents, url, error, certificate, callback) {
    // On certificate error we disable default behaviour (stop loading the page)
    // and we then say "it is all fine - true" to the callback
    event.preventDefault();
    callback(true);
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
