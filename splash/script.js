// 启动页自动跳转逻辑
window.addEventListener('load', function() {
    // 检查当前页面是否为启动页
    if (document.querySelector('.splash-screen')) {
        console.log('启动页加载完成，5秒后跳转到首页');
        
        // 5秒后自动跳转到首页
        setTimeout(function() {
            // 跳转到home文件夹下的首页
            window.location.href = '../home/index.html';
        }, 5000); 
    }
});