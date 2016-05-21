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
      name: 'life',
      component: require('../components/detailList.vue')
    },
    '/life/:year/:month': {
      name: 'life',
      component: require('../components/detailList.vue')
    },
    '/life/:year/:month/:id': {
      name: 'life',
      component: require('../components/articleItem.vue'),
      waitForData: true
    },
    '/technology': {
      name: 'technology',
      component: require('../components/articleList.vue')
    },
    '/technology/:year': {
      name: 'technology',
      component: require('../components/detailList.vue')
    },
    '/technology/:year/:month': {
      name: 'technology',
      component: require('../components/detailList.vue')
    },
    '/technology/:year/:month/:id': {
      name: 'technology',
      component: require('../components/articleItem.vue')
    },
    '/reading': {
      name: 'reading',
      component: require('../components/articleList.vue')
    },
    '/reading/:year': {
      name: 'reading',
      component: require('../components/detailList.vue')
    },
    '/reading/:year/:month': {
      name: 'reading',
      component: require('../components/detailList.vue')
    },
    '/reading/:year/:month/:id': {
      name: 'reading',
      component: require('../components/articleItem.vue')
    }
  })
  router.redirect({
    '*': '/life'
  })
}
