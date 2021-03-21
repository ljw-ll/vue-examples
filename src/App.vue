<template>
  <div id="app">
    <sidebar id="sidebar" />
    <router-view id="router" v-bind:key="$route.path" />
  </div>
</template>

<script>
import sidebar from "@/views/Sidebar";
export default {
  components: {
    sidebar
    //sidebar: () => import("@/views/Sidebar")
  }
};
</script>
<style>
#app {
  margin-top: 10px;
  display: flex;
}

#sidebar {
  width: 500px;
  border: 1px solid red;
  padding: 15px;
}
#router {
  border: 1px solid red;
  flex: 1;
  padding: 15px;
}
</style>
