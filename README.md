![image](https://github.com/user-attachments/assets/0d83f348-c022-4635-80cb-dca7d985ce1c)<div align="center">

# 🐱 Claude Code 猫猫学院

**小虾猫带你从入门到精通 Claude Code**

基于 Claude Code 官方文档和各类开源教程打造，一个交互式的静态网页教程，无需后端，打开即学！

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-GitHub%20Pages-blue)](https://abysscat-yj.github.io/claude-code-cat-learning-lab/)

<img src="https://img.shields.io/badge/modules-7-orange" /> <img src="https://img.shields.io/badge/steps-55-green" /> <img src="https://img.shields.io/badge/backend-none-lightgrey" />

</div>

---

## Preview

> 纯前端项目，双击 `index.html` 即可体验，也可部署到 GitHub Pages。

![image](https://github.com/user-attachments/assets/063b4e72-5c10-44db-9772-b10b674fc472)


---

## Features

- **7 大模块 / 55 个步骤** — 从安装到 MCP、Sub-Agents、Agent SDK 的完整学习路径
- **小虾猫导师** — 精细 SVG 角色，带打字机效果的语音气泡，多种表情状态
- **零依赖** — 纯 HTML + CSS + JS，无框架、无构建、无后端
- **暗色/亮色主题** — 一键切换，自动记忆偏好
- **学习进度追踪** — localStorage 持久化，步骤级进度条
- **响应式布局** — 桌面端侧栏导航，移动端抽屉式菜单
- **代码块一键复制** — 所有示例代码均可复制

---

## Modules

| # | 模块 | 内容 | 步骤数 |
|---|------|------|--------|
| 1 | 🚀 欢迎 & 安装 | Claude Code 是什么、四层技术栈、安装验证 | 5 |
| 2 | 👣 初步探索 | Agentic Loop、五大原子操作、工具风险与权限、上下文管理 | 10 |
| 3 | 💻 代码实战 | 文件读写、代码修改、测试、重构、工具组合涌现、Bash | 8 |
| 4 | 🌿 Git 工作流 | 智能提交、分支管理、PR 创建、冲突解决 | 5 |
| 5 | 🧠 CLAUDE.md 与记忆 | 五层记忆架构、认知经济学、条件作用域、Auto Memory | 8 |
| 6 | ⚡ Hooks 与 Skills | AI 中间件、Stop Hook、危险命令拦截、自动格式化、任务型 Skill | 10 |
| 7 | 🔌 MCP 与进阶 | MCP 协议、实战配置、子代理设计模式、Agent SDK、Harness 全貌 | 9 |

---

## Quick Start

```bash
# 方式一：直接打开
open index.html

# 方式二：本地服务器（避免某些浏览器的 file:// 限制）
npx serve .

# 方式三：Python
python3 -m http.server 8080
```

---

## Tech Stack

| 层 | 技术 |
|----|------|
| 结构 | 语义化 HTML5 |
| 样式 | CSS3（CSS Variables、Grid、Flexbox、Glassmorphism） |
| 逻辑 | Vanilla JavaScript（ES6+、IIFE 模块化） |
| 存储 | localStorage（进度、主题偏好） |
| 图形 | 内联 SVG（渐变、滤镜、动画） |

---

## Project Structure

```
claude-code-cat-learning-lab/
├── index.html          # 主页面 + 内联 SVG 猫角色
├── css/
│   ├── style.css       # 全局样式、布局、主题
│   └── cat.css         # 猫角色动画、气泡样式
├── js/
│   ├── app.js          # 主控制器（路由、导航、事件）
│   ├── cat.js          # CatGuide 类（状态机、打字机、气泡）
│   ├── tutorials.js    # 教程内容数据（7 模块 55 步骤）
│   ├── diagrams.js     # SVG 图表渲染
│   └── progress.js     # 进度追踪（localStorage）
└── .gitignore
```

---

## Contributing

欢迎提交 Issue 和 PR！

- 内容纠错 / 补充 → 编辑 `js/tutorials.js`
- 样式优化 → 编辑 `css/` 下的文件
- 新功能 → Fork 后提 PR

---

## License

MIT
