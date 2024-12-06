/**
 * See the webpack docs for more information about plugins:
 * https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture
 */


class WebpackBuildTimingPlugin {
  constructor(options = {}) {
    this.output = options.output || 'stats.json';
    this.statsOption = options.statsOption || {
      modules: true,
      chunks: true,
      assets: true,
      hash: true,
      timings: true,
      builtAt: true,
      errors: true,
      warnings: true
    };
  }

  apply(compiler) {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    compiler.hooks.emit.tap('WebpackBuildTimingPlugin', (compilation) => {
      let size = 0;

      // use assets emit the file that contains the stats 
      compilation.assets[this.output] = {
        size: () => {
          return size;
        },
        source: () => {
          const stats = compilation.getStats().toJson(this.statsOption);
          // 只保留模块信息
          const modules = stats.modules.map(module => ({
            id: module.id,
            identifier: module.identifier,
            name: module.name,
            type: module.type,
            moduleType: module.moduleType,
            size: module.size,
            issuerId: module.issuerId,
            chunks: module.chunks
          }));
          
          const jsonContent = JSON.stringify(modules, null, 2);
          size = Buffer.byteLength(jsonContent);
          return jsonContent;
        }
      }

      // 生成可视化HTML文件
      compilation.assets['visualization.html'] = {
        source: () => {
          return compilation.assets['example_dist/visualization.html'].source();
        },
        size: () => {
          return compilation.assets['example_dist/visualization.html'].source().length;
        }
      };
    });
  }
}

module.exports = WebpackBuildTimingPlugin;
