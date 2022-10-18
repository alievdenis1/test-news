<template>
  <div class="container my-24 w-full px-6 mx-auto">
    <section class="mb-32 text-gray-800">

      <button @click="addFavorites()" type="button" class="inline-block px-6 py-2.5 bg-blue-600
        text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700
        hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 mb-10
        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-center">
        В избранное
      </button>

      <router-link :to="{ name: 'home-page'}">
        <button type="button" class=" ml-10 inline-block px-6 py-2.5 bg-blue-600
          text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700
          hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 mb-10
          active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-center">
          К списку
        </button>
      </router-link>

      <h2 class="text-3xl font-bold mb-2">{{ newsItem.name }}</h2>
      <h3 class="mb-2">{{ newsItem.date }}</h3>
      <h3 class="mb-2">{{ newsItem.authorName }}</h3>
      <p>
        {{ newsItem.body }}
      </p>
    </section>
  </div>
</template>

<script setup>
import api from '@/api';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const newsId = route.params.id;
const newsItem = ref({});

const addFavorites = () => {
  store.dispatch('addNews', newsId);
};

api.getDetailedNew(newsId).then((res) => { newsItem.value = res; });
</script>
