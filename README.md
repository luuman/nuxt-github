# vue-demo

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

``` javascript
.
├── .nuxt/               # 自动生成的配置文件（无需配置）
	├── components/          # css 文件夹
	├── views/            	 # img 文件夹
	├── App.js             	 # css 文件夹
	├── client.js            # css 文件夹
	├── empty.js             # css 文件夹
	├── index.js             # css 文件夹
	├── loading.html         # css 文件夹
	├── middleware.js        # css 文件夹
	├── router.js            # css 文件夹
	├── server.js            # css 文件夹
	└── utils.js             # css 文件夹
├── api/                 # 资源目录 assets 用于组织未编译的静态资源如 LESS、SASS
	├── index.js         		 # API接口配置项
	├── env.js            	 # 开发配置项
	└── http.js            	 # Axios
├── assets/              # 资源目录 assets 用于组织未编译的静态资源如 LESS、SASS
	├── css/            		 # css 文件夹
	├── img/            		 # img 文件夹
	├── less/            		 # less 文件夹
	└── scss/            		 # scss 文件夹
├── components/          # 组件目录：Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。
├── layouts/             # 布局目录：应用的布局组件
├── middleware/          # 中间件：存放应用的中间件
├── pages/               # 页面目录：用于组织应用的路由及视图
├── plugins/             # 插件目录：用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件
├── static/              # 静态文件目录：用于存放应用的静态文件
├── store/               # Vuex状态树
├── .eslintignore        # ESLint 检查中需忽略的文件（夹）
├── .eslintrc            # ESLint 配置
├── .gitignore           # 需被 Git 忽略的文件（夹）
├── nuxt.config.js       # 应用的个性化配置，以便覆盖默认配置
├── README.md            # README 简介
└── package.json         # 应用的依赖关系、对外暴露的脚本接口
```

# axios方法

## POST
``` javascript
this.$API.POST('').then((res) => {
  console.log(res)
})
```

## GET
``` javascript
this.$API.GET('').then((res) => {
  console.log(res)
})
```

# i18n方法

## 获取
``` javascript
$t('links.english')
```

## 设置
``` javascript
this.$i18n.locale = name
```

# heroku
## 部署代码

``` node
$ git push heroku master
```

## 打开部署页面

``` node
$ heroku open
```