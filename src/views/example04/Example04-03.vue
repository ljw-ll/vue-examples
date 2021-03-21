<template>
  <div>
    <p>
      <b>一定在router配置声明启用props支持，否则无法获取数据。</b>
      <br />
      在vue props属性中声明同名变量，声明类型。
      <br />
      props可作为参数直接注入到setup()函数中使用
    </p>
    <p>studentID: {{ sid }}</p>
    <p>homeworkID {{ hid }}</p>
    <p>从setup中 获取studentID: {{ sidRef }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    sid: String,
    hid: String
  },
  setup(props) {
    const sidRef = ref(props.sid);
    console.log(props);
    console.log(props.hid);
    return {
      sidRef
    };
  }
});
</script>
