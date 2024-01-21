const template = document.createElement("template");
template.innerHTML = `
<div tabindex="0" role="button" aria-label="置顶">
    <i class="q-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.5">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    </i>
</div>
`;
const window_on_top_button = template.content.cloneNode(true).querySelector("div");


window_on_top_button.addEventListener("click", () => {
    if (window_on_top.toggleWindowOnTop()) {
        window_on_top_button.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    }
    else {
        window_on_top_button.removeAttribute("style");
    }
});


const interval = setInterval(() => {
    const window_control_area = document.querySelector(".window-control-area");
    const setting_btn = document.querySelector(".login-container .setting");
    if (window_control_area) {
        clearInterval(interval);
        window_control_area.insertBefore(window_on_top_button, window_control_area.childNodes[0]);
    }
    if (setting_btn) {
        setting_btn.style.marginRight = "32px";
    }
}, 50);
