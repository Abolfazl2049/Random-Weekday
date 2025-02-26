<script setup lang="ts">
let diceCount = ref(6);
let rollDice = () => {
  let day = new Date().getDay();
  for (let i of Array(2)) console.log(Math.round(Math.random() * (6 - day) + day));
};
</script>
<template>
  <div class="h-screen flex items-center justify-center bg-teal-900 relative">
    <div class="relative right-[550px]">
      <DiceCon v-for="i in diceCount" :id="'dice-' + i.toString()" :style="`left : ${i * 140}px`" />
    </div>
    <Floor />
    <div class="absolute p-4 z-10 bottom-0 right-5 flex items-center gap-4">
      <div class="flex bg-white p-4 rounded-lg">
        <div>Dice Count :</div>
        <select v-model="diceCount" class="">
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
          <option :value="4">4</option>
          <option :value="5">5</option>
          <option :value="6">6</option>
          <option :value="7">7</option>
        </select>
      </div>
      <button @click="rollDice" class="bg-rose-700 p-4 rounded-lg">Roll Dice</button>
    </div>
  </div>
</template>
