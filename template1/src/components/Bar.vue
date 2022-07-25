<template>
  <div id="bar" class="w-full sm:text-xs">
    <nav class="flex justify-between items-center pt-4 pb-4 t1_border-shadow">
      <div class="hidden sm:block">
        <label for="burger" class="sm:ml-4">☰</label>
        <input
          type="checkbox"
          id="burger"
          class="hidden"
          v-model="showTemplate"
        />
        <div class="absolute mt-4 bg-white border p-4" v-if="showTemplate">
          <img
            class=""
            src="@/assets/template1/images/belStarLogo.png"
            alt="bel-star logo"
          />
          <div class="mt-4">
            <p class="text-blue-600">目錄</p>
            <ul class="m-6">
              <li class="pb-6"><a href="#eBill">電子帳單</a></li>
              <li class="pb-6"><a href="#accountingInfo">帳務資訊</a></li>
              <li class="pb-6"><a href="#creditQuota">信用額度</a></li>
              <li class="pb-6"><a href="#creditBonus">信用卡回饋</a></li>
              <li class="pb-6"><a href="#consumption">消費明細</a></li>
              <li class="pb-6"><a href="#costData">消費數據</a></li>
              <li class="pb-6"><a href="#new">最新消息/活動</a></li>
            </ul>
          </div>
          <div class="mt-4">
            <p class="text-blue-600">其他</p>
            <ul class="m-6 transition-all">
              <li class="pb-6">線上櫃檯</li>
              <li class="pb-6">信用卡各項費用說明</li>
              <li class="pb-6">退訂電子報</li>
              <li class="pb-6">優惠</li>
              <li>聯絡我們</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        class="ml-2 sm:hidden"
        src="@/assets/template1/images/belStarLogo.png"
        alt="bel-star logo"
      />
      <ul class="flex items-center mr-12 sm:hidden">
        <li>
          <img class="mr-16" src="@/assets/template1/images/phone.png" alt="" />
        </li>
        <li class="mr-7 text-gray-400">template 2</li>
        <li class="text-gray-400">template 3</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    showTemplate: false,
  }),
};
</script>