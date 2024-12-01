# Webpack Build Timing Plugin

一个用于分析和记录 Webpack 构建过程中各个阶段耗时的插件。

## 功能特点

- 记录整体构建时间
- 统计各个 loader 的处理时间
- 记录插件执行耗时
- 跟踪 chunks 优化时间
- 监控资源输出耗时
- 统计热更新(HMR)耗时

## 安装

```bash
npm install webpack-build-timing-plugin --save-dev
```

## 使用方法

在你的 webpack 配置文件中添加插件：

```javascript
const WebpackBuildTimingPlugin = require('webpack-build-timing-plugin');

module.exports = {
  // ... 其他 webpack 配置
  plugins: [
    new WebpackBuildTimingPlugin({
      outputFormat: 'table', // 输出格式，目前支持 'table'
      outputFile: 'build-timing.json' // 可选，如果指定则会将结果输出到文件
    })
  ]
};
```

## 配置选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| outputFormat | string | 'table' | 输出格式，目前支持 'table' |
| outputFile | string | null | 输出文件路径，如果指定则会将结果保存到文件 |

## 输出示例

```
📊 Build Timing Results:
------------------------
Total Build Time: 3.45s

🔧 Loaders:
  babel-loader: 1.2s
  css-loader: 0.5s
  style-loader: 0.3s

🔌 Plugins:
  optimize: 0.8s

📦 Chunks:
  optimize: 0.4s

💾 Assets:
  process: 0.25s

🔥 HMR:
  Update Time: 150ms
```

## 注意事项

- 该插件会在控制台输出构建时间信息
- 如果指定了 `outputFile`，还会将详细的时间信息以 JSON 格式保存到文件
- HMR 时间仅在开发模式下且发生热更新时才会显示

## License

MIT
