<template>
  <div id="templateOne" class="max-w-360">
    <bar></bar>
    <div class="w-2/3 mx-auto sm:w-full sm:ml-4 sm:pr-8">
      <!--五月份電子帳單明細-->
      <div class="content">
        <bill class="w-full"></bill>
      </div>
      <!--手機按鈕排版-->
      <div class="hidden sm:block sm:flex-col sm:mt-5">
        <button
          class="t1_button mr-6 text-blue-600 sm:w-full sm:mb-4 sm:text-xs"
        >
          網路銀行繳款
        </button>
        <button
          class="t1_button mr-6 text-blue-600 sm:w-full sm:mb-4 sm:text-xs"
        >
          網路ATM繳款
        </button>
        <button class="t1_button text-blue-600 sm:w-full sm:text-xs">
          其他繳款方式
        </button>
      </div>
      <!--圖1手機排版-->
      <img
        class="hidden sm:block sm:mt-5"
        src="../assets/images/bonus.png"
        alt=""
      />
      <!--QR Code手機排版-->
      <img
        class="hidden sm:block sm:mt-5 sm:mb-5 sm:pl-14 sm:pr-14"
        src="../assets/images/qrCode.png"
        alt="qrCode"
      />
      <!--帳務資訊手機排版-->
      <div id="accountingInfo" class="hidden t1_border-shadow mt-5 sm:block">
        <h2 class="pt-3 pl-4 text-sm">帳務資訊</h2>
        <div class="flex flex-row justify-between">
          <ul class="mt-5 pl-4">
            <li
              class="mb-5 text-sm text-gray-500 sm:text-xs"
              :key="index"
              v-for="(item, index) in bill.smAccountInfo"
            >
              {{ item.title }}
            </li>
          </ul>
          <ul class="mt-5 pr-4">
            <li
              class="mb-5 text-sm text-gray-500 sm:text-xs"
              :key="index"
              v-for="(item, index) in bill.smAccountInfo"
            >
              {{ item.content }}
            </li>
          </ul>
        </div>
      </div>
      <!--圖2手機排版-->
      <img
        class="hidden sm:block sm:mt-5"
        src="../assets/images/starCard.png"
        alt=""
      />
      <!--網頁廣告圖片-->
      <div class="w-full flex flex-col mt-6 sm:hidden">
        <div class="flex">
          <img
            class="mr-6 pb-6 flex-auto"
            src="../assets/images/easyOrder.png"
            alt="點餐好輕鬆"
          />
          <img class="pb-6 flex-auto" src="../assets/images/bonus.png" alt="" />
        </div>
        <div class="flex">
          <img
            class="mr-6 pb-6 flex-auto"
            src="../assets/images/christmas.png"
            alt="聖誕"
          />
          <img
            class="pb-6 flex-auto"
            src="../assets/images/starCard.png"
            alt=""
          />
        </div>
      </div>
      <!--網頁按鈕排版-->
      <div class="sm:hidden">
        <button class="t1_button mr-6 text-blue-600">網路銀行繳款</button>
        <button class="t1_button mr-6 text-blue-600">網路ATM繳款</button>
        <button class="t1_button text-blue-600 sm:w-full">其他繳款方式</button>
      </div>
      <!--信用額度手機排版-->
      <div
        id="creditQuota"
        class="
          hidden
          t1_border-shadow
          mt-3
          flex flex-col
          items-center
          flex-1
          mt-5
          sm:block
        "
      >
        <div class="w-full pt-5 t1_border-shadow rounded">
          <h2 class="pl-4 text-sm">信用額度</h2>
          <div class="flex flex-row justify-between">
            <ul class="mt-5 pl-4">
              <li
                class="mb-5 text-sm text-gray-500 sm:text-xs"
                :key="index"
                v-for="(item, index) in bill.creditQuota"
              >
                {{ item.title }}
              </li>
            </ul>
            <ul class="mr-2 mt-5 pr-2">
              <li
                class="mb-5 text-sm sm:text-xs"
                :key="index"
                v-for="(item, index) in bill.creditQuota"
              >
                {{ item.content }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--信用回饋手機排版-->
      <div
        id="creditBonus"
        class="hidden sm:block sm:flex sm:flex-row sm:mt-5 sm:h-60"
      >
        <div class="mr-4 pt-5 t1_border-shadow rounded sm:w-1/2">
          <h2 class="pl-4 text-sm">信用卡回饋</h2>
          <div class="flex flex-row justify-between">
            <ul class="mt-5 pl-4">
              <li
                class="mb-5 text-sm text-gray-500 sm:text-xs"
                :key="index"
                v-for="(item, index) in bill.smCreditFeeback"
              >
                {{ item.title }}
              </li>
            </ul>
            <ul class="mr-2 mt-5 pr-2">
              <li
                class="mb-5 text-sm sm:text-xs"
                :key="index"
                v-for="(item, index) in bill.smCreditFeeback"
              >
                {{ item.content }}
              </li>
            </ul>
          </div>
        </div>
        <img
          class="hidden sm:block sm:w-1/2"
          src="../assets/images/ad.png"
          alt="ad"
        />
      </div>
      <BillInfo></BillInfo>
      <!--消費明細表格-->
      <consumption id="consumption"></consumption>
      <!--曲線圖和廣告-->
      <div id="costData" class="mt-6 flex flex-row items-center sm:mt-5">
        <div class="t1_border-shadow mr-6 t1_flex-2 sm:w-full">
          <div class="flex flex-row justify-between">
            <h2 class="pt-6 ml-7 sm:hidden">2021消費趨勢圖</h2>
            <h2 class="hidden pt-6 ml-3 text-sm sm:block">2021消費數據</h2>
            <div class="flex flex-row mt-6 mr-5">
              <div
                class="
                  hidden
                  h-8
                  w-8
                  t1_border-shadow
                  rounded
                  mr-4
                  p-1
                  sm:block
                "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 5.0798C16.06 5.5198 18.48 7.9398 18.92 10.9998H21.95C21.48 6.2798 17.72 2.5198 13 2.0498V5.0798ZM18.92 12.9998C18.48 16.0598 16.06 18.4798 13 18.9198V21.9498C17.72 21.4798 21.48 17.7198 21.95 12.9998H18.92ZM11 18.9198C7.61 18.4298 5 15.5198 5 11.9998C5 8.4798 7.61 5.5698 11 5.0798V2.0498C5.95 2.5498 2 6.8098 2 11.9998C2 17.1898 5.95 21.4498 11 21.9498V18.9198Z"
                    fill="#9E8E8E"
                  />
                </svg>
              </div>
              <div
                class="
                  hidden
                  h-8
                  w-8
                  t1_border-shadow
                  rounded
                  mr-4
                  p-2
                  sm:block
                "
              >
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 13.4898L7.5 7.47976L11.5 11.4798L20 1.91977L18.59 0.509766L11.5 8.47976L7.5 4.47976L0 11.9898L1.5 13.4898Z"
                    fill="#9E8E8E"
                  />
                </svg>
              </div>
              <div class="flex flex-col sm:hidden">
                <label class="text-blue-600 t1_text-size">圖表</label>
                <select
                  class="
                    t1_select-arrow
                    w-24
                    h-8
                    pl-3
                    border border-gray-300
                    rounded
                    mr-5
                    text-gray-500 text-sm
                  "
                >
                  <option value="趨勢圖">趨勢圖</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="text-blue-600 t1_text-size sm:hidden"
                  >選擇年份</label
                >
                <label class="hidden text-blue-600 t1_text-size sm:block"
                  >年度</label
                >
                <select
                  class="
                    t1_select-arrow
                    w-24
                    h-8
                    pl-3
                    border border-gray-300
                    rounded
                    text-gray-500 text-sm
                    sm:hidden
                  "
                >
                  <option value="2021">2021</option>
                </select>
                <select
                  class="
                    hidden
                    pr-2
                    border-b border-gray-200
                    rounded
                    text-737373 text-sm
                    sm:block
                  "
                >
                  <option value="2021">2021</option>
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L4.70588 5L8 1" stroke="#797979" />
                  </svg>
                </select>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center">
            <p
              class="
                t1_text-vertical t1_text-size
                text-blue-600
                pr-2
                pl-4
                sm:hidden
              "
            >
              消費金額
            </p>
            <div class="w-600 h-80 mt-6 mr-10 sm:w-full sm:pl-4 sm:pr-4">
              <LineChart
                :data="monthChartData"
                :options="myoptions"
                class="h-full w-full pb-6"
              />
            </div>
          </div>
        </div>
        <img
          class="inline-block sm:hidden"
          src="../assets/images/ad.png"
          alt="ad"
        />
      </div>
      <!--廣告圖3.4手機版-->
      <img
        class="hidden pb-6 flex-1 sm:block sm:mt-5"
        src="../assets/images/christmas.png"
        alt="聖誕"
      />
      <img
        class="hidden mr-6 pb-6 flex-1 sm:block"
        src="../assets/images/easyOrder.png"
        alt="點餐好輕鬆"
      />
      <!--網頁版最新消息與活動-->
      <div class="t1_border-shadow mt-6 mb-9 sm:hidden">
        <h2 class="mb-8 pt-5 pl-7">最新消息/活動</h2>
        <div class="w-11/12 border-b border-gray-200 m-auto">
          <h3 class="font-bold">{{ news[0].title }}</h3>
          <p class="mt-5 t1_new-p">
            {{ news[0].content }}
          </p>
          <div class="t1_new-flex">
            <a class="text-blue-600 text-sm pr-1" href="#">更多</a>
            <svg
              width="4"
              height="5"
              viewBox="0 0 4 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 2.5L0.25 4.66506L0.25 0.334936L4 2.5Z"
                fill="#034EBD"
              />
            </svg>
          </div>
        </div>
        <div class="w-11/12 border-b border-gray-200 m-auto">
          <h3 class="font-bold mt-5">{{ news[1].title }}</h3>
          <p class="mt-5 t1_new-p">
            {{ news[1].content }}
          </p>
          <div class="t1_new-flex">
            <a class="text-blue-600 text-sm pr-1" href="#">更多</a>
            <svg
              width="4"
              height="5"
              viewBox="0 0 4 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 2.5L0.25 4.66506L0.25 0.334936L4 2.5Z"
                fill="#034EBD"
              />
            </svg>
          </div>
        </div>
        <div class="w-11/12 border-b border-gray-200 m-auto">
          <h3 class="font-bold mt-5">{{ news[2].title }}</h3>
          <p class="mt-5 t1_new-p">
            {{ news[2].content }}
          </p>
          <div class="t1_new-flex">
            <a class="text-blue-600 text-sm pr-1" href="#">更多</a>
            <svg
              width="4"
              height="5"
              viewBox="0 0 4 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 2.5L0.25 4.66506L0.25 0.334936L4 2.5Z"
                fill="#034EBD"
              />
            </svg>
          </div>
        </div>
        <!--頁碼-->
        <div class="flex flex-row items-center justify-center pt-5 pb-5">
          <svg
            width="9"
            height="11"
            viewBox="0 0 9 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.55868e-08 5.5L8.25 0.736859L8.25 10.2631L6.55868e-08 5.5Z"
              fill="#034EBD"
            />
          </svg>

          <p class="ml-2 mr-2 text-sm text-gray-500">1/3</p>
          <svg
            width="9"
            height="11"
            viewBox="0 0 9 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5.5L0.750001 10.2631L0.750001 0.73686L9 5.5Z"
              fill="#034EBD"
            />
          </svg>
        </div>
      </div>
      <!--手機版消息-->
      <h2 id="new" class="hidden text-sm sm:block">最新消息/活動</h2>
      <div class="t1_border-shadow mt-5 hidden sm:block">
        <div class="border-b border-gray-200 m-auto p-2">
          <div class="flex items-center justify-between">
            <img src="../assets/images/newsPic1.png" />
            <h3 class="text-gray-500 pl-4 pr-4 text-xs">{{ news[0].title }}</h3>
            <input
              id="showOne"
              type="checkbox"
              v-model="showTemplateOne"
              @click="arrowClick"
              class="hidden"
            />
            <label
              for="showOne"
              class="absolute right-6"
              :class="{ 't1_rotate-open': false, 't1_rotate-back': openDiv }"
            >
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z"
                  fill="#1A69DF"
                />
              </svg>
            </label>
          </div>
          <template v-if="showTemplateOne">
            <p class="mt-5 t1_new-p text-xs">
              {{ news[0].content }}
            </p>
          </template>
        </div>
        <div class="border-b border-gray-200 m-auto p-2">
          <div class="flex items-center">
            <img src="../assets/images/newsPic2.png" />
            <h3 class="text-gray-500 pl-4 pr-4 text-xs">{{ news[1].title }}</h3>
            <input
              id="showTwo"
              type="checkbox"
              v-model="showTemplateTwo"
              @click="arrowClickTwo"
              class="hidden"
            />
            <label
              for="showTwo"
              class="absolute right-6"
              :class="{ 't1_rotate-open': false, 't1_rotate-back': openDivTwo }"
            >
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z"
                  fill="#1A69DF"
                />
              </svg>
            </label>
          </div>
          <template v-if="showTemplateTwo">
            <p class="mt-5 t1_new-p text-xs">
              {{ news[1].content }}
            </p>
          </template>
        </div>
        <div class="border-b border-gray-200 m-auto p-2">
          <div class="flex items-center">
            <img src="../assets/images/newsPic2.png" />
            <h3 class="text-gray-500 pl-4 text-xs">{{ news[2].title }}</h3>
            <input
              id="showThree"
              type="checkbox"
              v-model="showTemplateThree"
              @click="arrowClickThree"
              class="hidden"
            />
            <label
              for="showThree"
              class="absolute right-6"
              :class="{
                't1_rotate-open': false,
                't1_rotate-back': openDivThree,
              }"
            >
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z"
                  fill="#1A69DF"
                />
              </svg>
            </label>
          </div>
          <template v-if="showTemplateThree">
            <p class="mt-5 t1_new-p text-xs">
              {{ news[2].content }}
            </p>
          </template>
        </div>
      </div>
    </div>
    <footer
      class="flex flex-col items-center pt-4 pb-4 t1_border-shadow sm:mt-5"
    >
      <div
        class="
          w-1/2
          flex
          justify-center
          m-auto
          border-b border-gray-200
          pb-6
          pt-6
          text-sm text-blue-600
          sm:hidden
        "
      >
        <a href="#" class="mr-14">線上櫃檯</a>
        <a href="#" class="mr-14">優惠</a>
        <a href="#" class="mr-14">信用卡各項費用說明</a>
        <a href="#" class="mr-14">聯絡我們</a>
        <a href="#" class="mr-14">退訂電子報</a>
      </div>
      <div class="flex mt-7 sm:flex-col sm:m-auto sm:text-xs">
        <div class="flex flex-col mr-7 sm:flex-row sm:m-auto">
          <p class="text-sm sm:mr-2 sm:text-xs">謹慎理財</p>
          <p class="text-sm sm:text-xs">信用無價</p>
        </div>
        <p class="text-sm text-gray-400 sm:p-4 sm:text-xs">
          信用卡暨預借現金之各級別循環信用年利率為6.75％~15％（依本行信用評分制度定期評估，循環利率之基準日為104年9月1日）。
          <br />預借現金手續費：預借現金金額乘以3％加上新臺幣150元或美元5元，其他相關費用係依本行網站公告。
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import json from "../assets/data/billInfo.json";
import bar from "@/components/Bar.vue";
import Bill from "../components/Bill.vue";
import BillInfo from "../components/BillIfo.vue";
import consumption from "../components/Consumption.vue";
import LineChart from "../components/Linechart.vue";

