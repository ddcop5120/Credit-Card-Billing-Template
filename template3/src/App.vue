<template>
  <div id="app">
    <div class="flex max-w-360 mx-auto">

      <div class="border-r flex-8 w-2/3" >
        <div class="flex flex-col divide-y bs-divide-gray xl:pl-36 pl-2 pr-6 w-full" >
          <section class="py-7">
            <div class="title">親愛的XXX卡友 ， 您好！</div>
            <p class="mt-5">以下為您 {{outerData.year}}年 {{outerData.month}}月份的信用卡電子帳單:</p>
          </section>

          <section class="pt-7 pb-8">
            <div class="title">我的信用卡</div>
            <section class="flex mt-7">
              <section class="mr-3 flex-3 ">
                <div class="inline-block w-1/2">
                  <p class="secondary-title">本期應徵總金額</p>
                  <p class="text-2xl text-black mt-1.5">NT {{outerData.shouldPay}}</p>
                </div>
                <div class="inline-block w-1/2">
                  <p class="secondary-title">繳款載止日</p> 
                  <p class="text-2xl text-red-500 mt-1.5">{{outerData.dueDate}}</p>
                </div>
                <credit-card></credit-card>
              </section>
              <section  class="flex flex-4 justify-between ml-3">
                <div class="mt-4 flex flex-col justify-between w-2/5 mr-3">
                  <div class="text-sm rounded-xl border border-blue-500 text-blue-500 flex items-center justify-center h-15 px-1">
                    <img src="@/assets/atm.svg" alt="atm" class="mr-1.5">
                    網路ATM繳款</div>
                  <div class="text-sm rounded-xl border border-blue-500 text-blue-500 flex items-center justify-center  h-15">
                    <img src="@/assets/bank.svg" alt="bank" class="mr-1.5">網路銀行繳款</div>
                  <div class="text-sm rounded-xl border border-blue-500 text-blue-500 flex items-center justify-center  h-15">
                    <img src="@/assets/cash.svg" alt="cash" class="mr-1.5">其他繳款方式</div>
                </div>
                <div class="flex flex-col justify-between w-3/5 ml-3">
                  <div class="flex justify-between flex-wrap">
                    <img src="@/assets/qrcode_atm.png" alt="qrcode_atm">
                    <img src="@/assets/qrcode_bill.png" alt="qrcode_bill">
                  </div>
                  <img src="@/assets/order_easy.png" alt="order_easy">
                </div>
              </section>
            </section>

            <section class="flex mt-7">
              <section class="mr-6 rounded-xl border flex-3">
                <div class="flex flex-col  pt-7 pl-5 pb-12 pr-7 h-full">
                  <div class="title relative">回饋
                    <div class="secondary-title absolute right-0 top-3.5">紅利點數</div>
                  </div>
                  <div class="flex flex-auto flex-col justify-between mt-9">
                    <div class="flex justify-between"><span class="secondary-title">上期累積</span><span class="font-bold ">{{outerData.lastAmount}}</span></div>
                    <div class="flex justify-between"><span class="secondary-title">本期新增/扣除</span><span class="font-bold text-green-600">{{outerData.thisAddOrRemove}}</span></div>
                    <div class="flex justify-between"><span class="secondary-title">本期贈送</span><span class="font-bold text-green-600">{{outerData.thisGive}}</span></div>
                    <div class="flex justify-between"><span class="secondary-title">本期使用紅利</span><span class="font-bold text-red-600">{{outerData.thisBonus}}</span></div>
                    <div class="flex justify-between"><span class="secondary-title">本期結額</span><span class="font-bold text-blue-600">{{outerData.thisTotal}}</span></div>

                  </div>

                </div>
              </section>
              <section class="flex-4">
                <img src="@/assets/green_blue_bg.png" alt="green_blue_bg">
                <img class=" mt-6" src="@/assets/crismas.png" alt="crismas.png">
              </section>
            </section>

          </section>

          <section class="py-7 ">
            <div class="row flex justify-between">
              <div class="title">年度消費數據</div>
              <div class="flex flex-col">
                <label class="text-xs text-blue-700 ml-1">選擇年份</label>
                <select class="border border-gray-300 w-24 h-8 pl-1 pr-3 rounded text-sm text-gray-300">
                  <option value="2021">
                    2021
                  </option>
                </select>
              </div>
            </div>
            <div class="h-80 ">
              <LineChart :data="monthChartData" :options="lineChartOption" class="h-full" />
            </div>
          </section>
          <section class="py-7">
            <div class="title">最新消息/活動</div>
            <div class="flex flex-col pl-6 ">
              <article v-for="(item, idx) in news" :key="idx" class="py-5 border-b border-gray">
                <h3 class="text-sm font-bold">{{item.title}}</h3>
                <p class="py-4">{{item.content}}</p>
                <span class="text-sm text-blue-500 font-medium flex">更多
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
              </article>
              <left-and-right-arrow class="mt-10 mb-8"/>
            </div>
          </section>
        </div>
      </div>
      <div class="flex-4 w-1/3" >
        <div class="flex flex-col ml-7 mr-8">
          <section class="pt-7 h-100">
            <div class="title mb-9">帳務資訊</div>
            <div class="row flex justify-between mb-5"><p class="secondary-title">帳務結帳日</p><span>{{billInfo.dueDate}}</span></div>
            <div class="row flex justify-between mb-5"><p class="secondary-title">幣別</p><span>{{billInfo.currencyType}}</span></div>
            <div class="row flex justify-between mb-5"><p class="secondary-title">上期帳單總額</p><span>{{billInfo.lastBillTotal}}</span></div>
            <div class="row flex justify-between mb-5"><p class="secondary-title">繳款金額</p><span>{{billInfo.paymentAmount}}</span></div>
            <div class="row flex justify-between mb-5"><p class="secondary-title">本期帳款</p><span>{{billInfo.ThisSessionAmount}}</span></div>
            <div class="row flex justify-between mb-5"><p class="secondary-title">分期預借金額</p><span>{{billInfo.loan}}</span></div>
            <div class="row flex justify-between mb-5"><p class="secondary-title">利息</p><span>{{billInfo.profit}}</span></div>
            <div class="row flex justify-between mb-5 pb-3 border-b "><p class="secondary-title">本期應繳額度</p><span>{{billInfo.shouldPayRightNow}}</span></div>
          </section>
          <section class="py-7 mt-10 border-b pb-11">
            <div class="row flex justify-between">
              <div class="title">消費圓餅圖</div>
              <div class="flex flex-col">
                <label class="text-xs text-blue-700 ml-1">月份</label>
                <select class="border border-gray-300 w-24 h-8 pl-1 pr-3 rounded text-sm text-gray-300">
                  <option value="5月">
                    5月
                  </option>
                </select>
              </div>
            </div>
            <div class="h-64 min-w-68 max-w-96">
              <DoughnutChart :chart-data="mydata" :options="myoption" class="w-full h-full"></DoughnutChart>
            </div>
          </section>
          <section class="mt-12">
            <div class="title">5月份消費明細</div>
            <div class="flex secondary-title justify-between p-4 ">
              <span class="w-32">交易說明</span>
              <span class="w-16">消費日</span>
              <span class="w-16">入帳日</span>
              <span class="w-20" >新臺幣金額</span>
            </div>
            <div class="detailTable-row" v-for="(item, idx) in consumptionDetail" :key="idx">
              <span class="w-32">{{item.name}}</span>
              <span class="w-16">{{item.transDate}}</span>
              <span class="w-16">{{item.inDate}}</span>
              <span class="w-20" >{{item.amount}}</span>
            </div>

            <left-and-right-arrow class="mt-5 mb-10"/>

          </section>
          <section class="advertise mb-6">
            <img src="@/assets/advertise.png"  alt="advertise.png">
          </section>
        </div>
      </div>
    </div>
    <div class="flex flex-col border-t">
      <div class="row flex justify-center my-7">
        <a class="text-blue-500 mx-6">線上櫃檯</a>
        <a class="text-blue-500 mx-6">優惠</a>
        <a class="text-blue-500 mx-6">信用卡各項費用說明</a>
        <a class="text-blue-500 mx-6">聯絡我們</a>
        <a class="text-blue-500 mx-6">退訂電子報</a>
      </div>
    </div>
    <div class="row flex justify-center mb-7">
      <span class="mr-7 text-sm">謹慎理財<br>信用無價</span>
      <span class="text-sm bs-text-gray">信用卡暨預借現金之各級別循環信用年利率為6.75％~15％（依本行信用評分制度定期評估，循環利率之基準日為104年9月1日）。<br>預借現金手續費：預借現金金額乘以3％加上新臺幣150元或美元5元，其他相關費用係依本行網站公告。</span>
    </div>
  </div>
