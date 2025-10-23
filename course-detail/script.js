const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有tab的active类
        tabs.forEach(t => t.classList.remove('active'));
        // 给当前tab添加active类
        tab.classList.add('active');
        // 隐藏所有内容
        tabContents.forEach(content => content.style.display = 'none');
        // 显示对应内容
        const targetId = tab.getAttribute('data-tab');
        document.getElementById(targetId).style.display = 'block';
    });
});