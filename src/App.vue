<template>
  <div class="layout">
    <header class="header layout__header">
      <nav class="nav">
        <router-link class="nav__link" to="/create-user"
          >create user</router-link
        >
        <router-link class="nav__link" to="/users">all users</router-link>
      </nav>
    </header>

    <router-view v-slot="{ Component }" class="layout__page">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup></script>
