<template>
  <div>null与undefined区别</div>
</template>
<script setup>
//递归求合  1-100

function sum(num1, num2) {
  let num = num1 + num2;
  if (num2 + 1 > 100) {
    return num;
  } else {
   return sum(num, num2 + 1);
  }
}
let count= sum(1, 2)
console.log(count)


// 出现undifined的情况
// 1.已声明变量，未赋值
let o;
console.log(o);

// 2.对象上不存在某个属性

let obj = {};
console.log(obj.a);

//3.函数调用 少了参数

function test(a, b) {
  console.log(a, b);
}
test(1);

//4.函数的默认返回值
function abcd() {
  // return 123
}
console.log(abcd);

// -----------------------null----------------------
// 1.手动释放内存
// 2.作为函数的参数（此参数不是对象）
// 3. 原型链的顶端
let obj1 = {};
obj1 = null; //垃圾回收 手动释放内存
</script>
