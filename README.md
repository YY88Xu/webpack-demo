## 简介
跟着官网学技术之webpack https://www.webpackjs.com/guides/

## 安装
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev

## 资源管理
-- 加载CSS
npm install --save-dev style-loader css-loader
-- 加载图片
npm install --save-dev file-loader

## 管理输出
-- HtmlWebpackPlugin，个人理解是帮助我们自动创建输出的HTML文件以及这个文件中涉及到js css依赖，并能自动把生成的bundle文件关联到HTML文件中
-- CleanWebpackPlugin，帮助我们每次打包自动清除dist下面的文件；重新生成打包的文件
## 开发
-- source map。当webpack打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。JavaScript提供了source map功能。配置devtool: 'inline-source-map'后可以很容易追踪到错误发生的源码位置。
-- webpack-dev-server。为你提供了一个简单的web服务器，并且能够实时重新加载live reloading。
