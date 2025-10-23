// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ 页面加载完成');
    
    if (document.querySelector('.bottom-nav')) {
        console.log('🏠 匠人数字档案页面初始化');
        
        // 关注按钮功能
        const followButtons = document.querySelectorAll('.follow-btn');
        followButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation(); // 阻止事件冒泡，避免触发卡片点击
                if (this.classList.contains('followed')) {
                    this.classList.remove('followed');
                    this.textContent = '关注';
                } else {
                    this.classList.add('followed');
                    this.textContent = '已关注';
                }
            });
        });
        
        // 顶部导航按钮点击效果
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', function() {
                navButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const buttonText = this.querySelector('span').textContent;
                console.log(`点击了: ${buttonText}`);
                
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
                const pageText = this.querySelector('div').textContent;
                console.log(`点击了底部导航: ${pageText}`);
                
                handleBottomNavClick(pageName, pageText);
            });
        });
        
        // 只给廖复新的卡片添加点击效果
        const craftsmanCards = document.querySelectorAll('.craftsman-card');
        craftsmanCards.forEach(card => {
            const craftsmanName = card.querySelector('.name').textContent;
            
            if (craftsmanName === '廖复新') {
                // 只为廖复新卡片添加点击事件
                card.addEventListener('click', function(e) {
                    // 如果点击的是关注按钮，不触发卡片跳转
                    if (e.target.classList.contains('follow-btn') || 
                        e.target.closest('.follow-btn')) {
                        return;
                    }
                    
                    console.log(`点击了廖复新的卡片`);
                    handleLiaoFuxinClick();
                });
                
                // 只为廖复新卡片添加悬停效果
                card.style.cursor = 'pointer';
                card.style.transition = 'all 0.3s ease';
            }
        });
    }
});

// 处理顶部导航按钮点击跳转
function handleNavButtonClick(buttonText) {
    switch(buttonText) {
        case '数字展馆':
            console.log('跳转到首页');
            window.location.href = '../home/index.html';
            break;
        case '木玩基因库':
            console.log('跳转到木玩基因库页面');
            window.location.href = '../gene-library/index.html';
            break;
        case '匠人数字档案':
            console.log('当前已在匠人数字档案页面');
            break;
        default:
            console.log('未知导航按钮:', buttonText);
    }
}

// 处理底部导航点击跳转
function handleBottomNavClick(pageName, pageText) {
    switch(pageName) {
        case 'museum':
            console.log('当前已在博物馆页面');
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
            // window.location.href = '../profile/index.html';
            break;
        default:
            console.log('未知页面:', pageName);
    }
}

// 处理廖复新卡片点击跳转
function handleLiaoFuxinClick() {
    console.log('跳转到廖复新详情页面');
    window.location.href = '../craftsman-detail/index.html';
}

// 添加触摸事件支持
document.addEventListener('touchstart', function() {}, {passive: true});