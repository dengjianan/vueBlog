<style>
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
	<div class="sidebar-module">
	    <h4>Archives</h4>
	    <ol class="list-unstyled">
	    	<li><a v-link="{name:'life',params:{year:2016}}">2016年</a></li>
	        <li><a v-link="{name:'life/:year',params:{month:1},append:true}">2016年1月</a></li>
	        <li><a v-link="{name:'life',params:{year:2016,day:3}}">2016年3月</a></li>
	        <li><a v-link="{name:'life',params:{year:2016,day:4}}">2016年4月</a></li>
	        <li><a v-link="{name:'life',params:{year:2016,day:5}}">2016年5月</a></li>
	        <li><a v-link="{name:'life',params:{year:2016,day:1}}">2016年6月</a></li>
	    </ol>
	</div>
</template>
<script></script>
