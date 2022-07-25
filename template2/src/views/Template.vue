<template>
  <div id="template2">
    <!-- 解析度大(電腦) -->
    <div class="hidden md:block">
      <div class="w-auto">
        <bar></bar>
      </div>

      <div class="flex">
        <!-- 左頁面部分 -->
        <div class="bg-gray-100 flex justify-end laptop:w-8/12 wd-62">
          <div class="grid gap-14 bg-gray-100 px-6 pt-10 pb-6 w-960px">
            <div>
              <p class="text-title text-black text-left">消費數據</p>
              <div class="table-wh flex items-start pt-4 pb-11">
                <div class="mt-2">
                  <p class="text-xs text-right text-belstarFontBlue mr-20">
                    選擇年份
                  </p>
                  <div class="border-divider border-r-2">
                    <select
                      class="
                        pretty-select
                        border border-gray-300
                        rounded
                        w-24
                        h-8
                        pl-3
                        ml-102
                        mb-8
                      "
                      v-model="inputYear"
                      @change="changeBarChartData()"
                    >
                      <option
                        v-for="(item, index) in chartData.yearBarData"
                        :key="index"
                        :value="item.year"
                      >
                        {{ item.year }}
                      </option>
                    </select>

                    <bar-chart
                      class="mr-12"
                      style="width: 528px; height: 328px"
                      v-if="chart_loaded"
                      :chart-data="barChartDataLoaded"
                      :options="BarOptions"
                    ></bar-chart>
                  </div>
                </div>

                <doughnut-chart
                  class="mt-16 ml-7"
                  style="width: 280px; height: 320px"
                  v-if="chart_loaded"
                  :chart-data="doughnutChartDataLoaded"
                  :options="doughnutOptions"
                >
                </doughnut-chart>
              </div>
            </div>

            <div>
              <p class="text-title text-black text-left">消費明細</p>
              <div class="table-wh">
                <consumption-list :list="info"></consumption-list>
              </div>
            </div>

            <div>
              <p class="text-title text-black text-left">帳務資訊</p>
              <div class="flex gap-4">
                <div class="w-1/2">
                  <div class="table-wh">
                    <bill-info :bill="info"></bill-info>
                  </div>
                </div>

                <div class="w-1/2">
                  <a href="https://www.belstar.com.cn/product/suite/moban">
                    <img
                      class="
                        rounded-3xl
                        border border-transparent
                        object-fill
                        h-44
                        w-full
                      "
                      src="@/assets/img/enjoy.jpg"
                    />
                  </a>

                  <a
                    href="https://www.belstar.com.cn/product/suite/template-requirement"
                  >
                    <img
                      class="
                        rounded-3xl
                        border border-transparent
                        object-fill
                        h-44
                        w-full
                        mt-4
                      "
                      src="@/assets/img/festival.jpg"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p class="text-title text-black text-left">最新消息/活動</p>
              <div class="table-wh">
                <news :news="info"></news>
                <div class="flex justify-center items-center">
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
                  <span class="mx-2 my-10 text-sm">1/3</span>
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
            </div>
          </div>
        </div>
        <!-- 右頁面部分 -->
        <div class="bg-gray-200 flex justify-start laptop:w-4/12 wd-38">
          <div class="grid gap-6 bg-gray-200 px-6 pt-10 pb-6 w-480px">
            <div>
              <p class="text-title text-left">信用卡資訊</p>
              <div class="table-wh divide-y-2 divide-divider">
                <div class="text-xl font-bold text-left py-6 pl-7">
                  5月份的信用卡電子帳單
                </div>
                <div>
                  <credit-card-info :cardInfo="info"></credit-card-info>
                </div>
              </div>
            </div>

            <div class="table-wh">
              <div class="justify-center flex px-16 py-11">
                <div>
                  <img
                    class="mr-2.5 object-fill w-24 h-24"
                    src="@/assets/img/billConsumptionInstallment.jpg"
                  />
                </div>
                <div>
                  <img
                    class="ml-2.5 object-fill w-32 h-24"
                    src="@/assets/img/CashAdvance.jpg"
                  />
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://www.belstar.com.cn/product/platform/ssmo-central-on-premise"
              >
                <img
                  class="rounded-3xl border border-transparent"
                  src="@/assets/img/delivery.jpg"
                />
              </a>
            </div>

            <div class="table-wh divide-y-2 divide-divider">
              <div class="text-xl font-bold text-left py-5 pl-7">信用額度</div>
              <div>
                <credits :credits="info"></credits>
              </div>
            </div>

            <div class="table-wh divide-y-2 divide-divider">
              <div class="text-xl font-bold text-left py-5 pl-7">
                信用卡回饋
              </div>
              <div>
                <feedback :feedback="info"></feedback>
              </div>
            </div>

            <div class="">
              <a href="https://www.belstar.com.cn/product/suite/docgear">
                <img
                  class="rounded-3xl border border-transparent"
                  src="@/assets/img/giveBack.jpg"
              /></a>
            </div>

            <div class="">
              <a href="https://www.belstar.com.cn/cloud/ssmo-central-cloud">
                <img
                  class="rounded-3xl border border-transparent w-full"
                  src="@/assets/img/technology.jpg"
              /></a>
            </div>
          </div>
        </div>
      </div>

      <div class="grid row flex justify-center w-auto">
        <div class="row flex justify-center text-sm border-divider border-b-2">
          <a
            v-for="(item, index) in btBar"
            :key="index"
            class="text-belstarFontBlue mx-9 my-7"
            :href="item.net"
            >{{ item.title }}</a
          >
        </div>

        <div class="row flex justify-center text-sm py-7">
          <span class="text-left mr-8 flex">謹慎理財<br />信用無價</span>
          <span class="md:text-left text-belstarGray"
            >信用卡暨預借現金之各級別循環信用年利率為6.75％~15％（依本行信用評分制度定期評估，循環利率之基準日為104年9月1日）。<br />預借現金手續費：預借現金金額乘以3％加上新臺幣150元或美元5元，其他相關費用係依本行網站公告。</span
          >
        </div>
      </div>
    </div>

    <!-- 解析度小(手機) -->
    <div class="md:hidden">
      <div>
        <svg
          class="mb-4 ml-4 mt-4"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.833252 12H17.1376V10H0.833252V12ZM0.833252 7H17.1376V5H0.833252V7ZM0.833252 0V2H17.1376V0H0.833252Z"
            fill="#717171"
          />
        </svg>
      </div>

      <div class="grid gap-4 bg-gray-100 px-6 py-4">
        <div>
          <p class="font-bold text-left">信用卡資訊</p>
          <div class="table-wh divide-y-2 divide-divider">
            <p class="font-bold text-left text-lg py-6 pl-7">
              5月份的信用卡電子帳單
            </p>
            <div>
              <credit-card-info :cardInfo="info"></credit-card-info>
            </div>
          </div>
        </div>

        <div class="table-wh">
          <div class="justify-center flex px-8 py-7">
            <div>
              <img
                class="mr-2.5 object-fill w-24 h-24"
                src="@/assets/img/billConsumptionInstallment.jpg"
              />
            </div>
            <div>
              <img
                class="ml-2.5 object-fill w-32 h-24"
                src="@/assets/img/CashAdvance.jpg"
              />
            </div>
          </div>
        </div>

        <div>
          <a
            href="https://www.belstar.com.cn/product/platform/ssmo-central-on-premise"
          >
            <img
              class="
                rounded-3xl
                border border-transparent
                object-fill
                w-full
                h-40
              "
              src="@/assets/img/delivery.jpg"
            />
          </a>
        </div>

        <div class="table-wh divide-y-2 divide-divider">
          <p class="font-bold text-left text-lg py-6 pl-7">信用額度</p>
          <div>
            <credits :credits="info"></credits>
          </div>
        </div>

        <div class="table-wh divide-y-2 divide-divider">
          <p class="font-bold text-left text-lg py-6 pl-7">信用卡回饋</p>
          <div>
            <feedback :feedback="info"></feedback>
          </div>
        </div>

        <div>
          <a href="https://www.belstar.com.cn/product/suite/docgear">
            <img
              class="
                rounded-3xl
                border border-transparent
                object-fill
                w-full
                h-40
              "
              src="@/assets/img/giveBack.jpg"
            />
          </a>
        </div>

        <div>
          <a href="https://www.belstar.com.cn/cloud/ssmo-central-cloud">
            <img
              class="
                rounded-3xl
                border border-transparent
                object-fill
                w-full
                h-36
              "
              src="@/assets/img/technology.jpg"
            />
          </a>
        </div>

        <div>
          <p class="font-bold text-left">消費數據</p>
          <div class="table-wh grid flex">
            <div>
              <div class="row flex justify-between pt-5">
                <p class="ml-5">本年度消費</p>
                <p class="text-xs text-belstarFontBlue text-right mr-14 mt-2">
                  選擇年份
                </p>
              </div>
              <div class="text-right mr-3">
                <select
                  class="
                    pretty-select
                    border border-gray-300
                    rounded
                    w-24
                    h-8
                    pl-3
                  "
                  v-model="inputYear"
                  @change="changeBarChartData()"
                >
                  <option
                    v-for="(item, index) in chartData.yearBarData"
                    :key="index"
                    :value="item.year"
                  >
                    {{ item.year }}
                  </option>
                </select>
              </div>
              <div class="mt-2.5 w-full border-divider border-b-2">
                <bar-chart
                  class="mb-10"
                  style="width: 320px; height: 240px"
                  v-if="chart_loaded"
                  :chart-data="barChartDataLoaded"
                  :options="BarOptions"
                ></bar-chart>
              </div>

              <div class="row flex justify-between pt-5">
                <p class="ml-5">本年度消費</p>
                <p class="text-xs text-belstarFontBlue text-right mr-20 mt-2">
                  月份
                </p>
              </div>
              <div class="text-right mr-3">
                <select
                  class="
                    pretty-select
                    border border-gray-300
                    rounded
                    w-24
                    h-8
                    pl-3
                  "
                  v-model="inputMonth"
                  @change="changeDoughnutChartData()"
                >
                  <option
                    v-for="(item, index) in chartData.monthData"
                    :key="index"
                    :value="item.month"
                  >
                    {{ item.month }}
                  </option>
                </select>
              </div>
              <div class="mt-2.5 mb-10 w-full">
                <doughnut-chart
                  style="width: 320px; height: 240px"
                  v-if="chart_loaded"
                  :chart-data="doughnutChartDataLoaded"
                  :options="doughnutMobileOptions"
                >
                </doughnut-chart>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p class="font-bold text-left">5月消費明細</p>
          <div class="rounded-3xl">
            <small-table :list="info"></small-table>
          </div>
        </div>

        <div>
          <p class="font-bold text-left">帳務資訊</p>
          <div class="table-wh">
            <bill-info :bill="info"></bill-info>
          </div>
        </div>

        <div>
          <a href="https://www.belstar.com.cn/product/suite/moban">
            <img
              class="
                rounded-3xl
                border border-transparent
                object-fill
                w-full
                h-32
              "
              src="@/assets/img/enjoy.jpg"
            />
          </a>
        </div>

        <div>
          <a
            href="https://www.belstar.com.cn/product/suite/template-requirement"
          >
            <img
              class="
                rounded-3xl
                border border-transparent
                object-fill
                w-full
                h-32
              "
              src="@/assets/img/festival.jpg"
            />
          </a>
        </div>

        <div>
          <p class="font-bold text-left">最新消息/活動</p>
          <div class="table-wh">
            <news :news="info"></news>
            <div class="flex justify-center items-center">
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

              <span class="mx-2 my-6 text-sm">1/3</span>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import ConsumptionList from "@/components/ConsumptionList.vue";
