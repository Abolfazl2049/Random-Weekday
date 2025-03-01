<script setup lang="ts">
let diceCount = defineModel();
</script>
<template>
  <div class="flex bg-white p-4 rounded-lg">
    <div>Dice Count :</div>
    <select v-model="diceCount">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
      <option :value="4">4</option>
      <option :value="5">5</option>
      <option :value="6">6</option>
      <option :value="7">7</option>
    </select>
  </div>
</template>
