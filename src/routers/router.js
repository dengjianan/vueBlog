/* 定义路由规则
 * 每条路由规则应该映射到一个组件，这里的组件可以是一个使用vue.exrend
 * 创建的组件构造函数，也可以是一个组件选项对象
 */
export function configRouter (router) {
  router.map({
    '/life': {
      name: 'life',
      component: require('../components/articleList.vue')
    },
    '/life/:year': {
      name: 'life/:year',
      component: require('../components/detailList.vue')
    },
    '/life/:year/:month': {
      name: 'life/:month',
      component: require('../components/detailList.vue')
    },
    '/life/:year/:month/:id': {
      name: 'life/:year/:month/:id',
      component: require('../components/articleItem.vue'),
      waitForData: true
    },
    '/technology': {
      name: 'technology',
      component: require('../components/articleList.vue')
    },
    '/technology/:year': {
      name: 'technology/:year',
      component: require('../components/detailList.vue')
    },
    '/technology/:year/:month': {
      name: 'technology/:year/:month',
      component: require('../components/detailList.vue')
    },
    '/technology/:year/:month/:title': {
      name: 'technology/:year/:month/:title',
      component: require('../components/articleItem.vue')
    },
    '/reading': {
      name: 'reading',
      component: require('../components/articleList.vue')
    },
    '/reading/:year': {
      name: 'reading/:year',
      component: require('../components/detailList.vue')
    },
    '/reading/:year/:month': {
      name: 'reading/:year/:month',
      component: require('../components/detailList.vue')
    },
    '/reading/:year/:month/:title': {
      name: 'reading/:year/:month/:title',
      component: require('../components/articleItem.vue')
    }
  })
  router.redirect({
    '*': '/life'
  })
}
