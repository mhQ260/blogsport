<template>
  <header class="header">
    <div class="header__logo">
      BlogSport
    </div>
    <nav class="header__navigation">
      <div 
        v-for="(item, i) in menuItems"
        :key="i"
        class="navigation__item"
      >
        <RouterLink
          :to="item.to"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">

const menuItems = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Dodaj nowy artykuł',
    to: '/post/add',
  },
];

</script>

<style lang="scss" src="./styles.scss" />