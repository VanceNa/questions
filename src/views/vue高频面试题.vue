<template>
  <div>vue高频面试题</div>
  <p>1.虚拟dom是什么？ ----本质：js对象  => 下一步创建真实dom  document.createElement</p>

  <p>1.1用来做什么</p>
  <!-- // 虚拟dom三要素 -->
  <!-- let obj = {
    target:'ul',//必须要有的
    attr:'list-info',//属性
    children:[{

    }]
  } -->
 
  <p>1.2如何提升Vue渲染效率</p>
  将直接操作dom(影响性能，生成一个新的dom替换之前的dom)变成两个js对象的比较，更新不同点

  <ul class="list-info">
    <li></li>
    <li></li>
    <li></li>
  </ul>

<p>2. vue data()为什么是个函数？ 闭包 => 特性？（数据的私密性）</p>

</template>
<script setup lang="ts">
import { onMounted } from 'vue';

onMounted( ()=>{
  test()
})
const sleep = (second:number) => {
  return new Promise((resove) => {
    setTimeout(() => {
      resove(second);
    }, second);
  });
};
 const  test= async()=>{
  console.log('1')
  await sleep(2000)
  //2s之后 执行 线程休眠
  console.log('2')
}
</script>
