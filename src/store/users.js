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

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: [],
    totalUsersCount: null,
    isLoading: false,
  }),
  getters: {},
  actions: {
    async getUsersCount() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        this.totalUsersCount = querySnapshot.size;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUserByID(userID) {
      try {
        const userDoc = await getDoc(doc(db, "users", userID));
        return userDoc.exists() ? userDoc.data() : null;
      } catch (error) {
        console.error(error);
        return null;
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
      try {
        await addDoc(collection(db, "users"), userData);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
});