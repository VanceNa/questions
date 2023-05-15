<template>
  <div>如何一次性渲染10w条数据</div>
  <div id="container"></div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
let container: any = null;

onMounted(() => {
  debugger;
  container = document.getElementById("container");
  //   renderList();
  //   renderListByPage();
  //   renderListByRequestAnimationFrame();
  renderListByCreateDocumentFragment();
});
const getList = () => {
  let list: Array<number> = [
    11, 22, 33, 44, 55, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 13,
  ];
  return list;
};

const renderList = async () => {
  const list = await getList();
  list.forEach((item) => {
    let div = document.createElement("div");
    div.className = "sunshine";
    div.innerHTML = `<div>${item}</div>`;
    container ? container.appendChild(div) : "";
  });
};

//分页+settimeout
const renderListByPage = async () => {
  const list = await getList();
  let total = list.length;
  let pageIndex = 0;
  let pageSize = 200;
  let totalPage = Math.ceil(total / pageSize);

  const render = (pageIndex: number) => {
    if (pageIndex >= totalPage) return;
    setTimeout(() => {
      for (
        let i = pageSize * pageIndex;
        i < pageIndex * pageSize + pageSize;
        i++
      ) {
        let item = list[i];
        let div = document.createElement("div");
        div.innerHTML = `<div>${item}</div>`;
        container ? container.appendChild(div) : "";
      }
      render(pageIndex + 1);
    }, 0);
  };
  render(pageIndex);
};

//window requestAnimationFrame 减少重排
const renderListByRequestAnimationFrame = async () => {
  const list = await getList();
  let total = list.length;
  let pageIndex = 0;
  let pageSize = 200;
  let totalPage = Math.ceil(total / pageSize);

  const render = (pageIndex: number) => {
    if (pageIndex >= totalPage) return;
    requestAnimationFrame(() => {
      for (
        let i = pageSize * pageIndex;
        i < pageIndex * pageSize + pageSize;
        i++
      ) {
        let item = list[i];
        if (item) {
          let div = document.createElement("div");
          div.innerHTML = `<div>${item}</div>`;
          //每次都要插入
          container ? container.appendChild(div) : "";
        }
      }
      render(pageIndex + 1);
    });
  };
  render(pageIndex);
};

//文档碎片 document.createDocumentFragment  dom节点不是主dom树的一部分
//讲所有的数据存储起来 一次性渲染

const renderListByCreateDocumentFragment = async () => {
	console.time('start time')
  const list = await getList();
  let total = list.length;
  let pageIndex = 0;
  let pageSize = 200;
  let totalPage = Math.ceil(total / pageSize);

  const render = (pageIndex: number) => {
    if (pageIndex >= totalPage) return;
    requestAnimationFrame(() => {
      //创建一个文档碎片
      const fragment = document.createDocumentFragment();
      for (
        let i = pageSize * pageIndex;
        i < pageIndex * pageSize + pageSize;
        i++
      ) {
        let item = list[i];
        if (item) {
          let div = document.createElement("div");
          div.innerHTML = `<div>${item}</div>`;
          fragment.appendChild(div);
        }
      }
      //一次性插入
      container ? container.appendChild(fragment) : "";
      render(pageIndex + 1);
    });
  };
  render(pageIndex);
  console.timeLog('start1 time')
};
</script>
