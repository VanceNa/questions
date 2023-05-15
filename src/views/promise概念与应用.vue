<template>
  <div>promise概念与应用</div>

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
