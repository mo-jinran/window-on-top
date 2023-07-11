const { BrowserWindow, ipcMain } = require("electron");


function onLoad(plugin) {
    // 置顶按钮
    ipcMain.handle(
        "LiteLoader.window_on_top.toggleWindowOnTop",
        (event, message) => {
            const window = BrowserWindow.fromWebContents(event.sender);
            window.setAlwaysOnTop(!window.isAlwaysOnTop());
            return window.isAlwaysOnTop();
        }
    );
}


module.exports = {
    onLoad
}