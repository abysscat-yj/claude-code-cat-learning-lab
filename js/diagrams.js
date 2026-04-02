/**
 * Diagrams - SVG diagram generation system for Claude Code Cat Learning Lab
 * Generates inline SVG diagrams for technical concept visualization.
 * Supports dark/light theme switching via CSS custom properties.
 */

const Diagrams = (function () {
  'use strict';

  // ===========================================================================
  // Helpers
  // ===========================================================================

  const SVG_NS = 'http://www.w3.org/2000/svg';

  /**
   * Create an SVG-namespaced element with the given attributes.
   */
  function svgEl(tag, attrs) {
    const el = document.createElementNS(SVG_NS, tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        el.setAttribute(k, attrs[k]);
      });
    }
    return el;
  }

  /**
   * Create a plain HTML element with optional attributes and text content.
   */
  function htmlEl(tag, attrs, text) {
    const el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        el.setAttribute(k, attrs[k]);
      });
    }
    if (text !== undefined) el.textContent = text;
    return el;
  }

  /**
   * Read a CSS custom property value from the document root.
   */
  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  /**
   * Create a root <svg> element that scales responsively.
   */
  function createSvgRoot(viewBox) {
    return svgEl('svg', {
      viewBox: viewBox,
      width: '100%',
      preserveAspectRatio: 'xMidYMid meet',
      xmlns: SVG_NS,
      style: 'display:block;max-width:100%;height:auto;'
    });
  }

  /**
   * Inject a <style> inside a <defs> block at the top of the SVG.
   */
  function injectSvgStyle(svg, cssText) {
    let defs = svg.querySelector('defs');
    if (!defs) {
      defs = svgEl('defs');
      svg.insertBefore(defs, svg.firstChild);
    }
    const style = svgEl('style');
    style.textContent = cssText;
    defs.appendChild(style);
  }

  /**
   * Create an SVG <text> element. Handles single-line only.
   */
  function svgText(x, y, content, opts) {
    opts = opts || {};
    const el = svgEl('text', {
      x: x,
      y: y,
      'text-anchor': opts.anchor || 'middle',
      'dominant-baseline': opts.baseline || 'central',
      'font-size': opts.size || '12',
      'font-weight': opts.weight || '500',
      'font-family': opts.mono
        ? "'JetBrains Mono','Fira Code',monospace"
        : "'Inter',-apple-system,sans-serif",
      fill: opts.fill || 'var(--text-primary)',
      opacity: opts.opacity !== undefined ? opts.opacity : 1
    });
    if (opts.transform) el.setAttribute('transform', opts.transform);
    el.textContent = content;
    return el;
  }

  /**
   * Build a rounded-rect node containing one or two lines of centered text.
   * Returns a <g> group.
   */
  function labeledBox(x, y, w, h, lines, fill, textFill, rx) {
    rx = rx !== undefined ? rx : 10;
    textFill = textFill || '#fff';
    const g = svgEl('g');

    g.appendChild(svgEl('rect', {
      x: x, y: y, width: w, height: h,
      rx: rx, ry: rx,
      fill: fill,
      stroke: 'var(--glass-border)',
      'stroke-width': 1.5
    }));

    if (!Array.isArray(lines)) lines = [lines];
    const lineH = 15;
    const totalH = lines.length * lineH;
    const startY = y + h / 2 - totalH / 2 + lineH / 2;

    lines.forEach(function (txt, i) {
      g.appendChild(svgText(x + w / 2, startY + i * lineH, txt, {
        fill: textFill,
        size: '12',
        weight: '600'
      }));
    });

    return g;
  }

  /**
   * Draw an arrow from (x1,y1) to (x2,y2).
   * Returns a <g> containing the line and a triangular arrowhead.
   */
  function arrowLine(x1, y1, x2, y2, color, dashed) {
    color = color || 'var(--text-secondary)';
    const g = svgEl('g');
    const attrs = {
      x1: x1, y1: y1,
      x2: x2 - 6, y2: y2,
      stroke: color,
      'stroke-width': 2,
      'stroke-linecap': 'round'
    };
    if (dashed) attrs['stroke-dasharray'] = '5 4';
    g.appendChild(svgEl('line', attrs));

    // Triangle head
    const s = 7;
    g.appendChild(svgEl('polygon', {
      points: x2 + ',' + y2 + ' ' + (x2 - s) + ',' + (y2 - s / 2) + ' ' + (x2 - s) + ',' + (y2 + s / 2),
      fill: color
    }));
    return g;
  }

  // ===========================================================================
  // 1. Workflow Diagram  --  Claude Code workflow
  //    用户输入 -> Claude 思考 -> 选择工具 -> 执行 -> 输出结果
  //    viewBox ~700x200
  // ===========================================================================

  function renderWorkflowDiagram(container) {
    const primary   = cssVar('--primary')      || '#e8734a';
    const secondary = cssVar('--secondary')    || '#6c5ce7';
    const green     = cssVar('--accent-green') || '#00b894';
    const blue      = cssVar('--accent-blue')  || '#74b9ff';

    const svg = createSvgRoot('0 0 700 200');

    injectSvgStyle(svg, [
      '@keyframes pulse-flow {',
      '  0%, 100% { opacity: 0.45; }',
      '  50% { opacity: 1; }',
      '}',
      '.wf-arrow { animation: pulse-flow 2s ease-in-out infinite; }',
      '.wf-arrow:nth-of-type(2) { animation-delay: 0.25s; }',
      '.wf-arrow:nth-of-type(3) { animation-delay: 0.50s; }',
      '.wf-arrow:nth-of-type(4) { animation-delay: 0.75s; }'
    ].join('\n'));

    // Node definitions ---------------------------------------------------------
    var nodeY = 55;
    var nodeH = 46;
    var nodes = [
      { x: 10,  w: 95,  label: '用户输入',    fill: secondary },
      { x: 145, w: 105, label: 'Claude 思考',  fill: primary },
      { x: 290, w: 100, label: '选择工具',     fill: primary },
      { x: 510, w: 80,  label: '执行',         fill: green },
      { x: 620, w: 70,  label: '输出结果',     fill: secondary }
    ];

    // Arrows between main nodes ------------------------------------------------
    var pairs = [
      [nodes[0].x + nodes[0].w, nodeY + nodeH / 2, nodes[1].x, nodeY + nodeH / 2],
      [nodes[1].x + nodes[1].w, nodeY + nodeH / 2, nodes[2].x, nodeY + nodeH / 2],
      [nodes[3].x + nodes[3].w, nodeY + nodeH / 2, nodes[4].x, nodeY + nodeH / 2]
    ];
    pairs.forEach(function (p) {
      var a = arrowLine(p[0] + 4, p[1], p[2] - 4, p[3]);
      a.setAttribute('class', 'wf-arrow');
      svg.appendChild(a);
    });

    // Main nodes ---------------------------------------------------------------
    nodes.forEach(function (n) {
      svg.appendChild(labeledBox(n.x, nodeY, n.w, nodeH, n.label, n.fill, '#fff'));
    });

    // Tool branches from "选择工具" -------------------------------------------
    var tools = [
      { label: 'Read', fill: blue },
      { label: 'Edit', fill: green },
      { label: 'Bash', fill: primary },
      { label: 'Grep', fill: secondary }
    ];
    var toolW = 54;
    var toolH = 28;
    var toolGap = 10;
    var totalToolsW = tools.length * toolW + (tools.length - 1) * toolGap;
    var branchCX = nodes[2].x + nodes[2].w / 2;
    var toolStartX = branchCX - totalToolsW / 2;
    var toolY = 148;

    // Dashed connectors from "选择工具" bottom center to each tool box
    tools.forEach(function (tool, i) {
      var tx = toolStartX + i * (toolW + toolGap);
      var tcx = tx + toolW / 2;

      svg.appendChild(svgEl('line', {
        x1: branchCX, y1: nodeY + nodeH,
        x2: tcx, y2: toolY,
        stroke: 'var(--text-secondary)',
        'stroke-width': 1.5,
        'stroke-dasharray': '4 3',
        opacity: 0.55
      }));

      svg.appendChild(labeledBox(tx, toolY, toolW, toolH, tool.label, tool.fill, '#fff', 7));
    });

    // Curved arrow from tool area to "执行" ------------------------------------
    var toolEndX = toolStartX + totalToolsW;
    var toolMidY = toolY + toolH / 2;
    svg.appendChild(svgEl('path', {
      d: 'M ' + toolEndX + ' ' + toolMidY +
         ' Q ' + (toolEndX + 35) + ' ' + toolMidY +
         ' '   + (toolEndX + 35) + ' ' + (nodeY + nodeH / 2) +
         ' L ' + (nodes[3].x - 6) + ' ' + (nodeY + nodeH / 2),
      fill: 'none',
      stroke: 'var(--text-secondary)',
      'stroke-width': 1.5,
      'stroke-dasharray': '4 3',
      opacity: 0.5
    }));

    // Small arrowhead at the end of the curved path
    var ax = nodes[3].x;
    var ay = nodeY + nodeH / 2;
    svg.appendChild(svgEl('polygon', {
      points: ax + ',' + ay + ' ' + (ax - 7) + ',' + (ay - 3.5) + ' ' + (ax - 7) + ',' + (ay + 3.5),
      fill: 'var(--text-secondary)',
      opacity: 0.5
    }));

    container.innerHTML = '';
    container.appendChild(svg);
  }

  // ===========================================================================
  // 2. Permission Diagram  --  Permission system (concentric circles)
  //    Outer=Auto, Middle=Default, Inner=Plan
  //    viewBox ~400x400
  // ===========================================================================

  function renderPermissionDiagram(container) {
    const primary   = cssVar('--primary')      || '#e8734a';
    const secondary = cssVar('--secondary')    || '#6c5ce7';
    const green     = cssVar('--accent-green') || '#00b894';

    const svg = createSvgRoot('0 0 400 400');
    const cx = 200;
    const cy = 200;

    // --- Outer ring: Auto (purple) ---
    svg.appendChild(svgEl('circle', {
      cx: cx, cy: cy, r: 175,
      fill: secondary, opacity: 0.08
    }));
    svg.appendChild(svgEl('circle', {
      cx: cx, cy: cy, r: 175,
      fill: 'none', stroke: secondary, 'stroke-width': 2, opacity: 0.6
    }));

    // --- Middle ring: Default (coral) ---
    svg.appendChild(svgEl('circle', {
      cx: cx, cy: cy, r: 120,
      fill: primary, opacity: 0.1
    }));
    svg.appendChild(svgEl('circle', {
      cx: cx, cy: cy, r: 120,
      fill: 'none', stroke: primary, 'stroke-width': 2, opacity: 0.7
    }));

    // --- Inner circle: Plan (green) ---
    svg.appendChild(svgEl('circle', {
      cx: cx, cy: cy, r: 60,
      fill: green, opacity: 0.15
    }));
    svg.appendChild(svgEl('circle', {
      cx: cx, cy: cy, r: 60,
      fill: 'none', stroke: green, 'stroke-width': 2
    }));

    // Labels inside rings
    // Inner (Plan)
    svg.appendChild(svgText(cx, cy - 8, 'Plan 只读', { fill: green, size: '14', weight: '700' }));
    svg.appendChild(svgText(cx, cy + 10, '仅分析 不执行', { fill: green, size: '10', weight: '400', opacity: 0.85 }));

    // Middle (Default) - label placed in the ring gap
    svg.appendChild(svgText(cx, cy - 95, 'Default 需审批', { fill: primary, size: '13', weight: '700' }));
    svg.appendChild(svgText(cx, cy - 79, '敏感操作需审批', { fill: primary, size: '10', weight: '400', opacity: 0.8 }));

    // Capability labels inside the middle ring area
    svg.appendChild(svgText(cx, cy + 78, 'Edit / Bash / Write', { fill: primary, size: '10', weight: '500', opacity: 0.7, mono: true }));

    // Outer (Auto)
    svg.appendChild(svgText(cx, 38, 'Auto 自动执行', { fill: secondary, size: '13', weight: '700' }));
    svg.appendChild(svgText(cx, 54, '自动执行所有操作', { fill: secondary, size: '10', weight: '400', opacity: 0.8 }));

    // Capability labels in the outer ring area
    svg.appendChild(svgText(cx, cy + 145, 'Read / List / Glob / Edit / Bash ...', { fill: secondary, size: '10', weight: '500', opacity: 0.65, mono: true }));

    // Capability label in inner ring area
    svg.appendChild(svgText(cx, cy + 38, 'Read / Glob', { fill: green, size: '10', weight: '500', opacity: 0.7, mono: true }));

    // Bottom legend
    var legendY = 384;
    var items = [
      { color: green,     label: '最安全' },
      { color: primary,   label: '需审批' },
      { color: secondary, label: '自动化' }
    ];
    var legendStartX = cx - 110;
    items.forEach(function (item, i) {
      var lx = legendStartX + i * 85;
      svg.appendChild(svgEl('circle', { cx: lx, cy: legendY, r: 5, fill: item.color }));
      svg.appendChild(svgText(lx + 12, legendY, item.label, { fill: 'var(--text-secondary)', size: '11', anchor: 'start' }));
    });

    container.innerHTML = '';
    container.appendChild(svg);
  }

  // ===========================================================================
  // 3. Git Timeline  --  Branch visualization
  //    Main branch with commits, feature branch fork/merge
  //    viewBox ~700x250
  // ===========================================================================

  function renderGitTimeline(container) {
    const primary   = cssVar('--primary')      || '#e8734a';
    const secondary = cssVar('--secondary')    || '#6c5ce7';
    const green     = cssVar('--accent-green') || '#00b894';
    const blue      = cssVar('--accent-blue')  || '#74b9ff';

    const svg = createSvgRoot('0 0 700 250');

    var mainY = 90;

    // Main branch line ---------------------------------------------------------
    svg.appendChild(svgEl('line', {
      x1: 40, y1: mainY, x2: 660, y2: mainY,
      stroke: blue, 'stroke-width': 3, 'stroke-linecap': 'round'
    }));

    // "main" label
    svg.appendChild(svgText(32, mainY - 22, 'main', {
      fill: blue, size: '13', weight: '700', mono: true, anchor: 'start'
    }));

    // Main commits -------------------------------------------------------------
    var mainCommits = [
      { x: 80,  label: 'init' },
      { x: 190, label: 'v0.1' },
      { x: 400, label: 'hotfix' },
      { x: 540, label: 'merge' },
      { x: 640, label: 'v1.0' }
    ];

    mainCommits.forEach(function (c) {
      var isMerge = c.label === 'merge';
      svg.appendChild(svgEl('circle', {
        cx: c.x, cy: mainY, r: isMerge ? 8 : 7,
        fill: isMerge ? green : blue,
        stroke: isMerge ? green : blue,
        'stroke-width': 2
      }));
      svg.appendChild(svgText(c.x, mainY + 22, c.label, {
        fill: 'var(--text-secondary)', size: '10', mono: true
      }));
    });

    // Feature branch -----------------------------------------------------------
    var featureY = 185;
    var forkX = 190;
    var mergeX = 540;

    // Fork curve (main -> feature)
    svg.appendChild(svgEl('path', {
      d: 'M ' + forkX + ' ' + mainY +
         ' C ' + (forkX + 50) + ' ' + mainY +
         ' '   + (forkX + 50) + ' ' + featureY +
         ' '   + (forkX + 90) + ' ' + featureY,
      fill: 'none', stroke: primary, 'stroke-width': 3, 'stroke-linecap': 'round'
    }));

    // Feature branch line
    svg.appendChild(svgEl('line', {
      x1: forkX + 90, y1: featureY,
      x2: mergeX - 90, y2: featureY,
      stroke: primary, 'stroke-width': 3, 'stroke-linecap': 'round'
    }));

    // Merge curve (feature -> main)
    svg.appendChild(svgEl('path', {
      d: 'M ' + (mergeX - 90) + ' ' + featureY +
         ' C ' + (mergeX - 40) + ' ' + featureY +
         ' '   + (mergeX - 40) + ' ' + mainY +
         ' '   + mergeX + ' ' + mainY,
      fill: 'none', stroke: primary, 'stroke-width': 3, 'stroke-linecap': 'round'
    }));

    // Feature branch label
    svg.appendChild(svgText(forkX + 70, featureY - 22, 'feature/shrimp-cat', {
      fill: primary, size: '13', weight: '700', mono: true, anchor: 'start'
    }));

    // Feature commits
    var featureCommits = [
      { x: 320, label: 'add feature' },
      { x: 420, label: 'fix bug' }
    ];
    featureCommits.forEach(function (c) {
      svg.appendChild(svgEl('circle', {
        cx: c.x, cy: featureY, r: 6,
        fill: primary, stroke: primary, 'stroke-width': 2
      }));
      svg.appendChild(svgText(c.x, featureY + 20, c.label, {
        fill: 'var(--text-secondary)', size: '10', mono: true
      }));
    });

    // Merge commit highlight ring
    svg.appendChild(svgEl('circle', {
      cx: 540, cy: mainY, r: 13,
      fill: 'none', stroke: green, 'stroke-width': 2,
      'stroke-dasharray': '3 2', opacity: 0.6
    }));

    container.innerHTML = '';
    container.appendChild(svg);
  }

  // ===========================================================================
  // 4. Memory Pyramid  --  CLAUDE.md memory hierarchy
  //    4 trapezoid layers, priority arrow on left
  //    viewBox ~500x350
  // ===========================================================================

  function renderMemoryPyramid(container) {
    const primary   = cssVar('--primary')       || '#e8734a';
    const secondary = cssVar('--secondary')     || '#6c5ce7';
    const green     = cssVar('--accent-green')  || '#00b894';
    const blue      = cssVar('--accent-blue')   || '#74b9ff';
    const yellow    = cssVar('--accent-yellow') || '#ffeaa7';

    const svg = createSvgRoot('0 0 500 350');

    var layers = [
      { label: '目录级 .claude/settings.json', sub: '最高优先级',   fill: primary,   opacity: 0.88 },
      { label: '项目级 CLAUDE.md',              sub: '项目规则与上下文', fill: secondary, opacity: 0.75 },
      { label: '用户级 ~/.claude/settings.json', sub: '个人偏好',     fill: blue,      opacity: 0.62 },
      { label: '全局安装配置',                   sub: '默认设置',     fill: green,     opacity: 0.50 }
    ];

    var topY     = 25;
    var layerH   = 58;
    var gap       = 7;
    var topW     = 170;
    var bottomW  = 430;
    var centerX  = 260;
    var n        = layers.length;

    layers.forEach(function (layer, i) {
      var y = topY + i * (layerH + gap);

      // Width of this layer's top edge
      var wTop = topW + (bottomW - topW) * (i / (n - 1));
      // Width of this layer's bottom edge
      var wBot = topW + (bottomW - topW) * ((i + 1) / (n - 1));
      if (i === n - 1) wBot = wTop; // last layer is a rectangle at the bottom

      var xTopL = centerX - wTop / 2;
      var xTopR = centerX + wTop / 2;
      var xBotL = centerX - wBot / 2;
      var xBotR = centerX + wBot / 2;

      var points = [
        xTopL + ',' + y,
        xTopR + ',' + y,
        xBotR + ',' + (y + layerH),
        xBotL + ',' + (y + layerH)
      ].join(' ');

      svg.appendChild(svgEl('polygon', {
        points: points,
        fill: layer.fill,
        opacity: layer.opacity,
        stroke: layer.fill,
        'stroke-width': 1.5,
        'stroke-linejoin': 'round'
      }));

      // Main label
      svg.appendChild(svgText(centerX, y + layerH / 2 - 8, layer.label, {
        fill: '#fff', size: i === 0 ? '12' : '11', weight: '600'
      }));

      // Sub label
      svg.appendChild(svgText(centerX, y + layerH / 2 + 9, layer.sub, {
        fill: 'rgba(255,255,255,0.72)', size: '10', weight: '400'
      }));
    });

    // Priority arrow on the left side ------------------------------------------
    var arrowX     = 28;
    var arrowTop   = topY + 10;
    var arrowBot   = topY + n * (layerH + gap) - gap - 10;

    // Shaft
    svg.appendChild(svgEl('line', {
      x1: arrowX, y1: arrowBot,
      x2: arrowX, y2: arrowTop + 10,
      stroke: yellow, 'stroke-width': 2.5, 'stroke-linecap': 'round'
    }));

    // Arrowhead (pointing up)
    svg.appendChild(svgEl('polygon', {
      points: arrowX + ',' + arrowTop + ' ' +
              (arrowX - 6) + ',' + (arrowTop + 10) + ' ' +
              (arrowX + 6) + ',' + (arrowTop + 10),
      fill: yellow
    }));

    // "优先级" rotated label
    var midArrowY = (arrowTop + arrowBot) / 2;
    svg.appendChild(svgText(arrowX, midArrowY, '优先级', {
      fill: yellow, size: '11', weight: '600',
      transform: 'rotate(-90 ' + arrowX + ' ' + midArrowY + ')'
    }));

    container.innerHTML = '';
    container.appendChild(svg);
  }

  // ===========================================================================
  // 5. Hook Flow  --  Hook event flow
  //    SessionStart -> PreToolUse -> [工具执行] -> PostToolUse -> Stop
  //    viewBox ~700x250
  // ===========================================================================

  function renderHookFlow(container) {
    const primary   = cssVar('--primary')      || '#e8734a';
    const secondary = cssVar('--secondary')    || '#6c5ce7';
    const green     = cssVar('--accent-green') || '#00b894';
    const blue      = cssVar('--accent-blue')  || '#74b9ff';

    const svg = createSvgRoot('0 0 700 250');

    injectSvgStyle(svg, [
      '@keyframes hook-pulse {',
      '  0%, 100% { opacity: 0.65; }',
      '  50% { opacity: 1; }',
      '}',
      '.hook-point rect { animation: hook-pulse 2.5s ease-in-out infinite; }'
    ].join('\n'));

    // Timeline nodes -----------------------------------------------------------
    var nodeY = 50;
    var nodeH = 48;
    var nodes = [
      { x: 15,  w: 110, label: 'SessionStart', fill: green,     hook: false },
      { x: 160, w: 108, label: 'PreToolUse',   fill: primary,   hook: true },
      { x: 303, w: 95,  label: '工具执行',      fill: blue,      hook: false },
      { x: 433, w: 112, label: 'PostToolUse',  fill: primary,   hook: true },
      { x: 580, w: 100, label: 'Stop',         fill: secondary, hook: false }
    ];

    // Arrows between nodes
    for (var i = 0; i < nodes.length - 1; i++) {
      var fromX = nodes[i].x + nodes[i].w;
      var toX   = nodes[i + 1].x;
      var midY  = nodeY + nodeH / 2;
      svg.appendChild(arrowLine(fromX + 4, midY, toX - 4, midY, 'var(--text-secondary)'));
    }

    // Draw node boxes
    nodes.forEach(function (n) {
      var g = labeledBox(n.x, nodeY, n.w, nodeH, n.label, n.fill, '#fff');
      if (n.hook) g.setAttribute('class', 'hook-point');
      svg.appendChild(g);
    });

    // "Hook Point" badges above hook nodes
    [nodes[1], nodes[3]].forEach(function (n) {
      svg.appendChild(svgText(n.x + n.w / 2, nodeY - 14, 'Hook Point', {
        fill: primary, size: '10', weight: '600', mono: true
      }));
    });

    // Custom command boxes hanging below PreToolUse and PostToolUse ------------
    var hookNodes   = [nodes[1], nodes[3]];
    var hookDescs   = ['拦截 / 修改请求', '处理 / 记录结果'];

    hookNodes.forEach(function (n, idx) {
      var boxW = 134;
      var boxH = 52;
      var boxX = n.x + n.w / 2 - boxW / 2;
      var boxY = nodeY + nodeH + 52;

      // Dashed vertical connector
      svg.appendChild(svgEl('line', {
        x1: n.x + n.w / 2, y1: nodeY + nodeH,
        x2: n.x + n.w / 2, y2: boxY,
        stroke: 'var(--text-secondary)',
        'stroke-width': 1.5,
        'stroke-dasharray': '5 4'
      }));

      // Dashed-border box
      svg.appendChild(svgEl('rect', {
        x: boxX, y: boxY, width: boxW, height: boxH,
        rx: 8, ry: 8,
        fill: 'var(--bg-card)',
        stroke: primary,
        'stroke-width': 1.5,
        'stroke-dasharray': '5 4'
      }));

      // Label: "自定义命令"
      svg.appendChild(svgText(n.x + n.w / 2, boxY + 19, '自定义命令', {
        fill: 'var(--text-primary)', size: '11', weight: '600'
      }));

      // Description
      svg.appendChild(svgText(n.x + n.w / 2, boxY + 37, hookDescs[idx], {
        fill: 'var(--text-secondary)', size: '10', weight: '400'
      }));
    });

    container.innerHTML = '';
    container.appendChild(svg);
  }

  // ===========================================================================
  // 6. MCP Architecture  --  Hub and spoke
  //    Center = Claude Code, spokes to various MCP servers
  //    viewBox ~500x400
  // ===========================================================================

  function renderMCPArchitecture(container) {
    const primary   = cssVar('--primary')      || '#e8734a';
    const secondary = cssVar('--secondary')    || '#6c5ce7';
    const green     = cssVar('--accent-green') || '#00b894';
    const blue      = cssVar('--accent-blue')  || '#74b9ff';
    const red       = cssVar('--accent-red')   || '#ff6b6b';

    const svg = createSvgRoot('0 0 500 400');

    var cx   = 250;
    var cy   = 200;
    var hubR = 50;

    // Hub glow
    svg.appendChild(svgEl('circle', {
      cx: cx, cy: cy, r: hubR + 10,
      fill: primary, opacity: 0.12
    }));
    // Hub solid
    svg.appendChild(svgEl('circle', {
      cx: cx, cy: cy, r: hubR,
      fill: primary, opacity: 0.9,
      stroke: primary, 'stroke-width': 2.5
    }));
    // Hub label
    svg.appendChild(svgText(cx, cy - 8, 'Claude', { fill: '#fff', size: '14', weight: '700' }));
    svg.appendChild(svgText(cx, cy + 10, 'Code',  { fill: '#fff', size: '14', weight: '700' }));

    // Spoke definitions --------------------------------------------------------
    var spokes = [
      { label: 'GitHub\nMCP',   angle: -90,  color: secondary, protocol: 'stdio' },
      { label: 'File\nSystem',  angle: -25,  color: green,     protocol: 'stdio' },
      { label: 'Database',      angle: 35,   color: blue,      protocol: 'http' },
      { label: 'Slack',         angle: 110,  color: red,       protocol: 'http' },
      { label: 'Custom\nAPI',   angle: 205,  color: secondary, protocol: 'http' }
    ];

    var spokeR = 155;
    var nodeR  = 33;

    spokes.forEach(function (spoke) {
      var rad = spoke.angle * Math.PI / 180;
      var ex  = cx + spokeR * Math.cos(rad);
      var ey  = cy + spokeR * Math.sin(rad);

      // Connection line (from hub edge to node edge)
      var lineStart = hubR + 6;
      var lineEnd   = spokeR - nodeR - 6;
      var lsx = cx + lineStart * Math.cos(rad);
      var lsy = cy + lineStart * Math.sin(rad);
      var lex = cx + lineEnd * Math.cos(rad);
      var ley = cy + lineEnd * Math.sin(rad);

      svg.appendChild(svgEl('line', {
        x1: lsx, y1: lsy, x2: lex, y2: ley,
        stroke: spoke.color, 'stroke-width': 2, opacity: 0.55
      }));

      // Protocol label on the connection line (offset perpendicular)
      var midX = (lsx + lex) / 2;
      var midY = (lsy + ley) / 2;
      var perpRad = rad + Math.PI / 2;
      var labelX = midX + 13 * Math.cos(perpRad);
      var labelY = midY + 13 * Math.sin(perpRad);

      svg.appendChild(svgText(labelX, labelY, spoke.protocol, {
        fill: spoke.color, size: '9', weight: '600', mono: true, opacity: 0.8
      }));

      // Endpoint node - background fill
      svg.appendChild(svgEl('circle', {
        cx: ex, cy: ey, r: nodeR,
        fill: spoke.color, opacity: 0.12
      }));
      // Endpoint node - border
      svg.appendChild(svgEl('circle', {
        cx: ex, cy: ey, r: nodeR,
        fill: 'none', stroke: spoke.color, 'stroke-width': 2
      }));

      // Endpoint label
      var lines = spoke.label.split('\n');
      lines.forEach(function (line, li) {
        svg.appendChild(svgText(ex, ey + (li - (lines.length - 1) / 2) * 14, line, {
          fill: spoke.color, size: '11', weight: '600'
        }));
      });
    });

    container.innerHTML = '';
    container.appendChild(svg);
  }

  // ===========================================================================
  // 7. Code Diff Display  --  HTML (not SVG)
  //    Side-by-side panels: 修改前 (red tint) / 修改后 (green tint)
  // ===========================================================================

  /**
   * Render a side-by-side code diff.
   * @param {HTMLElement} container
   * @param {Array<{text: string, type: string}>} beforeCode  - type: 'normal' | 'removed'
   * @param {Array<{text: string, type: string}>} afterCode   - type: 'normal' | 'added'
   */
  function renderCodeDiff(container, beforeCode, afterCode) {
    container.innerHTML = '';

    // Wrapper
    var diffContainer = htmlEl('div', { class: 'diff-container' });
    diffContainer.style.cssText = [
      'display:flex;',
      'gap:12px;',
      'width:100%;',
      'border-radius:var(--radius-md,10px);',
      'overflow:hidden;',
      'font-family:var(--font-mono,monospace);',
      'font-size:13px;',
      'line-height:1.6;'
    ].join('');

    /**
     * Build one panel (before or after).
     */
    function buildPanel(title, lines, panelClass, tintColor, removedOrAdded) {
      var panel = htmlEl('div', { class: 'diff-panel ' + panelClass });
      panel.style.cssText = [
        'flex:1;',
        'min-width:0;',
        'border-radius:var(--radius-md,10px);',
        'overflow:hidden;',
        'border:1px solid var(--glass-border,rgba(255,255,255,0.08));'
      ].join('');

      // Header
      var header = htmlEl('div');
      header.style.cssText = [
        'padding:8px 14px;',
        'font-size:12px;',
        'font-weight:600;',
        'font-family:var(--font-sans,sans-serif);',
        'color:' + tintColor + ';',
        'background:' + tintColor + '18;',
        'border-bottom:1px solid ' + tintColor + '30;'
      ].join('');
      header.textContent = title;
      panel.appendChild(header);

      // Code block
      var pre = htmlEl('pre');
      pre.style.cssText = [
        'margin:0;',
        'padding:12px 0;',
        'overflow-x:auto;',
        'background:var(--bg-code,#0d0d1a);'
      ].join('');

      var code = htmlEl('code');
      code.style.cssText = 'display:block;';

      (lines || []).forEach(function (line, idx) {
        var lineDiv = htmlEl('div');
        var lineClass = '';
        var bgColor = 'transparent';

        if (line.type === 'removed') {
          lineClass = 'diff-line-removed';
          bgColor = 'rgba(255,107,107,0.12)';
        } else if (line.type === 'added') {
          lineClass = 'diff-line-added';
          bgColor = 'rgba(0,184,148,0.12)';
        }

        if (lineClass) lineDiv.setAttribute('class', lineClass);

        lineDiv.style.cssText = [
          'padding:1px 14px;',
          'background:' + bgColor + ';',
          'white-space:pre;',
          'color:var(--text-code,#e8e8f0);'
        ].join('');

        // Line number
        var numSpan = htmlEl('span');
        numSpan.style.cssText = [
          'display:inline-block;',
          'width:28px;',
          'text-align:right;',
          'margin-right:12px;',
          'color:var(--text-muted,#6c6c8a);',
          'user-select:none;',
          'font-size:11px;'
        ].join('');
        numSpan.textContent = String(idx + 1);
        lineDiv.appendChild(numSpan);

        // +/- prefix
        var prefix = '  ';
        if (line.type === 'removed') prefix = '- ';
        else if (line.type === 'added') prefix = '+ ';

        var prefixSpan = htmlEl('span');
        var prefixColor =
          line.type === 'removed' ? 'var(--accent-red,#ff6b6b)' :
          line.type === 'added'   ? 'var(--accent-green,#00b894)' :
                                    'var(--text-muted,#6c6c8a)';
        prefixSpan.style.cssText = 'color:' + prefixColor + ';font-weight:600;user-select:none;';
        prefixSpan.textContent = prefix;
        lineDiv.appendChild(prefixSpan);

        // Code text
        var codeSpan = htmlEl('span');
        codeSpan.textContent = line.text;
        lineDiv.appendChild(codeSpan);

        code.appendChild(lineDiv);
      });

      pre.appendChild(code);
      panel.appendChild(pre);
      return panel;
    }

    var beforePanel = buildPanel(
      '修改前', beforeCode, 'diff-before',
      'var(--accent-red,#ff6b6b)', 'removed'
    );
    var afterPanel = buildPanel(
      '修改后', afterCode, 'diff-after',
      'var(--accent-green,#00b894)', 'added'
    );

    diffContainer.appendChild(beforePanel);
    diffContainer.appendChild(afterPanel);
    container.appendChild(diffContainer);
  }

  // ===========================================================================
  // Public API
  // ===========================================================================

  return {
    renderWorkflowDiagram:   renderWorkflowDiagram,
    renderPermissionDiagram: renderPermissionDiagram,
    renderGitTimeline:       renderGitTimeline,
    renderMemoryPyramid:     renderMemoryPyramid,
    renderHookFlow:          renderHookFlow,
    renderMCPArchitecture:   renderMCPArchitecture,
    renderCodeDiff:          renderCodeDiff
  };

})();
