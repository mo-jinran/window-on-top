const { contextBridge, ipcRenderer } = require("electron");


contextBridge.exposeInMainWorld("window_on_top", {
    toggleWindowOnTop: () => ipcRenderer.invoke("LiteLoader.window_on_top.toggleWindowOnTop"),
});