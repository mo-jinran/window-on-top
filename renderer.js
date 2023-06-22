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

    node.addEventListener("click", async () => {
        const resule = await window.window_on_top.toggleWindowOnTop();
        if (resule) {
            node.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        } else {
            node.removeAttribute("style");
        }
    });

    const interval = setInterval(() => {
        const window_control_area = document.querySelector(".window-control-area");

        if (window_control_area) {
            clearInterval(interval);
        }

        try {
            // 获取窗口控制区域
            const childNodes = window_control_area.childNodes;
            // 插入
            window_control_area.insertBefore(node, childNodes[0]);

            // 获取两个按钮元素
            let button1 = document.querySelector('.setting[data-v-6afc84c4]');
            let button2 = document.querySelector('div[aria-label="置顶"]');

            // 获取按钮的位置和尺寸
            let rect1 = button1.getBoundingClientRect();
            let rect2 = button2.getBoundingClientRect();

            // 计算目标位置
            let targetLeft = rect2.left - rect1.width;

            // 设置按钮的位置
            button1.style.position = 'absolute';
            button1.style.left = targetLeft + 'px';
        } catch (error) { }
    }, 100);
}
