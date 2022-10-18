<template>
  <div class="flex justify-between items-center py-4 px-16 bg-blue shadow">
    <a href="/" class="flex items-center font-bold w-60">
      <span class="mx-5 text-xl">Новости</span>
    </a>
  </div>
  <div class="flex h-full overflow-auto">
    <router-view/>
  </div>
</template>

<script setup>

</script>
