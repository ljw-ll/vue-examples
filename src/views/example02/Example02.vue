<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ user.name }}/{{ replace }}</p>
    <hr />
    <h1>methods</h1>
    <button @click="change">click</button>
    <button @click="addAddress">change</button>
    <p>{{ user.address }}</p>
    <hr />
    <h1>Computed</h1>
    <p>
      计算属性，默认声明的是属性的getter方法，不支持传参。但JS中，参数/属性可以是一个，函数
    </p>
    <p>{{ myReplace(user.insertTime) }}</p>
    <p>{{ msg }}---翻转---->{{ reversMessage }}</p>
  </div>
</template>
<script>
export default {
  /* data(){
     return {
      msg: "asdf",
      user: {
      name: "bo",
        insertTime: "2021.03.15T 08:32:45"
      },
      courses:[]
   };
  },*/
  /* data: () => {
      return{
      msg: "asdf",
      user: {
        name: "bo",
        insertTime: "2021.03.15T 08:32:45"
      }
      }
  },*/
  data: () => ({
    msg: "hello",
    user: {
      name: "bo",
      insertTime: "2021.03.15T 08:32:45",
      address: ""
    }
  }),

  methods: {
    change() {
      this.user.name = "ljw";
    },
    addAddress() {
      this.user.address = "954";
    }
  },
  computed: {
    replace() {
      // 是属性，返回 getter方法的结果，而本身 不是方法
      return this.user.insertTime.replace("T", " ");
    },
    myReplace() {
      return date => date.replace("T", " ");
    },
    reversMessage() {
      return this.msg
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
