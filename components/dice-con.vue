<script setup lang="ts">
let diceEl = ref<HTMLDivElement>();
let animatedTo = ref();
let animate = (side: number) => {
  if (diceEl.value) {
    if (animatedTo.value !== undefined) {
      diceEl.value.classList.remove(`to-side-${animatedTo.value}`);
      applyAnimation(`back-to-top`);
    }
    animatedTo.value = side;

    applyAnimation(`to-side-${side}`);
  }
};
let applyAnimation = (animationName: string) => {
  if (diceEl.value) {
    diceEl.value.style.animation = "none";

    setTimeout(() => {
      if (diceEl.value) {
        diceEl.value.style.animation = "";
        diceEl.value.classList.add(animationName);
        diceEl.value.addEventListener(
          "animationend",
          e => {
            console.log(e);
          },
          {once: true}
        );
      }
    }, 10);
  }
};
defineExpose({animate});
</script>
<template>
  <div ref="diceEl" class="dice-con relative transition-all size-32">
    <div class="rectangle one"><SideNumber> 1 </SideNumber></div>
    <div class="rectangle two"><SideNumber> 2 </SideNumber></div>
    <div class="rectangle three"><SideNumber> 3 </SideNumber></div>
    <div class="rectangle four"><SideNumber> 4 </SideNumber></div>
    <div class="rectangle five"><SideNumber class="translate-y-1"> 5 </SideNumber></div>
    <div class="six pentagon"><SideNumber class="!text-black translate-y-2"> 6 </SideNumber></div>
    <div class="seven pentagon"><SideNumber class="translate-y-[10px] !text-black"> 7 </SideNumber></div>
  </div>
</template>
