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
        <plusIcon class="add-head__icon" />
      </button>
    </header>

    <label v-if="isShowAddHead" class="add-head__search-wrapper">
      <input
        class="add-head__search ui-input"
        type="search"
        placeholder="search user"
        v-model="searchByUserName"
        @input="searchByUsersNames"
      />
      <span class="add-head__search-hint">
        search is case sensitive. Search starts when you type more then
        {{ MIN_CHARACTERS_TO_START_SEARCH }} chars. Type "Joh..."
      </span>
    </label>

    <!--   instead of @input we can use computable set and get, but this seems overloaded  -->

    <div
      class="add-head__content"
      v-if="searchByUserName.length > MIN_CHARACTERS_TO_START_SEARCH"
    >
      <template v-if="selectedButNotHeadUsers.length">
        <span class="add-head__label">Selected users:</span>

        <div class="add-head__selected-users">
          <button
            type="button"
            class="add-head__item"
            v-for="user in selectedButNotHeadUsers"
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

      <div class="add-head__found-users">
        <spinnerIcon v-if="isLoading" class="ui-spinner" />
        <span
          v-else-if="foundButNotSelectedUsers.length === 0"
          class="add-head__label"
        >
          no found users</span
        >
        <template v-else>
          <span class="add-head__label">found users:</span>
          <button
            type="button"
            class="add-head__item"
            v-for="user in foundButNotSelectedUsers"
            :key="user.id"
            @click.stop="selectUser(user)"
          >
            <img
              :src="user.avatar"
              :alt="user.name"
              class="add-head__head-avatar"
            />
            <span class="add-head__head-name">{{ user.name }}</span>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MIN_CHARACTERS_TO_START_SEARCH } from "@/helpers/constants.js";
import { SEARCH_THROTTLE_MILLISECONDS } from "@/helpers/constants.js";

import spinnerIcon from "@/assets/icons/spinner.svg";
import plusIcon from "@/assets/icons/plus.svg";

import { debounce } from "lodash";
import { computed, ref, defineEmits } from "vue";
import { useUsersStore } from "@/store/users.js";
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

const toggleShowAddHead = () => {
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
  fetchUsers(searchByUserName.value);
}, SEARCH_THROTTLE_MILLISECONDS);

const selectedButNotHeadUsers = computed(() => {
  return selectedUsers.value.filter((user) => {
    return selectedHead.value?.id !== user.id;
  });
});

const foundButNotSelectedUsers = computed(() => {
  return users.value.filter((user) => {
    return (
      !selectedUsers.value.some(
        (selectedUser) => selectedUser.id === user.id
      ) && user.name.includes(searchByUserName.value)
    );
  });
});
</script>
