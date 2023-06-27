import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test, vi } from "vitest";

import { mount } from "@vue/test-utils";

import AddHead from "@/components/AddHead.vue";
describe("Add head component tests", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("search users block not is`nt show", async () => {
    const wrapper = mount(AddHead, {
      props: {
        head: {
          type: [Object, null],
          required: true,
        },
      },
      global: {
        stubs: ["router-link", "router-view"],
      },
    });

    expect(wrapper.find(".add-head__search-wrapper").exists()).toBe(false);
  });
  test("search users block not is`nt show ony after button click", async () => {
    const wrapper = mount(AddHead, {
      props: {
        head: {
          type: [Object, null],
          required: true,
        },
      },
      global: {
        stubs: ["router-link", "router-view"],
      },
    });

    const addHeadButton = wrapper.find(".add-head__button");

    expect(wrapper.find(".add-head__search-wrapper").exists()).toBe(false);

    await addHeadButton.trigger("click");

    expect(wrapper.find(".add-head__search-wrapper").exists()).toBe(true);
  });
});