import CreditCardInfo from "@/components/CreditCardInfo.vue";
import BarChart from "@/components/BarChart.vue";
import DoughnutChart from "@/components/DoughnutChart.vue";
import BillInfo from "@/components/BillInfo.vue";
import Credits from "@/components/Credits.vue";
import Feedback from "@/components/Feedback.vue";
import News from "@/components/News.vue";
import SmallTable from "@/components/SmallTable.vue";
import ChartData from "@/assets/data/chartData.json";
import Info from "@/assets/data/infoData.json";

export default {
  components: {
    Bar,
    ConsumptionList,
    CreditCardInfo,
    BillInfo,
    BarChart,
    DoughnutChart,
    Credits,
    Feedback,
    News,
    SmallTable,
  },
  data() {
    return {
      btBar: [
        {
          title: "線上櫃檯",
          net: "https://www.taishinbank.com.tw/eService/eCounter/",
        },
        {
          title: "優惠",
          net: "https://www.taishinbank.com.tw/TSB/personal/common/bonus/",
        },
        {
          title: "信用卡各項費用說明",
          net: "https://www.taishinbank.com.tw/TSB/personal/credit/online-apply/payment/",
        },
        {
          title: "聯絡我們",
          net: "https://www.taishinbank.com.tw/TSB/customer-service-center/",
        },
        {
          title: "退訂電子報",
          net: "https://www.taishinbank.com.tw/TSB/about-taishin/annual-report/monthly-magazine/",
        },
      ],
      info: Info,
      chartData: ChartData,
      inputYear: 2021,
      inputMonth: "1月",
      chart_loaded: true /* 圖表讀取 */,
      barChartDataLoaded: {
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
            type: "bar",
            hoverBorderColor: "#3A6DF2",
            borderColor: "#3A6DF2",
            backgroundColor: "#3A6DF2",
            borderWidth: 1,
            borderRadius: 6,
            borderSkipped: false,
            data: ChartData.yearBarData[0].data,
          },
        ],
      },
      BarOptions: {
        /* 圖表選項，各類圖表的 options 可能不盡相圖，可參照官方文件 */
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 10,
          },
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.yLabel;
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "消費金額",
              color: "#034EBD",
            },
            ticks: {
              font: {
                size: 8,
              },
            },
            min: 0,
            max: 10000,
            stepSize: 2000,
            beginAtZero: false,
          },
          x: {
            grid: {
              display: false,
            },
            min: 0,
            max: 12,
            stepSize: 2,
            ticks: {
              font: {
                size: 8,
              },
            },
          },
        },
      },
      doughnutChartDataLoaded: {
        labels: ["超市", "健身房", "加油", "旅遊", "百貨零售", "餐飲美食"],
        datasets: [
          {
            type: "doughnut",
            data: [10, 10, 2, 66, 0, 12],
            backgroundColor: [
              "rgba(6, 240, 146,1)",
              "rgba(255, 249, 102, 1)",
              "rgba(240, 16, 16, 1)",
              "rgba(58, 120, 242, 1)",
              "rgba(246, 89, 0, 1)",
              "rgba(218, 16, 222, 1)",
            ],
            hoverBorderColor: "black",
          },
        ],
      },
      doughnutOptions: {
        /* 圖表選項，各類圖表的 options 可能不盡相圖，可參照官方文件 */
        responsive: true,
        maintainAspectRatio: false,
        weight: 2,
        rotation: 25,
        cutout: "80%",
        animation: { animateScale: true },
        scales: {},
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            align: "center",
            labels: {
              color: "#6A6A6A",
              padding: 40,
              usePointStyle: true,
              textAlign: "right",
            },
          },
        },
      },
      doughnutMobileOptions: {
        /* 圖表選項，各類圖表的 options 可能不盡相圖，可參照官方文件 */
        responsive: true,
        maintainAspectRatio: false,
        weight: 2,
        rotation: 25,
        cutout: "80%",
        animation: { animateScale: true },
        scales: {},
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            align: "center",
            labels: {
              color: "#6A6A6A",
              padding: 20,
              usePointStyle: true,
              textAlign: "right",
            },
          },
        },
      },
    };
  },
  methods: {
    changeBarChartData() {
      let check = ChartData.yearBarData
        .map((x) => x.year)
        .indexOf(this.inputYear);
      let preBarChartData = {
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
            type: "bar",
            hoverBorderColor: "#3A6DF2",
            borderColor: "#3A6DF2",
            backgroundColor: "#3A6DF2",
            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false,
            data: [],
          },
        ],
      };

      ChartData.yearBarData[check].data.forEach((item) => {
        preBarChartData.datasets[0].data.push(item);
      });

      this.barChartDataLoaded = preBarChartData;
    },
    changeDoughnutChartData() {
      let check = ChartData.monthData
        .map((x) => x.month)
        .indexOf(this.inputMonth);
      let preDoughnutChartData = {
        labels: ["超市", "健身房", "加油", "旅遊", "百貨零售", "餐飲美食"],
        datasets: [
          {
            type: "doughnut",
            data: [],
            backgroundColor: [
              "rgba(6, 240, 146,1)",
              "rgba(255, 249, 102, 1)",
              "rgba(240, 16, 16, 1)",
              "rgba(58, 120, 242, 1)",
              "rgba(246, 89, 0, 1)",
              "rgba(218, 16, 222, 1)",
            ],
          },
        ],
      };

      ChartData.monthData[check].data.forEach((item) => {
        preDoughnutChartData.datasets[0].data.push(item);
      });

      this.doughnutChartDataLoaded = preDoughnutChartData;
    },
  },
  mounted() {},
};
</script>

<style scoped>
@media screen and (min-width: 1920px) {
  .wd-62 {
    width: 62%;
  }
  .wd-38 {
    width: 38%;
  }
}
.pretty-select {
  /*移除箭頭樣式*/
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  /*改變右邊箭頭樣式*/
  background: url("../assets/Vector3.png") 90% 50% no-repeat transparent;
}
</style>