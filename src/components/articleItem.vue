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
  <div class="blog-post" v-if="$loadingRouteData">loading...</div>
	<div class="blog-post" v-if="!$loadingRouteData">
      <h2 class="blog-post-title">{{item.title}}</h2>
      <p class="blog-post-meta">{{item.date}} by <a href="#">deng</a></p>
      <p class="blog-post-general">{{item.body}}</p>
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
      return confirm('Are u sure to leave life')
    },
    // activate hook is called when the route is matched
    // an the component has been created
    // this hook controls the timing of the component
    // switching -the switching wont start until this hook is resolve
    activate () {
      console.log('activate articleItem')
      return new Promise((resolve) => {
        var url = 'http://localhost:3000/reading/2016/4/57271a430d49cb34298c146b'
        this.item = services.getItem(this, url)
        console.log('articleItem is activate')
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