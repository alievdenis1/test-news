<template>
  <div class="w-full">
    <FavoritesNews/>
    <NewsList/>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const FavoritesNews = defineAsyncComponent(() => import('@/components/organisms/FavoritesNews.vue'));
const NewsList = defineAsyncComponent(() => import('@/components/organisms/NewsList.vue'));
</script>
