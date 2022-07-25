<template>
  <div>
    <!--消費明細網頁排版-->
    <table class="t1_border-shadow text-sm mt-6 sm:hidden">
      <th colspan="7" class="text-lg font-normal pl-5 pt-3 pb-4 text-left">
        消費明細
      </th>
      <tr>
        <th
          v-for="(item, index) in info.consumption"
          :key="index + 'A'"
          class="h-9 text-center pb-2 text-gray-500 font-normal"
        >
          {{ item.content }}
        </th>
      </tr>
      <tr
        class="border-b border-gray-200"
        v-for="(item, index) in info.detailPink"
        :key="index + 'B'"
      >
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
      <tr
        class="border-b border-gray-200"
        v-for="(item, index) in info.firstDetail"
        :key="index + 'C'"
      >
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
      <tr
        class="border-b border-gray-200"
        v-for="(item, index) in info.detailBlue"
        :key="index + 'D'"
      >
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
      <tr
        class="border-b border-gray-200"
        v-for="(item, index) in info.detail"
        :key="index + 'E'"
      >
        <td
          class="w-16 py-2 text-center"
          :style="item.bgColor ? 'background-color: #F5F0F0' : ''"
        >
          {{ item.date }}
        </td>
        <td
          class="w-20 py-2 text-center"
          :style="item.bgColor ? 'background-color: #F5F0F0' : ''"
        >
          {{ item.valueDate }}
        </td>
        <td
          class="w-52 py-2 text-center"
          :style="item.bgColor ? 'background-color: #F5F0F0' : ''"
        >
          {{ item.description }}
        </td>
        <td
          class="w-28 py-2 text-center"
          :style="item.bgColor ? 'background-color: #F5F0F0' : ''"
        >
          {{ item.TWD }}
        </td>
        <td
          class="w-28 py-2 text-center"
          :style="item.bgColor ? 'background-color: #F5F0F0' : ''"
        >
          {{ item.creditNum }}
        </td>
        <td
          class="w-20 py-2 text-center"
          :style="item.bgColor ? 'background-color: #F5F0F0' : ''"
        >
          {{ item.country }}
        </td>
        <td
          class="w-24 py-2 text-center"
          :style="item.bgColor ? 'background-color: #F5F0F0' : ''"
        >
          {{ item.currency }}
        </td>
        <td
          class="w-24 py-2 text-center"
          :style="item.bgColor ? 'background-color: #F5F0F0' : ''"
        >
          {{ item.foreign }}
        </td>
        <td
          class="w-24 py-2 text-center"
          :style="item.bgColor ? 'background-color: #F5F0F0' : ''"
        >
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
    <!--消費明細手機排版-->
    <!--排1-->
    <div class="hidden border border-gray-200 rounded sm:block">
      <div class="flex flex-col">
        <div class="flex flex-row border-b border-gray-200">
          <p class="text-sm w-48 ml-4 mr-8 mt-3.5 h-16">上期帳單總額</p>
          <p class="w-28 text-xs text-center mt-8">2,000</p>
          <input id="show" type="checkbox" v-model="showOne" class="hidden" />
          <label for="show" class="absolute right-6 mt-9">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.99984L10.59 0.589844L6 5.16984L1.41 0.589843L-6.16331e-08 1.99984L6 7.99984L12 1.99984Z"
                fill="#999999"
              />
            </svg>
          </label>
        </div>
        <div v-if="showOne">
          <table class="m-0 w-full">
            <tr>
              <th
                v-for="(item, index) in info.smConsumption"
                :key="index + 'A'"
                class="py-2 text-center text-gray-400 text-xs font-normal"
              >
                {{ item.content }}
              </th>
            </tr>
            <tr
              v-for="(item, index) in info.smdetail"
              :key="index + 'A'"
              class="py-2 text-center text-gray-400 text-xs font-normal"
            >
              <td>{{ item.cardNum }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.currency }}</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <!--排2-->
      <div class="flex flex-col">
        <div class="flex flex-row t1_bg-pink border-b border-gray-200">
          <div class="w-48 ml-4 mr-8 mt-3.5 h-16">
            <h2 class="text-sm">統一行動條碼繳款</h2>
            <div class="flex flex-row mt-2 pb-4">
              <p class="text-xs mr-1 text-gray-500">消費日</p>
              <p class="text-xs mr-8 text-gray-500">05/08</p>
              <p class="text-xs mr-1 text-gray-500">入帳日</p>
              <p class="text-xs text-gray-500">05/09</p>
            </div>
          </div>
          <p class="w-28 text-xs text-center mt-8 text-red-500">-2,000</p>
          <input
            id="showDivTwo"
            type="checkbox"
            v-model="showTwo"
            class="hidden"
          />
          <label for="showDivTwo" class="absolute right-6 mt-9">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.99984L10.59 0.589844L6 5.16984L1.41 0.589843L-6.16331e-08 1.99984L6 7.99984L12 1.99984Z"
                fill="#999999"
              />
            </svg>
          </label>
        </div>
        <div v-if="showTwo" class="t1_bg-pink">
          <table class="m-0 w-full">
            <tr>
              <th
                v-for="(item, index) in info.smConsumption"
                :key="index + 'B'"
                class="h-9 text-center text-gray-400 text-xs font-normal"
              >
                {{ item.content }}
              </th>
            </tr>
            <tr
              v-for="(item, index) in info.smdetail"
              :key="index + 'B'"
              class="h-9 text-center text-gray-400 text-xs font-normal"
            >
              <td>{{ item.cardNum }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.currency }}</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <!--排3-->
      <div class="flex flex-row items-center h-20">
        <p class="w-28 ml-32 text-xs text-center text-blue-600">繳款小計</p>
        <p class="w-28 text-xs text-center font-bold">-2,000</p>
      </div>
      <!--排4-->
      <div class="flex flex-col">
        <div class="flex flex-row t1_bg-pink border-b border-gray-200">
          <div class="w-48 ml-4 mr-8 mt-3.5 h-16">
            <p class="text-sm">東南旅行社</p>
            <div class="flex flex-row mt-2 pb-4">
              <p class="text-xs mr-1 text-gray-500">消費日</p>
              <p class="text-xs mr-8 text-gray-500">05/15</p>
              <p class="text-xs mr-1 text-gray-500">入帳日</p>
              <p class="text-xs text-gray-500">05/16</p>
            </div>
          </div>
          <p class="w-28 text-xs text-center mt-8 text-red-500">6,800</p>
          <input
            id="showDivThree"
            type="checkbox"
            v-model="showThree"
            class="hidden"
          />
          <label for="showDivThree" class="absolute right-6 mt-9">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.99984L10.59 0.589844L6 5.16984L1.41 0.589843L-6.16331e-08 1.99984L6 7.99984L12 1.99984Z"
                fill="#999999"
              />
            </svg>
          </label>
        </div>
        <div v-if="showThree" class="t1_bg-pink">
          <table class="m-0 w-full">
            <tr>
              <th
                v-for="(item, index) in info.smConsumption"
                :key="index + 'B'"
                class="h-9 text-center text-gray-400 text-xs font-normal"
              >
                {{ item.content }}
              </th>
            </tr>
            <tr
              v-for="(item, index) in info.smdetail"
              :key="index + 'B'"
              class="h-9 text-center text-gray-400 text-xs font-normal"
            >
              <td>{{ item.cardNum }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.currency }}</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <!--排5-->
      <div class="flex flex-col">
        <div class="flex flex-row border-b border-gray-200">
          <div class="w-48 ml-4 mr-8 mt-3.5 h-16">
            <p class="text-sm">Mahalo加州廚房</p>
            <div class="flex flex-row mt-2 pb-4">
              <p class="text-xs mr-1 text-gray-500">消費日</p>
              <p class="text-xs mr-8 text-gray-500">05/16</p>
              <p class="text-xs mr-1 text-gray-500">入帳日</p>
              <p class="text-xs text-gray-500">05/17</p>
            </div>
          </div>
          <p class="w-28 text-xs text-center mt-8">1,178</p>
          <input
            id="showDivFour"
            type="checkbox"
            v-model="showFour"
            class="hidden"
          />
          <label for="showDivFour" class="absolute right-6 mt-9">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.99984L10.59 0.589844L6 5.16984L1.41 0.589843L-6.16331e-08 1.99984L6 7.99984L12 1.99984Z"
                fill="#999999"
              />
            </svg>
          </label>
        </div>
        <div v-if="showFour" class="">
          <table class="m-0 w-full">
            <tr>
              <th
                v-for="(item, index) in info.smConsumption"
                :key="index + 'B'"
                class="h-9 text-center text-gray-400 text-xs font-normal"
              >
                {{ item.content }}
              </th>
            </tr>
            <tr
              v-for="(item, index) in info.smdetail"
              :key="index + 'B'"
              class="h-9 text-center text-gray-400 text-xs font-normal"
            >
              <td>{{ item.cardNum }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.currency }}</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../assets/data/Consumption.json";

export default {
  data() {
    return {
      info,
      showOne: false,
      showTwo: false,
      showThree: false,
      showFour: false,
    };
  },
};
</script>
