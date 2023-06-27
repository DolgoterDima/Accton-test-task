import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useUsersStore } from "@/store/users.js";

describe("The counter store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("Test the initial states", () => {
    const store = useUsersStore();

    expect(store.isLoading).toBeFalsy();
    expect(store.totalUsersCount).toBeNull();
    expect(Array.isArray(store.users)).toBe(true);
    expect(store.users.length).toBe(0);
  });

  test("Test the getters after fetch users", () => {
    const store = useUsersStore();

    store.users = [
      {
        id: "OH7AN61NNL9lhUnt7dca",
        avatar: "https://i.pravatar.cc/31?u=12",
        head: "z5ISqeKqJBNBtwWBgbzk",
        email: "John12@quick-mail.club",
        department: "smm",
        name: "John12 Doe",
      },
      {
        id: "z5ISqeKqJBNBtwWBgbzk",
        head: null,
        name: "John2 Doe",
        department: "sales",
        avatar: "https://i.pravatar.cc/31?u=4",
        email: "John2@quick-mail.club",
      },
    ];

    /* should return head email if user has  head */
    expect(store.getUsersHead(store.users[0])).toEqual(expect.any(String));
    expect(store.getUsersHead(store.users[0])).toMatch(/^\S+@\S+\.\S+$/);

    /* should return text "no head" if user has no head  */
    expect(store.getUsersHead(store.users[1])).toEqual(expect.any(String));
    expect(store.getUsersHead(store.users[1])).toBe("no head");
  });
});
