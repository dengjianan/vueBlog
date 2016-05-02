<style>


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
