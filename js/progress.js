/**
 * ProgressTracker - Persists learning progress, theme preference,
 * and navigation state in localStorage for the Claude Code Cat Learning Lab.
 */
class ProgressTracker {
  /**
   * @param {string} storageKey - localStorage key for all progress data
   */
  constructor(storageKey = 'claude-cat-lab-progress') {
    this.storageKey = storageKey;
    this.data = this._load();
  }

  /**
   * Internal: load stored data or return a fresh default structure.
   * @returns {{ modules: Object, lastModule: string, theme: string }}
   */
  _load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Ensure required top-level keys exist
        return {
          modules: parsed.modules || {},
          lastModule: parsed.lastModule || '',
          theme: parsed.theme || 'dark',
        };
      }
    } catch (_) {
      // Corrupted data - fall through to defaults
    }

    return {
      modules: {},
      lastModule: '',
      theme: 'dark',
    };
  }

  /**
   * Internal: persist the current data to localStorage.
   */
  _save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (_) {
      // Storage full or unavailable - silently fail
    }
  }

  /**
   * Get progress info for a specific module.
   * @param {string} moduleId
   * @returns {{ completedSteps: number[], completed: boolean }}
   */
  getModuleProgress(moduleId) {
    const mod = this.data.modules[moduleId];
    if (mod) {
      return {
        completedSteps: Array.isArray(mod.completedSteps) ? [...mod.completedSteps] : [],
        completed: !!mod.completed,
      };
    }
    return { completedSteps: [], completed: false };
  }

  /**
   * Mark an individual step within a module as complete.
   * @param {string} moduleId
   * @param {number} stepIndex - Zero-based step index
   */
  setStepComplete(moduleId, stepIndex) {
    if (!this.data.modules[moduleId]) {
      this.data.modules[moduleId] = { completedSteps: [], completed: false };
    }

    const steps = this.data.modules[moduleId].completedSteps;
    if (!steps.includes(stepIndex)) {
      steps.push(stepIndex);
      steps.sort((a, b) => a - b);
    }

    this._save();
  }

  /**
   * Check whether a module has been marked as fully complete.
   * @param {string} moduleId
   * @returns {boolean}
   */
  isModuleComplete(moduleId) {
    const mod = this.data.modules[moduleId];
    return mod ? !!mod.completed : false;
  }

  /**
   * Mark an entire module as complete.
   * @param {string} moduleId
   */
  markModuleComplete(moduleId) {
    if (!this.data.modules[moduleId]) {
      this.data.modules[moduleId] = { completedSteps: [], completed: false };
    }
    this.data.modules[moduleId].completed = true;
    this._save();
  }

  /**
   * Calculate overall learning progress based on individual steps completed.
   * @param {Array} tutorials - The TUTORIALS array to count total steps
   * @returns {{ completedSteps: number, totalSteps: number, percentage: number }}
   */
  getOverallProgress(tutorials) {
    let completedSteps = 0;
    let totalSteps = 0;

    if (tutorials && Array.isArray(tutorials)) {
      for (const module of tutorials) {
        totalSteps += module.steps.length;
        const prog = this.getModuleProgress(module.id);
        completedSteps += prog.completedSteps.length;
      }
    }

    const percentage = totalSteps > 0
      ? Math.round((completedSteps / totalSteps) * 100)
      : 0;

    return { completedSteps, totalSteps, percentage };
  }

  /**
   * Get the ID of the last visited module.
   * @returns {string}
   */
  getLastModule() {
    return this.data.lastModule || '';
  }

  /**
   * Save the last visited module ID.
   * @param {string} moduleId
   */
  setLastModule(moduleId) {
    this.data.lastModule = moduleId;
    this._save();
  }

  /**
   * Get the current theme preference.
   * @returns {'dark'|'light'}
   */
  getTheme() {
    return this.data.theme || 'dark';
  }

  /**
   * Save the theme preference.
   * @param {'dark'|'light'} theme
   */
  setTheme(theme) {
    this.data.theme = theme;
    this._save();
  }

  /**
   * Clear all progress and reset to defaults.
   */
  reset() {
    const currentTheme = this.data.theme || 'dark';
    this.data = {
      modules: {},
      lastModule: '',
      theme: currentTheme,
    };
    this._save();
  }
}