</template>

<script>
import json from '@/assets/data/data.json'
import DoughnutChart from '@/components/DoughnutChart.vue'
import LineChart from '@/components/LineChart.vue'
import CreditCard from './components/CreditCard.vue'
import LeftAndRightArrow from './components/LeftAndRightArrow.vue'
export default {
  name: 'App',
  components: { DoughnutChart, LineChart, CreditCard, LeftAndRightArrow },
  data: () => ({
    outerData: json.pageData,
    news: json.news,
    billInfo: json.billInfo,
    consumptionDetail: json.consumptionDetail,
    mydata: {
      labels: ['健身房', '超市', '加油', '旅遊', '餐飲美食', '百貨零售'],
      datasets: [
        {
          type: 'doughnut',
          label: 'My First Dataset',
          data: [10, 10, 2, 66, 0, 12],
          backgroundColor: [
            'rgba(6, 240, 146,1)',
            'rgba(255, 249, 102, 1)',
            'rgba(240, 16, 16, 1)',
            'rgba(58, 120, 242, 1)',
            'rgba(246, 89, 0, 1)',
            'rgba(218, 16, 222, 1)'
          ]
        }
      ]
    },
    myoption: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'right'
      },
      cutoutPercentage: 80
    },
    monthChartData: {
      labels: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ],
      datasets: [
        {
          label: 'Data 1',
          data: [0, 2000, 1000, 3000, 8000],
          backgroundColor: 'rgba(255, 255, 255, .4)',
          borderColor: '#1663D6',
          borderWidth: 1,
          pointBackgroundColor: 'rgba(171, 71, 188, 1)',
          tension: 0
        }
      ]
    },
    lineChartOption: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    }
  })
}
</script>

<style>
#app{
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
}
</style>