export default {
  name: "templateOne",
  components: {
    bar,
    Bill,
    BillInfo,
    consumption,
    LineChart,
  },
  data: () => ({
    news: json.newInfo,
    bill: json,
    showTemplateOne: false,
    showTemplateTwo: false,
    showTemplateThree: false,
    openDiv: false,
    openDivTwo: false,
    openDivThree: false,
    monthChartData: {
      labels: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      datasets: [
        {
          label: "Data 1",
          data: [0, 2000, 1000, 3000, 8000],
          backgroundColor: "rgba(255, 255, 255, .4)",
          borderColor: "#1663D6",
          borderWidth: 1,
          pointBackgroundColor: "rgba(171, 71, 188, 1)",
          tension: 0,
          drawBorder: true,
        },
      ],
    },
    myoptions: {
      legend: {
        display: false,
        usePointStyle: false,
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontSize: 10,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 10000,
              stepSize: 2000,
              fontSize: 10,
            },
          },
        ],
      },
    },
  }),
  methods: {
    arrowClick() {
      this.openDiv = !this.openDiv;
    },
    arrowClickTwo() {
      this.openDivTwo = !this.openDivTwo;
    },
    arrowClickThree() {
      this.openDivThree = !this.openDivThree;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#templateOne {
  font-family: Roboto;
}

h2 {
  font-size: 18px;
}

img {
  max-width: 100%;
  height: auto;
  display: inline-block;
}
</style>