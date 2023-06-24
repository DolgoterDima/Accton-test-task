<template>
  <Form @submit="submit" :validation-schema="schema" v-slot="{ errors }">
    <pre>{{ errors }}</pre>
    <Field
      type="text"
      v-model="formUserData.name"
      name="name"
      id=""
      placeholder="Name"
    />
    <Field
      v-model="formUserData.email"
      type="email"
      name="email"
      id=""
      placeholder="Email"
    />
    {{ errors.email }}

    Додати начальника <br />
    <button type="button" @click="toggleShowAddHead">+</button>
    <UiAddHead
      v-if="isShowAddHead"
      @set-head="addHead"
      v-model:head="formUserData.head"
    />

    <Field
      v-slot="{ value }"
      name="department"
      as="select"
      v-model="formUserData.department"
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

    <Field
      v-model="formUserData.head"
      type="text"
      name="head"
      value="6+5+65wq65e2qdweqw65eq1w6"
      id=""
      placeholder="Head"
    />
    <button>submit</button>
  </Form>
</template>
<script setup>
import * as yup from "yup";
import { Field, Form, ErrorMessage } from "vee-validate";
import { ref, onMounted } from "vue";
import { useUsersStore } from "../store/users.js";
import { storeToRefs } from "pinia";
import UiAddHead from "../components/ui/UiAddHead.vue";

const { users } = storeToRefs(useUsersStore());

const isShowAddHead = ref(false);
const departmentsArray = ["sales", "smm", "development"];

const formUserData = ref({
  name: null,
  email: null,
  avatar: `https://i.pravatar.cc/31?u=${users.length + 1}`,
  department: null,
  head: null,
});

const addHead = (event1) => {
  console.log(event1);
};
const { fetchUsers, addUser } = useUsersStore();
const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  department: yup.string().required(),
});

const toggleShowAddHead = () => {
  isShowAddHead.value = !isShowAddHead.value;
};
const submit = () => {
  console.log(formUserData.value);

  addUser(formUserData.value);
};
onMounted(() => {
  fetchUsers();
});
</script>

<style scoped></style>
