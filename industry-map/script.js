// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ 产业地图页面加载完成');
    
    // 返回按钮点击事件
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('点击了返回按钮');
            handleBackClick();
        });
        
        // 添加悬停效果
        backBtn.style.cursor = 'pointer';
        backBtn.style.transition = 'opacity 0.2s ease';
        
        backBtn.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7';
        });
        
        backBtn.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    }
    
    // 底部导航切换
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有激活状态
            navItems.forEach(nav => nav.classList.remove('active'));
            // 给当前点击项添加激活状态
            this.classList.add('active');
            
            const pageName = this.querySelector('span').textContent;
            console.log(`切换到「${pageName}」页面`);
            
            // 处理底部导航跳转
            handleBottomNavClick(pageName);
        });
        
        // 添加悬停效果
        item.style.cursor = 'pointer';
        item.style.transition = 'all 0.2s ease';
    });
    
    // 企业进入按钮
    const enterBtns = document.querySelectorAll('.enter-btn');
    enterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const companyItem = this.closest('.company-item');
            const companyName = companyItem.querySelector('h3').textContent;
            console.log(`进入「${companyName}」详情页`);
            
            // 处理企业详情跳转
            handleCompanyEnter(companyName);
        });
        
        // 添加悬停效果
        btn.style.cursor = 'pointer';
        btn.style.transition = 'all 0.2s ease';
        
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(2px)';
            this.style.color = '#8b6b4c';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.color = '#000000';
        });
    });
    
    // 企业卡片点击效果（可选）
    const companyItems = document.querySelectorAll('.company-item');
    companyItems.forEach(item => {
        // 添加悬停效果
        item.style.cursor = 'pointer';
        item.style.transition = 'all 0.2s ease';
        
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
            this.style.transform = 'translateY(-1px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.transform = 'translateY(0)';
        });
    });
});

// 处理返回按钮点击
function handleBackClick() {
    console.log('返回产业带页面');
    window.location.href = '../industry/index.html';
}

// 处理底部导航点击跳转
function handleBottomNavClick(pageName) {
    switch(pageName) {
        case '博物馆':
            console.log('跳转到博物馆页面');
            window.location.href = '../home/index.html';
            break;
        case '产业带':
            console.log('当前已在产业带相关页面');
            break;
        case '大工坊':
            console.log('跳转到大工坊页面');
            // window.location.href = '../workshop/index.html';
            break;
        case '我的':
            console.log('跳转到我的页面');
            // window.location.href = '../profile/index.html';
            break;
        default:
            console.log('未知页面:', pageName);
    }
}

// 处理企业进入按钮点击
function handleCompanyEnter(companyName) {
    console.log(`跳转到 ${companyName} 详情页面`);
    
    // 根据企业名称生成对应的详情页面路径
    const companySlug = generateCompanySlug(companyName);
    window.location.href = `../company-detail/index.html`;
}

// 生成企业URL标识
function generateCompanySlug(companyName) {
    // 将中文企业名转换为拼音或英文标识
    const slugMap = {
        '浙江佳禾玩具有限公司': 'jiahe-toys',
        '浙江金马工艺品有限公司': 'jinma-crafts',
        '云和锡安玩具有限公司': 'xian-toys',
        '云和木玩世家有限公司': 'wooden-family',
        '浙江乐玩玩具公司': 'lewan-toys',
        '云和创意工坊': 'creative-workshop'
    };
    
    return slugMap[companyName] || companyName.replace(/[^\w\u4e00-\u9fa5]/g, '-').toLowerCase();
}

// 添加触摸事件支持
document.addEventListener('touchstart', function() {}, {passive: true});