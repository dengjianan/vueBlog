<style>
	 /*
 * Blog posts
 */
.blog-post {
  margin-bottom: 60px;
}
.blog-post-title {
  margin-bottom: 5px;
  font-size: 40px;
}
.blog-post-meta {
  margin-bottom: 20px;
  color: #999;
}
.blog-post-tags a{
  margin-left: 10px;
}
</style>
<template>
  <div class="container">
        <div class="blog-header">
            <p class="lead blog-description">不积跬步无以至千里，不积小流无以成江海</p>
        </div>
        <div class="row">
            <div class="col-sm-8">
              <div class="blog-post" v-if="$loadingRouteData">loading...</div>
              <div class="blog-post" v-if="!$loadingRouteData">
                  <h2 class="blog-post-title">{{item.title}}</h2>
                  <p class="blog-post-meta">{{item.date}} by <a href="#">deng</a></p>
                  <p>{{{item.body}}}</p>
              </div>
            </div>
            <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
                <div class="sidebar-module sidebar-module-inset">
                    <h4>关于我</h4>
                    <p><em>邓健安 </em> 2009-2016 就读于华北电力大学，现在中国铁塔股份有限公司担任软件开发工程师。欲从事前端开发工作。
                    </p>
                </div>
                <div class="sidebar-module">
                <h4>Archives</h4>
            </div>
                <div class="sidebar-module">
                    <h4>Elsewhere</h4>
                    <ol class="list-unstyled">
                        <li><a href="https://github.com/dengjianan" target="_blank">GitHub</a></li>
                        <li><a href="http://weibo.com/1987018287/profile?topnav=1&wvr=6&is_all=1" target="_blank">microblog</a></li>
                        <li><a href="https://www.facebook.com/onlydengjianan" target="_blank">Facebook</a></li>
                    </ol>
                </div>
            </div>
        </div>
</div>
</template>
<script>
import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import services from '../services/message'
Vue.use(Resource)
Vue.use(Router)
// configuration vue-resource
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'
Vue.http.options.headers = {
  'Content-Type': 'application/json; charset=utf-8'
}
export default {
  canReuse () {
    return true
  },
  data () {
    return {
      item: {}
    }
  },
  route: {
    // three options
    // 1.return a boolean
    // 2.return a promise that resolve to a boolean
    // 3.explicitly call transition.next() or abort()
    canActivate (transition) {
      if (transition.from.path === '/about') {
        console.log('cant navicate from /about')
        transition.abort()
      } else {
        transition.next()
      }
    },
    // same deal with beforeActicate
    canDeactivate (transition) {
      // return confirm('Are u sure to leave life')
    },
    // activate hook is called when the route is matched
    // an the component has been created
    // this hook controls the timing of the component
    // switching -the switching wont start until this hook is resolve
    activate () {
      // console.log('activate articleItem')
      return new Promise((resolve) => {
        var baseUrl = 'http://localhost:3000'
        var url = baseUrl + this.$route.path
        this.item = services.getItem(this, url)
        // console.log('articleItem is activate')
        resolve()
      })
    },
    // for doing cleanups
    // destructing can make hooks cleaner
    deactivate ({ next }) {
      console.log('articleItem deactivate')
      next()
    }
    // data (transition) {
    //   var url = 'http://localhost:3000/reading/2016/4/57271a430d49cb34298c146b'
    //   this.item = services.getItem(this, url)
    // }
  }
}
</script>