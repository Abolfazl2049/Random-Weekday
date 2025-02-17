<script setup lang="ts">
let el = ref<HTMLSpanElement>();
let styles = ref("");
let startMove = () => {
  let pEl = el.value?.parentElement;
  if (pEl) {
    pEl.onmousemove = move;
    setTimeout(() => {
      pEl.addEventListener("click", () => (pEl.onmousemove = null), {once: true});
    }, 500);
  }
};

let move = (e: MouseEvent) => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left - 10;
  let y = e.clientY - rect.top;
  if (x && y) {
    el.value.style.left = `${x}px`;
    el.value.style.top = `${y}px`;
    styles.value = `left-[${x}px] top-[${y}px]`;
  }
};
let copyStyles = () => {
  navigator.clipboard.writeText(styles.value);
};
</script>
<template>
  <span ref="el" class="dot" @click="startMove" @contextmenu="copyStyles" />
</template>
