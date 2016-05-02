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
	<div class="blog-post">
      <h2 class="blog-post-title">{{item.title}}</h2>
      <p class="blog-post-meta">{{item.date}} by <a href="#">deng</a></p>
      <p class="blog-post-general">{{item.body}}</p>
  </div>
</template>
<script>
import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import {getItem} from '../services/message'
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
    data (transition) {
      var url = 'http://localhost:3000/life/2016/4/57261b90b2bccbb011000617'
      this.item = getItem(this, url)
    }
  }
}
</script>