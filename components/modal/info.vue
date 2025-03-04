<script setup lang="ts">
const show = defineModel({default: false});
</script>
<template>
  <div>
    <div class="fixed top-4 left-5">
      <img src="/img/info.svg" class="cursor-pointer" @click="show = true" />
    </div>
    <ModalBase v-model="show" class="size-[400px] flex-center text-center">
      <p>This give you x count of random day in week</p>
    </ModalBase>
  </div>
</template>
