// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ 研学教育区页面加载完成');
    
    // 分类按钮点击事件
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 筛选按钮点击事件
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 底部导航点击事件 - 修改为页面跳转
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const pageName = this.getAttribute('data-page');
            console.log(`点击了底部导航: ${pageName}`);
            
            // 处理底部导航跳转
            handleBottomNavClick(pageName);
        });
    });

    // 功能按钮点击事件
    const btnItems = document.querySelectorAll('.btn-item');
    btnItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            console.log(`点击了功能按钮: ${text}`);
            alert(`点击了${text}功能`);
        });
    });

    // 课程卡片点击事件 - 修改为跳转到课程详情页面
    const courseItems = document.querySelectorAll('.course-item');
    courseItems.forEach(item => {
        item.addEventListener('click', function() {
            const courseTitle = this.querySelector('.course-title').textContent;
            console.log(`点击了课程: ${courseTitle}`);
            
            // 处理课程点击跳转
            handleCourseClick(courseTitle);
        });
        
        // 添加悬停效果
        item.style.cursor = 'pointer';
        item.style.transition = 'all 0.2s ease';
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        });
    });

    // 搜索功能
    const searchBox = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBox && searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchText = searchBox.value.trim();
            if (searchText) {
                console.log(`搜索: ${searchText}`);
                alert(`搜索课程: ${searchText}`);
            }
        });
        
        searchBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchText = searchBox.value.trim();
                if (searchText) {
                    console.log(`搜索: ${searchText}`);
                    alert(`搜索课程: ${searchText}`);
                }
            }
        });
    }
});

// 处理底部导航跳转
function handleBottomNavClick(pageName) {
    const navItems = document.querySelectorAll('.nav-item');
    
    switch(pageName) {
        case 'museum':
            console.log('跳转到博物馆页面');
            // 移除所有active状态，为跳转做准备
            navItems.forEach(item => item.classList.remove('active'));
            window.location.href = '../home/index.html';
            break;
            
        case 'industry':
            console.log('跳转到产业带页面');
            navItems.forEach(item => item.classList.remove('active'));
            window.location.href = '../industry/index.html';
            break;
            
        case 'workshop':
            console.log('当前已在大工坊页面');
            // 当前页面就在大工坊下，不需要跳转
            navItems.forEach(item => item.classList.remove('active'));
            document.querySelector('[data-page="workshop"]').classList.add('active');
            break;
            
        case 'profile':
            console.log('跳转到我的页面');
            navItems.forEach(item => item.classList.remove('active'));
            window.location.href = '../profile/index.html';
            break;
            
        default:
            console.log('未知页面:', pageName);
    }
}

// 新增：处理课程点击跳转
function handleCourseClick(courseTitle) {
    console.log(`处理课程跳转: ${courseTitle}`);
    
    switch(courseTitle) {
        case '动物拼插木玩课':
            console.log('跳转到动物拼插木玩课详情页面');
            window.location.href = '../course-detail/index.html';
            break;
            
        case '木制轨道车组装课':
            console.log('跳转到木制轨道车组装课详情页面');
            //window.location.href = '../course-detail/wooden-track-car.html';
            break;
            
        case '亲子木制风铃课':
            console.log('跳转到亲子木制风铃课详情页面');
            //window.location.href = '../course-detail/family-wind-chime.html';
            break;
            
        default:
            console.log('未知课程:', courseTitle);
            alert(`课程 ${courseTitle} 详情页面开发中...`);
    }
}

// 添加触摸事件支持
document.addEventListener('touchstart', function() {}, {passive: true});