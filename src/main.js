// 引入开源组件
var Vue = require('vue')
var Router = require('vue-router')
// 引入自定义组件
var DetailList = require('./components/detailList.vue')
var ArticleList = require('./components/articleList.vue')
var ArticleItem = require('./components/articleItem.vue')
var SubNav = require('./components/subNav.vue')

// Vue.use(plugin,[options])安装Vue.js插件，如果插件是一个对象,必须有一个
// install方法。如果它是一个函数，它会被定义为安装方法
Vue.use(Router)

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new Router()

// 定义路由规则
// 每条路由规则应该映射到一个组件，这里的组件可以是一个使用vue.exrend
// 创建的组件构造函数，也可以是一个组件选项对象
router.map({
  '/life': {
    name: 'life',
    component: ArticleList
  },
  '/life/:year': {
    name: 'life/:year',
    component: DetailList
  },
  '/life/:year/:month': {
    name: 'life/:month',
    component: DetailList
  },
  '/life/:year/:month/:id': {
    name: 'life/:year/:month/:id',
    component: ArticleItem
  },
  '/technology': {
    name: 'technology',
    component: ArticleList
  },
  '/technology/:year': {
    name: 'technology/:year',
    component: DetailList
  },
  '/technology/:year/:month': {
    name: 'technology/:year/:month',
    component: DetailList
  },
  '/technology/:year/:month/:title': {
    name: 'technology/:year/:month/:title',
    component: ArticleItem
  },
  '/reading': {
    name: 'reading',
    component: ArticleList
  },
  '/reading/:year': {
    name: 'reading/:year',
    component: DetailList
  },
  '/reading/:year/:month': {
    name: 'reading/:year/:month',
    component: DetailList
  },
  '/reading/:year/:month/:title': {
    name: 'reading/:year/:month/:title',
    component: ArticleItem
  }
})
router.redirect({
  '*': '/life'
})
// 路由器需要一个根组件，并在组件中添加其他组件
// 出于演示目的，这里使用一个空的组件，直接使用HTML作为应用的模板
// Vue.extend可创建一个可复用的构造器
var Blog = Vue.extend({
  components: { SubNav }
})
// 现在我们可以启动应用了！
// 路由器会创建一个Blog实例，并且挂在到选择符#blog匹配的元素上
// 这里我们将其挂在body上，全局路由
router.start(Blog, '#blog')
