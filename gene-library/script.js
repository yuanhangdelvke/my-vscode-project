// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ 页面加载完成');
    
    if (document.querySelector('.bottom-nav')) {
        console.log('🏠 博物馆页面初始化');
        
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
        
        // 商品项点击效果
        const goodsItems = document.querySelectorAll('.goods-item');
        goodsItems.forEach(item => {
            item.addEventListener('click', function() {
                const text = this.querySelector('p').textContent;
                alert(`点击了${text}商品`);
            });
        });
        
        // 查看全部链接点击效果 - 分类的查看全部
        const viewAllLinks = document.querySelectorAll('.view-all');
        viewAllLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('点击了分类查看全部');
                
                // 获取父级section的标题来判断是哪个分类
                const section = this.closest('.section');
                const sectionTitle = section.querySelector('.section-title h3').textContent;
                console.log(`分类: ${sectionTitle}`);
                
                handleCategoryViewAll(sectionTitle);
            });
        });
        
        // 专门处理木玩藏品展示的"查看全部"链接
        const collectionViewAll = document.querySelector('.wooden-toys-collection .section-title a');
        if (collectionViewAll) {
            collectionViewAll.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('点击了木玩藏品展示的查看全部');
                handleCollectionViewAll();
            });
        }
    }
});

// 处理顶部导航按钮点击跳转
function handleNavButtonClick(buttonText) {
    switch(buttonText) {
        case '木玩基因库':
            console.log('当前已在木玩基因库页面');
            alert('当前已在木玩基因库页面');
            break;
        case '匠人数字档案':
            console.log('跳转到匠人数字档案页面');
            window.location.href = '../craftsman-archive/index.html';
            break;
        case '数字展馆':
            console.log('跳转到首页');
            window.location.href = '../home/index.html';
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
            alert('当前已在博物馆页面');
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

// 处理木玩藏品展示的"查看全部"跳转
function handleCollectionViewAll() {
    console.log('跳转到木玩藏品展示页面');
    window.location.href = '../wooden-collection/index.html';
}

// 新增：处理分类查看全部跳转
function handleCategoryViewAll(categoryName) {
    console.log(`跳转到${categoryName}详情页面`);
    
    switch(categoryName) {
        case '民俗类木玩':
            console.log('跳转到民俗类木玩详情页面');
            window.location.href = '../wooden-details/index.html';
            break;
        case '益智类木玩':
            console.log('跳转到益智类木玩详情页面');
            window.location.href = '../wooden-details/index.html';
            break;
        default:
            console.log('未知分类:', categoryName);
            alert(`正在跳转到${categoryName}详情页面...`);
    }
}

// 添加触摸事件支持
document.addEventListener('touchstart', function() {}, {passive: true});