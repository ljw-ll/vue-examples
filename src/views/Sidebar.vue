<template>
  <div>
    <h1>Vue组件演示</h1>
    <ul>
      <li><router-link to="/example01">welcome1</router-link></li>
      <li>
        <router-link to="/example02">
          data & computed & methods & watch
        </router-link>
      </li>
      <li>
        route with params
        <ul>
          <li>
            <router-link to="/example03/students/12/homeworks/1">
              students/12/homeworks/1
            </router-link>
          </li>
          <li>
            <router-link to="/example03/students/74/homeworks/2">
              students/74/homeworks/2
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/example03/Example03_login">keep-alive</router-link>
      </li>
      <hr />
      <li>
        <router-link to="/example04/Example04-01">Composition_API</router-link>
      </li>
      <li>
        <router-link to="/example04/Example04-02">reactive</router-link>
      </li>
      <li>
        <router-link to="/example04/Example04-03/students/12/homeworks/1">
          students/12/homeworks/1
        </router-link>
      </li>
      <li>
        <router-link to="/example04/Example04-03/students/74/homeworks/2">
          students/74/homeworks/2
        </router-link>
      </li>

      <li>
        <router-link to="/example04/Example04-04">
          Composition
        </router-link>
      </li>
      <hr />
      <li>
        <router-link to="/example05/Example05-01">
          v-if
        </router-link>
      </li>
      <li>
        <router-link to="/example05/Example05-02">
          v-bind & watch
        </router-link>
      </li>
      <li>
        <router-link to="/example05/Example05-03">
          v-for
        </router-link>
      </li>
      <li>
        <router-link to="/example05/Example05-04"
          >Async Component 组件的异步延迟加载</router-link
        >
      </li>
      <hr />
      <li>
        Form Input Bindings
        <ul>
          <li>
            <router-link to="/example06/Example06-01">v-module</router-link>
          </li>
          <li>
            <router-link to="/example06/Example06-02">Examples</router-link>
          </li>
        </ul>
      </li>
      <li>
        Vuex
        <ul>
          <li>
            <router-link to="/example07/Example07-01">state</router-link>
          </li>
          <li>
            <router-link to="/example07/Example07-02">Mutations</router-link>
          </li>
          <li>
            <router-link to="/example07/Example07-03">actions</router-link>
          </li>
          <li>
            <router-link to="/example07/Example07-02"
              >maoState&Getters</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style scoped>
h1 {
  color: red;
}
</style>
