<template>
  <div>es6相关面试题</div>
</template>
<script setup>
//-------------- var let const ----------------------------------
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

//4:申明必须赋值，定义的值不可修改（如果是个对象，可以修改对象的属性值，支持简介修改，不支持直接修改）。支持块级作用域，不存在申明提升，变量覆盖

const DEMO = [];

//es6 解构 互换值
let a = 1;
let b = ((2)[(a, b)] = [b, a]);

//去重
let arr = [1, 2, 3, 4, 2, 3];
let newArr = [...new Set(arr)];


//-------------------- 扩展运算符... ----------------------------
// 1.对象扩展运算符 用于去除参数对象中的所有可遍历属性 拷贝到当前对象中
let obj = { a: 1, b: 2 };
let objCopy = { ...obj };
let objCopy2 = Object.assign({}, obj);

// 2.数组扩展运算符
// a.将数组转换为参数序列

function add(x, y) {
  return x + y;
}

const NUMBERS = [1, 2];
add(...NUMBERS); //3

// b.复制数组
const arr1 = [1, 2];
const arr2 = [...arr1];

// c.合并数组
const arr3 = ["b", "c"];
const arr4 = ["a", ...arr3, 4, 5]; //a,b,c,4,5
//d.扩展运算符与解构赋值 生成数组.扩展运算符用于数组赋值 只能讲参数放到最后一位...reset
const [first, ...reset] = [1, 2, 3, 4, 5];
first; //2
reset; //[2,3,4,5]

// e.讲字符串转为真正的数组
[...'hello']//['h','e','l','l','o']

//f.iterator（迭代器） Array Map Set String 函数arguments对象 NodeList 对象 TypedArray
function foo(){
  const args = [...arguments] // Array.prototype.slice.call(arguments)
}

// 使用Math获取数组中特定的值
const nums = [8,2,4,7,9,1]
Math.min(...nums)//1
Math.max(...nums)//9




//-------------------- Proxy----------------------------
//1.es6新增 用来定义对象中的才做
let p = new Proxy(target,hander)
// 2.vue3中通过Proxy替换原本的Object.defineProperty来实现响应式



</script>
