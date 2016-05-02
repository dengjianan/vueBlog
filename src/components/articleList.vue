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
.blog-post-general{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
<template>
  <div class="blog-post" v-for="item in items">
      <h2 class="blog-post-title">{{item.title}}</h2>
      <p class="blog-post-meta">{{item.date}} by <a href="#">deng</a></p>
      <p class="blog-post-general">{{item.body}}.</p>
      <p><a <a href="#" v-link="{path:'/life/:year/:month/:title'}"></a>阅读全文</a></p>
      <p class="blog-post-tags">标签:<a href="#" v-for="tag in item.tags">{{tag}}</a></p>
  </div>
</template>

<script>
import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import {getAllItems} from '../services/message'
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
      items: []
    }
  },
  route: {
    data (transition) {
      var url = 'http://localhost:3000/' + this.$route.path.substring(1)
      this.items = getAllItems(this, url)
    }
  }
}
</script>
