import { defineStore } from "pinia";
import { collection, getDocs } from "firebase/firestore";

import { db, addDoc, query, where } from "../services/firebase/index.js";

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: [],
    post: null,
    loading: false,
    error: "null11231",
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) =>
        state.posts.filter((post) => post.userId === authorId);
    },
  },
  actions: {
    async fetchUsers(searchName = "") {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, "users"),
            where("name", ">=", searchName),
            where("name", "<=", `${searchName}\uf8ff`)
          )
        );
        this.users = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async addUser(userData) {
      this.loading = true;
      try {
        const docRef = await addDoc(collection(db, "users"), userData);
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
