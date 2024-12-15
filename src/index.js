/**
 * See the webpack docs for more information about plugins:
 * https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture
 */

const { createModuleGraph } = require('./moduleGraph');


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

    compiler.hooks.emit.tap({
      name: 'WebpackBuildTimingPlugin',
      stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
    }, (compilation) => {
      let size = 0;

      // use assets emit the file that contains the stats 
      compilation.assets['stats.json'] = {
        size: () => {
          return size;
        },
        source: () => {
          const stats = compilation.getStats().toJson(this.statsOption);
          // 只保留模块信息
          // const modules = stats.modules.map(module => ({
          //   id: module.id,
          //   identifier: module.identifier,
          //   name: module.name,
          //   type: module.type,
          //   moduleType: module.moduleType,
          //   size: module.size,
          //   issuerId: module.issuerId,
          //   chunks: module.chunks
          // }));

          // 根据

          const moduleGraph = createModuleGraph(stats.modules);
          const root = {
            root: Array.from(moduleGraph.rootNodes)
          }
          const jsonContent = JSON.stringify(root);
          size = Buffer.byteLength(jsonContent, null, 2);
          return jsonContent;
        }
      }

      // 生成可视化HTML文件
      // compilation.assets['visualization.html'] = {
      //   source: () => {
      //     return compilation.assets['example_dist/visualization.html'].source();
      //   },
      //   size: () => {
      //     return compilation.assets['example_dist/visualization.html'].source().length;
      //   }
      // };
    });
  }
}

module.exports = WebpackBuildTimingPlugin;
