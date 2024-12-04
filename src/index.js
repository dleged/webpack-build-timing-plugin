/**
 * See the webpack docs for more information about plugins:
 * https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture
 */
const fs = require('fs');
const { getRelativePath, getLoaderName } = require('./util');

class WebpackBuildTimingPlugin {
  constructor(options = {}) {
    this.options = {
      outputFormat: options.outputFormat || 'table',
      outputFile: options.outputFile || null,
      ...options
    };

    this.timings = {
      total: 0,
      loaders: {},
      plugins: {},
      chunks: {},
      assets: {},
      hmr: {},
      moduleBuildStart: null
    };

    this.startTime = null;
  }


  markPhaseDuration(phase, module, name) {
    const now = Date.now();
    if (!this.startTime) {
      throw new Error('Build has not started');
    }

    const duration = now - this.startTime;

    console.log(`Build took ${this.formatTime(duration)}`);

    this.startTime = Date.now();
  }

  apply(compiler) {
    // 记录整体构建开始时间
    compiler.hooks.environment.tap('WebpackBuildTimingPlugin', () => {
      this.startTime = Date.now();
      console.log('\n🕒 Build started...');
    });

    // 记录 loader 耗时 
    compiler.hooks.compilation.tap('WebpackBuildTimingPlugin', (compilation) => {
      compilation.hooks.buildModule.tap('WebpackBuildTimingPlugin', (module) => {
        this.moduleBuildStart = Date.now();
        const loaders = module.loaders || [];
        
        if (!loaders.length && module.resource) {
          console.log(`${getRelativePath(module.resource)} start`);
        }

        if (loaders.length) {
          loaders.forEach(loader => {
            const loaderName = loader.loader || loader;
            if (!this.timings.loaders[loaderName]) {
              this.timings.loaders[loaderName] = 0;
            }

            console.log(`${getRelativePath(module.resource)} with loaderName ${loaderName} start`)
          });
        }
      });

      compilation.hooks.succeedModule.tap('WebpackBuildTimingPlugin', (module) => {
        const loaders = module.loaders || [];
        if (module.resource) {
          console.log(`${getRelativePath(module.resource)} end`);
        }

        if (this.moduleBuildStart) {
          const moduleDuration = Date.now() - this.moduleBuildStart;
          const loaderCount = loaders.length || 1;
          const durationPerLoader = moduleDuration / loaderCount;

          loaders.forEach(loader => {
            const loaderName = loader.loader || loader;
            this.timings.loaders[loaderName] = (this.timings.loaders[loaderName] || 0) + durationPerLoader;
            if (module.resource) {
              console.log(`${getRelativePath(module.resource)} - ${getLoaderName(loaderName)}: ${this.formatTime(this.timings.loaders[loaderName])}`);
            }
          });
        }
      });
    });

    // 记录插件耗时
    compiler.hooks.compilation.tap('WebpackBuildTimingPlugin', (compilation) => {
      const startPlugins = Date.now();
      compilation.hooks.optimizeModules.tap('WebpackBuildTimingPlugin', () => {
        this.timings.plugins.optimize = Date.now() - startPlugins;
      });

      // 记录chunks优化耗时
      const startChunks = Date.now();
      compilation.hooks.optimizeChunks.tap('WebpackBuildTimingPlugin', () => {
        this.timings.chunks.optimize = Date.now() - startChunks;
      });

      // 记录assets输出耗时
      const startAssets = Date.now();
      compilation.hooks.processAssets.tap(
        {
          name: 'WebpackBuildTimingPlugin',
          stage: compilation.PROCESS_ASSETS_STAGE_REPORT
        },
        () => {
          this.timings.assets.process = Date.now() - startAssets;
        }
      );
    });

    // 记录HMR耗时
    compiler.hooks.invalid.tap('WebpackBuildTimingPlugin', () => {
      this.timings.hmr.startTime = Date.now();
    });

    compiler.hooks.done.tap('WebpackBuildTimingPlugin', (stats) => {
      if (this.timings.hmr.startTime) {
        this.timings.hmr.duration = Date.now() - this.timings.hmr.startTime;
      }

      this.timings.total = Date.now() - this.startTime;
      // this.printResults();
    });
  }

  formatTime(time) {
    return time > 1000 ? `${(time / 1000).toFixed(2)}s` : `${time}ms`;
  }

  printResults() {
    console.log('\n📊 Build Timing Results:');
    console.log('------------------------');
    console.log(`Total Build Time: ${this.formatTime(this.timings.total)}`);

    console.log('\n🔧 Loaders:');
    Object.entries(this.timings.loaders).forEach(([loader, time]) => {
      console.log(`  ${loader}: ${this.formatTime(time)}`);
    });

    console.log('\n🔌 Plugins:');
    Object.entries(this.timings.plugins).forEach(([plugin, time]) => {
      console.log(`  ${plugin}: ${this.formatTime(time)}`);
    });

    console.log('\n📦 Chunks:');
    Object.entries(this.timings.chunks).forEach(([chunk, time]) => {
      console.log(`  ${chunk}: ${this.formatTime(time)}`);
    });

    console.log('\n💾 Assets:');
    Object.entries(this.timings.assets).forEach(([asset, time]) => {
      console.log(`  ${asset}: ${this.formatTime(time)}`);
    });

    if (this.timings.hmr.duration) {
      console.log('\n🔥 HMR:');
      console.log(`  Update Time: ${this.formatTime(this.timings.hmr.duration)}`);
    }

    // 如果配置了输出文件，将结果写入文件
    if (this.options.outputFile) {
      fs.writeFileSync(
        this.options.outputFile,
        JSON.stringify(this.timings, null, 2)
      );
    }
  }
}

module.exports = WebpackBuildTimingPlugin;
