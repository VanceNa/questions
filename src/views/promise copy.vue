<template>
  <div></div>
</template>
<script setup>
import { onMounted } from "vue";
onMounted(() => {
  function myPromise(excutor) {
    let self = this;
    self.status = "pending";
    self.value = null;
    self.resion = null;
    self.onFullfiledCallbacks = [];
    self.onRejectedCallbacks = [];

    function resolve(value) {
      if (self.status === "pending") {
        self.value = value;
        self.status = "fullfied";
        self.onFullfiledCallbacks.forEach((fun) => fun(value));
      }
    }

    function reject(resion) {
      if (self.status === "pending") {
        self.resion = resion;
        self.status = "rejected";
        self.onRejectedCallbacks.forEach((fun) => fun(resion));
      }
    }
    try {
      excutor(resolve, reject);
    } catch (err) {
     reject(err);
    }
  }

  myPromise.prototype.then = function(onFullFiled, onRejected){
    onFullFiled =
      typeof onFullFiled === "function"
        ? onFullFiled
        : function (data) {
            resolve(data);
          };
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : function (err) {
		throw err;
          };

    if (this.status === "pending") {
      this.onFullfiledCallbacks.push(onFullFiled);
      this.onRejectedCallbacks.push(onRejected);
    }
  };

  let test = new myPromise((resolve, reject) => {
    console.log("2");
    setTimeout(() => {
      resolve(123);
    }, 2000);
  });
  test.then((data) => console.log(data));
});
</script>
