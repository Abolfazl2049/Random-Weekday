<script setup lang="ts">
let diceEl = ref<HTMLDivElement>();
let animate = (diceS: number) => {
  diceEl.value?.classList.add(`to-side-${diceS}`);
};
defineExpose(animate);
</script>
<template>
  <div ref="diceEl" class="dice-con z-10 relative transition-all">
    <div class="side one"><SideNumber> 1 </SideNumber></div>
    <div class="side two"><SideNumber> 2 </SideNumber></div>
    <div class="side three"><SideNumber> 3 </SideNumber></div>
    <div class="side four"><SideNumber> 4 </SideNumber></div>
    <div class="side five"><SideNumber class="translate-y-1"> 5 </SideNumber></div>
    <div class="six"><SideNumber class="!text-black translate-y-2"> 6 </SideNumber></div>
    <div class="seven"><SideNumber class="translate-y-[10px] !text-black"> 7 </SideNumber></div>
  </div>
</template>
