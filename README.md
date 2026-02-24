# 🔮 我的专属导航主页 (Personal Navigation Page)

一个基于**毛玻璃质感 (Glassmorphism)** 设计的现代极简浏览器起始页。无需数据库，纯前端代码（HTML/CSS/JS）实现，支持一键免费部署到 GitHub Pages。

> **💡 预览提示**：你可以将此处的文字替换为你自己部署后的 GitHub Pages 链接，例如 `https://你的用户名.github.io/你的仓库名/`

## ✨ 核心特性

* 🎨 **现代美学**：优雅的毛玻璃卡片设计与深色保底背景，支持轻松替换自定义高清风景壁纸。
* ⏰ **动态时钟**：首页居中显示实时更新的系统日期与时间。
* 🔍 **聚合搜索**：内置无缝切换的搜索引擎下拉菜单（支持必应 Bing、谷歌 Google、百度 Baidu）。
* 🔖 **书签收纳**：分类清晰的书签模块，卡片高度固定，链接超过限制后自动开启内嵌的半透明滚动条，保持排版整洁。
* 🏷️ **自动抓取图标**：添加书签只需输入网址，即可通过接口自动抓取并显示目标网站的专属 Favicon 小图标。
* 🚀 **零成本部署**：全静态文件，完美支持 GitHub Pages 免费托管。

---

## 🛠️ 文件结构

* `index.html`：网页主体结构、搜索框表单与书签链接。
* `style.css`：毛玻璃样式、排版布局、背景图设置及滚动条美化。
* `script.js`：包含动态时钟的走时逻辑与搜索引擎的切换功能。
* `bg.jpg`：你的自定义全屏背景壁纸。
* `favicon.png` / `favicon.ico`：网站的浏览器标签页小图标。

---

## 🚀 如何自定义你的主页

### 1. 修改背景图片
1. 准备一张高质量的壁纸，重命名为 `bg.jpg`。
2. 上传并覆盖仓库目录下的同名文件即可。
*(如果需要使用网络图片，请前往 `style.css` 修改 `.bg-image` 中的 `url()` 链接)*。

### 2. 添加或修改书签链接
打开 `index.html`，找到 `<main class="bookmarks">` 区域。复制或修改现有的 `<a>` 标签即可：
```html
<a href="[https://你的网址.com](https://你的网址.com)" target="_blank">
  <img src="[https://www.google.com/s2/favicons?sz=64&domain_url=你的网址.com](https://www.google.com/s2/favicons?sz=64&domain_url=你的网址.com)" alt="icon">
  网站名称
</a>
