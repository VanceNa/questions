<template>
  <div>原型链与继承</div>
  <!-- // 原型 prototype  原型是方法（函数）所有的 -->
  <!-- //原型链 [[prototype]] = _proto_ -->

<!-- 从当前实例属性去查找，如过找到了就返回，否则顺着原型链一层一层往上找
直到找到null位置，如过找到null都没有找到，就会报错 -->

  <div>async await 串行与并发</div>
  <!-- 让一步代码看起来像同步代码 => 方便控制顺序 不能代替promise（promise.all 可以并发处理） async await 串行执行 -->
  <!-- 线程休眠 -->
  <!-- promise 解决回调地狱 -->
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
