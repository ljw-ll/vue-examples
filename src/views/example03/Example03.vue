<template>
  <div>
    <p>
      <b>一定在router配置声明启用props支持，否则无法获取数据。</b>
      <br />
      在vue props属性中声明同名变量
    </p>
    <p>studentID : {{ sid }}</p>
    <p>homeworksID : {{ hid }}</p>

    <p>通过$route.params调用</p>
    <p>studentID : {{ $route.params.sid }}</p>
    <p>homeworksID :{{ $route.params.hid }}</p>
    <p>控制台输出：</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["sid", "hid"],
  data: () => {
    [
      { id: 1, title: "spring" },
      { id: 2, title: "Jpa" },
      { id: 3, title: "springMvc" }
    ];
  },
  created() {
    this.init();
  },
  // beforeUpdate() {
  //   this.init();
  // },
  // beforeRouteUpdate() {
  //   console.log("beforeRouterUpdate");
  // },
  methods: {
    init() {
      console.log(this.$route.params.sid);
    }
  }
});
</script>
