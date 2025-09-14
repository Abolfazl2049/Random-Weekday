<script setup lang="ts">
const show = defineModel({default: false});

// Wishlist items (same as in index.vue)
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
</script>

<template>
  <ModalBase
    v-model="show"
    class="!size-[600px] !max-h-[80vh] overflow-auto">
    <div
      dir="rtl"
      class="text-center">
      <h2 class="text-2xl font-bold mb-4 text-teal-800">🎁 لیست آرزوها</h2>
      <p class="text-gray-600 mb-6">تبریک! شما کد مخفی را پیدا کردید!</p>

      <div class="text-right space-y-3">
        <div
          v-for="(item, index) in wishlist"
          :key="index"
          class="p-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-r-4 border-teal-500 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between">
            <span class="text-gray-700">{{ item }}</span>
            <span class="text-teal-600 font-bold">{{ index + 1 }}</span>
          </div>
        </div>
      </div>

      <div class="mt-6 pt-4 border-t border-gray-200">
        <button
          @click="show = false"
          class="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors">
          بستن
        </button>
      </div>
    </div>
  </ModalBase>
</template>
