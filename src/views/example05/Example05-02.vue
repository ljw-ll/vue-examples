<template>
  <div>
    <h1>v-bind</h1>
    <p>
      v-bind，将指定事件绑定到methods中的方法
    </p>
    <label> <input type="checkbox" @click="setAgree" /> 同意上述条款</label>
    <br />
    <button type="button" :disabled="submitButton">提交</button> <br />
    <hr />

    <p
      @mouseover="active = true"
      @mouseleave="active = false"
      v-bind:class="{ 'bg-red': active }"
    >
      元素class属性值与active值绑定， 当鼠标进入/移出时改变active值，
      从而动态改变元素样式
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const submitButton = ref(true);

    const setAgree = () => {
      submitButton.value = !submitButton.value;
    };
    watch(submitButton, (newValue: boolean, oldValue: boolean) =>
      alert(`提交按钮 disabled的值： ${newValue}`)
    );
    const active = ref(false);
    return {
      submitButton,
      setAgree,
      active
    };
  }
});
</script>

<style scoped>
.bg-red {
  background-color: red;
}
</style>
