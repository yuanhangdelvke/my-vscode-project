// 可根据需求添加交互逻辑，例如点击导航跳转等
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('p').textContent;
            alert(`您点击了“${text}”导航`);
            // 实际项目中可在此处添加页面跳转逻辑
        });
    });
});