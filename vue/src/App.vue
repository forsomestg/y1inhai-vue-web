<template>
  <div id="app">
    <header v-if="!$route.meta.hideNavbar" class="navbar">
      <router-link to="/" class="nav-item">首页</router-link>
      <router-link to="/diary" class="nav-item">日记</router-link>
      <router-link to="/calendar" class="nav-item">日历</router-link>
      <router-link to="/calendar" class="nav-item">关于</router-link>
    </header>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  z-index: 1000;
}

.nav-item {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  transition: background 0.2s;
}

.nav-item:hover,
.nav-item.router-link-exact-active {
  background: #f0f0f0;
  color: #007bff;
}
</style>