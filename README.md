# OJOBlog




[OJOBlog](https://onejustone.github.io) 是我的一个前后端完全分离的项目，项目采用 Vue + Express + MongoDB 的 VENM 架构并运行在 Linux 服务器中，夸张点说这个项目是个全栈。

为什么搞出来两个系统?其实最开始在开发 OJOBlog 项目的时候是一边写 Vue，一边写后台，然后按照数据的流向来组织代码，一般是写完前端写然后又写后台，所以，一有 bug 的时候基本是调完前端调后台，调完后台调调前端，尝试这样搞了两个星期，人格分裂了，要崩溃，想杀人，想毁灭世界，想砸掉电脑，想回家种地，觉得上帝不公，人家天天玩游戏，为啥我要活得那么苦逼? 于是 `rm -rf /`，拔掉电源，跨上陈旧的黑色双肩包，一条深蓝色的牛仔裤，叫上女友出去踏浪了。。。一星期后，痛定思痛决定先用 Node + Express + MongoDB 写出一个后台来，简单的使用 ejs + bootstrap 进行页面渲染，并写出 RESTful 风格的 api 接口，于是有了 [NEMBLog](https://github.com/onejustone/NEMBlog)，尽管页面及其丑陋，但基本的功能都实现了，之后的这个项目 OJOBlog 的实在 NEMBlog 系统上的重构，去掉了 `views` 模块，即是视图层，并使用 Vue ，进行前端模块化，组件化，工具化的开发。

 
 当然，任何项目都不可能是完美的，未来我会不断更新和维护这些项目，并补充相应的技术文章，将开发中遇到的问题和产生的想法记录下来。

关于 Vue，关于 Express,关于 MongoDB，均可以参考我的博客。

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


---
### 安装

克隆项目:

``` 
git clone git@github.com:onejustone/OJOBlog.git
```


启动后台:

(确保安装了 MongoDB 并配置好了数据库，教程可参考我的博客)

``` 
cd OJOBlog
cd backend #进入后台
yarn install # 安装相关依赖
npm run # 启动后台
```

前台:

``` 
cd OJOBlog
cd frontend
yarn install 
npm run dev
```

最后，访问 localhost:8080。



> 如果你感觉有趣儿的话，敬请 start 吧!

> Find me [博客](https://onejustone.github.io)
