const { contextBridge, ipcRenderer } = require("electron");


contextBridge.exposeInMainWorld("window_on_top", {
    toggleWindowOnTop: () => ipcRenderer.sendSync("LiteLoader.window_on_top.toggleWindowOnTop"),
});