# 庞少鹏个人主页 V4.2 维护说明书

本版本在 V4.1 基础上做了两类调整：

1. **头像卡片重新居中**
   - 修复了头像与下方信息模块左右不对齐的问题
   - 头像区域仍然比最初版本更小，但现在视觉上与下方卡片对齐更自然

2. **背景视觉增强**
   - 增加了更丰富的网格、渐变光斑、斜向光影层
   - 让首页背景不再过于单调
   - 保持整体仍是学术主页风格，不会太花哨

---

## 一、这次你需要替换哪些文件

请把 GitHub 仓库根目录中的下面文件替换掉：

- `style.css`
- `README.md`

如果你已经使用了上一版 V4.1，则这次 **只需要替换这两个文件**。

如果你还没有替换到 V4.1，也可以直接整包替换：
- `index.html`
- `publications.html`
- `style.css`
- `script.js`
- `README.md`

---

## 二、当前项目推荐结构

```text
index.html
publications.html
students.html
blog.html
contact.html
style.css
script.js
README.md
psp.png
posts/
  research-note-1.html
  teaching-note-1.html
```

---

## 三、各个页面分别改什么

### 1. 首页
修改文件：

- `index.html`

首页主要负责展示最重要的信息，不建议塞太多内容。

你可以在首页修改这些区域：

#### A. 首屏信息
搜索这些文字：
- `Shaopeng Pang`
- `Associate Professor · Master's Supervisor`
- `Complex Systems Control · Neural Networks · Data Analytics`

这里可以修改：
- 姓名
- 头衔
- 一句话研究方向
- 首屏简介文字

#### B. 首屏按钮
搜索：
- `Publications`
- `Students`
- `Blog`
- `Google Scholar`
- `ORCID`
- `School Profile`

这里可以改成：
- 你希望显示的按钮名称
- 外部链接地址
- 是否增加新按钮

#### C. 简介区域
搜索：
- `aboutText`
- `aboutPoint1`
- `aboutPoint2`
- `aboutPoint3`

这里可以改成：
- 更正式的个人简介
- 教学课程
- 职务
- 邮箱

#### D. 首页论文预览
搜索：
- `publication-item`

这里是首页只展示几篇代表论文的区域。

---

### 2. 论文页
修改文件：

- `publications.html`

这个页面适合展示：
- 代表论文
- 全部论文
- 期刊、年份、DOI
- PDF 链接
- Google Scholar 跳转

#### 修改方法
搜索：
- `publication-item`

每一条论文结构类似这样：

```html
<article class="publication-item">
  <span class="pub-num">01</span>
  <div>
    <h3>论文标题</h3>
    <p>期刊 · 年份 · DOI</p>
  </div>
</article>
```

你只需要改：
- `<h3>` 里的标题
- `<p>` 里的期刊 / 年份 / DOI

#### 想新增论文
直接复制一个 `publication-item` 整块，再改内容即可。

---

### 3. 学生页
修改文件：

- `students.html`

这里用于展示：
- 在读学生
- 历届学生
- 去向
- 招生说明

#### 修改方法
搜索：
- `student-card`

每个学生条目结构类似：

```html
<div class="student-card">
  <strong>Student A</strong>
  <span>Research: Complex Network Control</span>
</div>
```

你可以改成：

```html
<div class="student-card">
  <strong>张三</strong>
  <span>研究方向：复杂网络控制</span>
</div>
```

#### 想新增学生
复制一个 `student-card` 即可。

---

### 4. 博客页
修改文件：

- `blog.html`

博客页只负责展示文章列表。

#### 修改方法
搜索：
- `post-card`

每篇文章列表项结构类似：

```html
<article class="post-card">
  <div class="post-meta">2026-04-07 · Research Note</div>
  <h3>文章标题</h3>
  <p>文章摘要</p>
  <div class="hero-links">
    <a class="secondary-btn" href="posts/research-note-1.html">Read more</a>
  </div>
</article>
```

你可以改：
- 日期
- 分类
- 标题
- 摘要
- 跳转链接

---

### 5. 博客文章详情页
修改文件：

