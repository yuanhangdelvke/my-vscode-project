// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ 匠人详情页面加载完成');
    
    // 关注按钮交互
    const followBtn = document.querySelector('.follow-btn');
    if (followBtn) {
        followBtn.addEventListener('click', function() {
            if (this.textContent === '+关注') {
                this.textContent = '已关注';
                this.style.backgroundColor = '#d4af37';
            } else {
                this.textContent = '+关注';
                this.style.backgroundColor = '#a07d50';
            }
        });
        
        // 添加悬停效果
        followBtn.style.transition = 'all 0.2s ease';
        followBtn.addEventListener('mouseenter', function() {
            this.style.opacity = '0.8';
            this.style.transform = 'scale(1.05)';
        });
        
        followBtn.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
    }
    
    // 技法视频区域点击跳转
    const videoImg = document.querySelector('.video-img');
    if (videoImg) {
        videoImg.addEventListener('click', function() {
            console.log('点击了技法视频图片');
            handleVideoClick();
        });
        
        // 为视频图片添加悬停效果
        videoImg.style.cursor = 'pointer';
        videoImg.style.transition = 'all 0.2s ease';
        
        videoImg.addEventListener('mouseenter', function() {
            this.style.opacity = '0.9';
            this.style.transform = 'scale(1.02)';
        });
        
        videoImg.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
    }
    
    // 播放按钮点击跳转
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡，避免触发视频图片的点击事件
            console.log('点击了播放按钮');
            handleVideoClick();
        });
        
        // 播放按钮悬停效果
        playBtn.style.cursor = 'pointer';
        playBtn.style.transition = 'all 0.2s ease';
        
        playBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1.1)';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        });
        
        playBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1)';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        });
    }
    
    // 返回按钮悬停效果
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.style.transition = 'all 0.2s ease';
        
        backBtn.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7';
        });
        
        backBtn.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    }
    
    // 代表作图片悬停效果
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            img.style.transition = 'all 0.2s ease';
            img.style.cursor = 'pointer';
            
            img.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });
            
            // 代表作图片点击事件（可选）
            img.addEventListener('click', function() {
                console.log('点击了代表作图片');
                // 可以在这里添加代表作图片的放大查看功能
            });
        }
    });
});

// 处理技法视频点击跳转
function handleVideoClick() {
    console.log('跳转到B站技法视频');
    
    // B站视频链接
    const videoUrl = 'https://www.bilibili.com/video/BV1fo4y1p7PE/?spm_id_from=333.337.search-card.all.click&vd_source=10594f36cf0fa5ae1a64a71229505443';
    
    // 在新标签页中打开B站视频
    window.open(videoUrl, '_blank');
}

// 添加触摸事件支持
document.addEventListener('touchstart', function() {}, {passive: true});