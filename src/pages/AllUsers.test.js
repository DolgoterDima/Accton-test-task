import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useUsersStore } from "@/store/users.js";

import { mount } from "@vue/test-utils";

import AllUsers from "@/pages/AllUsers.vue";
describe("all users page test", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("The table is not displayed and the text 'no users found' is displayed if no users are found", () => {
    const wrapper = mount(AllUsers, {
      global: {
        stubs: ["router-link", "router-view"],
      },
    });

    const table = wrapper.find(".ui-table__table");
    expect(table.exists()).toBe(false);

    const span = wrapper.find(".ui-table__no-users");
    expect(span.exists()).toBe(true);
  });
});
