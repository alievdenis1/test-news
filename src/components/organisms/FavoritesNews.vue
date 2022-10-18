<template>
  <div class="container my-24 px-6 mx-auto">
    <section class="mb-32 text-gray-800">
      <h2 class="text-3xl font-bold mb-12 text-center">Избранные</h2>
      <div class="grid lg:grid-cols-3 gap-6">
        <div class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
             style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src="https://suiteness.imgix.net/no-image.jpg?auto=compress,format&crop=edges&fit=min" class="w-full" alt=""/>
          <a href="#">
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden
            bg-fixed">
              <div class="flex justify-start items-end h-full">
                <div class="text-white m-6">
                  <h5 class="font-bold text-lg mb-3">I miss the sun</h5>
                  <p>
                    <small>Published <u>13.01.2022</u> by Anna Maria Doe</small>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
