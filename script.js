function updateTime() {
    const now = new Date();
    
    // 格式化时间 (补零)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
    
    // 格式化日期
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    const day = days[now.getDay()];
    
    document.getElementById('date').textContent = `${year}年${month}月${date}日 星期${day}`;
}

// 每秒更新一次
setInterval(updateTime, 1000);
// 页面加载时立即执行一次
updateTime();