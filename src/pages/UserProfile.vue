<template>
  <div class="page profile">
    <h1 class="page__title">Profile</h1>
    <main class="page__content">
      <div class="ui-table">
        <spinnerIcon v-if="isLoading" class="ui-spinner" />

        <span v-else-if="!user" class="ui-table__no-user">user not found</span>

        <table v-else class="ui-table__table">
          <thead class="ui-table__thead">
            <tr class="ui-table__row">
              <th class="ui-table__th">ID</th>
              <th class="ui-table__th">Avatar</th>
              <th class="ui-table__th">Name</th>
              <th class="ui-table__th">Email</th>
              <th class="ui-table__th">Head</th>
            </tr>
          </thead>
          <tbody class="ui-table__tbody">
            <tr class="ui-table__row">
              <td class="ui-table__td">{{ userID }}</td>

              <td class="ui-table__td">
                <img :src="user.avatar" :alt="user.name" />
              </td>
              <td class="ui-table__td">{{ user.name }}</td>
              <td class="ui-table__td">{{ user.email }}</td>
              <td class="ui-table__td">{{ user.head }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script setup>
import { NO_USERS_HEAD_TEXT } from "@/helpers/constants.js";

import spinnerIcon from "@/assets/icons/spinner.svg";

import { useRoute } from "vue-router";
import { useUsersStore } from "@/store/users.js";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

const { fetchUserByID } = useUsersStore();
const { isLoading } = storeToRefs(useUsersStore());

const user = ref(null);

const userID = useRoute()?.params?.id;

onMounted(async () => {
  /* get user and user head data in two queries, instead of getting all users */
  const fetchedUser = await fetchUserByID(userID);
  const fetchedHead = fetchedUser?.head
    ? await fetchUserByID(fetchedUser?.head)
    : null;

  user.value = {
    ...fetchedUser,
    head: fetchedHead ? fetchedHead.name : NO_USERS_HEAD_TEXT,
  };
});
</script>
