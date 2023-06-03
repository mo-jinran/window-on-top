const { contextBridge, ipcRenderer } = require("electron");


contextBridge.exposeInMainWorld("window_on_top", {
    toggleWindowOnTop: () => ipcRenderer.invoke("betterQQNT.window_on_top.toggleWindowOnTop"),
});