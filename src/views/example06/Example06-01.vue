<template>
  <div>
    <h1>Form Binding</h1>
    <input type="text" v-model="user.name" /> <br />
    <label>
      <input type="radio" v-model="user.sex" value="male" />
      男
    </label>
    <br />
    <label>
      <input type="radio" v-model="user.sex" value="female" />
      女
      <br />
    </label>
    <select v-model="user.title">
      <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }"
        >{{ t.name }}
      </option>
    </select>

    <br />
    <template v-for="c of courses" :key="c.index">
      <label>
        <input type="checkbox" v-model="user.courses" :value="{ id: c.id }" />
        {{ c.name }}
      </label>
      <br />
    </template>
    <hr />
    <!-- <input
      type="checkbox"
      v-for="(c, index) of courses"
      :key="index"
      :value="{ id: c.id }"
      v-model="user.courses"
    /> -->

    {{ user }}
    <hr />
    <input type="file" @change="fileChange($event.target.files[0])" />
    <br />

    <p>{{ file.fileName }} / {{ file.fileSize }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { User } from "@/datasource/Types";
import { listCourses, listTitles } from "@/datasource/DataSource";

interface VFile {
  fileName: string;
  fileSize: string;
}
function useFile(file: Ref<VFile>) {
  const fileChange = (f: File) => {
    console.log(f);
    file.value.fileName = f.name;
    file.value.fileSize = `${(f.size / 1024 / 1024).toFixed(2)}MB`;
  };
  return { fileChange };
}

export default defineComponent({
  setup() {
    const user = ref<User>({ courses: [] });
    const titles = listTitles();
    const courses = listCourses();
    const file = ref({ fileName: "", fileSize: "" });
    const { fileChange } = useFile(file);
    return {
      user,
      file,
      titles,
      courses,
      fileChange
    };
  }
});
</script>
