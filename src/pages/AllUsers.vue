<template>
  <div class="users-page page">
    <h1 class="page__title">All Users</h1>
    <main class="page__content">
      <div class="ui-table">
        <spinnerIcon v-if="isLoading" class="ui-spinner" />

        <span class="ui-table__no-users" v-else-if="users.length === 0"
          >users not found</span
        >

        <table v-else class="ui-table__table">
          <thead class="ui-table__thead">
            <tr class="ui-table__row">
              <th class="ui-table__th">Avatar</th>
              <th class="ui-table__th">Name</th>

              <th class="ui-table__th">Email</th>
              <th class="ui-table__th">Head</th>
              <th class="ui-table__th">Show more</th>
            </tr>
          </thead>
          <tbody class="ui-table__tbody">
            <tr v-for="user in users" :key="user.id" class="ui-table__row">
              <td class="ui-table__td">
                <img
                  :src="user.avatar"
                  :alt="user.name"
                  width="31"
                  height="31"
                />
              </td>
              <td class="ui-table__td">{{ user.name }}</td>
              <td class="ui-table__td">{{ user.email }}</td>
              <td class="ui-table__td">{{ getUsersHead(user) }}</td>
              <td class="ui-table__td">
                <router-link :to="`/users/${user.id}`">
                  <eyeIcon class="ui-table__icon" />
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUsersStore } from "@/store/users.js";
import { onMounted } from "vue";

import spinnerIcon from "@/assets/icons/spinner.svg";
import eyeIcon from "@/assets/icons/eye.svg";

const { users, getUsersHead, isLoading } = storeToRefs(useUsersStore());
const { fetchUsers } = useUsersStore();

onMounted(() => {
  fetchUsers();
});
</script>
