# OJOBlog

基于 Vue 和 Node 的前后端分离的博客系统。OJOBlog 的后台基于我的另一个项目 [NEMBLog](https://github.com/onejustone/NEMBlog) 实现前后端分离后，NEMBlog 主要提供给前台数据接口。

---
### 代码架构

下面是整个项目的整体架构:


```
OJOBlog
.
├── backend #后端
│   ├── config # 后端配置目录
│   ├── lib #
│   ├── logs #日志
│   ├── middlewares #中间层
│   ├── models # 模型
│   ├── public #静态目录
│   │   ├── css
│   │   └── img
│   └── routes #后端路由
└── frontend #前端
    ├── build # vue-cli webpack build 目录
    ├── config # vue-cli webpack config 目录
    ├── src # 前端 src 目录
    │   ├── api # api 目录:使用 vue-resource 提取 api 数据接口
    │   ├── assets 
    │   ├── components # 组件
    │   ├── router # 前端路由
    │   └── store # store
    └── static #静态目录
```

其中，backend 基于 NENBlog，是在该项目的基础上重构的。backend 采用 MVC 的模式组织代码。

下面是 backend 代码组织:

``` 
backend
├── config
│   └── default.js
├── index.js # 后端入口文件
├── lib
│   └── mongo.js #数据库连接文件
├── logs # 日志
│   ├── error.log
│   └── success.log
├── middlewares # 中间件
│   └── check.js # 判断用户是否登录
├── models # 模型
│   ├── comments.js #评论模型
│   ├── posts.js # 文章模型
│   └── users.js # 用户模型
├── package.json # 项目依赖
├── public # 静态目录
│   ├── alipay.png
│   ├── css
│   │   └── style.css
│   ├── img
│   │   └── upload_93e3c637094a767f98ed095f0a637f3b.png
│   └── wechat.jpeg
├── routes # 路由控制
│   ├── index.js # 路由入口
│   ├── posts.js
│   ├── signin.js
│   ├── signout.js
│   └── signup.js
└── yarn.lock # yarn 版本锁定文件
```

下面是 frontend 代码组织:

``` 
frontend
├── build
├── config
├── index.html
├── package.json
├── README.md
├── src
│   ├── api
│   │   └── index.js # api 入口文件
│   ├── App.vue # 顶级组件
│   ├── assets 
│   │   └── logo.png
│   ├── components #组件目录
│   │   ├── Home.vue # 主页组件
│   │   ├── Nav.vue # 导航组件
│   │   └── SignIn.vue # 登录组件
│   ├── main.js # frontend 入口文件
│   ├── router # frontend 路由管理
│   │   └── index.js # 路由入口文件
│   └── store # store 管理
│       ├── actions.js 
│       ├── index.js
│       ├── mutations.js
│       └── mutation-types.js
├── static
└── yarn.lock # yarn 版本锁定文件
```


> 如果你感觉有趣儿的话，敬请 start 吧!

> Find me [博客](https://onejustone.github.io)
