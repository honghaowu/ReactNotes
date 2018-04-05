## 项目搭建

### 搭建步骤
- 使用cnpm代替npm
    - $ npm install -g cnpm --registry=https://registry.npm.taobao.org
- 执行创建命令如下
```
$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-todo
$ npm start

```
- 安装 bootstrap redux  react-redux

### 结构目录
`win+r ->cmd -> f: ->进入对应的文件夹 -> tree/f 打印目录树如下 `  
├─public
│      favicon.ico
│      index.html
│      manifest.json
│
└─src
    │  index.js
    │
    ├─components
    │      App.js
    │
    └─store
        │  action-types.js
        │  index.js
        │
        ├─action
        │      index.js
        │
        └─reducer
                index.js
