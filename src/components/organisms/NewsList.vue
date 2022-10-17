<template>
  111
</template>

<script setup>
import api from '@/api';
import { ref } from 'vue';

const news = ref(null);

api.getNews().then((res) => { news.value = res; });
</script>
