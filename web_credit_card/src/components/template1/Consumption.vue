<template>
  <div>
    <!--消費明細網頁排版-->
    <table class="t1_border-shadow text-sm mt-6 hidden md:block">
      <th colspan="7" class="text-lg font-normal pl-5 pt-3 pb-4 text-left">消費明細</th>
      <tr>
        <th v-for="(item, index) in info.consumption" :key="index + 'A'" class="h-9 text-center pb-2 text-gray-500 font-normal">
          {{ item.content }}
        </th>
      </tr>
      <tr class="border-b border-gray-200" v-for="(item, index) in info.detailPink" :key="index + 'B'">
        <td class="w-16 py-2 text-center t1_bg-pink">{{ item.date }}</td>
        <td class="w-20 py-2 text-center t1_bg-pink">{{ item.valueDate }}</td>
        <td class="w-20 py-2 text-center t1_bg-pink">
          {{ item.description }}
        </td>
        <td class="w-20 py-2 text-center t1_bg-pink">{{ item.TWD }}</td>
        <td class="w-20 py-2 text-center t1_bg-pink">{{ item.creditNum }}</td>
        <td class="w-20 py-2 text-center t1_bg-pink">{{ item.country }}</td>
        <td class="w-20 py-2 text-center t1_bg-pink">{{ item.currency }}</td>
        <td class="w-20 py-2 text-center t1_bg-pink">{{ item.foreign }}</td>
        <td class="w-20 py-2 text-center t1_bg-pink">{{ item.convert }}</td>
      </tr>
      <tr class="border-b border-gray-200" v-for="(item, index) in info.firstDetail" :key="index + 'C'">
        <td class="w-16 py-2 text-center">{{ item.date }}</td>
        <td class="w-20 py-2 text-center">{{ item.valueDate }}</td>
        <td class="w-52 py-2 text-center">{{ item.description }}</td>
        <td class="w-28 py-2 text-center">{{ item.TWD }}</td>
        <td class="w-28 py-2 text-center">{{ item.creditNum }}</td>
        <td class="w-20 py-2 text-center">{{ item.country }}</td>
        <td class="w-24 py-2 text-center">{{ item.currency }}</td>
        <td class="w-24 py-2 text-center">{{ item.foreign }}</td>
        <td class="w-24 py-2 text-center">{{ item.convert }}</td>
      </tr>
      <tr class="border-b border-gray-200" v-for="(item, index) in info.detailBlue" :key="index + 'D'">
        <td class="w-16 py-2 text-center t1_bg-blue">{{ item.date }}</td>
        <td class="w-20 py-2 text-center t1_bg-blue">
          {{ item.valueDate }}
        </td>
        <td class="w-52 py-2 text-center t1_bg-blue">
          {{ item.description }}
        </td>
        <td class="w-28 py-2 text-center t1_bg-blue">{{ item.TWD }}</td>
        <td class="w-28 py-2 text-center t1_bg-blue">{{ item.creditNum }}</td>
        <td class="w-20 py-2 text-center t1_bg-blue">{{ item.country }}</td>
        <td class="w-24 py-2 text-center t1_bg-blue">{{ item.currency }}</td>
        <td class="w-24 py-2 text-center t1_bg-blue">{{ item.foreign }}</td>
        <td class="w-24 py-2 text-center t1_bg-blue">{{ item.convert }}</td>
      </tr>
      <tr class="border-b border-gray-200" v-for="(item, index) in info.detail" :key="index + 'E'">
        <td class="w-16 py-2 text-center" :style="item.bgColor ? 'background-color: #F5F0F0' : ''">
          {{ item.date }}
        </td>
        <td class="w-20 py-2 text-center" :style="item.bgColor ? 'background-color: #F5F0F0' : ''">
          {{ item.valueDate }}
        </td>
        <td class="w-52 py-2 text-center" :style="item.bgColor ? 'background-color: #F5F0F0' : ''">
          {{ item.description }}
        </td>
        <td class="w-28 py-2 text-center" :style="item.bgColor ? 'background-color: #F5F0F0' : ''">
          {{ item.TWD }}
        </td>
        <td class="w-28 py-2 text-center" :style="item.bgColor ? 'background-color: #F5F0F0' : ''">
          {{ item.creditNum }}
        </td>
        <td class="w-20 py-2 text-center" :style="item.bgColor ? 'background-color: #F5F0F0' : ''">
          {{ item.country }}
        </td>
        <td class="w-24 py-2 text-center" :style="item.bgColor ? 'background-color: #F5F0F0' : ''">
          {{ item.currency }}
        </td>
        <td class="w-24 py-2 text-center" :style="item.bgColor ? 'background-color: #F5F0F0' : ''">
          {{ item.foreign }}
        </td>
        <td class="w-24 py-2 text-center" :style="item.bgColor ? 'background-color: #F5F0F0' : ''">
          {{ item.convert }}
        </td>
      </tr>

      <tr class="border-b border-gray-200">
        <td class="w-16 h-20 text-center"></td>
        <td class="w-20 h-20 text-center"></td>
        <td class="w-52 h-20 text-center"></td>
        <td class="w-28 h-20 text-center"></td>
        <td class="w-28 h-20 text-blue-600 text-center">本期消費：</td>
        <td class="w-20 h-20 text-left font-bold">10,166</td>
        <td class="w-24 h-20 text-center"></td>
        <td class="w-28 h-20 text-center text-blue-600">本期應繳總額：</td>
        <td class="w-20 h-20 text-left font-bold">10,166</td>
      </tr>
    </table>
  </div>
</template>

<script>
import info from "@/assets/template1/Consumption.json";

export default {
  data() {
    return {
      info,
    };
  },
};
</script>
