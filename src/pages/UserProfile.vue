<template>
  <div class="page profile">
    <h1 class="page__title">Profile</h1>
    <main class="page__content">
      <div v-if="user" class="ui-table">
        <table class="ui-table__table">
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
const NO_HEAD_TEXT = "no head";
import { useRoute } from "vue-router";
import { useUsersStore } from "../store/users.js";
import { onMounted, ref } from "vue";

const { fetchUserByID } = useUsersStore();

const user = ref(null);

const userID = useRoute().params.id;

onMounted(async () => {
  const fetchedUser = await fetchUserByID(userID);
  const fetchedHead = fetchedUser.head
    ? await fetchUserByID(fetchedUser.head)
    : null;
  user.value = {
    ...fetchedUser,
    head: fetchedHead ? fetchedHead.name : NO_HEAD_TEXT,
  };
});
</script>
<style scoped></style>
