class Timer {
  constructor() {
    this.timings = {
      total: 0,
      categories: {},
    };
    this.startTime = null;
    this.activeTimers = new Map();
  }

  // 开始整体计时
  start() {
    this.startTime = Date.now();
    return this;
  }

  // 结束整体计时
  end() {
    if (!this.startTime) {
      throw new Error('Timer has not been started');
    }
    this.timings.total = Date.now() - this.startTime;
    return this.timings.total;
  }

  // 开始特定类别的计时
  startCategory(category, name) {
    const key = `${category}:${name}`;
    this.activeTimers.set(key, Date.now());
    return this;
  }

  // 结束特定类别的计时
  endCategory(category, name) {
    const key = `${category}:${name}`;
    const startTime = this.activeTimers.get(key);
    
    if (!startTime) {
      throw new Error(`No active timer found for ${category}:${name}`);
    }

    if (!this.timings.categories[category]) {
      this.timings.categories[category] = {};
    }

    if (!this.timings.categories[category][name]) {
      this.timings.categories[category][name] = 0;
    }

    this.timings.categories[category][name] += Date.now() - startTime;
    this.activeTimers.delete(key);
    
    return this.timings.categories[category][name];
  }

  // 获取特定类别的计时结果
  getCategoryTiming(category, name) {
    return this.timings.categories[category]?.[name] || 0;
  }

  // 获取所有计时结果
  getAllTimings() {
    return this.timings;
  }

  // 格式化时间显示
  static formatTime(time) {
    return time > 1000 ? `${(time / 1000).toFixed(2)}s` : `${time}ms`;
  }

  // 重置计时器
  reset() {
    this.timings = {
      total: 0,
      categories: {},
    };
    this.startTime = null;
    this.activeTimers.clear();
    return this;
  }
}

module.exports = Timer;
