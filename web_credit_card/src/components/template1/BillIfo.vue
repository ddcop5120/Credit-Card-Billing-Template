<template>
  <div class="flex flex-col">
    <div class="flex flex-row mt-5">
      <table class="w-full text-sm mt-6 t1_border-shadow hidden md:block">
        <th colspan="7" class="text-lg font-normal pl-5 pt-3 pb-4 text-left">信用卡回饋</th>
        <tr class="border-b border-gray-200">
          <td class="w-28"></td>
          <td class="t1_billInfo-td">上期累積</td>
          <td class="t1_billInfo-td">
            本期新增/扣除
            <img class="inline" src="@/assets/template1/images/iconPlus.png" alt="" />
          </td>
          <td class="t1_billInfo-td">
            本期贈送
            <img class="inline" src="@/assets/template1/images/iconPlus.png" alt="" />
          </td>
          <td class="t1_billInfo-td">
            本期使用紅利
            <img class="inline" src="@/assets/template1/images/iconMinus.png" alt="" />
          </td>
          <td class="t1_billInfo-td">
            本期結額
            <img class="inline" src="@/assets/template1/images/iconEqual.png" alt="" />
          </td>
        </tr>
        <tr v-for="(item, index) in mydata.creditFeeback" :key="index + 'A'">
          <td class="w-28 h-9 text-gray-500 text-center">
            {{ item.bonus }}
          </td>
          <td class="w-40 h-9 text-center">{{ item.accumulation }}</td>
          <td class="w-40 h-9 text-center">{{ item.newAdd }}</td>
          <td class="w-40 h-9 text-center">{{ item.give }}</td>
          <td class="w-40 h-9 text-center">{{ item.bonusUsed }}</td>
          <td class="w-40 h-9 text-center">{{ item.amount }}</td>
        </tr>
      </table>
    </div>
    <table class="text-sm mt-6 t1_border-shadow hidden md:block">
      <th colspan="7" class="text-lg font-normal pl-5 pt-3 pb-4 text-left">帳務資訊</th>
      <tr class="border-b border-gray-200">
        <td class="t1_billInfo-td">幣別</td>
        <td class="t1_billInfo-td">上期帳單總額</td>
        <td class="t1_billInfo-td">繳款金額</td>
        <td class="t1_billInfo-td">本期帳款</td>
        <td class="t1_billInfo-td">分期預借金額</td>
        <td class="t1_billInfo-td">利息</td>
        <td class="t1_billInfo-td">本期應繳額度</td>
      </tr>
      <tr class="border-b border-gray-200" v-for="(item, index) in mydata.accountInfo" :key="index + 'B'">
        <td class="w-40 h-9 text-center">{{ item.title }}</td>
        <td class="w-40 h-9 text-center">{{ item.lastTotal }}</td>
        <td class="w-40 h-9 text-center">{{ item.cost }}</td>
        <td class="w-40 h-9 text-center">{{ item.account }}</td>
        <td class="w-40 h-9 text-center">{{ item.installments }}</td>
        <td class="w-40 h-9 text-center">{{ item.interest }}</td>
        <td class="w-40 h-9 text-center">{{ item.payable }}</td>
      </tr>
    </table>
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
