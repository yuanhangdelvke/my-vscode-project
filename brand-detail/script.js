// script.js - 仅米米智玩可跳转版本

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ 品牌列表页面加载完成');
    
    // 品牌项点击事件 - 只处理米米智玩
    const brandItems = document.querySelectorAll('.brand-item');
    brandItems.forEach(item => {
        const brandName = item.querySelector('h2').textContent;
        
        if (brandName === '米米智玩') {
            // 只为米米智玩添加点击事件
            item.addEventListener('click', function() {
                console.log('点击了米米智玩品牌');
                handleMimiBrandClick();
            });
            
            // 只为米米智玩添加悬停效果
            item.style.cursor = 'pointer';
            item.style.transition = 'all 0.2s ease';
            
            item.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f8f5f0';
                this.style.transform = 'translateX(5px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
                this.style.transform = 'translateX(0)';
            });
        } else {
            // 其他品牌添加提示
            item.addEventListener('click', function() {
                const brandName = this.querySelector('h2').textContent;
                console.log(`点击了${brandName}，该品牌详情页面暂未开放`);
                // 可以添加提示信息
                // alert(`${brandName}品牌详情页面正在建设中...`);
            });
        }
    });
    
    // 返回按钮悬停效果
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.style.transition = 'color 0.2s ease';
        
        backBtn.addEventListener('mouseenter', function() {
            this.style.color = '#8b6b4c';
        });
        
        backBtn.addEventListener('mouseleave', function() {
            this.style.color = '#333';
        });
    }
});

// 处理米米智玩点击跳转
function handleMimiBrandClick() {
    console.log('跳转到米米智玩品牌故事页面');
    window.location.href = '../brand-story-mimi/index.html';
}

// 添加触摸事件支持
document.addEventListener('touchstart', function() {}, {passive: true});