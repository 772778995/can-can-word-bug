# can-can-word-bug

## 概览

`can-can-word-bug` 是一个 TS 编写的工具库

[仓库地址](https://github.com/772778995/can-can-word-bug)

[开发文档](https://github.com/772778995/can-can-word-bug/blob/master/docs/modules.md)

[提交 BUG](https://github.com/772778995/can-can-word-bug/issues/new)

[更新日志](https://github.com/772778995/can-can-word-bug/blob/master/CHANGELOG.md)

[开源协议](https://raw.githubusercontent.com/772778995/can-can-word-bug/master/LICENSE)

## 快速开始

### npm 引用

如果你使用现代打包工具，那么其中的每一个函数都是可以按需引入的，不需要担心体积过大的问题

1. 安装依赖

   ```bash
   npm i can-can-word-bug
   # yarn add can-can-word-bug
   # pnpm i can-can-word-bug
   ```

2. 引入模块并使用相关函数

   ```typescript
   import { getUUID } from 'can-can-word-bug'
   // 或者：
   // import getUUID from 'can-can-word-bug/string/getUUID'

   const getFiles = async () => {
     const uuid = getUUID()
     console.log(uuid)
   }
   ```



### CDN 引用

1. 引入本地 js 文件

   ```html
   <script src="./dist/can-can-word-bug.umd.js"></script>
   ```

   或者使用在线 CDN

   ```html
   <script src="https://registry.npmmirror.com/can-can-word-bug/latest/files/dist/can-can-word-bug.umd.js"></script>
   ```

2. 使用函数

   ```js
   const getFiles = async () => {
     const uuid = await canCanWordBug.getUUID()
     console.log(uuid)
   }
   ```

