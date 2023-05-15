// Vue原理分析----变化侦测
//data(){}

export class Observer {
  constructor(value) {
    this.value = value;
    if (Array.isArray(value)) {
      //数组的逻辑
    } else {
      //对象的逻辑
      this.walk()
    }
  }

  walk(obj){

  }
}
