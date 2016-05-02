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
      <h2 class="blog-post-title">文章标题</h2>
      <p class="blog-post-meta">文章日期 by <a href="#">deng</a></p>
      <p class="blog-post-general">文章具体内容</p>
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
Vue.http.options.root = '/json'
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'
export default {
  canReuse () {
    return true
  },
  data () {
    return {
      items: []
    }
  },
  route: {
    data (transition) {
      var url = this.$route.path.substring(1)
      this.items = getItem(this, url)
    }
  }
}
</script>