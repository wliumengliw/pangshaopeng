const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const translations = {
  en: {
    siteLabel:"Academic Homepage",navHome:"Home",navPublications:"Publications",navStudents:"Students",navBlog:"Blog",navContact:"Contact",
    heroMeta:"Associate Professor · Master's Supervisor",heroSubtitle:"Complex Systems Control · Neural Networks · Data Analytics",
    heroText:"Associate Professor and Master's Supervisor at Qilu University of Technology, focusing on complex systems control, neural networks, and data-driven analysis.",
    schoolProfile:"School Profile",kw1:"Complex Networks",kw2:"Control Theory",kw3:"Neural Networks",kw4:"Data Analytics",
    focusTitle:"At a Glance",statLabel1:"Title",statLabel2:"Role",statLabel3:"Institute",statLabel4:"Degree",
    stat1:"Associate Professor",stat2:"Master's Supervisor",stat3:"Intelligent Control & Simulation Algorithms",stat4:"Ph.D. in Engineering",
    aboutKicker:"About",aboutTitle:"Biography",
    aboutText:"Shaopeng Pang is an Associate Professor and Master's Supervisor at the School of Electrical Engineering and Automation, Qilu University of Technology. He received his Ph.D. from Beihang University in 2018 and joined Qilu University of Technology in the same year. His work centers on complex systems control, neural networks, and data analytics.",
    aboutPoint1:"Deputy Director, Institute of Intelligent Control and Simulation Algorithms",aboutPoint2:"Teaching: MATLAB and Power System Simulation",aboutPoint3:"Contact: pang_shao_peng@163.com",
    researchKicker:"Research",researchTitle:"Research Directions",researchLead:"Three major themes define the current research profile.",
    research1Title:"Complex Systems Control",research1Text:"Controllability, robustness, and edge dynamics in complex and temporal networks.",
    research2Title:"Neural Networks",research2Text:"Learning-based modeling and intelligent recognition in engineering and interdisciplinary scenarios.",
    research3Title:"Data Analytics",research3Text:"Data-driven analysis, structured modeling, and decision support for complex systems.",
    pubKicker:"Publications",pubTitle:"Selected Publications",viewScholar:"View full list on Google Scholar",
    pub1Title:"Two-dimensional ECG-based cardiac arrhythmia classification using DSE-ResNet",pub1Meta:"Computer Methods and Programs in Biomedicine · 218:106692 · 2022",
    pub2Title:"Target control of edge dynamics in complex networks",pub2Meta:"Physica A: Statistical Mechanics and its Applications · 512:14-26 · 2018 · DOI: 10.1016/j.physa.2018.08.011",
    pub3Title:"Controllability limit of edge dynamics in complex networks",pub3Meta:"Physical Review E · 100(2):022318 · 2019 · DOI: 10.1103/PhysRevE.100.022318",
    studentKicker:"Students",studentTitle:"Students & Alumni",studentLead:"Demo content for current students and alumni. Replace later with real records.",
    currentStudents:"Current Students",alumniStudents:"Alumni",studentADirection:"Research: Complex Network Control",studentBDirection:"Research: Neural Signal Analysis",studentCDirection:"Now at: University / Enterprise Demo",studentDDirection:"Now at: Research Institute Demo",
    linksKicker:"Links",linksTitle:"Academic & Social Platforms",linkScholar:"Publications and citations",linkAminer:"Academic profile",linkSchool:"School Homepage",linkSchoolDesc:"Official university profile",linkDouyin:"Short video / media channel",
    contactKicker:"Contact",contactTitle:"Open for academic communication",contactText:"For research collaboration, student communication, and academic exchange, please contact via email or institutional profile.",contactEmail:"Email",contactSchool:"School of Electrical Engineering and Automation",contactUni:"Qilu University of Technology",
    pagePubTitle:"Publications",pagePubText:"A dedicated page for selected publications, with room for journals, years, DOI links, and future filtering.",
    pageStuTitle:"Students",pageStuText:"A dedicated page for current students, alumni, and future admissions notes.",
    pageBlogTitle:"Blog",pageBlogText:"A dedicated page for notes, updates, and blog posts. Click into a post to read more.",
    pageContactTitle:"Contact",pageContactText:"A dedicated page for contact details and external platforms.",
    recentPosts:"Recent Posts",post1Title:"Research Note: Edge Dynamics and Controllability",post1Text:"A demo blog post page for research notes and academic updates.",readMore:"Read more",
    post2Title:"Teaching Note: MATLAB and Simulation",post2Text:"A demo post for course-related summaries, reflections, and teaching records."
  },
  zh: {
    siteLabel:"个人学术主页",navHome:"主页",navPublications:"论文",navStudents:"学生",navBlog:"博客",navContact:"联系",
    heroMeta:"副教授 · 硕士生导师",heroSubtitle:"复杂系统控制 · 神经网络 · 数据分析",
    heroText:"齐鲁工业大学副教授、硕士生导师，研究聚焦复杂系统控制、神经网络与数据驱动分析。",
    schoolProfile:"教师主页",kw1:"复杂网络",kw2:"控制理论",kw3:"神经网络",kw4:"数据分析",
    focusTitle:"关键信息",statLabel1:"职称",statLabel2:"身份",statLabel3:"研究所",statLabel4:"学位",
    stat1:"副教授",stat2:"硕士生导师",stat3:"智能控制与仿真算法研究所",stat4:"工学博士",
    aboutKicker:"简介",aboutTitle:"个人简介",
    aboutText:"庞少鹏，齐鲁工业大学电气工程与自动化学院副教授、硕士生导师。2018 年毕业于北京航空航天大学并获博士学位，同年进入齐鲁工业大学工作。主要研究方向包括复杂系统控制、神经网络与数据分析。",
    aboutPoint1:"智能控制与仿真算法研究所副所长",aboutPoint2:"主讲：MATLAB 及电力系统仿真",aboutPoint3:"联系邮箱：pang_shao_peng@163.com",
    researchKicker:"研究方向",researchTitle:"研究主题",researchLead:"当前学术工作主要围绕三个核心方向展开。",
    research1Title:"复杂系统控制",research1Text:"研究复杂网络与时序网络中的可控性、鲁棒性与边动态问题。",
    research2Title:"神经网络",research2Text:"探索学习模型与智能识别方法在工程与交叉领域中的应用。",
    research3Title:"数据分析",research3Text:"面向复杂系统开展数据驱动分析、结构化建模与决策支持研究。",
    pubKicker:"论文成果",pubTitle:"代表性论文",viewScholar:"在 Google Scholar 查看完整列表",
    pub1Title:"基于 DSE-ResNet 的二维心电图心律失常分类",pub1Meta:"Computer Methods and Programs in Biomedicine · 218:106692 · 2022",
    pub2Title:"复杂网络中边动态系统的目标控制",pub2Meta:"Physica A · 512:14-26 · 2018 · DOI: 10.1016/j.physa.2018.08.011",
    pub3Title:"复杂网络中边动态系统可控性的极限",pub3Meta:"Physical Review E · 100(2):022318 · 2019 · DOI: 10.1103/PhysRevE.100.022318",
    studentKicker:"学生",studentTitle:"学生与毕业生",studentLead:"这里先放 demo，后续可替换为真实学生信息与去向。",
    currentStudents:"在读学生",alumniStudents:"历届学生",studentADirection:"研究方向：复杂网络控制",studentBDirection:"研究方向：神经信号分析",studentCDirection:"当前去向：高校 / 企业示例",studentDDirection:"当前去向：科研院所示例",
    linksKicker:"链接",linksTitle:"学术与社交平台",linkScholar:"论文与引用",linkAminer:"学术画像",linkSchool:"学校主页",linkSchoolDesc:"官方教师主页",linkDouyin:"短视频 / 媒体账号",
    contactKicker:"联系方式",contactTitle:"欢迎学术交流",contactText:"如需科研合作、学生交流或学术联系，可通过邮箱或学校主页联系。",contactEmail:"邮箱",contactSchool:"电气工程与自动化学院",contactUni:"齐鲁工业大学",
    pagePubTitle:"论文页",pagePubText:"这里是独立论文页面，后续可以补充期刊、年份、DOI 和筛选功能。",
    pageStuTitle:"学生页",pageStuText:"这里是独立学生页面，后续可以补充在读学生、毕业学生与招生说明。",
    pageBlogTitle:"博客",pageBlogText:"这里是独立博客页面，用于记录笔记、更新和文章。点击可进入详情页。",
    pageContactTitle:"联系页",pageContactText:"这里是独立联系方式页面与外部平台入口。",
    recentPosts:"最新文章",post1Title:"研究笔记：边动态与可控性",post1Text:"一个示例博客文章页，可用于记录科研笔记和学术动态。",readMore:"阅读全文",
    post2Title:"教学笔记：MATLAB 与仿真",post2Text:"一个示例文章，用于课程总结、教学反思和教学记录。"
  }
};

