const { BrowserWindow, ipcMain } = require("electron");


// 置顶按钮
ipcMain.on("LiteLoader.window_on_top.toggleWindowOnTop", (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    window.setAlwaysOnTop(!window.isAlwaysOnTop());
    event.returnValue = window.isAlwaysOnTop();
});
