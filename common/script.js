// 启动页自动跳转逻辑
window.addEventListener('load', function() {
    // 检查当前页面是否为启动页
    if (document.querySelector('.splash-screen')) {
        console.log('启动页加载完成，4秒后跳转到首页');
        
        // 4秒后自动跳转到首页
        setTimeout(function() {
            // 跳转到home文件夹下的首
            window.location.href = 'home/index.html';
        }, 4000); // 4000毫秒 = 4秒
    }
});

// 首页的交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 检查当前页面是否为首页
    if (document.querySelector('.bottom-nav')) {
        console.log('首页加载完成，初始化交互功能');
        
        // 导航按钮点击效果
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', function() {
                navButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const buttonText = this.querySelector('span').textContent;
                console.log(`切换到: ${buttonText}`);
            });
        });
        
        // 底部导航点击效果
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                navItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                // 在实际应用中，这里可以根据data-page属性切换到不同页面
                const pageName = this.getAttribute('data-page');
                console.log(`切换到页面: ${pageName}`);
                
                // 这里可以添加页面切换的代码
                // 例如：window.location.href = `${pageName}/index.html`;
            });
        });
        
        // 功能卡片点击效果
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('click', function() {
                // 移除其他卡片的激活状态
                featureCards.forEach(c => c.classList.remove('active'));
                
                // 添加当前卡片的激活状态
                this.classList.add('active');
                
                // 获取功能名称
                const featureName = this.getAttribute('data-feature');
                console.log(`打开功能: ${featureName}`);
                
                // 在实际应用中，这里可以跳转到对应功能页面或显示详情
                // 这里简单模拟一下
                setTimeout(() => {
                    alert(`正在打开${getFeatureName(featureName)}功能...`);
                }, 300);
            });
        });
        
        // 虚拟展厅按钮悬停效果
        const enterBtn = document.querySelector('.enter-btn');
        if (enterBtn) {
            enterBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            enterBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
            
            // 虚拟展厅按钮点击事件
            enterBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('进入虚拟展厅');
                // 在实际应用中，这里会跳转到虚拟展厅页面
                alert('即将进入虚拟展厅...');
            });
        }
    }
});

// 辅助函数：根据功能标识获取功能名称
function getFeatureName(feature) {
    const featureNames = {
        'history': '木玩历史',
        'tools': '制作工具',
        'skills': '非遗技艺',
        'process': '制作流程'
    };
    
    return featureNames[feature] || '未知功能';
}

// 添加触摸事件支持
document.addEventListener('touchstart', function() {}, {passive: true});