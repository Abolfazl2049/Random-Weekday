<script setup lang="ts">
let diceEl = ref<HTMLDivElement>();
let animatedTo = ref();
defineProps({
  noNumber: Boolean
});
let animate = async (side: number) => {
  if (diceEl.value) {
    if (animatedTo.value !== undefined) {
      diceEl.value.classList.remove(`to-side-${animatedTo.value}`);

      await applyAnimation(`back-to-top`);
      diceEl.value?.classList.remove(`back-to-top`);
    }

    animatedTo.value = side;

    applyAnimation(`to-side-${side}`);
  }
};

let applyAnimation = async (animationName: string) => {
  if (diceEl.value) {
    diceEl.value.style.animation = "none";

    let r = await new Promise(resolve => {
      diceEl.value.style.animation = "";
      diceEl.value?.classList.add(animationName);
      diceEl.value?.addEventListener("animationend", () => resolve("answer"), {once: true});
    });

    return r;
  }
};
defineExpose({animate});
</script>
<template>
  <div ref="diceEl" class="dice-con relative size-32">
    <div class="rectangle zero"><SideNumber> 0 </SideNumber></div>
    <div class="rectangle one"><SideNumber> 1 </SideNumber></div>
    <div class="rectangle two"><SideNumber> 2 </SideNumber></div>
    <div class="rectangle three"><SideNumber> 3 </SideNumber></div>
    <div class="rectangle four"><SideNumber class="translate-y-1 -scale-x-100"> 4 </SideNumber></div>
    <div class="five pentagon"><SideNumber class="!text-black translate-y-2"> 5 </SideNumber></div>
    <div class="six pentagon"><SideNumber class="translate-y-[10px] !text-black -scale-x-100"> 6 </SideNumber></div>
  </div>
</template>
