<template>
  <div>如何让数据变得“可观测”</div>
  <p>v-if 条件不满足 不会渲染dom =>单次判断 多次使用v-if渲染消耗性能</p>

  <p>v-show 影藏dom => 多次切换 不能用于权限操作</p>

  <input placeholder="请输入" id="username" />
  <p id="uname"></p>
</template>
<script setup>
import { onMounted } from "vue";
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
console.log((obj.age = 30));

onMounted(() => {
  let obj1 = {};
  Object.defineProperty(obj1, "username", {
    get() {
      console.log("取值");
    },
    set(val) {
      console.log("设置值");
      document.getElementById("uname").innerText = val;
    },
  });

  document
    .getElementById("username")
    .addEventListener("keyup", function (event) {
      obj1.username = event.target.value;
    });
});
</script>
