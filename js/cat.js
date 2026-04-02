/**
 * CatGuide - Controls the shrimp-cat character that guides users
 * through the Claude Code Cat Learning Lab.
 */
class CatGuide {
  constructor(catEl, bubbleEl) {
    this.catEl = catEl;
    this.bubbleEl = bubbleEl;
    this.currentState = 'idle';
    this.idleTimer = null;
    this.bubbleTimer = null;
    this.typewriteTimer = null;
    this.fadeTimer = null; // track the fade-out cleanup timer

    this.encouragements = [
      '做得好！继续加油 (ง •̀_•́)ง',
      '学得真快！你真棒！',
      '完美！下一步继续吧～',
      '太厉害了！为你骄傲喵！',
      '进步神速！保持这个节奏',
      '正确！你越来越熟练了 ᕦ(ò_óˇ)ᕤ',
      '又掌握了一个知识点！(≧▽≦)',
      '稳扎稳打，这就对了',
    ];
  }

  /**
   * Set the visual state of the cat character.
   * @param {'idle'|'happy'|'thinking'|'encouraging'|'celebrating'|'speaking'|'waving'} state
   */
  setState(state) {
    if (this.catEl) {
      this.catEl.classList.remove(`cat-${this.currentState}`);
      this.catEl.classList.add(`cat-${state}`);
    }
    this.currentState = state;
  }

  /**
   * Show a speech bubble with typewriter effect.
   * @param {string} message - Text to display
   * @param {number} duration - How long the bubble stays visible (ms)
   */
  speak(message, duration) {
    if (!this.bubbleEl) return;

    // Auto-calculate duration: 200ms per character reading time + 4s base, floor 8s
    const autoDuration = Math.max(message.length * 200 + 4000, 8000);
    const finalDuration = duration || autoDuration;

    // Stop all existing timers immediately (including any pending fade cleanup)
    this._stopAllTimers();

    // Reset bubble state synchronously — no delayed cleanup
    this.bubbleEl.classList.remove('visible', 'fading');
    this.bubbleEl.textContent = '';

    // Show bubble and start typing
    this.setState('speaking');
    this.bubbleEl.classList.add('visible');

    this._typewrite(this.bubbleEl, message, 30).then(() => {
      this.bubbleTimer = setTimeout(() => {
        this.bubbleTimer = null;
        this._hideBubble();
        this.setState('idle');
      }, finalDuration);
    });
  }

  /**
   * React to an application event with a matching state and speech.
   * @param {string} event - Event name
   * @param {string} [extra] - Extra data (e.g. hint text)
   */
  react(event, extra) {
    switch (event) {
      case 'welcome':
        this.setState('waving');
        this.speak('欢迎来到 Claude Code 猫猫学院！我是小虾猫，你的编程导师喵～');
        break;

      case 'step-complete': {
        const msg = this.encouragements[Math.floor(Math.random() * this.encouragements.length)];
        this.setState('happy');
        this.speak(msg);
        break;
      }

      case 'module-complete':
        this.setState('celebrating');
        this.speak('太棒了！你完成了这个模块！🎉');
        break;

      case 'error':
        this.setState('encouraging');
        this.speak('别担心，再试一次！你一定可以的喵～');
        break;

      case 'hint':
        this.setState('thinking');
        this.speak(extra || '');
        break;

      default:
        break;
    }
  }

  /**
   * Start the idle animation loop. Every 5-8 seconds the cat will
   * randomly blink, bounce, or wag its tail.
   */
  startIdleLoop() {
    this.stopIdleLoop();

    const runIdle = () => {
      if (this.currentState !== 'idle' && this.currentState !== 'speaking') {
        this._scheduleNextIdle();
        return;
      }

      const actions = ['blink', 'bounce', 'claw-pinch'];
      const action = actions[Math.floor(Math.random() * actions.length)];

      if (this.catEl) {
        this.catEl.classList.add(`cat-${action}`);
        setTimeout(() => {
          if (this.catEl) {
            this.catEl.classList.remove(`cat-${action}`);
          }
        }, 800);
      }

      this._scheduleNextIdle();
    };

    this._scheduleNextIdle = () => {
      const delay = 5000 + Math.random() * 3000; // 5-8 seconds
      this.idleTimer = setTimeout(runIdle, delay);
    };

    this._scheduleNextIdle();
  }

  /**
   * Stop the idle animation loop.
   */
  stopIdleLoop() {
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
  }

  /**
   * Internal: render text character-by-character with a blinking cursor.
   * @param {HTMLElement} el - Target element
   * @param {string} text - Full text to type
   * @param {number} speed - Milliseconds per character
   * @returns {Promise<void>} Resolves when typing is complete
   */
  _typewrite(el, text, speed) {
    return new Promise((resolve) => {
      let index = 0;
      el.textContent = '';

      // Add a cursor span
      const cursor = document.createElement('span');
      cursor.className = 'typing-cursor';
      cursor.textContent = '|';
      el.appendChild(cursor);

      this.typewriteTimer = setInterval(() => {
        if (index < text.length) {
          // Insert text before cursor
          cursor.before(text.charAt(index));
          index++;
        } else {
          clearInterval(this.typewriteTimer);
          this.typewriteTimer = null;

          // Remove cursor after a short delay
          setTimeout(() => {
            if (cursor.parentNode) {
              cursor.remove();
            }
          }, 500);

          resolve();
        }
      }, speed);
    });
  }

  /**
   * Internal: cancel ALL pending timers to prevent stale callbacks.
   */
  _stopAllTimers() {
    if (this.bubbleTimer) {
      clearTimeout(this.bubbleTimer);
      this.bubbleTimer = null;
    }
    if (this.typewriteTimer) {
      clearInterval(this.typewriteTimer);
      this.typewriteTimer = null;
    }
    if (this.fadeTimer) {
      clearTimeout(this.fadeTimer);
      this.fadeTimer = null;
    }
  }

  /**
   * Internal: fade out and hide the speech bubble.
   */
  _hideBubble() {
    this._stopAllTimers();

    if (this.bubbleEl) {
      this.bubbleEl.classList.remove('visible');
      this.bubbleEl.classList.add('fading');

      this.fadeTimer = setTimeout(() => {
        this.fadeTimer = null;
        if (this.bubbleEl) {
          this.bubbleEl.textContent = '';
          this.bubbleEl.classList.remove('fading');
        }
      }, 300);
    }
  }
}
