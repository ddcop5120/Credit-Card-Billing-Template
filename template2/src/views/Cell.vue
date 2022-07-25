<template>
  <div class="h-screen">
    <div class="m-auto pt-96">
      <div class="font-bold">點進來幹嘛？？</div>
      <div class="font-bold">你以為這是手機頁面嗎？很抱歉並不是！</div>
      <div class="font-bold flex justify-center">
        <div>點擊</div>
        <div
          class="hover:underline font-bold text-blue-700 cursor-pointer"
          @click="$router.back()"
        >
          這裡
        </div>
        <div>回去</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
