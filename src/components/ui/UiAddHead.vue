<template>
  <div class="user-list">
    <div class="user-list-header">
      <div
        class="user-list-header-item"
        v-for="head in selectedHeads"
        :key="head.id"
      >
        <img :src="head.avatar" alt="" />
      </div>
      <input
        type="search"
        v-model="searchByUserName"
        @input="searchByUsersNames"
      />
      case sensetive
    </div>
    <div class="user-list-content" v-if="searchByUserName.length > 2">
      <div
        class="user-list-item"
        v-for="user in selectedUsersFiltered"
        :key="user.id"
        @click="selectHead(user)"
      >
        <img :src="user.avatar" alt="" />
      </div>
      <div
        class="user-list-item"
        v-for="user in notSelectedUsers"
        :key="user.id"
        @click="selectUser(user)"
      >
        <img :src="user.avatar" alt="" /> <span>{{ user.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, defineEmits } from "vue";
import { useUsersStore } from "../../store/users.js";
import { storeToRefs } from "pinia";

const emit = defineEmits(["setHead", "update:head"]);

const props = defineProps({
  head: {
    type: String,
    required: true,
  },
});

const { users } = storeToRefs(useUsersStore());
const { fetchUsers } = useUsersStore();

const searchByUserName = ref("");
const selectedUsers = ref([]);
const selectedHeads = ref([]);

const selectUser = (user) => {
  selectedUsers.value.push(user);
};

const selectHead = (user) => {
  emit("update:head", user);
  selectedHeads.value.push(user);
  /*  emit("set-head", user);*/
};

const searchByUsersNames = () => {
  console.log(searchByUserName.value);
  fetchUsers(searchByUserName.value);
};

const selectedUsersFiltered = computed(() => {
  return selectedUsers.value.filter((user) => {
    return !selectedHeads.value.some(
      (selectedHead) => selectedHead.id === user.id
    );
  });
});

const notSelectedUsers = computed(() => {
  return users.value
    .filter((user) => {
      return !selectedUsers.value.some(
        (selectedUser) => selectedUser.id === user.id
      );
    })
    .filter((item) => item.name.includes(searchByUserName.value));
});

/*onMounted(() => {
  fetchUsers();
});*/
</script>
