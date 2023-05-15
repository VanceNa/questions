<template>
  <div>深度剖析js闭包</div>
</template>
<script setup>
import { onMounted } from "vue";
onMounted(() => {
  //js闭包是什么？ 方法里面返回一个方法


  function a() {
	var b = "xiao";
    let a1 = 1;
    return function () {
      return a1;
    };
  }
  console.dir(a);

  //闭包存在的意义？
  //延长变量生命周期  （闭包会常驻内存，其中的变量不会被回收，慎用 可手动回收）
  //创建私有环境

  //全局变量不会被垃圾回收  污染变量
  //有独立的词法作用域（vue data(){return {xxxxxxx}}）

  //作用域连
  let name = "xiaoming";
  function test1() {
    console.log(name);
    function test2() {
      let name = "小红";
      console.log(name);
    }
    test2()
  }
  test1()





  //节流是定时间隔执行，防抖是结束状态执行

// 防抖 debounce=>固定时间内 将多次操作合并为一次操作进行
// 节流 throttle=> 使得一定时间内只触发一次函数

// 节流函数不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而防抖函数只是在最后一次事件后才触发一次函数。
});
</script>
