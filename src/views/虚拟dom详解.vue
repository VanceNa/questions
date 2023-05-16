<template>
	<h2>1.虚拟dom是什么？</h2>
	<p>a.vue2.x才有虚拟dom</p>
	<p>b.本质js对象=>跨平台</p>
	<h2>2.虚拟com在vue中做了什么？</h2>
	<img src="../assets/dom.png" width="200px" />
	<p>a.vue渲染过程（html css js）</p>
	<p>b.1.将真实dom转化为虚拟dom(js对象)2.更新的时候作对比</p>
	<img src="../assets/update.png" width="200px" />
	<p>c.</p>
	
	
	<h2>3.虚拟dom是如何和提升vue的渲染效率的？</h2>
	<p>1.局部更新（节点数据）</p>
	<p>将直接操作dom的地方拿到两个js对象作比较</p>
	<!-- <p>a.组件化 b.数据驱动</p> -->
</template>