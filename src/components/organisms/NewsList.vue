<template>
  <div class="container my-24 w-full px-6 mx-auto">
    <section class="mb-32 text-gray-800">
      <h2 class="text-3xl font-bold mb-12 text-center">Последние новости</h2>

      <div class="grid lg:grid-cols-4 gap-6">

        <div v-for="(newsItem, index) in news" :key="index"
             class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
             style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="light"
        >
          <img src="https://suiteness.imgix.net/no-image.jpg?auto=compress,format&crop=edges&fit=min" class="w-full" alt=""/>
          <router-link :to="`/news/${newsItem.id}`">
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden
            bg-fixed">
              <div class="flex justify-start items-end h-full">
                <div class="text-white m-6">
                  <h5 class="font-bold text-lg mb-3">{{ newsItem.name }}</h5>
                  <p>
                    <small>Дата: <u>{{ newsItem.date }}</u> </small><br>
                    <small>Автор: <u>{{ newsItem.authorName }}</u> </small><br>
                    <small>Рейтинг: <u>{{ newsItem.raiting }}</u> </small>
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>

      </div>

    </section>
  </div>
</template>

<script setup>
import api from '@/api';
import { ref } from 'vue';

const news = ref(null);

api.getNews().then((res) => { news.value = res; });
api.getDetailedNew(1).then((res) => { console.log(res); });

</script>