- `posts/research-note-1.html`
- `posts/teaching-note-1.html`

#### 想增加一篇新文章
步骤如下：

1. 复制 `posts/research-note-1.html`
2. 改名，例如：
   - `posts/new-post-1.html`
3. 修改里面的：
   - 页面标题
   - 时间
   - 正文内容
4. 回到 `blog.html`
5. 新增一个 `post-card`，链接到新文件

---

### 6. 联系页
修改文件：

- `contact.html`

这里适合放：
- 邮箱
- 学院
- 学校
- Google Scholar
- ORCID
- AMiner
- 其他平台

#### 修改方法
搜索：
- `contact-box`

直接把里面的内容替换成你的最新联系方式即可。

---

## 四、头像怎么改

头像文件是：

- `psp.png`

要求：
- 文件名保持为 `psp.png`
- 与 `index.html` 放在同一目录

### 如果头像大小还想继续改
修改文件：

- `style.css`

搜索下面两个类：

- `.portrait-card`
- `.portrait`

#### 当前控制头像外框大小的主要位置
```css
.portrait-card{
  min-height:300px;
  max-width:78%;
}
```

#### 你可以这样调整
- 想更小：把 `78%` 改成 `70%`
- 想更大：把 `78%` 改成 `85%` 或 `90%`

如果你想让图片高度更矮一点，还可以改：

```css
.portrait{min-height:300px;}
```

---

## 五、背景如果还想更高级，可以继续加什么

当前版本已经做了：
- 网格背景
- 渐变光斑
- 斜向光影层
- 头像边缘发光

如果还想继续增强设计感，建议优先加下面这些：

### 1. 更强的首屏装饰
可以继续加：
- 细线框圆环
- 模糊几何块
- 低透明粒子点
- 小型浮动数据卡片

### 2. 论文卡片 hover 效果
可以加：
- 悬停时轻微放大
- 边框发光
- 标题颜色变化
- DOI 小按钮

### 3. 学术统计模块
首页可新增：
- Papers
- Projects
- Students
- Research Areas

这类数字卡片会让主页更有“重点感”。

### 4. 时间线模块
可以在首页或单独页面加：
- 教育经历
- 工作经历
- 重要项目节点

### 5. 博客封面图区
可以让博客页更像正式网站，而不是纯文本列表。

---

## 六、如果你只想改颜色和背景，主要改哪里

修改文件：

- `style.css`

### 主要颜色变量在文件顶部
搜索：

```css
:root{
```

你会看到类似：

```css
--bg
--text
--muted
--accent
--accent2
```

#### 说明
- `--bg`：背景色
- `--text`：主文字颜色
- `--muted`：次级文字颜色
- `--accent`：主高亮色
- `--accent2`：次高亮色

想换整体网站气质，改这里最有效。

---

## 七、中英切换和明暗切换改哪里

修改文件：

- `script.js`

### 1. 多语言文本
搜索：

- `const translations = {`

里面有：
- `en`
- `zh`

你想改中英文文案，就直接改这里。

### 2. 明暗模式
搜索：
- `applyTheme`
- `site-theme`

如果以后你想默认亮色，可以把默认值从：

```js
let currentTheme = localStorage.getItem('site-theme') || 'dark';
```

改成：

```js
let currentTheme = localStorage.getItem('site-theme') || 'light';
```

---

## 八、更新后怎么发布

1. 把修改后的文件上传到 GitHub 仓库
2. 提交 commit
3. push 到 GitHub
4. Cloudflare Pages 会自动重新部署

---

## 九、这次版本建议你现在替换什么

### 最少替换
如果你已经是上一版 V4.1：
- `style.css`
- `README.md`

### 推荐替换
为了避免版本不一致，建议这次直接替换整个压缩包里的所有文件。

---

## 十、下一步最推荐继续升级什么

建议优先级：

1. 把论文页里的条目继续补全
2. 把 students 页面换成真实学生信息
3. 博客新增 2-3 篇真实文章
4. 首页增加学术统计模块
5. 论文页增加 DOI / PDF 按钮
6. 首页增加时间线模块

