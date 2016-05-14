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
/*
 * Masthead for nav
 */

.blog-masthead {
  background-color: #428bca;
  -webkit-box-shadow: inset 0 -2px 5px rgba(0,0,0,.1);
          box-shadow: inset 0 -2px 5px rgba(0,0,0,.1);
}


/* Nav links */
.blog-nav-item {
  position: relative;
  display: inline-block;
  padding: 10px;
  font-weight: 500;
  color: #cdddeb;
}
.blog-nav-item:hover,
.blog-nav-item:focus {
  color: #fff;
  text-decoration: none;
}

/* Active state gets a caret at the bottom */
.blog-nav .active {
  color: #fff;
}
.blog-nav .active:after {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -5px;
  vertical-align: middle;
  content: " ";
  border-right: 5px solid transparent;
  border-bottom: 5px solid;
  border-left: 5px solid transparent;
}
</style>
<template>
  <div class="blog-post" v-for="item in items">
    <h2 class="blog-post-title">{{item.title}}</h2>
    <p class="blog-post-meta">{{item.date|dateFormate 'all'}} by <a href="#">deng</a></p>
    <p class="blog-post-general">{{item.body}}.</p>
    <p><a v-link="{ name: item.type + '/:year/:month/:id', params: { year: item.date, month: 04, id: 123 }}">阅读全文</a></p>
    <p class="blog-post-tags">标签:<a href="#" v-for="label in item.labels">{{label}}</a></p>
  </div>
</template>

<script>
import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import {getAllItems} from '../services/message'
Vue.use(Resource)
Vue.use(Router)
// configuration vue-resource 2015-08-01T15:06:56.000Z
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'
Vue.http.options.headers = {
  'Content-Type': 'application/json; charset=utf-8'
}
Vue.filter('dateFormate', function (value, type) {
  var dateArray = value.split('-')
  switch (type) {
    // formate to **年**月**日
    case 'all':
      return dateArray[0] + '年' + dateArray[1] + '月' + dateArray[2].substr(0, 2) + '日'
    case 'year':
      return dateArray[1]
    default:
      break
  }
})
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
