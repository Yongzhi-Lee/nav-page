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

function changeEngine() {
    const engine = document.getElementById('engine-select').value;
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');

    if (engine === 'bing') {
        form.action = 'https://www.bing.com/search';
        input.name = 'q';
        input.placeholder = '使用 Bing 搜索...';
    } else if (engine === 'google') {
        form.action = 'https://www.google.com/search';
        input.name = 'q';
        input.placeholder = '使用 Google 搜索...';
    } else if (engine === 'baidu') {
        form.action = 'https://www.baidu.com/s';
        input.name = 'wd'; // 百度独有的搜索参数
        input.placeholder = '使用百度搜索...';
    }
    
    // 切换后自动让输入框获取焦点，方便直接打字
    input.focus();
}