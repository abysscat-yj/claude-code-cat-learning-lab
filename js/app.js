/**
 * Main App Controller for Claude Code Cat Learning Lab
 * Orchestrates tutorials, cat guide, diagrams, and progress tracking
 */

(function () {
  'use strict';

  // ==================== State ====================
  let currentModuleIndex = -1;
  let currentStepIndex = 0;
  let cat = null;
  let progress = null;

  // Timer IDs — tracked so we can cancel stale timers on navigation
  let renderStepTimer = null;
  let catSpeakTimer = null;
  let autoMarkTimer = null;

  // ==================== DOM References ====================
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ==================== Initialize ====================
  document.addEventListener('DOMContentLoaded', () => {
    progress = new ProgressTracker();
    cat = new CatGuide($('#shrimp-cat'), $('#speech-bubble'));

    buildSidebar();
    setupEventListeners();
    applyTheme(progress.getTheme());
    hideLoading();

    // Restore last module or show welcome
    const lastModule = progress.getLastModule();
    if (lastModule) {
      const idx = TUTORIALS.findIndex(t => t.id === lastModule);
      if (idx >= 0) {
        selectModule(idx);
      } else {
        showWelcome();
      }
    } else {
      showWelcome();
    }

    // Start cat idle
    cat.startIdleLoop();
  });

  // ==================== Loading ====================
  function hideLoading() {
    const loading = $('#loading-screen');
    if (loading) {
      setTimeout(() => {
        loading.classList.add('fade-out');
        setTimeout(() => loading.remove(), 500);
      }, 800);
    }
  }

  // ==================== Helpers ====================
  /** Cancel all pending navigation timers to prevent stacking */
  function cancelPendingTimers() {
    if (renderStepTimer) { clearTimeout(renderStepTimer); renderStepTimer = null; }
    if (catSpeakTimer) { clearTimeout(catSpeakTimer); catSpeakTimer = null; }
    if (autoMarkTimer) { clearTimeout(autoMarkTimer); autoMarkTimer = null; }
  }

  // ==================== Sidebar ====================
  function buildSidebar() {
    const nav = $('#module-nav');
    nav.innerHTML = '';

    TUTORIALS.forEach((module, index) => {
      const item = document.createElement('button');
      item.className = 'module-nav-item';
      item.dataset.index = index;

      const isComplete = progress.isModuleComplete(module.id);
      const prog = progress.getModuleProgress(module.id);
      const stepsDone = prog.completedSteps.length;
      const stepsTotal = module.steps.length;
      const pct = stepsTotal > 0 ? Math.round((stepsDone / stepsTotal) * 100) : 0;

      // SVG progress ring circumference
      const circumference = 2 * Math.PI * 12; // r=12
      const offset = circumference - (pct / 100) * circumference;

      if (isComplete) item.classList.add('completed');

      item.innerHTML = `
        <div class="module-nav-icon">${module.icon}</div>
        <div class="module-nav-info">
          <div class="module-nav-title">${module.title}</div>
          <div class="module-nav-desc">${module.description}</div>
        </div>
        <div class="module-nav-progress">
          <svg viewBox="0 0 28 28">
            <circle class="progress-track" cx="14" cy="14" r="12"/>
            <circle class="progress-fill" cx="14" cy="14" r="12"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="${offset}"/>
          </svg>
          <span class="module-nav-check">&#10003;</span>
        </div>
      `;

      item.addEventListener('click', () => selectModule(index));
      nav.appendChild(item);
    });

    updateOverallProgress();
  }

  /** Lightweight sidebar update — only refresh progress rings without rebuilding DOM */
  function updateSidebarProgress() {
    const circumference = 2 * Math.PI * 12;
    $$('.module-nav-item').forEach((item, index) => {
      const module = TUTORIALS[index];
      if (!module) return;
      const isComplete = progress.isModuleComplete(module.id);
      const prog = progress.getModuleProgress(module.id);
      const pct = module.steps.length > 0
        ? Math.round((prog.completedSteps.length / module.steps.length) * 100)
        : 0;
      const offset = circumference - (pct / 100) * circumference;
      const fill = item.querySelector('.progress-fill');
      if (fill) fill.setAttribute('stroke-dashoffset', offset);
      item.classList.toggle('completed', !!isComplete);
    });
    updateOverallProgress();
  }

  function updateOverallProgress() {
    const overall = progress.getOverallProgress(TUTORIALS);
    const bar = $('#overall-progress');
    const text = $('#progress-text');
    if (bar) bar.style.width = overall.percentage + '%';
    if (text) text.textContent = `${overall.completedSteps} / ${overall.totalSteps} 步 · ${overall.percentage}%`;
  }

  function highlightModule(index) {
    $$('.module-nav-item').forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  // ==================== Module Selection ====================
  function selectModule(index) {
    const module = TUTORIALS[index];
    if (!module) return;

    // Cancel any stale timers from previous navigation
    cancelPendingTimers();

    currentModuleIndex = index;
    currentStepIndex = 0;
    progress.setLastModule(module.id);
    highlightModule(index);

    // Find first incomplete step
    const prog = progress.getModuleProgress(module.id);
    for (let i = 0; i < module.steps.length; i++) {
      if (!prog.completedSteps.includes(i)) {
        currentStepIndex = i;
        break;
      }
    }

    // Immediately render content — no long delay
    renderStep();

    // Show step nav
    $('#step-nav').classList.remove('hidden');

    // Close mobile sidebar
    closeMobileSidebar();
  }

  // ==================== Step Rendering ====================
  function renderStep() {
    const module = TUTORIALS[currentModuleIndex];
    if (!module) return;

    const step = module.steps[currentStepIndex];
    if (!step) return;

    // Cancel stale timers from previous step
    cancelPendingTimers();

    const content = $('#tutorial-content');

    // Fade out
    content.classList.add('content-exit');

    renderStepTimer = setTimeout(() => {
      renderStepTimer = null;

      // Remove welcome placeholder
      const placeholder = content.querySelector('.welcome-placeholder');
      if (placeholder) placeholder.remove();

      // Render content
      content.innerHTML = step.content;

      // Add copy buttons to code blocks
      addCopyButtons(content);

      // Render diagrams in this step
      renderDiagrams(content);

      // Fade in
      content.classList.remove('content-exit');
      content.classList.add('content-enter');
      setTimeout(() => content.classList.remove('content-enter'), 400);

      // Update nav
      updateStepNav();

      // Scroll to top of tutorial panel (the actual scrollable container)
      const panel = $('#tutorial-panel');
      if (panel) panel.scrollTop = 0;
      content.scrollTop = 0;
      // On mobile, body is the scroll container
      window.scrollTo(0, 0);

      // Cat speaks — this is the ONLY speak call per step (no conflicts)
      catSpeakTimer = setTimeout(() => {
        catSpeakTimer = null;
        if (step.catMessage) {
          cat.speak(step.catMessage);
        }
        if (step.catState) {
          cat.setState(step.catState);
        }
      }, 400);

      // Auto-mark as viewed — use lightweight sidebar update (no full rebuild)
      autoMarkTimer = setTimeout(() => {
        autoMarkTimer = null;

        progress.setStepComplete(module.id, currentStepIndex);
        updateSidebarProgress();
        highlightModule(currentModuleIndex);

        // Check module completion (silently — no cat.speak to avoid conflicts)
        if (progress.isModuleComplete(module.id) === false) {
          const allDone = module.steps.every((_, i) =>
            progress.getModuleProgress(module.id).completedSteps.includes(i)
          );
          if (allDone) {
            progress.markModuleComplete(module.id);
            updateSidebarProgress();
            highlightModule(currentModuleIndex);
          }
        }
      }, 3000);

    }, 200);
  }

  // ==================== Diagram Rendering ====================
  function renderDiagrams(container) {
    if (typeof Diagrams === 'undefined') return;

    const diagramMap = {
      'diagram-workflow': Diagrams.renderWorkflowDiagram,
      'diagram-permissions': Diagrams.renderPermissionDiagram,
      'diagram-git': Diagrams.renderGitTimeline,
      'diagram-memory': Diagrams.renderMemoryPyramid,
      'diagram-hooks': Diagrams.renderHookFlow,
      'diagram-mcp': Diagrams.renderMCPArchitecture,
    };

    for (const [id, renderFn] of Object.entries(diagramMap)) {
      const el = container.querySelector('#' + id);
      if (el) {
        try {
          renderFn(el);
        } catch (err) {
          console.warn(`Failed to render diagram ${id}:`, err);
        }
      }
    }

    // Handle code diff diagrams
    const diffEl = container.querySelector('#diagram-diff');
    if (diffEl && Diagrams.renderCodeDiff) {
      try {
        const beforeCode = JSON.parse(diffEl.dataset.before || '[]');
        const afterCode = JSON.parse(diffEl.dataset.after || '[]');
        Diagrams.renderCodeDiff(diffEl, beforeCode, afterCode);
      } catch (err) {
        console.warn('Failed to render code diff:', err);
      }
    }
  }

  function updateStepNav() {
    const module = TUTORIALS[currentModuleIndex];
    if (!module) return;

    const total = module.steps.length;
    const curr = currentStepIndex + 1;

    $('#step-counter').textContent = `${curr} / ${total}`;
    $('#prev-step').disabled = currentStepIndex === 0;
    $('#next-step').disabled = currentStepIndex === total - 1;

    // Update next button text for last step
    const nextBtn = $('#next-step');
    if (currentStepIndex === total - 1) {
      if (currentModuleIndex < TUTORIALS.length - 1) {
        nextBtn.disabled = false;
        nextBtn.textContent = '下一模块 →';
      } else {
        nextBtn.textContent = '已完成 ✓';
      }
    } else {
      nextBtn.textContent = '下一步 →';
    }
  }

  function goNextStep() {
    const module = TUTORIALS[currentModuleIndex];
    if (!module) return;

    if (currentStepIndex < module.steps.length - 1) {
      currentStepIndex++;
      renderStep();
    } else if (currentModuleIndex < TUTORIALS.length - 1) {
      selectModule(currentModuleIndex + 1);
    }
  }

  function goPrevStep() {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      renderStep();
    }
  }

  // ==================== Welcome ====================
  function showWelcome() {
    const content = $('#tutorial-content');
    content.innerHTML = `
      <div class="welcome-placeholder">
        <h2>欢迎来到 Claude Code 猫猫学院</h2>
        <p>从左侧选择一个学习模块开始你的旅程吧！</p>
        <div class="welcome-modules">
          ${TUTORIALS.map((m, i) => `
            <button class="welcome-module-card" data-index="${i}">
              <span class="wmc-icon">${m.icon}</span>
              <span class="wmc-title">${m.title}</span>
              <span class="wmc-desc">${m.description}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    content.querySelectorAll('.welcome-module-card').forEach(card => {
      card.addEventListener('click', () => {
        selectModule(parseInt(card.dataset.index));
      });
    });

    $('#step-nav').classList.add('hidden');

    setTimeout(() => cat.react('welcome'), 500);
  }

  // ==================== Code Copy Buttons ====================
  function addCopyButtons(container) {
    container.querySelectorAll('pre').forEach(pre => {
      const code = pre.querySelector('code');
      if (!code) return;

      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = '复制';
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(code.textContent).then(() => {
          btn.textContent = '已复制!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = '复制';
            btn.classList.remove('copied');
          }, 2000);
        });
      });
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
  }

  // ==================== Theme ====================
  function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    const toggle = $('#theme-toggle');
    if (toggle) {
      toggle.checked = theme === 'dark';
    }
    const label = $('.switch-label');
    if (label) {
      label.textContent = theme === 'dark' ? '🌙 暗色模式' : '☀️ 亮色模式';
    }
  }

  function toggleTheme() {
    const current = document.body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    progress.setTheme(next);
    applyTheme(next);
  }

  // ==================== Mobile Sidebar ====================
  function toggleMobileSidebar() {
    const sidebar = $('#sidebar');
    const overlay = $('#sidebar-overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('visible');
  }

  function closeMobileSidebar() {
    const sidebar = $('#sidebar');
    const overlay = $('#sidebar-overlay');
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  }

  // ==================== Event Listeners ====================
  function setupEventListeners() {
    // Step navigation
    $('#prev-step').addEventListener('click', goPrevStep);
    $('#next-step').addEventListener('click', goNextStep);

    // Theme toggle
    $('#theme-toggle').addEventListener('change', toggleTheme);

    // Mobile menu
    const menuToggle = $('#menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMobileSidebar);
    }
    const overlay = $('#sidebar-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeMobileSidebar);
    }

    // Reset progress
    const resetBtn = $('#reset-progress');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('确定要重置所有学习进度吗？此操作不可撤销。')) {
          progress.reset();
          location.reload();
        }
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goNextStep();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrevStep();
      }
    });
  }

})();
