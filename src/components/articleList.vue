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
<div class="container">
        <div class="blog-header">
            <p class="lead blog-description">不积跬步无以至千里 Think big, but start small</p>
        </div>
        <div class="row">
            <div class="col-sm-8">
                <div class="blog-post" v-for="item in items">
                  <h2 class="blog-post-title">{{item.title}}</h2>
                  <p class="blog-post-meta">{{item.date|moment "dddd, MMMM Do YYYY"}} by <a href="#">deng</a></p>
                  <p class="blog-post-general">{{{item.body}}}</p>
                  <p><a v-on:click="readArticle(item)">阅读全文</a></p>
                  <p class="blog-post-tags">标签:<a href="#" v-for="label in item.labels">{{label}}</a></p>
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
                <ol class="list-unstyled">
                  <li v-for="item in items">
                    <a v-link="">{{item.date|moment "YYYY-MM"}}</a>
                  </li>
                </ol>
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
import VueMoment from 'vue-moment'
Vue.use(Resource)
Vue.use(Router)
Vue.use(VueMoment)
// configuration vue-resource
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
  methods: {
    readArticle (item) {
      var dateArray = item.date.split('-')
      this.$route.router.go({name: item.type, params: { year: dateArray[0], month: dateArray[1], id: item._id}})
    }
  },
  route: {
    data (transition) {
      var baseUrl = 'http://localhost:3000/'
      var url = baseUrl + this.$route.path.substring(1)
      this.items = services.getAllItems(this, url)
    }
  }
}
</script>
