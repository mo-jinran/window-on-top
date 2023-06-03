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
    global.plugin = plugin;
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


function onBrowserWindowCreated(window) {
    window.webContents.session.setPreloads([
        path.join(plugin.path, "preload.js")
    ]);
    window.on("ready-to-show", () => {
        injectJS(window.webContents);
    });
}


module.exports = {
    onLoad,
    onBrowserWindowCreated
}