<script setup lang="ts">
const show = defineModel({default: false});
defineOptions({
  inheritAttrs: false
});
</script>
<template>
  <div v-if="show" @click.self="show = false" class="fixed inset-0 bg-black/25 flex-center z-10">
    <div class="size-[400px] bg-white p-4 rounded-xl" :class="$attrs.class">
      <slot />
    </div>
  </div>
</template>
