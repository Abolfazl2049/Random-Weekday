<script setup lang="ts">
let show = ref();
let dragging = false;
let delta = {
  x: 0,
  y: 0
};

function initDragRotate(e) {
  dragging = true;
  delta = {
    x: e.pageX,
    y: e.pageY
  };
}

function dragRotate(e) {
  let el = document.getElementById("test-dice");
  if (!dragging) {
    return;
  }

  delta.x = (e.pageX / window.innerWidth) * 360;
  delta.y = (e.pageY / window.innerHeight) * 360;

  let rotateParam = "";
  rotateParam += " rotate" + "Y" + "(" + delta.x + "deg)";
  rotateParam += " rotate" + "X" + "(" + delta.y + "deg)";
  el.style.transform = rotateParam;
}

function endDragRotate() {
  if (!dragging) {
    return;
  }

  dragging = false;
}
onMounted(() => {
  show.value = true;
});
</script>
<template>
  <div @mousedown="initDragRotate" @mousemove="dragRotate" @mouseup="endDragRotate">
    <ModalBase v-model="show" class="!bg-black/70 !size-[80%] flex flex-col items-center justify-between !p-6">
      <p class="text-xl text-center select-none !text-white z-20">Touch to rotate the Dice</p>
      <div class="scale-[2.5]">
        <DiceCon id="test-dice" class="" />
      </div>
      <button class="bg-rose-600 p-3 text-white rounded-lg select-none" @click="show = false">Begin Rolling</button>
    </ModalBase>
  </div>
</template>
