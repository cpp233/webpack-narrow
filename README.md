使用 webpack 手动打包 react ， 并缩小打包后文件

# 环境

- antd
- axios
- jquery
- react
- react-dom
- react-draggable
- react-redux
- redux
- redux-thunk

# 直接打包

```bash
npm run build-org
```

![](https://raw.githubusercontent.com/cpp233/resource/main/webpack/1.png)

# 优化打包

```bash
npm run build-org
```

![](https://raw.githubusercontent.com/cpp233/resource/main/webpack/2.png)

# 说明

将 webpack mode 设置为 `--mode=production`

一些体积大的包从 CND 引入
