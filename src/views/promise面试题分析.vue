<template>
	<div></div>
</template>
<script>
export default {

	mounted(){
		// promise =>承诺 诺言
		//1:异步 2：状态：等待 => 成功(resolve)。失败(reject)（状态不可逆转）


		//链式调用

		//面试题
		//构造函数立即执行(同步执行) 。then异步执行 1243
		const promise = new Promise((resolve,reject)=>{
			console.log(1)
			resolve()
			console.log(2)
		})
		//.then 异步执行
		promise.then(()=>{
			console.log(3)
		})
		//构造函数
		console.log(4)



		//构造函数只执行一次 then可以多次执行 结果：1,2,2
		const promise2 = new Promise((resolve,reject)=>{

			setTimeout(() => {
				console.log(1)
			resolve(2)
			}, 1000);
		})

		promise2.then((res)=>{
			console.log(res)
		})
		promise2.then((res)=>{
			console.log(res)
		})
		 
	}
}
</script>