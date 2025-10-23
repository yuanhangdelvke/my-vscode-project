// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ 木玩大工坊页面加载完成');
    
    // 匠人模块点击交互 - 跳转到直播页面
    const craftsmen = document.querySelectorAll('.craftsman');
    craftsmen.forEach(item => {
        item.addEventListener('click', function() {
            const craftsmanImg = this.querySelector('img');
            const craftsmanName = this.querySelector('p').textContent;
            console.log(`点击了匠人头像: ${craftsmanName}`);
            
            // 处理匠人头像点击跳转
            handleCraftsmanClick(craftsmanImg.src);
        });
        
        // 添加悬停效果
        item.style.cursor = 'pointer';
        item.style.transition = 'all 0.2s ease';
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.opacity = '0.8';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.opacity = '1';
        });
    });

    // 功能区模块点击交互
    const functionAreas = document.querySelectorAll('.diy, .research, .health, .virtual, .game');
    functionAreas.forEach(item => {
        item.addEventListener('click', () => {
            const areaName = item.querySelector('h3').textContent;
            console.log(`点击了${areaName}`);
            
            // 处理功能区点击跳转
            handleFunctionAreaClick(areaName);
        });
        
        // 添加悬停效果
        item.style.cursor = 'pointer';
        item.style.transition = 'all 0.2s ease';
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.filter = 'brightness(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.filter = 'brightness(1)';
        });
    });

    // 底部导航交互
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有激活状态
            navItems.forEach(nav => nav.classList.remove('active'));
            // 给当前点击项添加激活状态
            this.classList.add('active');
            
            const pageName = this.getAttribute('data-page');
            const pageText = this.querySelector('div').textContent;
            console.log(`点击了底部导航: ${pageText}`);
            
            // 处理导航跳转
            handleNavClick(pageName, pageText);
        });
        
        // 添加悬停效果
        item.style.transition = 'all 0.2s ease';
    });
    
    // 直播Banner点击效果
    const banner = document.querySelector('.banner');
    if (banner) {
        banner.style.cursor = 'pointer';
        banner.style.transition = 'all 0.2s ease';
        
        banner.addEventListener('click', function() {
            console.log('点击了直播Banner');
            // 跳转到直播页面
            window.location.href = '../live/index.html';
        });
        
        banner.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        banner.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // 更多链接点击效果
    const moreLink = document.querySelector('.more');
    if (moreLink) {
        moreLink.style.transition = 'all 0.2s ease';
        
        moreLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('点击了更多链接');
            // 跳转到更多直播页面
            window.location.href = '../live-list/index.html';
        });
        
        moreLink.addEventListener('mouseenter', function() {
            this.style.color = '#8b6b4c';
        });
        
        moreLink.addEventListener('mouseleave', function() {
            this.style.color = '#a7a7a7';
        });
    }
    
    // 产品展示点击效果
    const products = document.querySelector('.products');
    if (products) {
        products.style.cursor = 'pointer';
        products.style.transition = 'all 0.2s ease';
        
        products.addEventListener('click', function() {
            console.log('点击了产品展示');
            // 可以在这里添加产品展示跳转逻辑
        });
        
        products.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        products.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// 处理匠人头像点击跳转
function handleCraftsmanClick(imgSrc) {
    console.log('跳转到直播页面');
    
    // 跳转到直播页面
    window.location.href = '../live/index.html';
}

// 处理功能区点击跳转
function handleFunctionAreaClick(areaName) {
    console.log(`处理功能区跳转: ${areaName}`);
    
    switch(areaName) {
        case '研学教育区':
            console.log('跳转到研学教育区页面');
            window.location.href = '../research-education/index.html';
            break;
        case 'DIY工坊':
            console.log('跳转到DIY工坊页面');
            // window.location.href = '../diy-workshop/index.html';
            alert('DIY工坊页面开发中...');
            break;
        case '益智康养区':
            console.log('跳转到益智康养区页面');
            // window.location.href = '../health-education/index.html';
            alert('益智康养区页面开发中...');
            break;
        case '虚拟体验区':
            console.log('跳转到虚拟体验区页面');
            // window.location.href = '../virtual-experience/index.html';
            alert('虚拟体验区页面开发中...');
            break;
        case '互动小游戏':
            console.log('跳转到互动小游戏页面');
            // window.location.href = '../mini-games/index.html';
            alert('互动小游戏页面开发中...');
            break;
        default:
            console.log('未知功能区:', areaName);
            alert(`功能 ${areaName} 开发中...`);
    }
}

// 处理底部导航点击跳转
function handleNavClick(pageName, pageText) {
    console.log(`处理导航跳转: ${pageName} - ${pageText}`);
    
    switch(pageName) {
        case 'museum':
            console.log('跳转到博物馆页面（首页）');
            window.location.href = '../home/index.html';
            break;
        case 'industry':
            console.log('跳转到产业带页面');
            window.location.href = '../industry/index.html';
            break;
        case 'workshop':
            console.log('当前已在木玩大工坊页面');
            // 不跳转，只更新active状态
            break;
        case 'profile':
            console.log('跳转到我的页面');
            window.location.href = '../profile/index.html';
            break;
        default:
            console.log('未知页面:', pageName);
    }
}

// 添加触摸事件支持
document.addEventListener('touchstart', function() {}, {passive: true});