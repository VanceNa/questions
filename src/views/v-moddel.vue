<template>
  <div>如何让数据变得“可观测”</div>
</template>
<script setup>
// let obj = {
// 	name:'小米',
// 	age:12,
// }

// obj.name = '小明'
// obj.age = 29
let obj = {
  age: 12,
};
let val = 20;

Object.defineProperty(obj, "age", {
  get() {
    console.log(`age属性被读取的值${val}`);
    return val;
  },
  set(newVal) {
    console.log(`age属性设置新的值为${newVal}`);
    val = newVal;
  },
});

console.log(obj.age);
console.log(obj.age=30);
</script>
