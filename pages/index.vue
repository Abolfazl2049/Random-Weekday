<script setup lang="ts">
let diceCount = ref(2);
let dice = ref();
let rollDice = () => {
  let day = new Date().getDay();
  day = 0;
  for (let i = 0; i < diceCount.value; i++) {
    let side = Math.round(Math.random() * (6 - day) + day);
    dice.value[i].animate(side + 1);
  }
};
</script>
<template>
  <div class="h-screen flex items-center justify-center bg-teal-900">
    <div class="relative z-10 flex gap-8 left-[250px] bottom-[300px]"><DiceCon ref="dice" v-for="i in diceCount" /></div>
    <Floor />
    <div class="absolute p-4 z-10 bottom-0 right-5 flex items-center gap-4">
      <DiceCounter v-model="diceCount" />
      <button @click="rollDice" class="bg-rose-700 p-4 rounded-lg">Roll Dice</button>
    </div>
  </div>
</template>
