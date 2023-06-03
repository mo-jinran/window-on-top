const fs = require("fs");
const path = require("path");
const { BrowserWindow, ipcMain } = require("electron");


// 注入js
function injectJS(webContents) {
    const filepath = path.join(__dirname, "renderer.js");
    const filetext = fs.readFileSync(filepath, "utf-8");
    webContents.executeJavaScript(filetext, true);
}


function onLoad(plugin) {
    // 置顶按钮
    ipcMain.handle(
        "betterQQNT.window_on_top.toggleWindowOnTop",
        (event, message) => {
            const window = BrowserWindow.fromWebContents(event.sender);
            window.setAlwaysOnTop(!window.isAlwaysOnTop());
            return window.isAlwaysOnTop();
        }
    );
}


function onBrowserWindowCreated(window, plugin) {
    const preloads = Array.from(new Set([
        ...window.webContents.session.getPreloads(),
        path.join(plugin.path, "preload.js")
    ]));
    window.webContents.session.setPreloads(preloads);
    window.on("ready-to-show", () => {
        injectJS(window.webContents);
    });
}


module.exports = {
    onLoad,
    onBrowserWindowCreated
}