let currentLang = localStorage.getItem('site-lang') || 'en';
let currentTheme = localStorage.getItem('site-theme') || 'dark';

function applyTranslations(lang){
  document.querySelectorAll('[data-i18n]').forEach((el)=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
  if (langToggle) langToggle.textContent = lang === 'en' ? '中文' : 'EN';
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  localStorage.setItem('site-lang', lang);
}
function applyTheme(theme){
  body.setAttribute('data-theme', theme);
  if (themeToggle) themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
  localStorage.setItem('site-theme', theme);
}
if(menuBtn && mobileNav){
  menuBtn.addEventListener('click', ()=>mobileNav.classList.toggle('open'));
  mobileNav.querySelectorAll('a').forEach((link)=>link.addEventListener('click', ()=>mobileNav.classList.remove('open')));
}
if(langToggle){
  langToggle.addEventListener('click', ()=>{ currentLang = currentLang === 'en' ? 'zh' : 'en'; applyTranslations(currentLang); });
}
if(themeToggle){
  themeToggle.addEventListener('click', ()=>{ currentTheme = currentTheme === 'dark' ? 'light' : 'dark'; applyTheme(currentTheme); });
}
applyTranslations(currentLang);
applyTheme(currentTheme);

const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:.14});
reveals.forEach((el)=>io.observe(el));
