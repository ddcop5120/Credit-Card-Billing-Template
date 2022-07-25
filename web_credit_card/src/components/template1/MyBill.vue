<template>
  <div>
    <div class="mt-7 m-auto w-full" :key="index" v-for="(item, index) in mydata.personal">
      <p class="md:text-sm pb-4 text-xs">親愛的{{ item.name }} 卡友， 您好！</p>
      <p class="md:text-sm text-xs">以下為您{{ item.year }}年{{ item.month }}月份的信用卡電子帳單:</p>
    </div>
    <div class="mt-3 md:flex md:flex-row md:items-center">
      <div class="w-full md:flex flex-row md:flex-1">
        <div class="w-full mr-6 t1_border-shadow rounded" :key="index + 'A'" v-for="(item, index) in mydata.personal">
          <h2 id="emydata" class="pl-4 pt-5">{{ item.month }}月份的信用卡電子帳單</h2>
          <div class="flex flex-row justify-between">
            <ul class="mt-7 pl-4">
              <li
                class="mb-5 md:text-sm text-gray-500 text-xs"
                :key="index + 'B'"
                v-for="(item, index) in mydata.cardInfo"
                :style="item.amount ? 'color:#FF6464' : ' color:#6b7280'"
              >
                {{ item.title }}
              </li>
              <li class="mb-5 md:text-sm font-bold text-blue-600 text-xs" :key="index + 'C'" v-for="(item, index) in mydata.cardInfo">
                {{ item.finalTitle }}
              </li>
            </ul>
            <ul class="mr-2 mt-7 pr-2">
              <li
                class="mb-5 md:text-sm text-gray-500 text-xs"
                :key="index + 'D'"
                v-for="(item, index) in mydata.cardInfo"
                :style="item.amount ? 'color:#FF6464' : ' color:#000000'"
              >
                {{ item.content }}
              </li>
              <li class="mb-5 md:text-sm font-bold text-black text-xs" :key="index + 'E'" v-for="(item, index) in mydata.cardInfo">
                {{ item.finalContent }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--信用額度明細-->
      <div class="mt-3 flex flex-col items-center flex-1">
        <div class="w-full pt-5 t1_border-shadow rounded">
          <h2 class="pl-4">信用額度</h2>
          <div class="flex flex-row justify-between">
            <ul class="mt-7 pl-4">
              <li class="mb-5 text-sm text-gray-500" :key="index + 'F'" v-for="(item, index) in mydata.creditQuota">
                {{ item.title }}
              </li>
            </ul>
            <ul class="mr-2 mt-7 pr-2">
              <li class="mb-5 text-sm" :key="index + 'G'" v-for="(item, index) in mydata.creditQuota">
                {{ item.content }}
              </li>
            </ul>
          </div>
        </div>
        <!--QR Code-->
        <img class="mt-6 m-auto" src="@/assets/template1/images/qrCode.png" alt="qrCode" />
      </div>
    </div>
  </div>
</template>

<script>
import mydata from "@/assets/template1/billInfo.json";

export default {
  data() {
    return { mydata };
  },
};
</script>
