// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ 产业带页面加载完成');
    
    // 底部导航交互
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            const pageName = this.getAttribute('data-page');
            console.log(`点击了底部导航: ${pageName}`);
            
            // 处理底部导航跳转
            handleBottomNavClick(pageName);
        });
    });
    
    // 功能按钮交互 - 修改为跳转功能
    const btnItems = document.querySelectorAll('.btn-item');
    btnItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            console.log(`点击了功能按钮: ${text}`);
            
            // 根据按钮文本处理跳转
            if (text === '品牌故事') {
                handleBrandStoryClick();
            } else if (text === '产品地图') {
                handleProductMapClick();
            }
        });
        
        // 添加悬停效果
        item.style.cursor = 'pointer';
        item.style.transition = 'transform 0.2s ease';
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 木玩+项目交互
    const woodplusItems = document.querySelectorAll('.woodplus-item');
    woodplusItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            alert(`点击了木玩+${text}项目`);
        });
        
        // 添加悬停效果
        item.style.cursor = 'pointer';
        item.style.transition = 'transform 0.2s ease';
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// 处理底部导航点击跳转
function handleBottomNavClick(pageName) {
    switch(pageName) {
        case 'museum':
            console.log('跳转到博物馆页面');
            window.location.href = '../home/index.html';
            break;
        case 'industry':
            console.log('当前已在产业带页面');
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

// 处理品牌故事点击跳转
function handleBrandStoryClick() {
    console.log('跳转到品牌详情页面');
    window.location.href = '../brand-detail/index.html';
}

// 处理产品地图点击跳转
function handleProductMapClick() {
    console.log('跳转到产业地图页面');
    window.location.href = '../industry-map/index.html';
}

// 添加触摸事件支持
document.addEventListener('touchstart', function() {}, {passive: true});