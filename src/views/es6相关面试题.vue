<template>
  <div>es6相关面试题</div>
</template>
<script setup>
//1：申明提升
console.log(num); //undined
var num = 23;

//
console.log(num2); //nnot access 'num2' before initialization
let num2 = 123;

//2：变量覆盖
var n1 = 1;
var n1 = 3;
console.log(n1); //2

//3:没有块级作用域
function fn1() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i);
}
fn1();

//4:申明必须赋值，定义的值不可修改。支持块级作用域，不存在申明提升，变量覆盖
const DEMO=[]

//es6 解构 互换值
let a =1
let b = 2 
[a,b]=[b,a]

//去重
let arr =[1,2,3,4,2,3]
let newArr=[...new Set(arr)]

</script>
