<template>
  <div class="create-user-page page" id="page">
    <h1 class="page__title">Create user</h1>
    <main class="page__content">
      <Form
        @submit="submit"
        :validation-schema="schema"
        v-slot="{ errors }"
        class="form create-user-page__form"
      >
        <label class="form__label">
          <Field
            type="text"
            v-model="formUserData.name"
            name="name"
            placeholder="Name"
            class="form__input ui-input"
            :class="errors.name && `form__input--error`"
          />
          <span class="form__error">{{ errors.name }}</span>
        </label>
        <label class="form__label">
          <Field
            v-model="formUserData.email"
            type="email"
            name="email"
            placeholder="Email"
            class="form__input ui-input"
            :class="errors.email && `form__input--error`"
          />
          <span class="form__error">{{ errors.email }}</span>
        </label>
        <label class="form__label">
          <Field
            v-slot="{ value }"
            name="department"
            as="select"
            v-model="formUserData.department"
            class="form__input ui-input"
            :class="errors.department && `form__input--error`"
          >
            <option value="" disabled>Select department</option>
            <option
              v-for="department in departmentsArray"
              :key="department"
              :value="department"
              :selected="value && value.includes(department)"
            >
              {{ department }}
            </option>
          </Field>

          <span class="form__error">{{ errors.department }}</span>
        </label>
        <div class="form__label form__label--add-head">
          <AddHead v-model:head="formUserData.head" :key="resetAddHeader" />
        </div>

        <div class="form__buttons">
          <button
            type="submit"
            class="ui-button form__button"
            :disabled="Object.keys(errors).length"
            :class="Object.keys(errors).length && 'ui-button--disabled'"
          >
            <span v-if="isUserAdded">user added </span>
            <span v-else> add user </span>
          </button>
          <button
            type="reset"
            @click="resetForm"
            class="ui-button form__button"
          >
            reset form
          </button>
        </div>
      </Form>
    </main>
  </div>
</template>

<script setup>
import { schema } from "@/helpers/validation.js";
import { DEPARTMENTS_DICT } from "@/helpers/constants.js";
import { Field, Form } from "vee-validate";
import { ref, onMounted } from "vue";
import AddHead from "@/components/AddHead.vue";

import { useUsersStore } from "@/store/users.js";
import { storeToRefs } from "pinia";
const { totalUsersCount } = storeToRefs(useUsersStore());
const { getUsersCount, addUser } = useUsersStore();

const resetAddHeader = ref(false);
const departmentsArray = [
  DEPARTMENTS_DICT.sales,
  DEPARTMENTS_DICT.smm,
  DEPARTMENTS_DICT.development,
];

const formUserData = ref({
  name: null,
  email: null,
  avatar: `https://i.pravatar.cc/31?u=${totalUsersCount.value + 1}`,
  department: null,
  head: null,
});

const resetForm = () => {
  isUserAdded.value = false;
  resetAddHeader.value = !resetAddHeader.value; /* reset add head component */
  formUserData.value.head = null;
};

const isUserAdded = ref(false);

const submit = async () => {
  const headID = formUserData.value.head ? formUserData.value.head.id : null;
  isUserAdded.value = await addUser({ ...formUserData.value, head: headID });
  getUsersCount();
};

onMounted(() => {
  getUsersCount();
});
</script>
