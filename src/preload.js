const { ipcRenderer } = require("electron");


const button = document.createElement("div");
button.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none "stroke="currentColor" stroke-width="1.5">
    <polyline points="18 15 12 9 6 15"></polyline>
</svg>`;


button.addEventListener("click", () => {
    if (ipcRenderer.sendSync("mojinran.window_on_top.toggleWindowOnTop")) {
        button.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    }
    else {
        button.removeAttribute("style");
    }
});


const interval = setInterval(() => {
    const window_control_area = document.querySelector(".window-control-area");
    const setting_btn = document.querySelector(".login-container .setting");
    if (window_control_area) {
        clearInterval(interval);
        // Preload may run more than once for the same document.
        if (!window_control_area.querySelector('[data-window-on-top-button]')) {
            button.setAttribute('data-window-on-top-button', '');
            button.title = '窗口置顶';
            window_control_area.insertBefore(button, window_control_area.childNodes[0]);
        }
    }
    if (setting_btn) {
        setting_btn.style.marginRight = "32px";
    }
}, 50);