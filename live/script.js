// script.js

// 发送评论功能（适配从下往上排列，新评论自动显示在底部）
function sendComment() {
    const commentInput = document.getElementById('commentInput');
    const content = commentInput.value.trim();
    if (content) {
        const commentsList = document.querySelector('.comments-list');
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        commentItem.innerHTML = `
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="用户头像" class="comment-avatar">
            <div class="comment-content">
                <div class="comment-username">用户名</div>
                <div class="comment-text">${content}</div>
            </div>
        `;
        
        // 新评论添加到列表最前面（因CSS反转，视觉上显示在底部）
        commentsList.prepend(commentItem);
        commentInput.value = '';
        
        // 自动滚动到最顶部（因CSS反转，scrollTop=0对应视觉底部，确保新评论可见）
        commentsList.scrollTop = 0;
    }
}

// 关注按钮功能
document.querySelector('.follow-btn').addEventListener('click', function() {
    if (this.textContent === '关注') {
        this.textContent = '已关注';
        this.style.backgroundColor = '#666';
    } else {
        this.textContent = '关注';
        this.style.backgroundColor = '#ff5000';
    }
});

// 绑定发送按钮事件
document.querySelector('.send-btn').addEventListener('click', sendComment);

// 绑定输入框回车事件
document.getElementById('commentInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendComment();
    }
});

// 关闭按钮事件 - 返回大工坊页面
document.querySelector('.close-btn').addEventListener('click', function() {
    console.log('关闭直播评论界面，返回大工坊页面');
    window.location.href = '../workshop/index.html';
});

// 表情按钮功能
document.querySelector('.emoji-btn').addEventListener('click', function() {
    console.log('点击了表情按钮');
    // 可以在这里添加表情选择功能
});

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ 直播评论页面加载完成');
    
    // 为关注按钮添加悬停效果
    const followBtn = document.querySelector('.follow-btn');
    followBtn.style.cursor = 'pointer';
    followBtn.style.transition = 'all 0.2s ease';
    
    followBtn.addEventListener('mouseenter', function() {
        this.style.opacity = '0.8';
        this.style.transform = 'scale(1.05)';
    });
    
    followBtn.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
    });
    
    // 为关闭按钮添加悬停效果
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.style.transition = 'all 0.2s ease';
    
    closeBtn.addEventListener('mouseenter', function() {
        this.style.color = '#ff5000';
        this.style.transform = 'scale(1.2)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.color = '#666';
        this.style.transform = 'scale(1)';
    });
    
    // 为发送按钮添加悬停效果
    const sendBtn = document.querySelector('.send-btn');
    sendBtn.style.transition = 'all 0.2s ease';
    
    sendBtn.addEventListener('mouseenter', function() {
        this.style.opacity = '0.8';
        this.style.transform = 'scale(1.1)';
    });
    
    sendBtn.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
    });
    
    // 为表情按钮添加悬停效果
    const emojiBtn = document.querySelector('.emoji-btn');
    emojiBtn.style.transition = 'all 0.2s ease';
    
    emojiBtn.addEventListener('mouseenter', function() {
        this.style.opacity = '0.8';
        this.style.transform = 'scale(1.1)';
    });
    
    emojiBtn.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
    });
    
    // 为评论输入框添加焦点效果
    const commentInput = document.getElementById('commentInput');
    commentInput.style.transition = 'all 0.2s ease';
    
    commentInput.addEventListener('focus', function() {
        this.style.borderColor = '#07c160';
        this.style.boxShadow = '0 0 0 2px rgba(7, 193, 96, 0.1)';
    });
    
    commentInput.addEventListener('blur', function() {
        this.style.borderColor = '#ddd';
        this.style.boxShadow = 'none';
    });
});

// 添加触摸事件支持
document.addEventListener('touchstart', function() {}, {passive: true});