<template>
  <el-container>
    <el-header class="nav">Cabecera</el-header>
    <el-main>Principal</el-main>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary" @click="getAll()">GET</el-button>
      <el-button type="success" @click="postPost()">POST</el-button>
      <el-button type="warning" @click="putPatch()">PUT/PATCH</el-button>
      <el-button type="danger" @click="deletePost()">DELETE</el-button>
    </el-row>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      post: {},
    };
  },
  components: {},
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/styles.scss";`,
      },
    },
  },
  methods: {
    async getAll() {
      this.post = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    async postPost() {
      this.post = await axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: "blablabl",
          completed: false,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    //PUT PATCH
    async deletePost() {
      this.post = await axios
        .delete("https://jsonplaceholder.typicode.com/posts/2")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
@import "./assets/css/styles.scss";
</style>
