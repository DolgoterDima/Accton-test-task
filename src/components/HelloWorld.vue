<template>
  {{ users }}
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useUsersStore } from "../store/users.js";
import { storeToRefs } from "pinia";

const { users } = storeToRefs(useUsersStore());

const { fetchUsers, addUser } = useUsersStore();

onMounted(() => {
  console.log("fgdffdg");
  fetchUsers();
  addUser();
});
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
