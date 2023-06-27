import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";

import { mount } from "@vue/test-utils";

import UserProfile from "@/pages/UserProfile.vue";
describe("user profile page test", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("The table is not displayed and the text 'user not found' is displayed if no users are found", () => {
    const wrapper = mount(UserProfile, {
      global: {
        stubs: ["router-link", "router-view"],
      },
    });

    const table = wrapper.find(".ui-table__table");
    expect(table.exists()).toBe(false);

    const span = wrapper.find(".ui-table__no-user");
    expect(span.exists()).toBe(true);
    expect(span.text()).toBe("user not found");
  });
});
