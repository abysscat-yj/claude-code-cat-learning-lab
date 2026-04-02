/**
 * Tutorial content data for Claude Code Cat Learning Lab
 * 7 progressive modules based on Claude Code official documentation
 */

const TUTORIALS = [
  // ==================== Module 1: Welcome & Install ====================
  {
    id: 'welcome',
    title: '欢迎 & 安装',
    icon: '🚀',
    description: '认识 Claude Code 并完成安装',
    catIntro: '你好呀！我是小虾猫，你的编程导师喵～ 让我们一起认识 Claude Code 吧！',
    steps: [
      {
        title: '什么是 Claude Code？',
        content: `
          <h3>什么是 Claude Code？</h3>
          <p>Claude Code 是由 Anthropic 推出的 <strong>AI 编程代理工具</strong>，它直接运行在你的终端中，能够理解你的整个代码库，帮助你更高效地编写代码。</p>
          <div class="info-box">
            <strong>它的真正身份：</strong>Claude Code 不只是一个聊天机器人，它是一个<strong>可编程、可扩展、可组合的 AI Agent 框架</strong>。就像你不会说"VS Code 是一个文本编辑器"（它是，但远不止于此），Claude Code 也远不只是 AI 助手——它是一个平台，你可以在上面构建自己的 AI 工作流。
          </div>
          <div class="tip-box">
            <strong>💡 从使用者到驾驭者：</strong>大多数人使用 Claude Code 的方式是"你问，它答"——这只是<strong>被动使用</strong>。但 Claude Code 还支持另一种模式：你设计 Agent，Agent 自主工作——这是<strong>主动驾驭</strong>。用学开车打比方：使用者知道方向盘转哪边车往哪走；驾驭者理解发动机、变速箱的工作原理，还能改装车辆。这门课的目标就是带你从使用者晋级为驾驭者。
          </div>
          <div class="info-box">
            <strong>四层技术栈：</strong>Claude Code 的底层能力从技术上拆解为四个层次：
            <ul>
              <li><strong>基础层 — Memory（记忆系统）</strong>：CLAUDE.md 及多层记忆，让 Claude 对抗"失忆症"</li>
              <li><strong>扩展层 — 四大核心组件</strong>：Commands（斜杠命令）、Skills（技能）、SubAgents（子代理）、Hooks（钩子）</li>
              <li><strong>集成层 — 连接外部世界</strong>：Headless 无头模式 + MCP 协议</li>
              <li><strong>编程接口层 — Agent SDK</strong>：用代码驱动 Claude，构建自定义 Agent</li>
            </ul>
          </div>
          <p>Claude Code 支持多种使用方式：</p>
          <ul>
            <li><strong>终端 CLI</strong> — 最核心的使用方式，直接在命令行中交互</li>
            <li><strong>VS Code 扩展</strong> — 在编辑器中使用</li>
            <li><strong>JetBrains 插件</strong> — 支持 IntelliJ、PyCharm 等</li>
            <li><strong>桌面应用</strong> — 独立的桌面客户端</li>
            <li><strong>Web 应用</strong> — 在 claude.ai/code 使用</li>
          </ul>
        `,
        catMessage: 'Claude Code 就像住在终端里的编程搭档！一起开始吧 (•̀ᴗ•́)و',
        catState: 'happy'
      },
      {
        title: '安装 Claude Code',
        content: `
          <h3>安装 Claude Code</h3>
          <p>选择适合你的安装方式：</p>
          <h4>方式一：官方安装脚本（推荐，支持自动更新）</h4>
          <pre><code># macOS / Linux / WSL
curl -fsSL https://claude.ai/install.sh | bash

# Windows PowerShell
irm https://claude.ai/install.ps1 | iex</code></pre>
          <h4>方式二：Homebrew（需手动更新）</h4>
          <pre><code>brew install --cask claude-code</code></pre>
          <h4>方式三：npm 全局安装</h4>
          <pre><code>npm install -g @anthropic-ai/claude-code</code></pre>
          <div class="info-box">
            <strong>支持的账户类型：</strong>
            <ul>
              <li><strong>Claude Pro / Max / Teams / Enterprise</strong>（推荐）</li>
              <li><strong>Claude Console</strong> — API 访问，按 Token 付费</li>
              <li><strong>API Key + 中转</strong> — 通过自定义 API 端点连接</li>
            </ul>
          </div>
          <div class="tip-box">
            <strong>💡 同生态位的替代工具：</strong>如果暂时无法使用 Claude Code，可以试试 <strong>OpenCode</strong>（支持 DeepSeek 等国内模型，与 Claude Code 概念框架几乎完全兼容）、Cursor、Cline（VS Code 插件）等工具。本教程的知识框架（Memory、SubAgents、Skills、Hooks）对理解和使用这些工具同样适用。
          </div>
          <div class="try-it-box">
            <strong>动手试试：</strong>打开你的终端，安装完成后检查版本！
          </div>
        `,
        catMessage: '安装完成后，打开终端跑一下版本检查命令试试！',
        catState: 'thinking',
        command: 'claude --version'
      },
      {
        title: '验证安装',
        content: `
          <h3>验证安装</h3>
          <p>安装完成后，用以下命令确认一切正常：</p>
          <h4>检查版本</h4>
          <pre><code>claude --version</code></pre>
          <p>如果看到版本号输出，说明安装成功！</p>
          <h4>诊断问题</h4>
          <pre><code>claude doctor</code></pre>
          <p><code>claude doctor</code> 会检查你的安装环境，诊断常见问题：</p>
          <ul>
            <li>Node.js 版本是否满足要求</li>
            <li>网络连接是否正常</li>
            <li>认证状态</li>
            <li>配置文件是否正确</li>
          </ul>
          <div class="try-it-box">
            <strong>动手试试：</strong>运行 <code>claude doctor</code> 看看你的环境状态！
          </div>
        `,
        catMessage: 'claude doctor 就像体检，帮你排查环境问题 ᕙ(⇀‸↼‶)ᕗ',
        catState: 'thinking',
        command: 'claude doctor'
      },
      {
        title: '认证和账户',
        content: `
          <h3>认证和账户</h3>
          <p>首次运行 <code>claude</code> 时，会引导你完成登录认证。</p>
          <div class="info-box">
            <strong>支持的认证方式：</strong>
            <ul>
              <li><strong>Anthropic 账户</strong> — 直接使用 claude.ai 账户</li>
              <li><strong>Amazon Bedrock</strong> — 通过 AWS 访问</li>
              <li><strong>Google Vertex AI</strong> — 通过 GCP 访问</li>
            </ul>
          </div>
          <p>登录后，认证信息会安全地存储在本地，后续使用无需重复登录。</p>
          <div class="warning-box">
            <strong>注意：</strong>你需要一个有效的 API 账户才能使用 Claude Code。免费额度有限，建议了解计费方式。
          </div>
        `,
        catMessage: '登录只需要做一次，之后就可以直接使用了！',
        catState: 'happy'
      },
      {
        title: '首次启动',
        content: `
          <h3>首次启动 Claude Code</h3>
          <p>一切准备就绪！让我们启动 Claude Code：</p>
          <h4>步骤 1：进入项目目录</h4>
          <pre><code>cd your-project-directory</code></pre>
          <h4>步骤 2：启动 Claude Code</h4>
          <pre><code>claude</code></pre>
          <p>你会看到 Claude Code 的欢迎界面，进入交互式对话模式。现在你可以用自然语言描述任何编程任务了！</p>
          <div class="info-box">
            <strong>小贴士：</strong>Claude Code 会自动分析你所在目录的项目结构，所以请确保在正确的项目目录中启动。
          </div>
          <div class="try-it-box">
            <strong>恭喜！</strong>你已经完成了安装和设置，准备好开始探索了！
          </div>
        `,
        catMessage: '准备就绪，开始冒险吧！🎉',
        catState: 'celebrating',
        command: 'echo "🎉 恭喜！Claude Code 安装验证完成！"'
      }
    ]
  },

  // ==================== Module 2: First Steps ====================
  {
    id: 'first-steps',
    title: '初步探索',
    icon: '👣',
    description: '学习基本交互和常用命令',
    catIntro: '现在让我们来熟悉 Claude Code 的基本操作吧喵～',
    steps: [
      {
        title: 'Claude Code 界面',
        content: `
          <h3>认识 Claude Code 界面</h3>
          <p>启动 <code>claude</code> 后，你会进入一个交互式对话界面：</p>
          <div class="info-box">
            <strong>界面要素：</strong>
            <ul>
              <li><strong>提示符</strong> — 等待你输入指令</li>
              <li><strong>工作目录</strong> — 显示当前所在的项目路径</li>
              <li><strong>对话区域</strong> — 显示 Claude 的回复和操作</li>
            </ul>
          </div>
          <p>你只需要用<strong>自然语言</strong>描述想要完成的任务，Claude 就会理解并执行。不需要记忆复杂的命令语法！</p>
          <p>例如：</p>
          <pre><code>这个项目是做什么的？
帮我找到处理用户登录的代码
给这个函数添加错误处理</code></pre>
        `,
        catMessage: '界面很简洁，直接说你想做什么就行，用中文也完全没问题！',
        catState: 'happy'
      },
      {
        title: '了解你的代码库',
        content: `
          <h3>让 Claude 了解你的项目</h3>
          <p>启动 Claude Code 后，第一件事就是让它了解你的项目。试试这些问法：</p>
          <pre><code>这个项目是做什么的？
解释一下项目的目录结构
列出主要的技术栈和依赖
这个项目的入口文件是哪个？</code></pre>
          <div class="tip-box">
            <strong>💡 Harness 架构揭秘：</strong>为什么同一个 Claude 模型，通过 API 直接调用和通过 Claude Code 调用，表现差距那么大？秘密在于 <strong>Harness（智能体编排框架）</strong>。Claude Code 是包裹在 Claude 模型外面的 Harness，它提供<strong>工具、上下文管理和执行环境</strong>，把一个只会说话的大脑变成有手有脚的编码 Agent。
            <br><br>
            <strong>Agent = Model + Harness</strong>
            <br>没有 Harness，Claude 只能告诉你"你可以用 grep 搜索"；有了 Harness，Claude 会直接执行搜索并返回结果。同一个大脑，有没有 Harness，结果天壤之别。
          </div>
          <h4>Claude Code 工作流程 — Agentic Loop</h4>
          <p>如果 Harness 是一台机器，<strong>Agentic Loop</strong> 就是它的发动机。整个 Claude Code 的运转就是一个循环：</p>
          <ol>
            <li><strong>接收请求</strong> — 加载上下文（CLAUDE.md + 系统提示 + 对话历史 + 工具定义）</li>
            <li><strong>模型推理</strong> — Claude 决定下一步行动</li>
            <li><strong>工具调用</strong> — 执行 Read/Edit/Bash/Grep 等工具</li>
            <li><strong>结果回注</strong> — 工具结果注入上下文</li>
            <li><strong>循环继续</strong> — 回到步骤 2，直到任务完成</li>
          </ol>
          <p>一个复杂任务可能跑几十轮循环——先读文件，看完决定搜索，搜索完决定编辑，编辑完再运行测试。这就是<strong>"涌现"</strong>的来源。</p>
          <div id="diagram-workflow" class="diagram-container"></div>
        `,
        catMessage: 'Claude 能快速理解整个项目，比手动翻看代码快太多了！',
        catState: 'thinking'
      },
      {
        title: '单次查询模式',
        content: `
          <h3>快速查询：-p 参数</h3>
          <p>有时你只想问一个简单的问题，不需要进入完整的交互模式。使用 <code>-p</code> 参数：</p>
          <pre><code>claude -p "解释 src/main.js 的作用"</code></pre>
          <p>Claude 会回答问题后<strong>自动退出</strong>，非常适合：</p>
          <ul>
            <li>快速查询代码含义</li>
            <li>管道操作（配合其他命令）</li>
            <li>脚本中调用</li>
          </ul>
          <h4>管道操作示例</h4>
          <pre><code># 让 Claude 审查一个文件
cat src/utils.js | claude -p "审查这段代码"

# 让 Claude 解释 git diff
git diff | claude -p "总结这些变更"</code></pre>
          <div class="try-it-box">
            <strong>动手试试：</strong>用 <code>-p</code> 模式快速查询一些信息！
          </div>
        `,
        catMessage: '想快速问个问题？用 -p 参数，回答完就自动退出 (`・ω・´)',
        catState: 'happy',
        command: 'echo "试试: claude -p \\"你的问题\\""'
      },
      {
        title: '常用命令速查',
        content: `
          <h3>常用命令速查表</h3>
          <p>在 Claude Code 交互模式中，以下命令会经常用到：</p>
          <table class="command-table">
            <thead>
              <tr><th>命令</th><th>说明</th></tr>
            </thead>
            <tbody>
              <tr><td><code>/help</code></td><td>显示帮助信息和可用命令</td></tr>
              <tr><td><code>/clear</code></td><td>清除当前对话历史</td></tr>
              <tr><td><code>/compact</code></td><td>压缩对话上下文（释放 token）</td></tr>
              <tr><td><code>/config</code></td><td>查看和修改配置</td></tr>
              <tr><td><code>/init</code></td><td>自动生成 CLAUDE.md 项目配置</td></tr>
              <tr><td><code>/memory</code></td><td>查看和管理 Claude 的记忆</td></tr>
              <tr><td><code>/permissions</code></td><td>管理工具使用权限</td></tr>
              <tr><td><code>/cost</code></td><td>查看当前会话的 token 使用量</td></tr>
              <tr><td><code>Ctrl+C</code></td><td>取消当前操作</td></tr>
              <tr><td><code>exit</code> / <code>quit</code></td><td>退出 Claude Code</td></tr>
            </tbody>
          </table>
          <div class="info-box">
            <strong>小贴士：</strong>所有斜杠命令（/开头）在输入时会有自动补全提示。
          </div>
        `,
        catMessage: '这些命令用多了就熟了！最常用的是 /help 和 /clear',
        catState: 'thinking'
      },
      {
        title: '理解权限系统',
        content: `
          <h3>权限系统 — Harness 的安全围栏</h3>
          <p>权限系统是 Harness 五大组件之一，它解决了一个核心矛盾：你希望 Agent 足够自主以提高效率，但又不希望它自主到失控。</p>
          <div class="info-box">
            <strong>三种权限模式：</strong>
            <ul>
              <li><strong>Plan 模式</strong> — 只读探索，Claude 只能查看不能修改，系统级只读保障</li>
              <li><strong>默认模式</strong> — 敏感操作需要你手动确认，平衡安全与效率</li>
              <li><strong>Auto-accept 模式</strong> — 自动接受大部分操作，适合信任场景</li>
            </ul>
          </div>
          <p>在默认模式下，当 Claude 要执行以下操作时会请求你的批准：</p>
          <ul>
            <li>创建或修改文件（Write, Edit）</li>
            <li>执行终端命令（Bash）</li>
            <li>删除文件或目录</li>
            <li>Git 操作（推送、强制更新等）</li>
          </ul>
          <div class="tip-box">
            <strong>💡 工具系统的设计哲学：</strong>Claude Code 内置了 20+ 个工具，覆盖五个<strong>原子操作</strong>：读（Read/Glob/Grep）、写（Write/Edit）、执行（Bash）、联网（WebFetch/WebSearch）、编排（Agent）。这些基础工具通过组合产生涌现——重构是 Read + Edit + Bash 的组合，测试是 Bash + Read 的组合。<strong>少而精</strong>的设计让组合空间最大化，就像计算机只需要几条指令就能图灵完备。
          </div>
          <div class="warning-box">
            <strong>Bash 是逃逸舱：</strong>Bash 工具是图灵完备的，通过它 Claude 可以执行任何 Shell 命令。这意味着 Claude Code 的能力上限理论上等于操作系统的能力上限——这也是为什么权限控制如此重要。
          </div>
          <h4>权限模式对比</h4>
          <div id="diagram-permissions" class="diagram-container"></div>
        `,
        catMessage: '权限系统确保 Claude 不会做你不想要的操作，安全第一！',
        catState: 'thinking'
      },
      {
        title: '退出和恢复会话',
        content: `
          <h3>管理你的会话</h3>
          <h4>退出 Claude Code</h4>
          <pre><code>exit
# 或
quit
# 或按 Ctrl+D</code></pre>
          <h4>继续最近的对话</h4>
          <pre><code>claude -c</code></pre>
          <p>这会恢复你最近一次的对话上下文，就像你从未离开一样。</p>
          <h4>选择历史对话</h4>
          <pre><code>claude -r</code></pre>
          <p>Claude 会列出你的历史对话列表，你可以选择要恢复的那个。</p>
          <div class="info-box">
            <strong>对话持久化：</strong>Claude Code 会自动保存对话历史，你随时可以回到之前的工作。这对于长期项目开发非常有用。
          </div>
          <div class="try-it-box">
            <strong>完成！</strong>你已经掌握了 Claude Code 的基本操作。接下来让我们进入代码实战！
          </div>
        `,
        catMessage: '随时可以回来继续上次的对话，很方便吧？',
        catState: 'celebrating'
      },
      {
        title: 'Agentic Loop 三阶段详解',
        content: `
          <h3>Agentic Loop 深度剖析 — 感知→推理→行动</h3>
          <p>上一节我们概述了 Agentic Loop 的五步循环。现在让我们用一个<strong>真实案例</strong>来深入理解它——假设你说："用户登录时报 500 错误，帮我修复。"</p>
          <div class="info-box">
            <strong>实战案例：修复 login 500 error（共 8 轮工具调用）</strong>
            <table class="command-table">
              <thead>
                <tr><th>轮次</th><th>阶段</th><th>工具调用</th><th>Claude 的思考</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>感知</td><td><code>Grep("login", "src/")</code></td><td>"先找到登录相关的代码在哪里"</td></tr>
                <tr><td>2</td><td>感知</td><td><code>Read("src/auth/login.ts")</code></td><td>"找到了，读一下具体实现"</td></tr>
                <tr><td>3</td><td>感知</td><td><code>Read("src/auth/session.ts")</code></td><td>"login.ts 调用了 session 模块，也要看"</td></tr>
                <tr><td>4</td><td>推理</td><td>（无工具调用）</td><td>"发现了！session.create() 没有 await，返回了 Promise 而非 session 对象"</td></tr>
                <tr><td>5</td><td>行动</td><td><code>Edit("src/auth/login.ts")</code></td><td>"加上 await 关键字"</td></tr>
                <tr><td>6</td><td>行动</td><td><code>Bash("npm test")</code></td><td>"运行测试验证修复"</td></tr>
                <tr><td>7</td><td>感知</td><td><code>Read(测试输出)</code></td><td>"3 个测试通过，1 个失败——还有关联问题"</td></tr>
                <tr><td>8</td><td>行动</td><td><code>Edit("src/auth/session.ts")</code></td><td>"修复关联的类型定义问题"</td></tr>
              </tbody>
            </table>
          </div>
          <p>注意几个关键点：</p>
          <ul>
            <li><strong>感知不是一次性的</strong> — Claude 先搜索（Grep），再读文件（Read），还可能读更多关联文件。每一轮感知的结果决定下一轮往哪里深入</li>
            <li><strong>推理可以不调用工具</strong> — 第 4 轮 Claude 只是"想了想"，没有任何工具调用，但这一轮是最关键的——它找到了 bug 的根因</li>
            <li><strong>行动后会回到感知</strong> — 第 6 轮运行测试后，发现还有问题，于是回到感知→推理→行动循环</li>
          </ul>
          <div class="tip-box">
            <strong>💡 核心洞察：</strong>Agentic Loop 不是线性的"感知→推理→行动→结束"，而是<strong>螺旋式的</strong>——每一轮行动的结果都可能触发新一轮感知。一个复杂任务可能跑 20-30 轮循环。这就是为什么 Claude Code 能解决复杂问题——它不是一次性给答案，而是像人类程序员一样<strong>不断探索、假设、验证、修正</strong>。
          </div>
        `,
        catMessage: 'Claude 修 bug 的过程和你一模一样——先找、再看、然后改、最后验证！',
        catState: 'thinking'
      },
      {
        title: '五大原子操作与工具清单',
        content: `
          <h3>五大原子操作 — Claude Code 的"指令集"</h3>
          <p>计算机只需要几十条 CPU 指令就能实现所有计算。同样，Claude Code 只靠<strong>五类原子操作</strong>就能完成所有编程任务：</p>
          <table class="command-table">
            <thead>
              <tr><th>原子操作</th><th>工具</th><th>类比</th><th>说明</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>感知（读）</strong></td><td><code>Read</code>, <code>Glob</code>, <code>Grep</code></td><td>眼睛</td><td>读文件、按模式找文件、搜索内容</td></tr>
              <tr><td><strong>修改（写）</strong></td><td><code>Write</code>, <code>Edit</code></td><td>手</td><td>创建文件、修改文件（精确替换）</td></tr>
              <tr><td><strong>执行</strong></td><td><code>Bash</code></td><td>脚</td><td>运行任意 Shell 命令（图灵完备）</td></tr>
              <tr><td><strong>获取</strong></td><td><code>WebFetch</code>, <code>WebSearch</code></td><td>耳朵</td><td>抓取网页、搜索互联网</td></tr>
              <tr><td><strong>编排</strong></td><td><code>Agent</code></td><td>大脑</td><td>创建子代理，委派子任务</td></tr>
            </tbody>
          </table>
          <div class="info-box">
            <strong>涌现的秘密：</strong>没有"重构工具"或"测试工具"——所有复杂行为都是原子操作的<strong>组合涌现</strong>：
            <ul>
              <li><strong>重构</strong> = Read（理解代码）+ Edit（修改代码）+ Bash（运行测试验证）</li>
              <li><strong>Bug 修复</strong> = Grep（搜索错误）+ Read（分析原因）+ Edit（修复）+ Bash（验证）</li>
              <li><strong>新功能</strong> = Read（理解架构）+ Write（创建文件）+ Edit（修改配置）+ Bash（测试）</li>
              <li><strong>代码审查</strong> = Bash(git diff) + Read（理解变更）+ Agent（委派安全检查）</li>
            </ul>
          </div>
          <h4>工具之间的协作模式</h4>
          <pre><code># 模式 1：搜索-读取-修改（最常见）
Grep("handleLogin") → Read(匹配文件) → Edit(修改代码)

# 模式 2：执行-分析-修复
Bash("npm test") → Read(失败日志) → Edit(修复代码) → Bash("npm test")

# 模式 3：探索-规划-实施
Glob("src/**/*.ts") → Read(关键文件) → Write/Edit(批量修改)

# 模式 4：联网-对比-应用
WebSearch("React 19 新 API") → WebFetch(文档) → Edit(更新代码)</code></pre>
          <div class="tip-box">
            <strong>💡 "少而精"的设计哲学：</strong>为什么不直接做一个"重构工具"？因为<strong>组合空间</strong>远大于单一工具。5 种原子操作的组合可以覆盖无限种编程场景，而预定义的"重构工具"只能覆盖设计者预想到的场景。这就像为什么编程语言只需要 if/for/function 就能表达所有逻辑。
          </div>
        `,
        catMessage: '只有 5 种原子操作，却能组合出无限可能——这就是涌现的魔力 ∑(O_O；)',
        catState: 'happy'
      },
      {
        title: '工具风险层级与权限规则',
        content: `
          <h3>工具风险层级 — 不是所有工具生而平等</h3>
          <p>既然五类原子操作能力差异巨大，它们的风险等级自然也不同：</p>
          <table class="command-table">
            <thead>
              <tr><th>风险等级</th><th>工具</th><th>为什么</th><th>默认权限</th></tr>
            </thead>
            <tbody>
              <tr><td style="color: #22c55e"><strong>🟢 低危</strong></td><td>Read, Glob, Grep</td><td>只读操作，不会改变任何东西</td><td>自动允许</td></tr>
              <tr><td style="color: #f59e0b"><strong>🟡 中危</strong></td><td>Write, Edit</td><td>修改文件，但可以 git 撤销</td><td>需要确认</td></tr>
              <tr><td style="color: #ef4444"><strong>🔴 高危</strong></td><td>Bash</td><td>图灵完备，可以执行<strong>任何</strong>命令</td><td>需要确认</td></tr>
              <tr><td style="color: #ef4444"><strong>🔴 高危</strong></td><td>Bash(rm/git push/curl)</td><td>不可逆操作，可能影响远程系统</td><td>需要确认</td></tr>
            </tbody>
          </table>
          <h4>权限规则语法</h4>
          <p>在 <code>.claude/settings.json</code> 中配置精确的权限规则：</p>
          <pre><code>{
  "permissions": {
    // 允许运行测试和构建（安全的 Bash 命令）
    "allow": [
      "Bash(npm run *)",
      "Bash(npm test *)",
      "Bash(npx jest *)",
      "Bash(git status)",
      "Bash(git diff *)",
      "Bash(git log *)"
    ],
    // 禁止危险操作
    "deny": [
      "Bash(rm -rf *)",
      "Bash(git push --force*)",
      "Bash(curl * | bash)",
      "Bash(chmod 777 *)",
      "Bash(> /dev/*)"
    ]
  }
}</code></pre>
          <div class="info-box">
            <strong>规则语法解析：</strong>
            <ul>
              <li><code>Bash(npm run *)</code> — 工具名 + 括号内匹配模式，<code>*</code> 是通配符</li>
              <li><code>allow</code> 规则让匹配的操作<strong>跳过确认</strong>，提高效率</li>
              <li><code>deny</code> 规则让匹配的操作<strong>直接拒绝</strong>，连确认机会都没有</li>
              <li>不在 allow/deny 中的操作 → 需要手动确认（默认行为）</li>
            </ul>
          </div>
          <div class="tip-box">
            <strong>💡 配置层级：</strong>权限规则也支持三层配置——用户级 <code>~/.claude/settings.json</code>、项目级 <code>.claude/settings.json</code>、本地级 <code>.claude/settings.local.json</code>。项目级可以团队共享（提交 git），本地级存放个人偏好。
          </div>
          <div class="warning-box">
            <strong>安全建议：</strong>对于不熟悉的项目，建议先用默认模式（每次确认）。等你了解项目的常见操作后，再逐步添加 allow 规则提高效率。永远不要在 allow 中写 <code>Bash(*)</code>——这等于放弃所有安全保护。
          </div>
        `,
        catMessage: '能力越大，风险越大！权限规则就是你的安全带',
        catState: 'thinking'
      },
      {
        title: '上下文管理的秘密',
        content: `
          <h3>被低估的关键能力 — 上下文管理</h3>
          <p>Claude 的上下文窗口是有限的（200K tokens）。一个真实的编码任务——读 20 个文件、搜索 50 次、执行 30 条命令——产生的对话历史会迅速膨胀。如果不管理，要么爆掉上下文窗口，要么模型开始"遗忘"早期信息。</p>
          <div class="info-box">
            <strong>自动压缩机制：</strong>当对话历史接近上下文窗口的 92% 时，Harness 会触发一次压缩操作：
            <ul>
              <li><strong>保留</strong> — 最近的消息（完整保留）</li>
              <li><strong>压缩</strong> — 早期消息变为摘要</li>
              <li><strong>重注入</strong> — CLAUDE.md 内容、系统提示词、工具定义在每次压缩后都重新注入</li>
            </ul>
          </div>
          <p>这就是为什么你在 CLAUDE.md 里写的东西那么"持久"——不是因为模型记住了它，而是 <strong>Harness 在每次压缩后都重新塞给模型</strong>。</p>
          <h4>手动压缩：/compact 命令</h4>
          <p>当对话变得冗长时，你也可以手动触发压缩：</p>
          <pre><code>/compact</code></pre>
          <p>压缩会释放 token 空间，让 Claude 能继续高效工作。</p>
          <div class="tip-box">
            <strong>💡 关键洞察：</strong>理解上下文管理后，很多最佳实践就自然理解了：为什么 CLAUDE.md 要精简（因为每次压缩后都会重注入）、为什么要用子代理处理高噪声任务（因为它们有独立上下文，不会污染主对话）、为什么 Skills 要渐进式加载（因为上下文窗口是稀缺资源）。
          </div>
          <div class="try-it-box">
            <strong>完成！</strong>你已经掌握了 Claude Code 的基本操作和核心架构。接下来进入代码实战！
          </div>
        `,
        catMessage: '上下文管理是 Claude Code 最精巧的设计之一，理解它能事半功倍喵！',
        catState: 'thinking'
      }
    ]
  },

  // ==================== Module 3: Working with Code ====================
  {
    id: 'working-with-code',
    title: '代码实战',
    icon: '💻',
    description: '文件操作、代码编辑和测试',
    catIntro: '是时候用 Claude Code 真正写代码了！这是最有趣的部分喵～',
    steps: [
      {
        title: 'Claude 如何读取文件',
        content: `
          <h3>Claude 如何理解你的代码</h3>
          <p>Claude Code 有一套智能的代码探索系统，使用多种内置工具：</p>
          <table class="command-table">
            <thead>
              <tr><th>工具</th><th>功能</th></tr>
            </thead>
            <tbody>
              <tr><td><code>Read</code></td><td>读取指定文件内容</td></tr>
              <tr><td><code>Glob</code></td><td>按模式查找文件 (如 <code>**/*.ts</code>)</td></tr>
              <tr><td><code>Grep</code></td><td>在文件内容中搜索关键词</td></tr>
              <tr><td><code>Bash</code></td><td>执行终端命令</td></tr>
            </tbody>
          </table>
          <p>你不需要手动指定文件路径，Claude 会<strong>自动</strong>找到相关文件。例如：</p>
          <pre><code>找到处理用户登录的代码</code></pre>
          <p>Claude 会搜索整个项目，找到认证相关的文件并阅读它们。</p>
          <div class="info-box">
            <strong>支持的语言：</strong>JavaScript/TypeScript、Python、Go、Rust、Java、C/C++、Ruby、PHP 以及几乎所有主流编程语言。
          </div>
        `,
        catMessage: 'Claude 会自动找到需要的文件，你只需要描述目标就好！',
        catState: 'happy'
      },
      {
        title: '修改代码',
        content: `
          <h3>让 Claude 修改代码</h3>
          <p>用自然语言描述你想要的修改：</p>
          <pre><code>给登录函数添加输入验证
把这个组件从 class 改为 function component
在 API 路由中添加速率限制</code></pre>
          <p>Claude 修改代码的流程：</p>
          <ol>
            <li><strong>分析</strong> — 阅读相关代码，理解上下文</li>
            <li><strong>规划</strong> — 确定需要修改的文件和位置</li>
            <li><strong>展示 Diff</strong> — 显示即将进行的修改（红色删除/绿色添加）</li>
            <li><strong>等待确认</strong> — 你审查后决定接受或拒绝</li>
            <li><strong>应用修改</strong> — 确认后写入文件</li>
          </ol>
          <div class="warning-box">
            <strong>重要：</strong>所有修改都会先显示 diff，等你确认后才会写入。如果不满意，可以说"不要这样改"或"换个方式"。
          </div>
          <h4>代码修改示例</h4>
          <p>下面是 Claude 修改代码时你会看到的 diff 效果：</p>
          <div id="diagram-diff" class="diagram-container"
            data-before='[{"text":"function greet(name) {","type":"normal"},{"text":"  console.log(\\"Hello\\");","type":"removed"},{"text":"}","type":"normal"}]'
            data-after='[{"text":"function greet(name) {","type":"normal"},{"text":"  console.log(\\\"Hello, \\\" + name + \\"!\\");","type":"added"},{"text":"  return \\"Hello, \\" + name;","type":"added"},{"text":"}","type":"normal"}]'>
          </div>
        `,
        catMessage: '所有修改都会先给你看 diff，确认后才执行，很安全 (•‿•)',
        catState: 'thinking'
      },
      {
        title: '编写和运行测试',
        content: `
          <h3>测试驱动开发</h3>
          <p>Claude 是测试的好帮手。你可以让它：</p>
          <h4>编写测试</h4>
          <pre><code>给 auth 模块写单元测试
为 UserService 写集成测试
给这个 API 端点写端到端测试</code></pre>
          <h4>运行并修复测试</h4>
          <pre><code>运行测试，如果有失败的帮我修复</code></pre>
          <p>Claude 会：</p>
          <ol>
            <li>执行测试命令</li>
            <li>阅读测试输出和错误信息</li>
            <li>分析失败原因</li>
            <li>修复代码并重新运行</li>
            <li>直到所有测试通过</li>
          </ol>
          <div class="info-box">
            <strong>最佳实践：</strong>告诉 Claude 你项目使用的测试框架（Jest、Pytest、Go test 等），它会按照框架的最佳实践来写测试。
          </div>
        `,
        catMessage: '测试驱动开发的最佳搭档！写测试、跑测试、修 Bug 一条龙',
        catState: 'happy'
      },
      {
        title: '重构代码',
        content: `
          <h3>智能重构</h3>
          <p>Claude 擅长各种代码重构任务：</p>
          <pre><code>把回调函数重构为 async/await
提取重复逻辑到公共工具函数
将这个大组件拆分为更小的子组件
改用 TypeScript 的严格模式</code></pre>
          <p>Claude 重构的优势：</p>
          <ul>
            <li><strong>跨文件重构</strong> — 能同时修改多个相关文件</li>
            <li><strong>保持一致性</strong> — 确保重构后的代码风格统一</li>
            <li><strong>更新引用</strong> — 自动更新所有相关的 import 和引用</li>
            <li><strong>保留功能</strong> — 确保重构不会破坏现有功能</li>
          </ul>
          <div class="try-it-box">
            <strong>最佳实践：</strong>重构前建议先让 Claude 运行现有测试，确保有基准。重构后再运行测试验证。
          </div>
        `,
        catMessage: '重构代码，Claude 改得又快又好，跨文件也不在话下！',
        catState: 'happy'
      },
      {
        title: '修复 Bug',
        content: `
          <h3>Bug 诊断与修复</h3>
          <p>遇到 Bug 时，可以直接把错误信息给 Claude：</p>
          <pre><code>这个报错是什么原因？帮我修复：
TypeError: Cannot read property 'map' of undefined
  at UserList.render (src/components/UserList.js:15)</code></pre>
          <p>Claude 的调试流程：</p>
          <ol>
            <li><strong>分析错误信息</strong> — 理解错误类型和堆栈跟踪</li>
            <li><strong>定位问题代码</strong> — 找到出错的文件和行号</li>
            <li><strong>理解上下文</strong> — 查看相关代码逻辑</li>
            <li><strong>找到根因</strong> — 而不仅仅是表面症状</li>
            <li><strong>提出修复方案</strong> — 显示 diff 并等待确认</li>
          </ol>
          <div class="info-box">
            <strong>小贴士：</strong>提供尽可能多的信息：错误信息、复现步骤、相关日志。信息越多，修复越精准。
          </div>
        `,
        catMessage: '遇到 Bug 不用怕，把错误信息告诉 Claude 就好！',
        catState: 'encouraging'
      },
      {
        title: '工具组合的涌现',
        content: `
          <h3>工具组合的涌现 — "重构"不是一个工具</h3>
          <p>让我们通过一个具体示例，看看 Claude 如何用原子操作的组合完成一次<strong>函数提取重构</strong>：</p>
          <div class="info-box">
            <strong>任务：</strong>"把 handleOrder 函数中的价格计算逻辑提取到独立函数"
          </div>
          <h4>Claude 的工具调用序列</h4>
          <pre><code># 第 1 步：感知 — 找到目标函数
> Grep("handleOrder", "src/")
→ 找到 src/services/order.ts:42

# 第 2 步：感知 — 阅读完整实现
> Read("src/services/order.ts")
→ 看到 handleOrder 有 80 行，其中 25 行是价格计算

# 第 3 步：感知 — 检查谁在调用这个函数
> Grep("handleOrder", "src/", "--include=*.ts")
→ 发现 3 个调用点：router.ts, webhook.ts, test.ts

# 第 4 步：行动 — 提取函数并修改原文件
> Edit("src/services/order.ts")
→ diff: +function calculatePrice(...) { ... }
→ diff: -// 25行内联计算  +const price = calculatePrice(items, discount);

# 第 5 步：行动 — 更新导出
> Edit("src/services/order.ts")
→ diff: +export { handleOrder, calculatePrice };

# 第 6 步：行动 — 运行测试验证
> Bash("npm test -- --testPathPattern=order")
→ 所有测试通过 ✅</code></pre>
          <p>整个"重构"过程用了 <strong>4 种原子操作（Grep→Read→Edit→Bash）</strong>，没有任何专用的"重构工具"。</p>
          <div class="tip-box">
            <strong>💡 对比传统 IDE 重构：</strong>IDE 的 "Extract Method" 只能做机械性的代码移动。Claude 的重构更像人类——它会考虑命名、参数设计、是否需要更新调用方、是否需要添加类型注解。这就是<strong>基于理解的重构</strong>，而不是基于模式匹配的重构。
          </div>
        `,
        catMessage: '重构不是一个工具，而是多个工具的精妙组合 (☆▽☆)',
        catState: 'thinking'
      },
      {
        title: 'Bash：图灵完备的逃逸舱',
        content: `
          <h3>Bash — 最强大也最危险的工具</h3>
          <p>在所有工具中，Bash 是唯一的<strong>图灵完备</strong>工具。这意味着通过 Bash，Claude 理论上可以执行操作系统能做的<strong>一切事情</strong>：</p>
          <table class="command-table">
            <thead>
              <tr><th>能力</th><th>示例</th><th>风险等级</th></tr>
            </thead>
            <tbody>
              <tr><td>安装依赖</td><td><code>npm install lodash</code></td><td>🟡 中</td></tr>
              <tr><td>运行测试</td><td><code>npm test</code></td><td>🟢 低</td></tr>
              <tr><td>启动服务</td><td><code>npm run dev</code></td><td>🟡 中</td></tr>
              <tr><td>调用 API</td><td><code>curl https://api.example.com</code></td><td>🟡 中</td></tr>
              <tr><td>数据库操作</td><td><code>psql -c "SELECT ..."</code></td><td>🔴 高</td></tr>
              <tr><td>文件删除</td><td><code>rm -rf node_modules</code></td><td>🔴 高</td></tr>
              <tr><td>Git 推送</td><td><code>git push origin main</code></td><td>🔴 高</td></tr>
              <tr><td>系统管理</td><td><code>chmod, chown, kill</code></td><td>🔴 高</td></tr>
            </tbody>
          </table>
          <div class="warning-box">
            <strong>为什么叫"逃逸舱"：</strong>Read/Edit/Write 等工具都有明确的能力边界——Read 只能读、Edit 只能改文件内容。但 Bash 没有边界。它是从 Claude Code 的受控环境中"逃逸"到操作系统层面的通道。这也是为什么权限系统对 Bash 的控制最为严格。
          </div>
          <h4>Bash 的正确用法</h4>
          <pre><code># ✅ 好：具体的、可预期的命令
npm test
git status
python -m pytest tests/
docker compose up -d

# ❌ 危险：模糊的、破坏性的命令
rm -rf /
curl untrusted-url | bash
chmod -R 777 /
git push --force origin main</code></pre>
          <div class="tip-box">
            <strong>💡 最佳实践：</strong>为常用的安全 Bash 命令配置 <code>allow</code> 规则（如 <code>Bash(npm test *)</code>），对危险模式配置 <code>deny</code> 规则。这样 Claude 跑测试时不会被反复确认打断，但执行删除操作时仍有安全网。
          </div>
        `,
        catMessage: 'Bash 是双刃剑——用好了效率翻倍，用不好可能删库跑路！一定要配好权限',
        catState: 'encouraging'
      },
      {
        title: '多文件操作',
        content: `
          <h3>跨文件操作</h3>
          <p>Claude 最强大的能力之一就是同时操作多个文件：</p>
          <pre><code>在所有 API 路由中添加请求日志
更新所有组件的 PropTypes 为 TypeScript 类型
创建一个新的 CRUD 模块，包括路由、控制器和模型</code></pre>
          <p>Claude 能够：</p>
          <ul>
            <li>同时创建多个新文件</li>
            <li>跨文件修改保持一致性</li>
            <li>更新相关的配置和依赖</li>
            <li>添加必要的 import 和 export</li>
          </ul>
          <div class="try-it-box">
            <strong>完成！</strong>你已经掌握了 Claude Code 的核心编码能力。接下来学习 Git 工作流！
          </div>
        `,
        catMessage: '跨文件修改是 Claude 的拿手好戏！核心技能已解锁 ✓',
        catState: 'celebrating'
      }
    ]
  },

  // ==================== Module 4: Git Workflows ====================
  {
    id: 'git-workflows',
    title: 'Git 工作流',
    icon: '🌿',
    description: '提交、分支、PR 一站式管理',
    catIntro: 'Git 操作也可以用自然语言完成！让我来教你喵～',
    steps: [
      {
        title: '查看变更状态',
        content: `
          <h3>查看变更状态</h3>
          <p>在开始 Git 操作前，先了解当前的变更状态：</p>
          <pre><code># 直接问 Claude
我修改了哪些文件？
显示当前的 diff
有哪些未提交的变更？</code></pre>
          <p>或者在终端中直接使用 Git 命令：</p>
          <pre><code>git status
git diff
git log --oneline -10</code></pre>
          <div class="info-box">
            <strong>小贴士：</strong>Claude Code 完全理解 Git 状态。你可以问它"这些变更做了什么？"，它会用自然语言总结 diff 内容。
          </div>
          <div class="try-it-box">
            <strong>动手试试：</strong>在终端中运行 <code>git status</code> 查看当前状态！
          </div>
        `,
        catMessage: '先看看改了什么，养成好习惯！git status 是你的好朋友',
        catState: 'thinking',
        command: 'git status'
      },
      {
        title: '智能提交',
        content: `
          <h3>智能 Git 提交</h3>
          <p>Claude Code 最受欢迎的功能之一就是智能提交：</p>
          <h4>方式一：使用专门的 commit 命令</h4>
          <pre><code>claude commit</code></pre>
          <p>Claude 会自动分析所有变更，生成有意义的提交信息。</p>
          <h4>方式二：在对话中提交</h4>
          <pre><code>提交当前的变更
把这些修改提交了，消息写清楚一点</code></pre>
          <h4>方式三：使用斜杠命令</h4>
          <pre><code>/commit</code></pre>
          <p>Claude 生成的提交信息会：</p>
          <ul>
            <li>自动分析所有 staged 和 unstaged 的变更</li>
            <li>遵循项目现有的提交信息风格</li>
            <li>总结变更的"为什么"而不仅是"什么"</li>
            <li>包含 Co-Authored-By 标记</li>
          </ul>
        `,
        catMessage: 'claude commit 自动写出专业的提交信息，再也不用纠结怎么写了喵！',
        catState: 'happy'
      },
      {
        title: '分支管理',
        content: `
          <h3>分支管理</h3>
          <p>用自然语言管理 Git 分支：</p>
          <pre><code>创建一个新分支 feature/user-auth
切换到 develop 分支
从 main 分支创建并切换到 hotfix/login-bug</code></pre>
          <p>Claude 理解常见的分支策略：</p>
          <ul>
            <li><strong>feature/*</strong> — 功能开发分支</li>
            <li><strong>bugfix/*</strong> — Bug 修复分支</li>
            <li><strong>hotfix/*</strong> — 紧急修复分支</li>
            <li><strong>release/*</strong> — 发布分支</li>
          </ul>
          <div class="info-box">
            <strong>安全提示：</strong>Claude 会在执行危险的 Git 操作（如 force push、reset）前请求你的确认。
          </div>
          <h4>Git 分支可视化</h4>
          <div id="diagram-git" class="diagram-container"></div>
        `,
        catMessage: '分支管理交给 Claude，它很懂 Git 工作流 (￣▽￣)ノ',
        catState: 'happy'
      },
      {
        title: '创建 Pull Request',
        content: `
          <h3>创建 Pull Request</h3>
          <p>Claude 可以帮你创建完整的 PR：</p>
          <pre><code>为当前分支创建 PR
创建一个 PR，目标分支是 develop</code></pre>
          <p>Claude 会自动：</p>
          <ol>
            <li>分析当前分支的所有提交</li>
            <li>生成 PR 标题（简洁明了）</li>
            <li>编写 PR 描述（变更摘要 + 测试计划）</li>
            <li>推送分支并创建 PR</li>
          </ol>
          <div class="info-box">
            <strong>支持的平台：</strong>GitHub（通过 gh CLI）和 GitLab。确保你已安装并认证了对应的 CLI 工具。
          </div>
        `,
        catMessage: '创建 PR 也能一句话搞定，Claude 会写出专业的描述！',
        catState: 'happy'
      },
      {
        title: '解决合并冲突',
        content: `
          <h3>解决合并冲突</h3>
          <p>遇到合并冲突时，Claude 是你的好帮手：</p>
          <pre><code>帮我解决合并冲突
合并 main 到当前分支并解决冲突</code></pre>
          <p>Claude 解决冲突的流程：</p>
          <ol>
            <li>读取有冲突的文件</li>
            <li>理解双方修改的意图</li>
            <li>智能合并，保留有意义的改动</li>
            <li>展示解决方案供你审查</li>
          </ol>
          <div class="warning-box">
            <strong>注意：</strong>复杂的冲突可能需要你的判断。Claude 会在不确定时向你咨询，而不是盲目地自动解决。
          </div>
          <div class="try-it-box">
            <strong>完成！</strong>你已经掌握了 Claude Code 的 Git 工作流。接下来学习项目配置！
          </div>
        `,
        catMessage: '合并冲突不用怕，Claude 帮你理清双方的修改意图',
        catState: 'celebrating'
      }
    ]
  },

  // ==================== Module 5: CLAUDE.md & Memory ====================
  {
    id: 'memory',
    title: 'CLAUDE.md 与记忆',
    icon: '🧠',
    description: '项目配置和持久化记忆系统',
    catIntro: '让 Claude 更懂你的项目！CLAUDE.md 和记忆系统是秘密武器喵～',
    steps: [
      {
        title: '什么是 CLAUDE.md？',
        content: `
          <h3>CLAUDE.md — 对抗 AI "失忆症"的核心武器</h3>
          <p>和 AI 协作，你一定经历过这种崩溃时刻：</p>
          <pre><code># 第一次对话
你：帮我写一个用户登录接口
Claude：好的（使用 Express + JavaScript）
你：我们项目用的是 Fastify 和 TypeScript！

# 第二次对话
你：帮我写一个订单创建接口
Claude：好的（又用 Express + JavaScript）
你：（崩溃）我们用 Fastify 和 TypeScript！！</code></pre>
          <p>AI 模型有一个天然弱点：<strong>"失忆"</strong>。每次新对话，Claude 都不记得上次说了什么。CLAUDE.md 就是治疗这种失忆症的药——它是一份给 Claude 的<strong>"项目入职手册"</strong>，Claude 每次开始对话时都会自动阅读这份手册。</p>
          <div class="info-box">
            <strong>CLAUDE.md 写得好不好，直接决定了 Claude 是靠谱同事，还是每次都要重新培训的实习生。</strong>
          </div>
          <h4>五层记忆架构</h4>
          <p>Claude Code 支持五个层级的记忆，就像洋葱一样，从外到内层层包裹：</p>
          <table class="command-table">
            <thead>
              <tr><th>层级</th><th>位置</th><th>作用</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>企业策略级</strong></td><td><code>/Library/Application Support/ClaudeCode/CLAUDE.md</code></td><td>公司安全策略、合规要求，IT 统一部署</td></tr>
              <tr><td><strong>用户级</strong></td><td><code>~/.claude/CLAUDE.md</code></td><td>个人偏好，跨所有项目生效（如中文回复、2 空格缩进）</td></tr>
              <tr><td><strong>项目级</strong></td><td><code>./CLAUDE.md</code></td><td>团队共享规范，提交到 Git</td></tr>
              <tr><td><strong>本地级</strong></td><td><code>./CLAUDE.local.md</code></td><td>个人工作笔记，不提交 Git（记得加入 .gitignore！）</td></tr>
              <tr><td><strong>规则目录</strong></td><td><code>.claude/rules/*.md</code></td><td>按主题组织，支持条件作用域</td></tr>
            </tbody>
          </table>
          <div class="tip-box">
            <strong>💡 优先级规则：</strong>高层级的记忆为底层提供基础。用户级记忆会被项目级覆盖——如果你个人喜欢 2 空格缩进，但项目要求 4 空格，那就用 4 空格。
          </div>
          <h4>记忆层级图</h4>
          <div id="diagram-memory" class="diagram-container"></div>
        `,
        catMessage: 'CLAUDE.md 就像给 Claude 的操作手册！写得好，它就更懂你的项目',
        catState: 'happy'
      },
      {
        title: '用 /init 自动生成',
        content: `
          <h3>自动生成 CLAUDE.md</h3>
          <p>不知道怎么写？让 Claude 自己来：</p>
          <pre><code>/init</code></pre>
          <p>Claude 会分析你的代码库并自动生成 CLAUDE.md，通常包含：</p>
          <ul>
            <li>项目描述和技术栈</li>
            <li>目录结构说明</li>
            <li>构建和运行命令</li>
            <li>测试命令</li>
            <li>代码风格提示</li>
          </ul>
          <div class="info-box">
            <strong>小贴士：</strong>生成后建议手动审查和补充。你比 Claude 更了解项目的特殊约定。
          </div>
          <div class="try-it-box">
            <strong>动手试试：</strong>在你的项目中运行 <code>/init</code>，看看生成的 CLAUDE.md！
          </div>
        `,
        catMessage: '试试 /init，让 Claude 自动分析项目生成配置文件！',
        catState: 'thinking'
      },
      {
        title: '编写有效的指令',
        content: `
          <h3>如何写好 CLAUDE.md</h3>
          <div class="info-box">
            <strong>核心原则 1：Less is More</strong><br>
            CLAUDE.md 的每一行，都会在<strong>每一次</strong>对话开始时被注入上下文。冗余不是无害的，而是持续消耗的。保持精简不是建议，而是必须。
          </div>
          <div class="info-box">
            <strong>核心原则 2：具体优于泛泛</strong><br>
            "请写出高质量代码"这种话，Claude 本来就知道。它不会改变 Claude 的任何决策，只会白白占用上下文空间。
          </div>
          <h4>反面教材 vs 正面示范</h4>
          <pre><code># ❌ 不好的写法 — 模糊、对模型无效
代码质量要求高
使用有意义的变量名
保持代码整洁
注意错误处理</code></pre>
          <pre><code># ✅ 好的写法 — 具体、可操作、可模仿
## TypeScript
- 使用 interface 定义对象结构，type 用于联合类型
- 禁止 any，使用 unknown + 类型守卫
- 函数参数 > 3 个时，使用对象参数

## 错误处理
// 业务错误
throw new BusinessError('ORDER_NOT_FOUND', '订单不存在');
// 验证错误（Zod 自动抛出）
const data = orderSchema.parse(input);
// controller 中不要 try-catch，由全局错误中间件统一处理</code></pre>
          <p>两者的差异非常明确：后者不是模糊要求"要高质量"，而是给出了<strong>如何做</strong>才算高质量；不是"注意错误处理"，而是具体的错误模型；不是抽象描述，而是<strong>可直接模仿的代码形态</strong>。</p>
          <div class="tip-box">
            <strong>💡 关键洞察：</strong>CLAUDE.md 的内容因为每次压缩后都会重注入，所以特别"持久"。把"每次都需要"的内容放这里，把"偶尔需要"的内容放到 Skills 或文档里。
          </div>
          <div class="warning-box">
            <strong>大小建议：</strong>CLAUDE.md 建议控制在 500 行以内。太长会消耗 token 并稀释注意力，太短则信息不足。
          </div>
        `,
        catMessage: '越具体越好！清晰的指令让 Claude 表现更出色 (•̀ᴗ•́)و',
        catState: 'thinking'
      },
      {
        title: '使用 .claude/rules/ 目录',
        content: `
          <h3>规则目录 — 按主题组织，条件加载</h3>
          <p>当 CLAUDE.md 变得太长时，或者不同文件类型需要不同规范时，就该用规则目录了。Rules 是按主题组织的规则文件，支持<strong>条件作用域</strong>——只在操作匹配文件时才加载。</p>
          <h4>目录结构</h4>
          <pre><code>.claude/
└── rules/
    ├── typescript.md      # TypeScript 规范
    ├── testing.md         # 测试规范
    ├── api-design.md      # API 设计规范
    └── security.md        # 安全规范</code></pre>
          <h4>条件作用域示例</h4>
          <pre><code># .claude/rules/testing.md
---
paths:
  - "src/**/*.test.ts"
  - "tests/**/*.ts"
---
# 测试规范
## 命名
- 单元测试: \`*.test.ts\`
- 集成测试: \`*.integration.test.ts\`

## 结构
使用 Arrange-Act-Assert 模式：
\`\`\`typescript
describe('OrderService', () => {
  describe('createOrder', () => {
    it('should create order when stock is available', async () => {
      // Arrange
      const mockProduct = createMockProduct({ stock: 10 });
      // Act
      const order = await orderService.createOrder(mockProduct.id, 1);
      // Assert
      expect(order.status).toBe('created');
    });
  });
});
\`\`\`

## 覆盖率要求
- 业务逻辑: > 80%
- 工具函数: > 90%
- 路由/控制器: 可以较低</code></pre>
          <div class="info-box">
            <strong>关键特性：</strong><code>paths</code> 字段让这个规则<strong>只在编辑测试文件时生效</strong>，不会浪费其他场景的上下文空间。这就是"条件作用域"的力量。
          </div>
          <div class="tip-box">
            <strong>💡 CLAUDE.local.md — 你的私人笔记本：</strong>在项目根目录创建 <code>CLAUDE.local.md</code> 存放个人工作笔记：本地环境配置、测试账号、当前工作进度等。记得加入 <code>.gitignore</code>！当项目周期很长时，一个属于自己的本地记忆空间非常有用。
          </div>
        `,
        catMessage: '不同目录可以有不同规则！前端和后端分开管理，很灵活吧？',
        catState: 'happy'
      },
      {
        title: '记忆的认知经济学',
        content: `
          <h3>上下文窗口的认知经济学</h3>
          <p>上下文窗口（200K tokens）是 Claude 最宝贵的资源。理解这个资源的经济学，能帮你做出更好的设计决策。</p>
          <div class="info-box">
            <strong>Miller's Law 类比：</strong>心理学家 George Miller 发现，人类的工作记忆只能同时处理 <strong>7±2</strong> 个信息块。AI 也类似——虽然上下文窗口有 200K tokens，但<strong>注意力是有限的</strong>。塞进去的信息越多，每条信息得到的注意力越少。
          </div>
          <h4>注意力稀释效应</h4>
          <p>这是一个反直觉的现象：<strong>信息越多，表现反而越差</strong>。</p>
          <pre><code># 场景 1：CLAUDE.md 500 行，重点突出
→ Claude 精确遵循关键规则 ✅

# 场景 2：CLAUDE.md 2000 行，面面俱到
→ Claude 经常忽略某些规则 ❌
→ 不是"没看到"，而是注意力被稀释了</code></pre>
          <div class="tip-box">
            <strong>💡 实用法则：</strong>
            <ul>
              <li><strong>CLAUDE.md</strong> — 放"每次都需要"的内容（500 行以内）</li>
              <li><strong>Skills</strong> — 放"有时需要"的领域知识（按需加载）</li>
              <li><strong>子代理</strong> — 放"产生大量中间输出"的任务（隔离上下文）</li>
              <li><strong>.claude/rules/</strong> — 放"仅特定文件类型需要"的规则（条件加载）</li>
            </ul>
            这四种机制本质上都是<strong>上下文窗口的管理策略</strong>——它们回答的是同一个问题：哪些信息在什么时候出现在上下文中？
          </div>
          <h4>上下文预算分配</h4>
          <pre><code>200K tokens 上下文窗口
├── 系统提示词 + 工具定义    ~15K  (固定开销)
├── CLAUDE.md               ~5K   (每次压缩后重注入)
├── 对话历史                 ~150K (主要空间)
│   ├── 用户消息
│   ├── Claude 回复
│   └── 工具调用结果 ← 这是最大的消耗者！
└── 安全缓冲                ~30K  (压缩阈值)</code></pre>
          <div class="warning-box">
            <strong>最大的 token 消耗者：</strong>不是你的提问，也不是 Claude 的回答，而是<strong>工具调用的结果</strong>——一次 <code>Read</code> 一个 500 行文件就会消耗数千 tokens，一次 <code>Bash("npm test")</code> 输出可能消耗上万 tokens。这就是为什么高噪声任务应该委派给子代理。
          </div>
        `,
        catMessage: '上下文窗口就像桌面——东西太多就找不到重要的了，保持整洁！',
        catState: 'thinking'
      },
      {
        title: '条件作用域规则详解',
        content: `
          <h3>条件作用域 — 让规则在正确的时机生效</h3>
          <p>上一节学了 <code>.claude/rules/</code> 目录的基本用法。现在深入讲解<strong>条件作用域</strong>的高级用法。</p>
          <h4>paths 字段实现目录级规则</h4>
          <pre><code># .claude/rules/frontend.md
---
paths:
  - "src/components/**/*.tsx"
  - "src/pages/**/*.tsx"
  - "src/hooks/**/*.ts"
---
# 前端规范
- 组件使用函数式写法 + React.FC 类型
- 状态管理使用 Zustand，禁止 Redux
- 样式使用 Tailwind CSS，禁止内联 style
- 图片使用 next/image 组件
</code></pre>
          <pre><code># .claude/rules/backend.md
---
paths:
  - "src/api/**/*.ts"
  - "src/services/**/*.ts"
  - "src/models/**/*.ts"
---
# 后端规范
- 使用 Fastify 框架，不用 Express
- ORM 使用 Prisma
- 错误抛出 BusinessError，controller 不写 try-catch
- 所有数据库操作必须在 Service 层
</code></pre>
          <div class="info-box">
            <strong>关键优势：</strong>当 Claude 编辑前端组件时，只加载前端规则；编辑后端 API 时，只加载后端规则。两套规范<strong>互不干扰</strong>，不会让前端规则稀释后端规则的注意力。
          </div>
          <h4>CLAUDE.local.md — 被忽视的生产力工具</h4>
          <p>在项目根目录创建 <code>CLAUDE.local.md</code>（记得加入 .gitignore），存放你的<strong>个人工作笔记</strong>：</p>
          <pre><code># CLAUDE.local.md — 我的本地笔记

## 当前工作
- 正在重构认证模块，已完成 session 部分
- TODO：下一步处理 token 刷新逻辑

## 本地环境
- 数据库跑在 Docker：localhost:5433（注意不是默认的 5432）
- 测试账号：test@example.com / password123
- API Mock 服务：localhost:3001

## 个人偏好
- commit message 用中文
- 变量命名习惯 camelCase</code></pre>
          <div class="tip-box">
            <strong>💡 何时用哪个：</strong>
            <ul>
              <li><strong>CLAUDE.md</strong> — 团队共享，提交 git（技术栈、架构约定、构建命令）</li>
              <li><strong>CLAUDE.local.md</strong> — 个人私有，不提交（本地环境、测试账号、工作进度）</li>
              <li><strong>.claude/rules/*.md</strong> — 按文件类型条件加载（前端/后端/测试各自的规范）</li>
            </ul>
          </div>
        `,
        catMessage: '条件作用域让规则更精准，不该出现的信息就不要出现',
        catState: 'happy'
      },
      {
        title: '自动记忆系统',
        content: `
          <h3>Auto Memory</h3>
          <p>除了 CLAUDE.md，Claude Code 还有一个<strong>自动记忆系统</strong>：</p>
          <p>Claude 会自动保存从对话中学到的信息：</p>
          <ul>
            <li><strong>用户偏好</strong> — 你喜欢的代码风格、工作方式</li>
            <li><strong>反馈记录</strong> — 你的纠正和确认</li>
            <li><strong>项目上下文</strong> — 项目进展、决策背景</li>
            <li><strong>参考资源</strong> — 外部系统和文档链接</li>
          </ul>
          <h4>存储位置</h4>
          <pre><code>~/.claude/projects/PROJECT_NAME/memory/</code></pre>
          <p>记忆文件使用 Markdown 格式，带有 YAML frontmatter 元数据。</p>
          <div class="info-box">
            <strong>跨会话持久化：</strong>记忆会在不同的对话之间保持，Claude 会在后续对话中参考这些记忆。
          </div>
        `,
        catMessage: 'Claude 会自动记住你的喜好和习惯，越用越懂你 (≧◡≦)',
        catState: 'happy'
      },
      {
        title: '/memory 命令',
        content: `
          <h3>管理记忆</h3>
          <p>使用 <code>/memory</code> 命令查看和管理 Claude 的记忆：</p>
          <pre><code>/memory</code></pre>
          <p>你可以：</p>
          <ul>
            <li>查看所有已保存的记忆</li>
            <li>让 Claude 记住特定信息</li>
            <li>删除不再需要的记忆</li>
            <li>编辑现有记忆内容</li>
          </ul>
          <h4>主动让 Claude 记住</h4>
          <pre><code>记住：我们的 API 部署在 api.example.com
记住：测试时要用 staging 数据库
以后不要在这个项目中使用 class component</code></pre>
          <div class="try-it-box">
            <strong>完成！</strong>你已经掌握了 Claude Code 的记忆系统。接下来学习自动化！
          </div>
        `,
        catMessage: '用 /memory 管理记忆库！你的专属 AI 越来越聪明了',
        catState: 'celebrating'
      }
    ]
  },

  // ==================== Module 6: Hooks & Skills ====================
  {
    id: 'hooks-skills',
    title: 'Hooks 与 Skills',
    icon: '⚡',
    description: '自动化工作流和自定义命令',
    catIntro: '是时候解锁 Claude Code 的高级技能了！Hooks 和 Skills 超级强大喵～',
    steps: [
      {
        title: '什么是 Hooks？',
        content: `
          <h3>Hooks — AI 时代的中间件</h3>
          <p>Skills 告诉 Claude "怎么做"，Commands 告诉 Claude "做什么"。但有一个关键问题它们都解决不了——<strong>Claude 能不能做？</strong></p>
          <p>如果你有 Web 开发经验，你一定熟悉中间件（Middleware）的概念：</p>
          <pre><code>请求 → 中间件1 → 中间件2 → 中间件3 → 处理函数
                  ↓
            认证、日志、限流</code></pre>
          <p>Claude Code 的 Hooks 与此异曲同工，但它针对的不是 HTTP 请求，而是 <strong>AI Agent 的工具调用</strong>：</p>
          <pre><code>用户请求 → Claude 决策 → [PreToolUse Hook] → 工具执行 → [PostToolUse Hook] → 响应
                            ↓                            ↓
                       权限检查、拦截             格式化、验证、日志</code></pre>
          <div class="info-box">
            <strong>Hooks 是三大扩展机制中唯一能拦截和修改 Claude 行为的机制。</strong>如果把 Claude 比作工程师，Commands 是你下达的任务指令，Skills 是他掌握的领域知识，而 Hooks 是公司的安全制度——不管做什么任务，这些制度都在背后默默运行。
          </div>
          <h4>三大阵营：17 种 Hook 事件</h4>
          <p>Claude Code 支持 17 种 Hook 事件，按"能否阻止"分为三大阵营：</p>
          <table class="command-table">
            <thead>
              <tr><th>阵营</th><th>代表事件</th><th>能力</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>控制点</strong></td><td>PreToolUse, Stop, UserPromptSubmit</td><td>能阻止操作，改变执行路径（系统的"肌肉"）</td></tr>
              <tr><td><strong>接管点</strong></td><td>PermissionRequest</td><td>替代默认行为，自动批准/拒绝权限（"自动驾驶"）</td></tr>
              <tr><td><strong>观察点</strong></td><td>PostToolUse, SessionStart, Notification</td><td>只能记录和反馈，不能改变已发生的事（"眼睛"）</td></tr>
            </tbody>
          </table>
          <div class="tip-box">
            <strong>💡 不对称设计：</strong>工具执行<strong>前</strong>可以拦截（因为操作还没发生）；工具执行<strong>后</strong>不能拦截（因为操作已完成，你不能"取消"一个已写入磁盘的文件），但可以观察、记录、反馈。
          </div>
          <h4>Hook 事件流程</h4>
          <div id="diagram-hooks" class="diagram-container"></div>
          <h4>配置文件位置</h4>
          <pre><code># 用户级 — 个人习惯
~/.claude/settings.json

# 项目级 — 团队约定（提交到 git）
.claude/settings.json

# 本地覆盖 — 临时调整
.claude/settings.local.json

# 子代理 frontmatter — 子代理专属 Hook
.claude/agents/db-reader.md</code></pre>
        `,
        catMessage: 'Hooks 就像 Claude 的自动反应系统——特定事件触发特定动作',
        catState: 'happy'
      },
      {
        title: 'Hook 事件类型',
        content: `
          <h3>四种 Hook 执行类型</h3>
          <p>当一个 Hook 被触发后，有四种执行方式，能力和代价逐级递增：</p>
          <table class="command-table">
            <thead>
              <tr><th>类型</th><th>特点</th><th>适用场景</th></tr>
            </thead>
            <tbody>
              <tr><td><code>command</code></td><td>执行 Shell 脚本，确定性最高</td><td>模式匹配、正则检查、格式化</td></tr>
              <tr><td><code>prompt</code></td><td>用小型 LLM（Haiku）评估</td><td>需要语义理解的判断</td></tr>
              <tr><td><code>agent</code></td><td>启动子代理，可使用工具验证</td><td>需要"翻代码确认"的复杂检查</td></tr>
              <tr><td><code>http</code></td><td>发送到远程 HTTP 端点</td><td>集中式审计、团队共享安全扫描</td></tr>
            </tbody>
          </table>
          <div class="info-box">
            <strong>选择策略：</strong>能用 command 的不用 prompt，能用 prompt 的不用 agent，需要对接远程服务时用 http。<strong>确定性规则永远比 LLM 判断更可靠</strong>，LLM 判断比子代理执行更快。
          </div>
          <h4>Matcher 匹配模式</h4>
          <pre><code>// 精确匹配单个工具
"matcher": "Write"

// 匹配多个工具（竖线分隔）
"matcher": "Edit|Write|MultiEdit"

// 匹配所有工具（适合审计日志）
"matcher": "*"</code></pre>
          <h4>PreToolUse 的四种响应</h4>
          <p>PreToolUse 是最强大的 Hook，它可以做四件事：</p>
          <ul>
            <li><strong>allow</strong> — 放行（exit 0）</li>
            <li><strong>ask</strong> — 交给用户确认（"需要人类判断"）</li>
            <li><strong>deny</strong> — 拦截（exit 2）</li>
            <li><strong>updatedInput</strong> — "暗中修正"参数后放行（如把 <code>rm -rf</code> 改成 <code>rm -rf --dry-run</code>）</li>
          </ul>
          <div class="tip-box">
            <strong>💡 温和优先原则：</strong>优先选择最温和的响应——能 allow 的不 ask，能 ask 的不 deny。exit 0 = 放行，exit 2 = 阻止，其他非零退出码 = 脚本出错但不阻止（脚本出错不应该阻止正常工作流）。
          </div>
        `,
        catMessage: '不同事件对应不同时机，就像设置不同的触发器',
        catState: 'thinking'
      },
      {
        title: '创建一个 Hook',
        content: `
          <h3>实战：创建安全防护 Hook</h3>
          <p>让我们创建一个拦截危险命令的 Hook：</p>
          <pre><code>{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if echo \\"$TOOL_INPUT\\" | grep -qE 'rm -rf|drop table|format'; then echo 'BLOCKED: 检测到危险命令！'; exit 1; fi"
          }
        ]
      }
    ]
  }
}</code></pre>
          <h4>Hook 的返回值</h4>
          <ul>
            <li><strong>exit 0</strong> — 允许操作继续</li>
            <li><strong>exit 1</strong> — 阻止操作并显示输出</li>
            <li><strong>stdout 包含 "BLOCKED"</strong> — 明确拒绝</li>
          </ul>
          <div class="warning-box">
            <strong>注意：</strong>Hook 命令在你的系统 shell 中执行，要确保命令本身是安全的。
          </div>
          <h4>高级 Hook 模式</h4>
          <p>Hooks 不仅能拦截，还能用于<strong>验收</strong>——Claude 完成任务后，由 Hook 自动检查：</p>
          <pre><code>{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "npx eslint --fix \\"$TOOL_INPUT_PATH\\" 2>/dev/null || true"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude 已完成任务\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p>Hooks 是 Claude Code 中<strong>唯一</strong>能拦截和修改 Claude 行为的扩展机制，堪称最后一道安全门。</p>
        `,
        catMessage: '这个 Hook 能阻止危险命令！给你的代码加一层保护喵！',
        catState: 'encouraging'
      },
      {
        title: 'Stop Hook 质量门控',
        content: `
          <h3>Stop Hook — 任务完成前的最后一道关卡</h3>
          <p>假设你让 Claude 修改代码。Claude 改完后说"搞定了"——但测试没跑，你也不知道改对没有。Stop Hook 解决的就是这个问题：<strong>在 Claude 准备停止前，自动运行质量检查</strong>。</p>
          <h4>基础用法：任务结束时自动跑测试</h4>
          <pre><code>{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "npm test 2>&1 | tail -20",
            "timeout": 30000
          }
        ]
      }
    ]
  }
}</code></pre>
          <div class="info-box">
            <strong>continue: true 的魔力：</strong>如果 Stop Hook 返回 <code>{ "continue": true }</code>，Claude <strong>不会停止</strong>，而是继续工作——它会收到 Hook 的输出（如测试失败信息），然后自动尝试修复。
          </div>
          <h4>高级用法：智能质量门控</h4>
          <pre><code>#!/bin/bash
# scripts/quality-gate.sh

# 运行测试
TEST_OUTPUT=$(npm test 2>&1)
TEST_EXIT=$?

if [ $TEST_EXIT -ne 0 ]; then
  echo "❌ 测试未通过，请修复以下失败："
  echo "$TEST_OUTPUT" | grep -A 5 "FAIL\\|Error\\|✕"
  # 关键：输出 JSON 让 Claude 继续工作
  echo '{"continue": true}'
  exit 0
fi

# 运行 lint
LINT_OUTPUT=$(npm run lint 2>&1)
if [ $? -ne 0 ]; then
  echo "⚠️ Lint 检查未通过："
  echo "$LINT_OUTPUT" | head -20
  echo '{"continue": true}'
  exit 0
fi

echo "✅ 所有检查通过"
exit 0</code></pre>
          <div class="warning-box">
            <strong>Death Loop 防护：</strong>如果测试始终修不好怎么办？Claude 会进入无限的"修复→测试失败→再修复"循环。Claude Code 通过 <code>stop_hook_active</code> 字段自动检测这种情况——当 Stop Hook 已经触发过一次后，如果 Claude 再次尝试停止，不会再次触发 Hook，防止无限循环。
          </div>
        `,
        catMessage: 'Stop Hook 就像提交前的自动化测试门禁——不通过就不放行',
        catState: 'thinking'
      },
      {
        title: 'Hook 实战：危险命令拦截',
        content: `
          <h3>实战：完整的危险命令拦截脚本</h3>
          <p>前面展示了简单的一行 Hook。现在来创建一个<strong>生产级</strong>的安全防护脚本：</p>
          <h4>步骤 1：创建脚本</h4>
          <pre><code>#!/bin/bash
# scripts/block-dangerous.sh
# 危险命令拦截器 — PreToolUse Bash Hook

TOOL_INPUT="$1"

# 15+ 危险模式
DANGEROUS_PATTERNS=(
  "rm -rf /"
  "rm -rf ~"
  "rm -rf \\."
  "git push --force"
  "git push -f"
  "git reset --hard"
  "DROP DATABASE"
  "DROP TABLE"
  "TRUNCATE TABLE"
  "chmod 777"
  "chmod -R 777"
  "> /dev/sd"
  "mkfs\\."
  "dd if="
  ":(){ :|:& };:"
)

for pattern in "\${DANGEROUS_PATTERNS[@]}"; do
  if echo "$TOOL_INPUT" | grep -qiE "$pattern"; then
    echo "🚫 BLOCKED: 检测到危险命令模式 '$pattern'"
    echo "如果你确定要执行，请在终端中手动运行。"
    exit 2  # exit 2 = deny
  fi
done

# 安全，放行
exit 0</code></pre>
          <h4>步骤 2：配置 Hook</h4>
          <pre><code>{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "bash scripts/block-dangerous.sh \\"$TOOL_INPUT\\""
          }
        ]
      }
    ]
  }
}</code></pre>
          <div class="tip-box">
            <strong>💡 退出码含义回顾：</strong>
            <ul>
              <li><code>exit 0</code> — 放行，操作继续执行</li>
              <li><code>exit 2</code> — 拒绝，操作被阻止，Claude 收到拒绝消息</li>
              <li>其他非零 — 脚本出错，但不阻止操作（脚本 bug 不应阻断工作流）</li>
            </ul>
          </div>
        `,
        catMessage: '有了这个脚本，危险命令都被自动拦截了！安全感 MAX (ᵔᴥᵔ)',
        catState: 'encouraging'
      },
      {
        title: 'Hook 实战：自动格式化',
        content: `
          <h3>实战：PostToolUse 自动格式化</h3>
          <p>每次 Claude 写完文件后，自动运行代码格式化工具——让 Claude 专注于逻辑，格式交给专业工具。</p>
          <h4>多语言自动格式化脚本</h4>
          <pre><code>#!/bin/bash
# scripts/auto-format.sh
# PostToolUse Hook — 文件写入后自动格式化

FILE_PATH="$TOOL_INPUT_PATH"

# 根据文件扩展名选择格式化工具
case "$FILE_PATH" in
  *.ts|*.tsx|*.js|*.jsx|*.json|*.css|*.md)
    npx prettier --write "$FILE_PATH" 2>/dev/null
    echo "✅ Prettier 格式化完成: $FILE_PATH"
    ;;
  *.py)
    python -m black "$FILE_PATH" 2>/dev/null
    echo "✅ Black 格式化完成: $FILE_PATH"
    ;;
  *.go)
    gofmt -w "$FILE_PATH" 2>/dev/null
    echo "✅ gofmt 格式化完成: $FILE_PATH"
    ;;
  *.rs)
    rustfmt "$FILE_PATH" 2>/dev/null
    echo "✅ rustfmt 格式化完成: $FILE_PATH"
    ;;
  *)
    # 不支持的文件类型，静默跳过
    ;;
esac</code></pre>
          <h4>配置</h4>
          <pre><code>{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "bash scripts/auto-format.sh"
          }
        ]
      }
    ]
  }
}</code></pre>
          <div class="info-box">
            <strong>additionalContext 反馈闭环：</strong>PostToolUse Hook 的 stdout 会通过 <code>additionalContext</code> 字段反馈给 Claude。这意味着 Claude 能"看到"格式化的结果，如果格式化发现了问题（比如语法错误导致格式化失败），Claude 会自动尝试修复。
          </div>
          <div class="tip-box">
            <strong>💡 对比三种自动格式化方案：</strong>
            <table class="command-table">
              <thead><tr><th>方案</th><th>时机</th><th>优势</th><th>劣势</th></tr></thead>
              <tbody>
                <tr><td>PostToolUse Hook</td><td>每次文件写入后</td><td>实时反馈，Claude 能感知</td><td>频繁执行，稍慢</td></tr>
                <tr><td>Git pre-commit Hook</td><td>提交时</td><td>只跑一次，不影响编辑</td><td>Claude 不感知</td></tr>
                <tr><td>CLAUDE.md 中写规则</td><td>编辑时</td><td>零开销</td><td>Claude 可能不严格遵守</td></tr>
              </tbody>
            </table>
            推荐：PostToolUse Hook + Git pre-commit 双保险。
          </div>
        `,
        catMessage: '写完代码自动格式化，从此告别格式不一致的困扰',
        catState: 'happy'
      },
      {
        title: '创建任务型 Skill',
        content: `
          <h3>任务型 Skill — 精确控制"做什么"</h3>
          <p>前面学的 Skills 大多是<strong>参考型</strong>（影响"怎么做"）。现在学习<strong>任务型 Skill</strong>——它决定 Claude <strong>"做什么"</strong>。</p>
          <div class="info-box">
            <strong>关键区别：</strong>
            <ul>
              <li><strong>参考型</strong> — Claude 自动判断是否使用（如 API 设计规范）</li>
              <li><strong>任务型</strong> — 只通过 <code>/command</code> 显式触发，设置 <code>disable-model-invocation: true</code></li>
            </ul>
            为什么要禁用自动触发？因为任务型 Skill 执行的是确定性流程（如部署），你不希望 Claude 因为"觉得应该部署"就自动执行。
          </div>
          <h4>示例：部署 Skill</h4>
          <pre><code># .claude/skills/deploy/SKILL.md
---
description: "执行标准化的部署流程。在用户说
  /deploy 时触发。绝不自动触发。"
disable-model-invocation: true
---
# 部署流程

当 /deploy 被调用时，按以下步骤执行：

## 前置检查
1. 运行 \`git status\` 确认没有未提交的变更
2. 运行 \`npm test\` 确认所有测试通过
3. 检查当前分支是否是 main

## 构建
4. 执行 \`npm run build\`
5. 确认构建产物正常

## 部署
6. 执行 \`npm run deploy -- --env=$ARGUMENTS\`
7. 等待部署完成，输出部署 URL

## 验证
8. 用 curl 检查健康接口
9. 输出部署结果摘要</code></pre>
          <h4>\$ARGUMENTS 参数注入</h4>
          <p>用户调用 <code>/deploy staging</code> 时，"staging" 会替换 Skill 中的 <code>$ARGUMENTS</code>。这样一个 Skill 就能处理多种场景：</p>
          <pre><code>/deploy staging    → $ARGUMENTS = "staging"
/deploy production → $ARGUMENTS = "production"
/deploy preview    → $ARGUMENTS = "preview"</code></pre>
          <h4>!command — 动态上下文预处理</h4>
          <p>在 Skill 中使用 <code>!</code> 前缀可以在加载时执行命令，将输出注入上下文：</p>
          <pre><code># .claude/skills/pr-review/SKILL.md
---
description: "审查当前 PR 的所有变更"
---
# PR Review

## 当前变更
\`\`\`
!git diff main...HEAD
\`\`\`

## 最近提交
\`\`\`
!git log main..HEAD --oneline
\`\`\`

请基于以上变更内容进行代码审查...</code></pre>
          <div class="tip-box">
            <strong>💡 !command 的价值：</strong>它让 Skill 不再是静态文本，而是<strong>动态的上下文模板</strong>。每次加载时，<code>!git diff</code> 会执行并注入最新结果。这意味着同一个 Skill 在不同时刻提供不同的上下文，极大提升了复用性。
          </div>
        `,
        catMessage: '任务型 Skill 就像自动化脚本的升级版——带着 AI 理解的自动化！',
        catState: 'happy'
      },
      {
        title: '什么是 Skills？',
        content: `
          <h3>Skills — 按需加载的认知结构</h3>
          <p>在真实的工程团队里，很少有人能把所有规范背下来。当知识规模扩大到几十页时，把所有规范塞进 CLAUDE.md 的问题就出现了——每次对话都在为"可能用不到的知识"支付上下文成本。</p>
          <p>Skills 本质上是一种<strong>按需加载的认知结构</strong>。它不是工具（Tools 回答"能做什么"），也不是分工机制（SubAgents 回答"谁来做"），而是认知问题——<strong>Agent 需要在正确的时刻拥有正确的领域知识</strong>。</p>
          <div class="info-box">
            <strong>Agent 生态四大支柱：</strong>
            <ul>
              <li><strong>Tools</strong> — 行动原语，回答"能做什么"（模型的手脚）</li>
              <li><strong>SubAgents</strong> — 执行分工，回答"谁来做"（团队中的同事）</li>
              <li><strong>Hooks</strong> — 流程规则，回答"什么时候检查"（质检流程）</li>
              <li><strong>Skills</strong> — 可操作知识，回答"怎么做，以及何时做"（企业的 SOP 体系）</li>
            </ul>
          </div>
          <p>如果把 Claude 当作团队成员：CLAUDE.md 是企业文化手册，Skills 就是<strong>标准操作程序（SOP）</strong>——在具体任务发生时按需查阅，按步骤执行，输出标准化结果。</p>
          <h4>Skills 的双向触发</h4>
          <p>同一个 Skill 支持两种触发方式：</p>
          <ul>
            <li><strong>显式触发</strong> — 用户输入 <code>/review</code>（斜杠命令）</li>
            <li><strong>语义触发</strong> — 用户说"帮我看看代码"，Claude 自动判断匹配</li>
          </ul>
          <p>Claude 通过<strong>语义推理</strong>（而非关键词匹配）判断是否激活 Skill。这意味着"帮我看看这段代码有没有问题" ≈ "code review"，Claude 读懂了意图就会自动激活。</p>
          <div class="tip-box">
            <strong>💡 行业趋势：</strong>"技能化"思路正在从 Claude 扩展到整个 Agent 生态。OpenClaw、OpenCode 等项目都采用了类似设计，Coze 推出了技能商店。Skills 不到 100 天就从产品功能演变成了行业开放标准。
          </div>
          <h4>存放位置</h4>
          <pre><code># 项目级（团队共享）
.claude/skills/skill-name/SKILL.md

# 用户级（个人全局）
~/.claude/skills/skill-name/SKILL.md

# 企业级
/Library/Application Support/ClaudeCode/skills/</code></pre>
        `,
        catMessage: 'Skills 是可复用的 Claude 超能力！一次定义，随处使用',
        catState: 'happy'
      },
      {
        title: '创建第一个 Skill',
        content: `
          <h3>实战：创建代码审查 Skill</h3>
          <p>创建文件 <code>.claude/skills/review/SKILL.md</code>：</p>
          <pre><code>---
description: "审查代码变更，检查常见问题"
---
# Code Review Skill

当被调用时，请执行以下步骤：

1. 运行 \`git diff --staged\` 查看待提交的变更
2. 检查以下方面：
   - 是否有安全隐患（SQL 注入、XSS 等）
   - 是否有性能问题
   - 是否遵循项目编码规范
   - 是否有充足的错误处理
   - 变量命名是否清晰
3. 输出审查报告，格式如下：
   - ✅ 通过的检查项
   - ⚠️ 建议改进的地方
   - ❌ 必须修复的问题</code></pre>
          <p>使用时只需输入：</p>
          <pre><code>/review</code></pre>
        `,
        catMessage: '创建 Skill 就像写说明书一样简单！用 /review 就能启动代码审查',
        catState: 'happy'
      },
      {
        title: '高级 Skill 模式',
        content: `
          <h3>渐进式披露 — Skills 的核心架构</h3>
          <p>假设一个复杂 Skill 有 5000 tokens 的知识。如果每次激活都全部加载，90% 的用户请求只会用到 10% 的知识——这就是巨大的浪费。</p>
          <p>渐进式披露用图书馆来类比：你不会一次把所有书都读一遍，而是先看目录 → 再选章节 → 最后翻到需要的附录。</p>
          <div class="info-box">
            <strong>三层架构：</strong>
            <ul>
              <li><strong>第一层：目录页（description）</strong>— 仅扫描描述字符串，~50 tokens</li>
              <li><strong>第二层：章节（SKILL.md 正文）</strong>— 触发后加载主文件，~500 tokens</li>
              <li><strong>第三层：附录（引用文件）</strong>— 按需加载 reference/*.md, scripts/ 等</li>
            </ul>
            Token 节省比例高达 <strong>78% ~ 98%</strong>！
          </div>
          <h4>文件结构示例</h4>
          <pre><code>.claude/skills/financial-analyzing/
├── SKILL.md                 # 主文件（总是加载）
├── reference/               # 参考资料（按需加载）
│   ├── revenue.md          # 收入分析公式
│   ├── costs.md            # 成本分析公式
│   └── profitability.md    # 盈利分析公式
├── templates/               # 报告模板（按需加载）
│   └── analysis_report.md
└── scripts/                 # 分析脚本
    └── calculate_ratios.py</code></pre>
          <h4>SKILL.md 本质是一个路由器</h4>
          <p>主文件通过 Quick Reference 表格，用最少的 token 告诉 Claude 不同方向的路由：</p>
          <pre><code># 在 SKILL.md 中
| 分析类型 | 触发条件 | 引用文件 |
|---------|----------|---------|
| 收入分析 | 收入、营收、销售额 | reference/revenue.md |
| 成本分析 | 成本、费用、支出 | reference/costs.md |
| 盈利分析 | 利润、毛利率、净利率 | reference/profitability.md |</code></pre>
          <h4>description 写作公式</h4>
          <p>description 是 Skill 的灵魂——它不是给人看的文档，而是给 Claude 看的<strong>触发器</strong>：</p>
          <pre><code>description = [做什么] + [怎么做] + [什么时候用]

# ❌ 太模糊
description: Handles PDFs

# ✅ 精确触发
description: Extract text and tables from PDF files,
  fill forms, merge documents. Use when working with
  PDF files or when the user mentions PDFs, forms,
  or document extraction.</code></pre>
          <h4>参考型 vs 任务型</h4>
          <ul>
            <li><strong>参考型</strong> — 影响"怎么做"（如 API 设计规范），Claude 自动判断是否使用</li>
            <li><strong>任务型</strong> — 决定"做什么"（如部署流程），通常设 <code>disable-model-invocation: true</code> 仅允许 <code>/command</code> 触发</li>
          </ul>
          <div class="try-it-box">
            <strong>完成！</strong>你已经掌握了 Hooks 和 Skills，可以创建强大的自动化工作流了！
          </div>
        `,
        catMessage: '掌握渐进式披露，你就是 Skills 架构师了 ╰(*°▽°*)╯',
        catState: 'celebrating'
      }
    ]
  },

  // ==================== Module 7: MCP & Advanced ====================
  {
    id: 'advanced',
    title: 'MCP 与进阶',
    icon: '🔌',
    description: '外部集成和高级使用技巧',
    catIntro: '最后一个模块！让我们探索 Claude Code 的进阶功能喵～',
    steps: [
      {
        title: '什么是 MCP？',
        content: `
          <h3>MCP — AI 的 USB-C 接口</h3>
          <p>即使有了 Memory 的记忆、SubAgents 的分工、Skills 的领域能力、Hooks 的安全防护，Claude Code 的所有能力始终被锁在一个边界内——<strong>本地文件系统</strong>。</p>
          <p>面对这些需求时，它就无能为力了：</p>
          <pre><code>帮我查一下数据库里上个月的销售数据
把这个 Issue 同步到 GitHub
从 Notion 里读取产品需求文档
检查一下 Sentry 上最近的错误日志</code></pre>
          <p>2024 年 11 月，Anthropic 推出了 <strong>MCP（Model Context Protocol）</strong>，彻底改变了这个局面。</p>
          <div class="info-box">
            <strong>USB-C 类比：</strong>就像 USB-C 提供了连接设备与各种外设的标准化方式，MCP 提供了<strong>连接 AI 模型与各种数据源和工具的标准化方式</strong>。
            <br><br>
            在 MCP 之前，M 个 AI 助手连接 N 个外部服务需要 <strong>M × N</strong> 个专用适配器。有了 MCP，变成了 <strong>M + N</strong>：每个 AI 只需实现一次 MCP Client，每个服务只需实现一次 MCP Server，然后任意组合即可工作。
          </div>
          <p>MCP 已获得行业广泛认可：OpenAI 采纳、Google 支持 Gemini、Anthropic 将 MCP 捐赠给 Linux 基金会。截至目前，生态规模已达 <strong>10,000+ 公开 MCP 服务器</strong>。</p>
          <h4>MCP Server 三种能力</h4>
          <ul>
            <li><strong>Tools</strong> — 让 Claude 能"做事情"（最常用）</li>
            <li><strong>Resources</strong> — 提供只读数据，让 Claude 能"看到东西"</li>
            <li><strong>Prompts</strong> — 预定义特定场景的交互模板</li>
          </ul>
          <h4>MCP 架构概览</h4>
          <div id="diagram-mcp" class="diagram-container"></div>
        `,
        catMessage: 'MCP 让 Claude 能连接各种外部工具和服务，能力大升级！',
        catState: 'happy'
      },
      {
        title: '配置 MCP 服务器',
        content: `
          <h3>配置 MCP 服务器</h3>
          <p>MCP 支持三种传输方式：</p>
          <div class="info-box">
            <strong>三种传输方式：</strong>
            <ul>
              <li><strong>stdio</strong> — 本地子进程，零网络开销，最常用（适合 95% 场景）</li>
              <li><strong>HTTP</strong> — 远程服务器，支持 TLS 加密和 Token 认证</li>
              <li><strong>SSE</strong> — 基于 HTTP 的单向推送，适合实时监控（使用较少）</li>
            </ul>
            <strong>原则：本地用 stdio，远程用 HTTP，实时用 SSE。</strong>
          </div>
          <h4>实战 1：Context7 — 实时技术文档（开发者标配）</h4>
          <p>Context7 让 Claude 能实时拉取最新的库文档，不依赖可能过时的训练数据：</p>
          <pre><code># 一行命令配置
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest

# 使用时加 "use context7" 关键词
> 帮我用 Next.js 15 的 App Router 写 API 路由 use context7</code></pre>
          <p>不需要 API Key，不需要付费，开箱即用。</p>
          <h4>实战 2：GitHub MCP — 仓库操作</h4>
          <pre><code>{
  "mcpServers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer \${GITHUB_TOKEN}"
      }
    }
  }
}</code></pre>
          <p>配置好后可以直接在终端操作 GitHub：</p>
          <pre><code>> 发现登录页面 Bug，帮我创建一个 Issue
Claude: 已创建 Issue #142: "Login page crashes with long password"</code></pre>
          <h4>实战 3：数据库 MCP</h4>
          <pre><code>{
  "mcpServers": {
    "database": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@bytebase/dbhub", "--dsn",
        "postgresql://user:pass@localhost:5432/mydb"]
    }
  }
}</code></pre>
          <div class="tip-box">
            <strong>💡 安全提示：</strong>敏感凭证使用 <code>\${VAR_NAME}</code> 语法引用环境变量，不要硬编码在配置中。MCP 管理推荐使用命令行工具：<code>claude mcp add/list/get/remove</code>。
          </div>
          <h4>配置位置</h4>
          <ul>
            <li><strong>.mcp.json</strong> — 团队共享，提交到 git</li>
            <li><strong>.claude/settings.local.json</strong> — 敏感凭证，本地保存</li>
            <li><strong>~/.claude/settings.local.json</strong> — 个人常用服务，跨项目可用</li>
          </ul>
        `,
        catMessage: '配置好 MCP 服务器，Claude 就能使用更多外部工具了！',
        catState: 'thinking'
      },
      {
        title: 'MCP 实战配置组合',
        content: `
          <h3>MCP 实战：推荐配置组合</h3>
          <p>以下是几种常见开发场景的 MCP 配置推荐：</p>
          <h4>前端开发者标配</h4>
          <pre><code>{
  "mcpServers": {
    "context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    },
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": { "Authorization": "Bearer \${GITHUB_TOKEN}" }
    }
  }
}</code></pre>
          <h4>全栈开发者标配</h4>
          <pre><code>{
  "mcpServers": {
    "context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    },
    "database": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@bytebase/dbhub", "--dsn",
        "postgresql://\${DB_USER}:\${DB_PASS}@localhost:5432/mydb"]
    },
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": { "Authorization": "Bearer \${GITHUB_TOKEN}" }
    }
  }
}</code></pre>
          <h4>MCP 管理命令</h4>
          <pre><code># 添加 MCP 服务器（推荐方式）
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest

# 查看已配置的 MCP 服务器
claude mcp list

# 查看某个服务器的详细信息
claude mcp get context7

# 移除 MCP 服务器
claude mcp remove context7</code></pre>
          <div class="tip-box">
            <strong>💡 安全最佳实践：</strong>
            <ul>
              <li>敏感信息用 <code>\${ENV_VAR}</code> 引用环境变量，不要硬编码</li>
              <li>团队共享配置放 <code>.mcp.json</code>（提交 git），敏感凭证放 <code>.claude/settings.local.json</code>（不提交）</li>
              <li>定期用 <code>claude mcp list</code> 检查已配置的服务器</li>
            </ul>
          </div>
        `,
        catMessage: '选对 MCP 组合，开发效率直接起飞！Context7 几乎是必装的',
        catState: 'happy'
      },
      {
        title: '子代理设计模式',
        content: `
          <h3>四种多 Agent 协作模式</h3>
          <p>Claude Code 支持四种多 Agent 协作模式，适用于不同场景：</p>
          <table class="command-table">
            <thead>
              <tr><th>模式</th><th>机制</th><th>适用场景</th><th>特点</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Sub-Agents</strong></td><td>主对话创建子代理</td><td>并行研究、高噪声任务</td><td>独立上下文，工具级权限约束</td></tr>
              <tr><td><strong>Skills</strong></td><td>按需加载知识</td><td>领域 SOP、标准化流程</td><td>无独立上下文，共享主对话</td></tr>
              <tr><td><strong>Handoffs</strong></td><td>Agent 间任务传递</td><td>流水线协作</td><td>顺序执行，状态传递</td></tr>
              <tr><td><strong>Router</strong></td><td>意图路由分发</td><td>多领域入口</td><td>一个入口，多个专家</td></tr>
            </tbody>
          </table>
          <h4>决策树：什么时候用哪种？</h4>
          <pre><code>需要多 Agent 协作？
├── 需要独立上下文隔离？
│   ├── 是 → Sub-Agents（隔离 + 约束）
│   └── 否 → 需要按需加载知识？
│       ├── 是 → Skills（认知结构）
│       └── 否 → 任务需要顺序传递？
│           ├── 是 → Handoffs（流水线）
│           └── 否 → Router（意图分发）</code></pre>
          <div class="tip-box">
            <strong>💡 实战建议：</strong>80% 的场景用 Sub-Agents + Skills 就够了。Handoffs 和 Router 是更高级的编排模式，通常在 Agent SDK 中使用。
          </div>
        `,
        catMessage: '四种协作模式各有所长，选对模式事半功倍！',
        catState: 'thinking'
      },
      {
        title: '什么是子代理？',
        content: `
          <h3>子代理 (Sub-Agents) — 为什么 Claude 越用越"健忘"？</h3>
          <p>某天，你让 Claude 跑测试，输出 500 行日志；分析代码结构，又输出 200 行；接着改一个 bug……这时候，对话上下文已经被各种"中间过程"塞满，真正重要的信息被淹没了。</p>
          <div class="warning-box">
            <strong>上下文污染：</strong>如果你觉得 Claude 越用越健忘，不是模型退化了，而是你的对话上下文被一次次中间过程<strong>污染</strong>了。这些信息对"当下执行"是必要的，但对"后续决策"是噪声。
          </div>
          <p>这正是子代理要解决的核心问题——<strong>只有子代理，才在系统层面天然拥有一个独立的上下文窗口</strong>。</p>
          <div class="info-box">
            <strong>子代理的三大核心价值：</strong>
            <ul>
              <li><strong>隔离</strong> — 解决上下文污染。把高噪声过程留在子代理里，主对话只保留结论。让 Claude"记得更少，但记得对"</li>
              <li><strong>约束</strong> — 解决行为不可控。通过工具权限边界，把"希望你别这么做"变成"你物理上做不到"</li>
              <li><strong>复用</strong> — 解决经验无法沉淀。子代理配置保存在文件中，放进 git，团队共享，跨项目复用</li>
            </ul>
          </div>
          <p>用公司的比喻：主对话是老板，子代理是专职员工。老板不需要看 500 行搜索日志，只需要员工汇报"发现 3 个相关文件"。</p>
          <h4>四类适合子代理的任务</h4>
          <ul>
            <li><strong>高噪声输出</strong> — 跑测试、扫描日志、代码搜索（大量输出，只需结论）</li>
            <li><strong>角色边界明确</strong> — 代码审查只能看不能改（权限从"希望如此"变成"系统级约束"）</li>
            <li><strong>可并行研究</strong> — 同时调研认证、数据库、API，各自独立探索后汇总</li>
            <li><strong>流水线编排</strong> — Explore(找位置) → Reviewer(指出问题) → Fixer(修复) → Test-runner(验证)</li>
          </ul>
          <div class="tip-box">
            <strong>💡 关键约束：</strong>子代理<strong>不能生成子代理</strong>（防止无限嵌套）。所有编排必须由主对话完成——主对话是唯一的"调度中心"。
          </div>
        `,
        catMessage: '子代理就像分身术！一个变多个，效率大提升 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧',
        catState: 'happy'
      },
      {
        title: '内置子代理类型',
        content: `
          <h3>内置子代理</h3>
          <table class="command-table">
            <thead>
              <tr><th>类型</th><th>工具权限</th><th>适用场景</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><code>Explore</code></td>
                <td>Read, Grep, Glob（只读）</td>
                <td>快速查找文件、搜索关键词（三档：quick/medium/very thorough）</td>
              </tr>
              <tr>
                <td><code>Plan</code></td>
                <td>只读 + 分析</td>
                <td>收集上下文、设计实施方案（不能再嵌套子代理）</td>
              </tr>
              <tr>
                <td><code>general-purpose</code></td>
                <td>完整工具集</td>
                <td>多步骤复杂任务，需要读写文件和执行命令</td>
              </tr>
            </tbody>
          </table>
          <h4>自定义子代理配置文件</h4>
          <p>子代理使用 Markdown + YAML frontmatter 格式，存放在 <code>.claude/agents/</code>：</p>
          <pre><code>---
name: code-reviewer
description: Review code for security issues and
  best practices. Use after code changes.
tools: Read, Grep, Glob
model: sonnet
permissionMode: plan  # 强制只读模式
---
你是一个代码审查专家。

当被调用时：
1. 首先理解代码变更的范围
2. 检查安全问题
3. 检查代码规范
4. 提供改进建议

输出格式：
## 审查结果
- 安全问题：[列表]
- 规范问题：[列表]
- 建议：[列表]</code></pre>
          <div class="info-box">
            <strong>工具权限遵循最小权限原则：</strong>
            <ul>
              <li><strong>只读型</strong>（审计/检查）：Read, Grep, Glob</li>
              <li><strong>研究型</strong>（信息收集）：Read, Grep, Glob, WebFetch, WebSearch</li>
              <li><strong>开发型</strong>（读写改）：Read, Write, Edit, Bash, Glob, Grep</li>
            </ul>
            能用 Read 完成的任务，就不要给 Edit。<code>permissionMode: plan</code> 是系统级的只读保障，比 prompt 约束更可靠。
          </div>
          <div class="tip-box">
            <strong>💡 description 的设计艺术：</strong>description 决定了 Claude 何时自动调用你的子代理。好的写法要说明<strong>做什么 + 什么时候用</strong>。加 "proactively" 关键词会鼓励 Claude 在合适时机主动委派。
          </div>
          <h4>Agent Teams — 多会话协作</h4>
          <p>Agent Teams 是更高级的协作模式——多个代理形成团队，共享任务列表，自动分工：</p>
          <pre><code>> 请创建一个团队来重构认证模块：
> - 一个代理负责搜索所有认证相关代码
> - 一个代理负责编写新的认证逻辑
> - 一个代理负责编写和运行测试</code></pre>
        `,
        catMessage: '不同子代理有不同专长，权限越小越安全！',
        catState: 'thinking'
      },
      {
        title: '自定义代理',
        content: `
          <h3>创建自定义代理</h3>
          <p>你可以定义专门的 AI 代理来处理特定任务。</p>
          <h4>创建代理文件</h4>
          <p>在 <code>.claude/agents/</code> 目录创建 Markdown 文件：</p>
          <pre><code># .claude/agents/security-reviewer.md
---
name: Security Reviewer
description: "专门检查代码安全性的代理"
tools:
  - Read
  - Grep
  - Glob
---
# Security Review Agent

你是一个专注于代码安全的审查代理。

检查以下安全问题：
1. SQL 注入风险
2. XSS 漏洞
3. 敏感数据泄露
4. 不安全的依赖
5. 认证和授权问题

对每个问题给出风险等级和修复建议。</code></pre>
          <h4>使用自定义代理</h4>
          <pre><code># 查看可用代理
/agents

# 指定代理运行
claude --agent security-reviewer</code></pre>
        `,
        catMessage: '创建专属代理，打造你自己的 AI 安全团队！',
        catState: 'happy'
      },
      {
        title: 'Agent SDK 与 Harness 全貌',
        content: `
          <h3>Agent SDK — 可编程的 Harness</h3>
          <p>Claude Code CLI 是一个完整的 Harness 产品。而 <strong>Agent SDK</strong> 把 Harness 的核心能力开放为可编程接口，让你能构建自定义 Agent。</p>
          <h4>TypeScript 示例</h4>
          <pre><code>import { AgentClient } from "@anthropic-ai/agent-sdk";

const client = new AgentClient({ apiKey: "..." });

const result = await client.run({
  prompt: "找到所有未使用的依赖并移除",
  tools: ["Read", "Grep", "Glob", "Bash", "Edit"],
  maxTurns: 30,
  permissions: {
    allow: ["Bash(npm prune *)", "Bash(npm ls *)"],
    deny: ["Bash(rm -rf *)"]
  },
  hooks: {
    Stop: [{ type: "command", command: "npm test" }]
  }
});</code></pre>
          <h4>Harness 五大组件协作关系</h4>
          <pre><code>┌─────────────────────────────────────┐
│           Harness 全景              │
├─────────┬───────────────────────────┤
│ Tools   │ 20+ 原子工具（五大类）     │
│ Context │ CLAUDE.md + Skills + Rules │
│ Memory  │ 五层记忆架构               │
│ Hooks   │ 17 事件 × 4 执行类型       │
│ Perms   │ allow/deny 规则 × 3 层级   │
└─────────┴───────────────────────────┘
         ↕ Agentic Loop 驱动
    ┌────────────┐
    │ Claude 模型 │
    └────────────┘</code></pre>
          <div class="info-box">
            <strong>核心洞察：</strong>你在这门课中学的所有知识，本质上都是在配置 Harness 的五大组件。同一个 Claude 模型，在不同 Harness 配置下的表现差距，<strong>远大于</strong>不同模型在同一个 Harness 下的差距。Harness 配置是你的核心竞争力。
          </div>
        `,
        catMessage: 'Harness 是你的核心竞争力——模型在进步，但你的配置经验是独一无二的',
        catState: 'happy'
      },
      {
        title: '高级使用模式',
        content: `
          <h3>进阶技巧</h3>
          <h4>管道操作</h4>
          <pre><code># 代码审查
cat src/api/routes.js | claude -p "审查安全性"

# 日志分析
tail -100 app.log | claude -p "找出错误模式"

# Git 变更审查
git diff HEAD~5 | claude -p "总结最近5次提交的变更"</code></pre>
          <h4>无头模式 (Headless)</h4>
          <p>无头模式让 Claude Code 在没有交互式终端的环境中运行，是 CI/CD 集成的利器：</p>
          <pre><code># 用于 CI/CD 流水线
claude --headless -p "运行测试并生成报告"

# 指定输出格式
claude --headless --output-format json -p "分析代码覆盖率"

# GitHub Actions 集成
- uses: anthropics/claude-code-action@v1
  with:
    prompt: "审查这个 PR 的代码变更"</code></pre>
          <h4>Agent SDK — 可编程的 Harness</h4>
          <p>虽然 Claude Code CLI 本身不开源，但 Anthropic 发布了 <strong>Claude Agent SDK</strong>——一套可编程的 Harness 接口，提供与 Claude Code 完全相同的 Agentic Loop、工具、上下文管理和 Hooks 支持。</p>
          <pre><code># Python 示例
from claude_agent_sdk import AgentClient
client = AgentClient(api_key="...")

result = client.run(
    prompt="审查这个 PR 的安全问题",
    tools=["Read", "Grep", "Glob", "Bash"],
    max_turns=20,
    allowed_tools={"Bash": ["npm test", "npm run lint"]}
)
print(result.text)</code></pre>
          <p>如果说 Claude Code 是一辆出厂配置的整车，Agent SDK 就是<strong>发动机总成</strong>——你可以把它装进任何车身里。</p>
          <h4>Harness — 2026 年的关键词</h4>
          <div class="info-box">
            <strong>核心洞察：</strong>同一个模型在不同 Harness 中的表现差距，<strong>远大于</strong>不同模型在同一个 Harness 中的差距。换句话说，<strong>Harness 比模型更重要</strong>。
            <br><br>
            模型的能力由 Anthropic/OpenAI 决定，你无法改变。但 Harness 的配置——CLAUDE.md 怎么写、工具权限怎么设、Hooks 怎么接、MCP 怎么连——<strong>这些全在你手中</strong>。你前面学的每一讲，本质上都是在调教 Harness。
          </div>
          <h4>涌现公式</h4>
          <p>Claude Code 内置的 20+ 个工具覆盖五个原子操作：<strong>读、写、执行、联网、编排</strong>。没有专门的"重构工具"或"测试工具"——重构是 Read + Edit + Bash 的组合涌现，测试是 Bash + Read 的组合涌现。这就像计算机只需要几条指令就能图灵完备。</p>
          <pre><code># 五个原子操作
读 → Read, Glob, Grep
写 → Write, Edit
执行 → Bash（图灵完备的逃逸舱）
联网 → WebFetch, WebSearch, MCP
编排 → Agent（创建子代理）</code></pre>
          <div class="tip-box">
            <strong>💡 深度学习建议：</strong>Claude Code 的高级功能（Sub-Agents、Skills、Hooks、MCP、Harness）值得在实际项目中反复练习。从"被动使用"到"主动驾驭"，关键是理解每个组件的设计意图，然后在真实场景中不断迭代你的 Harness 配置。
          </div>
          <div class="try-it-box">
            <h3>恭喜你完成了所有模块！</h3>
            <p>你已经从 Claude Code 新手成长为高级用户！回顾一下你掌握的知识体系：</p>
            <ul>
              <li><strong>基础层</strong> — 安装、交互、上下文管理、Agentic Loop</li>
              <li><strong>Memory</strong> — 五层记忆架构、CLAUDE.md 编写原则、条件作用域规则</li>
              <li><strong>代码实战</strong> — 五个原子操作、工具组合涌现</li>
              <li><strong>Git 工作流</strong> — 智能提交、PR 创建、冲突解决</li>
              <li><strong>Skills</strong> — 按需加载的认知结构、渐进式披露、description 写作公式</li>
              <li><strong>Hooks</strong> — AI 中间件、17 事件三阵营、四种执行类型</li>
              <li><strong>SubAgents</strong> — 上下文隔离、最小权限、四类适用任务</li>
              <li><strong>MCP</strong> — USB-C 标准化协议、三种传输方式</li>
              <li><strong>Harness</strong> — Agent = Model + Harness，理解 Harness 比理解模型更重要</li>
            </ul>
            <p>记住：<strong>共生而非替代</strong>——Claude Code 是你的搭档，不是替代者。在实际项目中多练习，你会越来越熟练的！</p>
          </div>
        `,
        catMessage: '恭喜你完成了全部课程！你已经是 Claude Code 高手了喵！继续加油！',
        catState: 'celebrating'
      }
    ]
  }
];
