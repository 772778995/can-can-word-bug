can-can-word-bug / [Exports](modules.md)

# can-can-word-bug

## 概览

`can-can-word-bug` 是一个 TS 编写的工具库

[仓库地址](https://github.com/772778995/can-can-word-bug)

[在线文档](https://can-can-word-bug.pages.dev/)

[提交 BUG](https://github.com/772778995/can-can-word-bug/issues/new)

[更新日志](https://github.com/772778995/can-can-word-bug/blob/master/CHANGELOG.md)

[开源协议](https://raw.githubusercontent.com/772778995/can-can-word-bug/master/LICENSE)

## 快速开始

### npm 引用

其中的每一个函数都是可以按需引入的，强烈建议使用 npm 的方式使用该依赖

1. 安装依赖

   ```bash
   npm i can-can-word-bug
   # yarn add can-can-word-bug
   # pnpm i can-can-word-bug
   ```

2. 引入模块并使用相关函数

   ```typescript
   import { uploadFile } from 'can-can-word-bug'

   const getFiles = async () => {
     const files = await uploadFile()
     console.log(files)
   }
   ```

### CDN 引用

1. 引入本地 js 文件

   ```html
   <script src="./dist/can-can-word-bug.umd.cjs"></script>
   ```

   或者使用在线 CDN

   ```html
   <script src="https://unpkg.com/can-can-word-bug@latest/dist/can-can-word-bug.umd.cjs"></script>
   ```

2. 使用函数

   ```js
   const getFiles = async () => {
     const files = await canCanWordBug.uploadFile()
     console.log(files)
   }
   ```
