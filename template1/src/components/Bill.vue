<template>
  <div>
    <div class="mt-7" :key="index" v-for="(item, index) in Bill.personal">
      <p class="text-sm pb-4 sm:text-xs">親愛的{{ item.name }} 卡友， 您好！</p>
      <p class="text-sm sm:text-xs">
        以下為您{{ item.year }}年{{ item.month }}月份的信用卡電子帳單:
      </p>
    </div>
    <div class="mt-3 flex flex-row items-center sm:flex-col">
      <div class="flex flex-row flex-1 sm:w-full sm:order-2">
        <div
          class="w-full mr-6 pt-5 t1_border-shadow rounded sm:mr-0"
          :key="index + 'A'"
          v-for="(item, index) in Bill.personal"
        >
          <h2 id="eBill" class="pl-4 sm:text-sm">
            {{ item.month }}月份的信用卡電子帳單
          </h2>
          <div class="flex flex-row justify-between">
            <ul class="mt-7 pl-4">
              <li
                class="mb-5 text-sm text-gray-500 sm:text-xs"
                :key="index + 'B'"
                v-for="(item, index) in Bill.cardInfo"
                :style="item.amount ? 'color:#FF6464' : ' color:#6b7280'"
              >
                {{ item.title }}
              </li>
              <li
                class="mb-5 text-sm font-bold text-blue-600 sm:text-xs"
                :key="index + 'C'"
                v-for="(item, index) in Bill.cardInfo"
              >
                {{ item.finalTitle }}
              </li>
            </ul>
            <ul class="mr-2 mt-7 pr-2">
              <li
                class="mb-5 text-sm text-gray-500 sm:text-xs"
                :key="index + 'D'"
                v-for="(item, index) in Bill.cardInfo"
                :style="item.amount ? 'color:#FF6464' : ' color:#000000'"
              >
                {{ item.content }}
              </li>
              <li
                class="mb-5 text-sm font-bold text-black sm:text-xs"
                :key="index + 'E'"
                v-for="(item, index) in Bill.cardInfo"
              >
                {{ item.finalContent }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--信用額度明細-->
      <div class="mt-3 flex flex-col items-center flex-1 sm:hidden">
        <div class="w-full pt-5 t1_border-shadow rounded">
          <h2 class="pl-4">信用額度</h2>
          <div class="flex flex-row justify-between">
            <ul class="mt-7 pl-4">
              <li
                class="mb-5 text-sm text-gray-500"
                :key="index + 'F'"
                v-for="(item, index) in Bill.creditQuota"
              >
                {{ item.title }}
              </li>
            </ul>
            <ul class="mr-2 mt-7 pr-2">
              <li
                class="mb-5 text-sm"
                :key="index + 'G'"
                v-for="(item, index) in Bill.creditQuota"
              >
                {{ item.content }}
              </li>
            </ul>
          </div>
        </div>
        <!--QR Code-->
        <img
          class="mt-6"
          src="../src/assets/template1/images/qrCode.png"
          alt="qrCode"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Bill from "@/assets/template1/billInfo.json";

export default {
  data() {
    return { Bill };
  },
};
</script>