<script setup lang="ts">
let diceEl = ref<HTMLDivElement>();
let animatedTo = ref();
let animate = (side: number) => {
  if (diceEl.value) {
    if (animatedTo.value !== undefined) diceEl.value.classList.remove(`to-side-${animatedTo.value}`);
    animatedTo.value = side;

    diceEl.value.style.animation = "none";
    setTimeout(() => {
      if (diceEl.value) {
        diceEl.value.style.animation = "";
        diceEl.value.classList.add(`to-side-${side}`);
      }
    }, 10);
  }
};
defineExpose({animate});
</script>
<template>
  <div ref="diceEl" class="dice-con relative transition-all size-32 border border-red-600">
    <div class="side one"><SideNumber> 1 </SideNumber></div>
    <div class="side two"><SideNumber> 2 </SideNumber></div>
    <div class="side three"><SideNumber> 3 </SideNumber></div>
    <div class="side four"><SideNumber> 4 </SideNumber></div>
    <div class="side five"><SideNumber class="translate-y-1"> 5 </SideNumber></div>
    <div class="six"><SideNumber class="!text-black translate-y-2"> 6 </SideNumber></div>
    <div class="seven"><SideNumber class="translate-y-[10px] !text-black"> 7 </SideNumber></div>
  </div>
</template>
