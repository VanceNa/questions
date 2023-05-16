<template>
	<div></div>
</template>
<script setup lang="ts">

let  obj = {}

if(JSON.stringify(obj)=='{}'){
	console.log('空对象')
}

//es6
if(Object.keys(obj).length<0){
	console.log('空对象')
}


</script>