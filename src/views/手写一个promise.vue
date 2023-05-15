<template>
  <div></div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  //promise的三种状态： pending fullfiled rejected

  function myPromise(excutor) {
    let self = this;
    self.status = "pending";
    self.value = null; //成功信息
    self.resion = null; //失败信息
    self.onFullfiledCallbacks = [];
    self.onRejectedCallbacks = [];

    //成功回调
    function resolve(value) {
      //4.状态处理  2：状态：等待 => 成功(resolve)。失败(reject)（状态不可逆转）
      if (self.status === "pending") {
        self.value = value;
        self.status = "fullfiled";
        //状态改变，依次执行 => 发布
        self.onFullfiledCallbacks.forEach((fullfiledFun) => fullfiledFun(value));
      }
    }
    //失败回调
    function reject(resion) {
      if (self.status === "pending") {
        self.resion = resion;
        self.status = "rejected";
        self.onRejectedCallbacks.forEach((rejectFun) => rejectFun(resion));
      }
    }

    //3.添加一个执行器 立即执行一遍
    excutor(resolve,reject);
  }
  //2.将then挂载到原型上
  myPromise.prototype.then = function (onFullfiled, onRejected) {
    //5.状态改变走then方法 若onFullfiled，onRejected 是一个方法则执行它 不是方法走容错处理
    onFullfiled =
      typeof onFullfiled === "function"
        ? onFullfiled
        : function (data) {
            resolve(data);
          };
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : function (err) {
          reject(err);
          };

    //   6.发布订阅模式
    if (this.status === "pending") {
      this.onFullfiledCallbacks.push(onFullfiled);
      this.onRejectedCallbacks.push(onRejected);
    }
  };

  let demo = new myPromise((resolve, reject) => {
    console.log("test demo");
    setTimeout(() => {
      resolve(123);
    }, 2000);
  });
  demo.then((data) => console.log(data));
});
</script>
