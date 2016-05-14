// 引入开源组件
import Vue from 'vue'
import Router from 'vue-router'
// 引入自定义组件
import {configRouter} from './routers/router'
// Vue.use(plugin,[options])安装Vue.js插件，如果插件是一个对象,必须有一个
// install方法。如果它是一个函数，它会被定义为安装方法
Vue.use(Router)
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new Router()
configRouter(router)
// 路由器需要一个根组件，并在组件中添加其他组件
// 出于演示目的，这里使用一个空的组件，直接使用HTML作为应用的模板
// Vue.extend可创建一个可复用的构造器
var Blog = Vue.extend()
// 现在我们可以启动应用了！
// 路由器会创建一个Blog实例，并且挂在到选择符#blog匹配的元素上
// 这里我们将其挂在body上，全局路由
router.start(Blog, '#blog')
