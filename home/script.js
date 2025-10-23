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
                
                // 根据点击的按钮进行页面跳转
                handleNavButtonClick(buttonText);
            });
        });
        
        // 底部导航点击效果
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                navItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                const pageName = this.getAttribute('data-page');
                console.log(`切换到页面: ${pageName}`);
                
                // 根据点击的底部导航进行页面跳转
                handleBottomNavClick(pageName);
            });
        });
        
        // 功能卡片点击效果
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('click', function() {
                featureCards.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                
                const featureName = this.getAttribute('data-feature');
                console.log(`打开功能: ${featureName}`);
                
                setTimeout(() => {
                    alert(`正在打开${getFeatureName(featureName)}功能...`);
                }, 300);
            });
        });
    }
});

// 处理顶部导航按钮点击跳转
function handleNavButtonClick(buttonText) {
    switch(buttonText) {
        case '木玩基因库':
            console.log('跳转到木玩基因库页面');
            window.location.href = '../gene-library/index.html';
            break;
        case '匠人数字档案':
            console.log('跳转到匠人数字档案页面');
            window.location.href = '../craftsman-archive/index.html';
            break;
        case '数字展馆':
            console.log('保持在数字展馆页面');
            break;
        default:
            console.log('未知导航按钮:', buttonText);
    }
}

// 处理底部导航点击跳转
function handleBottomNavClick(pageName) {
    switch(pageName) {
        case 'museum':
            console.log('保持在博物馆页面');
            break;
        case 'industry':
            console.log('跳转到产业带页面');
            window.location.href = '../industry/index.html';
            break;
        case 'workshop':
            console.log('跳转到大工坊页面');
            window.location.href = '../workshop/index.html';
            break;
        case 'profile':
            console.log('跳转到我的页面');
            window.location.href = '../profile/index.html';
            break;
        default:
            console.log('未知页面:', pageName);
    }
}

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