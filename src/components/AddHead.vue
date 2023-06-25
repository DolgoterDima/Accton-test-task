<template>
  <div class="add-head">
    <header class="add-head__header">
      <div v-if="selectedHead" class="add-head__head">
        <img
          :src="selectedHead.avatar"
          :alt="selectedHead.name"
          class="add-head__head-avatar"
        />
      </div>
      <button
        type="button"
        @click="toggleShowAddHead"
        class="add-head__button"
        :class="isShowAddHead && `add-head__button--active`"
      >
        <svg
          class="add-head__icon"
          fill="currentColor"
          viewBox="0 0 330 330"
          xml:space="preserve"
        >
          <g>
            <path
              d="M281.672,48.328C250.508,17.163,209.073,0,164.999,0C120.927,0,79.492,17.163,48.328,48.328   c-64.333,64.334-64.333,169.011,0,233.345C79.492,312.837,120.927,330,165,330c44.073,0,85.508-17.163,116.672-48.328   C346.005,217.339,346.005,112.661,281.672,48.328z M260.46,260.46C234.961,285.957,201.06,300,165,300   c-36.06,0-69.961-14.043-95.46-39.54c-52.636-52.637-52.636-138.282,0-190.919C95.039,44.042,128.94,30,164.999,30   c36.06,0,69.961,14.042,95.46,39.54C313.095,122.177,313.095,207.823,260.46,260.46z"
            />
            <path
              d="M254.999,150H180V75c0-8.284-6.716-15-15-15s-15,6.716-15,15v75H75c-8.284,0-15,6.716-15,15s6.716,15,15,15h75v75   c0,8.284,6.716,15,15,15s15-6.716,15-15v-75h74.999c8.284,0,15-6.716,15-15S263.284,150,254.999,150z"
            />
          </g>
        </svg>
      </button>
    </header>

    <input
      v-if="isShowAddHead"
      class="add-head__search ui-input"
      type="search"
      v-model="searchByUserName"
      @input="searchByUsersNames"
    />
    <!--   instead of @input, we can use computed set and get but it seems overloaded  -->

    <div
      class="add-head__content"
      v-if="searchByUserName.length > MIN_CHARACTERS_TO_START_SEARCH"
    >
      <template v-if="selectedUsersFiltered.length">
        <span class="add-head__label">Selected users:</span>

        <div class="add-head__selected-users">
          <button
            type="button"
            class="add-head__item"
            v-for="user in selectedUsersFiltered"
            :key="user.id"
            @click.stop="selectHead(user)"
          >
            <img
              :src="user.avatar"
              :alt="user.name"
              class="add-head__head-avatar"
            />
          </button>
        </div>
      </template>

      <div class="add-head__founded-users">
        <svg
          v-if="isLoading"
          class="ui-spinner"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
            class="spinner_ajPY"
          />
        </svg>
        <span v-else-if="notSelectedUsers.length === 0" class="add-head__label">
          no founded users</span
        >
        <template v-else>
          <span class="add-head__label">Founded users:</span>
          <div
            class="add-head__item"
            v-for="user in notSelectedUsers"
            :key="user.id"
            @click.stop="selectUser(user)"
          >
            <img
              :src="user.avatar"
              :alt="user.name"
              class="add-head__head-avatar"
            />
            <span class="add-head__head-name">{{ user.name }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const MIN_CHARACTERS_TO_START_SEARCH = 2;
const SEARCH_THROTTLE_MILLISECONDS = 500;

import { debounce } from "lodash";
import { computed, onMounted, ref, defineEmits } from "vue";
import { useUsersStore } from "../store/users.js";
import { storeToRefs } from "pinia";

const emit = defineEmits(["update:head"]);

const props = defineProps({
  head: {
    type: [Object, null],
    required: true,
  },
});

const { users, isLoading } = storeToRefs(useUsersStore());
const { fetchUsers } = useUsersStore();

const searchByUserName = ref("");
const selectedUsers = ref([]);
const selectedHead = ref(null);
const isShowAddHead = ref(false);

const toggleShowAddHead = (event) => {
  isShowAddHead.value = !isShowAddHead.value;
};

const selectUser = (user) => {
  selectedUsers.value.push(user);
};

const selectHead = (user) => {
  emit("update:head", user);
  selectedHead.value = user;
  resetFields();
  toggleShowAddHead();
};

const resetFields = () => {
  searchByUserName.value = "";
  selectedUsers.value = [];
};
const searchByUsersNames = debounce(() => {
  console.log("s");
  fetchUsers(searchByUserName.value);
}, SEARCH_THROTTLE_MILLISECONDS);

const selectedUsersFiltered = computed(() => {
  return selectedUsers.value.filter((user) => {
    return selectedHead.value?.id !== user.id;
  });
});

const notSelectedUsers = computed(() => {
  return users.value.filter((user) => {
    return (
      !selectedUsers.value.some(
        (selectedUser) => selectedUser.id === user.id
      ) && user.name.includes(searchByUserName.value)
    );
  });
});
</script>
