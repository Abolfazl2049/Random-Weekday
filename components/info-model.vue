<script setup lang="ts">
const show = defineModel({default: false});
</script>
<template>
  <div>
    <div class="fixed top-4 left-5">
      <img src="/img/info.svg" class="cursor-pointer" @click="show = true" />
    </div>
    <div v-if="show" @click.self="show = false" class="fixed inset-0 bg-black/25 flex-center z-10">
      <div class="size-[400px] border text-center text-white flex-center bg-black">
        <p>This give you x count of random day in week</p>
      </div>
    </div>
  </div>
</template>
