export function onLoad() {
    const window_on_top_btn = `
    <div tabindex="0" role="button" aria-label="置顶">
        <i class="q-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        </i>
    </div>
    `;

    // 解析HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(window_on_top_btn, "text/html");
    const node = doc.querySelector("body > div");

    // 添加点击按钮事件
    node.addEventListener("click", async () => {
        const resule = await window.window_on_top.toggleWindowOnTop();
        if (resule) {
            node.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        } else {
            node.removeAttribute("style");
        }
    });

    // 查找窗口控制区域，并插入按钮
    const interval = setInterval(() => {
        const window_control_area = document.querySelector(".window-control-area");
        const setting_btn = document.querySelector(".login-container .setting");

        if (window_control_area) {
            clearInterval(interval);

            // 获取窗口控制区域
            const childNodes = window_control_area.childNodes;

            // 留出位置
            if (setting_btn) {
                setting_btn.style.marginRight = "32px";
            }

            // 插入
            window_control_area.insertBefore(node, childNodes[0]);
        }
    }, 100);
}
