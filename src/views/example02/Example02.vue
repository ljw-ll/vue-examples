<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ user.name }}/{{ replace }}</p>
    <button @click="change">click</button>
    <p>{{ myReplace(user.insertTime) }}</p>
  </div>
</template>
<script>
export default {
  /*data(){
     return {
      msg :null,
      user:{
      name: "BP"
      },
      courses:[]
   };
  }*/
  data: () => ({
    msg: "asdf",
    user: {
      name: "bo",
      insertTime: "2021.03.15T 08:32:45"
    }
  }),
  methods: {
    change() {
      this.user.name = "ljw";
    }
  },
  computed: {
    replace() {
      // 是属性，返回 getter方法的结构，而本身 不是方法
      return this.user.insertTime.replace("T", " ");
    },
    myReplace() {
      return date => date.replace("T", " ");
    }
  }
};
</script>
