// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ 个人中心页面加载完成');
    
    // 修改资料按钮点击事件
    const editBtn = document.querySelector('.edit-btn');
    editBtn.addEventListener('click', function() {
        alert('点击了修改资料按钮');
        // 可以在这里添加跳转到修改资料页面的代码
        // window.location.href = '../edit-profile/index.html';
    });

    // 菜单项点击事件
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            console.log(`点击了${text}菜单`);
            
            // 处理菜单项点击跳转
            handleMenuItemClick(text);
        });
        
        // 添加悬停效果
        item.style.cursor = 'pointer';
        item.style.transition = 'all 0.2s ease';
        
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f5f2';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#fff';
        });
    });

    // 功能导航栏点击事件
    const funcNavItems = document.querySelectorAll('.func-nav .nav-item');
    funcNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('p').textContent;
            console.log(`点击了${text}功能`);
            
            // 处理功能导航点击
            handleFuncNavClick(text);
        });
        
        // 添加悬停效果
        item.style.cursor = 'pointer';
        item.style.transition = 'all 0.2s ease';
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 底部导航栏点击事件 - 实现页面跳转
    const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item');
    bottomNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active状态
            bottomNavItems.forEach(nav => nav.classList.remove('active'));
            // 给当前点击项添加active状态
            this.classList.add('active');
            
            const pageName = this.getAttribute('data-page');
            const pageText = this.querySelector('div').textContent;
            console.log(`点击了底部导航: ${pageText}`);
            
            // 处理底部导航跳转
            handleBottomNavClick(pageName, pageText);
        });
        
        // 添加悬停效果
        item.style.transition = 'all 0.2s ease';
    });
});

// 处理菜单项点击跳转
function handleMenuItemClick(menuText) {
    console.log(`处理菜单跳转: ${menuText}`);
    
    switch(menuText) {
        case '公告':
            alert('跳转到公告页面');
            // window.location.href = '../announcement/index.html';
            break;
        case '设置':
            alert('跳转到设置页面');
            // window.location.href = '../settings/index.html';
            break;
        case '关于':
            alert('跳转到关于页面');
            // window.location.href = '../about/index.html';
            break;
        case '帮助中心':
            alert('跳转到帮助中心页面');
            // window.location.href = '../help-center/index.html';
            break;
        default:
            console.log('未知菜单:', menuText);
    }
}

// 处理功能导航点击
function handleFuncNavClick(funcText) {
    console.log(`处理功能导航: ${funcText}`);
    
    switch(funcText) {
        case '关注':
            alert('跳转到关注页面');
            // window.location.href = '../follow/index.html';
            break;
        case '收藏':
            alert('跳转到收藏页面');
            // window.location.href = '../favorites/index.html';
            break;
        case '订阅':
            alert('跳转到订阅页面');
            // window.location.href = '../subscription/index.html';
            break;
        case '订单':
            alert('跳转到订单页面');
            // window.location.href = '../orders/index.html';
            break;
        case '作品':
            alert('跳转到作品页面');
            // window.location.href = '../works/index.html';
            break;
        default:
            console.log('未知功能:', funcText);
    }
}

// 处理底部导航点击跳转
function handleBottomNavClick(pageName, pageText) {
    console.log(`处理底部导航跳转: ${pageName} - ${pageText}`);
    
    switch(pageName) {
        case 'museum':
            console.log('跳转到博物馆页面');
            window.location.href = '../home/index.html';
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
            console.log('当前已在个人中心页面');
            // 当前页面就是个人中心，不需要跳转
            break;
            
        default:
            console.log('未知页面:', pageName);
    }
}

// 添加触摸事件支持
document.addEventListener('touchstart', function() {}, {passive: true});