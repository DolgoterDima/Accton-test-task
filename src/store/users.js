import { defineStore } from "pinia";

import {
  db,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  collection,
} from "../services/firebase/index.js";

import { NO_USERS_HEAD_TEXT } from "@/helpers/constants.js";
export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: [],
    totalUsersCount: null,
    isLoading: false,
  }),
  getters: {
    getUsersHead: (state) => (user) => {
      const usersHead = state.users.find((item) => item.id === user.head);
      return usersHead ? usersHead.email : NO_USERS_HEAD_TEXT;
    },
  },

  actions: {
    async getUsersCount() {
      this.isLoading = true;
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        this.totalUsersCount = querySnapshot.size;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchUserByID(userID) {
      this.isLoading = true;
      try {
        const userDoc = await getDoc(doc(db, "users", userID));
        return userDoc.exists() ? userDoc.data() : null;
      } catch (error) {
        console.error(error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },
    async fetchUsers(searchName = "") {
      this.isLoading = true;

      try {
        const querySnapshot = await getDocs(
          query(collection(db, "users"), where("name", ">=", searchName))
        );
        this.users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async addUser(userData) {
      this.isLoading = true;
      try {
        await addDoc(collection(db, "users"), userData);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
