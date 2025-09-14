<script setup lang="ts">
let diceCount = ref(3);
let dice = ref();
let config = ref({
  removePassedDays: false,
  shamsi: false
});
const RIDDLE_QUESTION = "What is my truth ?";
const RIDDLE_ANSWER = "JOKE";

// Wishlist modal state
const showWishlistModal = ref(false);

// Track typed characters for JOKE detection
let typedChars = ref("");

const wishlist = [
  "موتور کاوازاکی Z 10000",
  "کیف پول از جنس چرم اسب (طلاکاری شده باشه عالیه)",
  "ماوس لمسی مارک ریزر حتما اصل باشه !",
  "ایفون ۱۷ پرو ایکس مکس اس (۲۰۲۶ مدل باشه)",
  "وام ۲۰۰ میلویونی -۱۰ درصد (اگه بلا عوض باشه که قربون دستت)",
  "سیستم گیمینگ RTX5090",
  "استیم دک یا نینتندو سوییچ ۲",
  "گبفت کارت 269 دلاری استیم (کمتر راضی نیستم)",
  "پنکه ایستاده",
  "یک سال بیمه (۳۰ روزه کامل )",
  "شطرنج از جنس چوب بلوط روس اصل یا تخته نرد از جنس همون چوب",
  "قاب گوشی از جنس تایتانیوم و چرم کار شده باشه",
  "خانه اجاره ای (یک سال اجاره اش پرداخت شده باشه)",
  "دوچرخه"
];
let rollDice = () => {
  let today = 0;

  if (config.value.removePassedDays) today = new Date().getDay();
  if (config.value.shamsi) today = today === 6 ? 0 : today + 1;

  for (let i = 0; i < diceCount.value; i++) {
    let randomRes = Math.floor(Math.random() * (6 - today + 1) + today);
    console.log(randomRes);
    dice.value[i].animate(randomRes);
  }
};

// Global keypress listener for JOKE detection
const handleKeyPress = (event: KeyboardEvent) => {
  // Only track alphabetic characters
  if (event.key.match(/[a-zA-Z]/)) {
    typedChars.value += event.key.toLowerCase();

    // Keep only the last 10 characters to avoid memory issues
    if (typedChars.value.length > 10) {
      typedChars.value = typedChars.value.slice(-10);
    }

    // Check if the last 4 characters spell "joke"
    if (typedChars.value.includes(RIDDLE_ANSWER.toLowerCase())) {
      showWishlistModal.value = true;
      typedChars.value = ""; // Reset after showing modal
    }
  }
};

onMounted(() => {
  console.log(RIDDLE_QUESTION);
  // Add global keypress listener
  document.addEventListener("keypress", handleKeyPress);
});

onUnmounted(() => {
  // Clean up event listener
  document.removeEventListener("keypress", handleKeyPress);
});
</script>
<template>
  <div class="h-screen flex items-center justify-center bg-teal-900">
    <div class="relative z-10 flex gap-8 left-[250px] bottom-[300px]">
      <DiceCon
        ref="dice"
        v-for="i in diceCount" />
    </div>
    <Floor />
    <div class="absolute p-4 z-10 bottom-0 items-end flex justify-between w-full">
      <CheckListPanel
        v-model:remove-passed-days="config.removePassedDays"
        v-model:shamsi="config.shamsi" />
      <div class="flex items-center gap-4">
        <DiceCounter v-model="diceCount" />
        <button
          @click="rollDice"
          class="bg-rose-700 p-4 rounded-lg">
          Roll Dice
        </button>
      </div>
    </div>
    <ModelInfo />
    <ModalWelcome />
    <ModalWishlist v-model="showWishlistModal" />
  </div>
</template>
