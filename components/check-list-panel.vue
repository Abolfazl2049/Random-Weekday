<script setup lang="ts">
let shamsi = defineModel("shamsi");
let removePassedDays = defineModel("remove-passed-days");
let onChange = (name: string, value: boolean) => {
  localStorage.setItem(name, `${value}`);
};
let getStorageValue = (name: string) => {
  return localStorage.getItem(name) ?? false;
};
onMounted(() => {
  shamsi.value = getStorageValue("shamsi");
  removePassedDays.value = getStorageValue("remove-passed-days");
});
</script>
<template>
  <div class="bg-white flex flex-col p-2 gap-2 rounded-lg">
    <label for="shamsi">
      <input name="shamsi" type="checkbox" v-model="shamsi" @change="x => onChange('shamsi', x.target?.checked)" />
      Shamsi Date
    </label>
    <label for="remove-passed-days">
      <input name="remove-passed-days" type="checkbox" v-model="removePassedDays" @change="x => onChange('remove-passed-days', x.target?.checked)" />
      Remove Passed weekday
    </label>
  </div>
</template>
