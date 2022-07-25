<template>
  <div>
    <!--網頁版本-->
    <div class="hidden md:block">
      <bar></bar>
      <div class="md:w-2/3 md:m-auto ml-4 pr-8">
        <!--五月份電子帳單明細-->
        <div class="content">
          <my-bill class="md:w-full"></my-bill>
        </div>
        <!--網頁廣告圖片-->
        <div class="w-full flex flex-col mt-6">
          <div class="flex">
            <img class="mr-6 pb-6 flex-auto" src="@/assets/template1/images/easyOrder.png" alt="點餐好輕鬆" />
            <img class="pb-6 flex-auto" src="@/assets/template1/images/bonus.png" alt="" />
          </div>
          <div class="flex">
            <img class="mr-6 pb-6 flex-auto" src="@/assets/template1/images/christmas.png" alt="聖誕" />
            <img class="pb-6 flex-auto" src="@/assets/template1/images/starCard.png" alt="" />
          </div>
        </div>
        <!--網頁按鈕排版-->
        <div class="flex">
          <button class="t1_button mr-6 text-blue-600">網路銀行繳款</button>
          <button class="t1_button mr-6 text-blue-600">網路ATM繳款</button>
          <button class="t1_button text-blue-600">其他繳款方式</button>
        </div>
        <bill-info></bill-info>
        <!--消費明細表格-->
        <consumption id="consumption"></consumption>
        <!--曲線圖和廣告-->
        <div id="costData" class="mt-6 flex flex-row items-center">
          <div class="t1_border-shadow mr-6 w-3/4">
            <div class="flex flex-row justify-between">
              <h2 class="pt-6 ml-7 hidden">2021消費趨勢圖</h2>
              <h2 class="pt-6 ml-3 text-sm">2021消費數據</h2>
              <div class="flex flex-row mt-6 mr-5">
                <div class="flex flex-col">
                  <label class="text-blue-600 t1_text-size">圖表</label>
                  <select class="t1_select-arrow w-24 h-8 pl-3 border border-gray-300 rounded mr-5 text-gray-500 text-sm">
                    <option value="趨勢圖">趨勢圖</option>
                  </select>
                </div>
                <div class="flex flex-col">
                  <label class="text-blue-600 t1_text-size">選擇年份</label>
                  <select class="t1_select-arrow w-24 h-8 pl-3 border border-gray-300 rounded text-gray-500 text-sm">
                    <option value="2021">2021</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex flex-row items-center">
              <p class="t1_text-vertical t1_text-size text-blue-600 pr-2 pl-4">消費金額</p>
              <div class="w-600 h-80 mt-6 mr-10 w-full pl-4 pr-4">
                <LineChart :data="monthChartData" :options="myoptions" class="h-full w-full pb-6" />
              </div>
            </div>
          </div>
          <img class="inline-block" src="@/assets/template1/images/ad.png" alt="ad" />
        </div>
        <!--最新消息-->
        <div class="t1_border-shadow mt-6 mb-9">
          <h2 class="mb-8 pt-5 pl-7">最新消息/活動</h2>
          <div class="w-11/12 border-b border-gray-200 m-auto">
            <h3 class="font-bold">{{ news[0].title }}</h3>
            <p class="mt-5 t1_new-p">
              {{ news[0].content }}
            </p>
            <div class="t1_new-flex">
              <a class="text-blue-600 text-sm pr-1" href="#">更多</a>
              <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2.5L0.25 4.66506L0.25 0.334936L4 2.5Z" fill="#034EBD" />
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
              <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2.5L0.25 4.66506L0.25 0.334936L4 2.5Z" fill="#034EBD" />
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
              <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2.5L0.25 4.66506L0.25 0.334936L4 2.5Z" fill="#034EBD" />
              </svg>
            </div>
          </div>
          <!--頁碼-->
          <div class="flex flex-row items-center justify-center pt-5 pb-5">
            <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.55868e-08 5.5L8.25 0.736859L8.25 10.2631L6.55868e-08 5.5Z" fill="#034EBD" />
            </svg>

            <p class="ml-2 mr-2 text-sm text-gray-500">1/3</p>
            <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5.5L0.750001 10.2631L0.750001 0.73686L9 5.5Z" fill="#034EBD" />
            </svg>
          </div>
        </div>
      </div>
      <footer class="flex flex-col items-center pt-4 pb-4 t1_border-shadow mt-5">
        <div class="w-2/3 flex justify-center border-b border-gray-200 pb-6 pt-6 text-sm text-blue-600">
          <a href="#" class="mr-14">線上櫃檯</a>
          <a href="#" class="mr-14">優惠</a>
          <a href="#" class="mr-14">信用卡各項費用說明</a>
          <a href="#" class="mr-14">聯絡我們</a>
          <a href="#" class="">退訂電子報</a>
        </div>
        <div class="w-2/3 flex mt-7 flex-row m-auto text-xs">
          <div class="flex flex-col mr-7 m-auto">
            <p class="text-sm mr-2">謹慎理財</p>
            <p class="text-sm">信用無價</p>
          </div>
          <p class="text-sm text-gray-400 p-4">
            信用卡暨預借現金之各級別循環信用年利率為6.75％~15％（依本行信用評分制度定期評估，循環利率之基準日為104年9月1日）。
            <br />預借現金手續費：預借現金金額乘以3％加上新臺幣150元或美元5元，其他相關費用係依本行網站公告。
          </p>
        </div>
      </footer>
    </div>
    <!--手機版本-->
    <div class="w-full m-auto md:hidden">
      <!--bar-->
      <div class="t1_border-shadow pt-4 pb-4">
        <label for="burger" class="ml-4">☰</label>
        <input type="checkbox" id="burger" class="hidden" v-model="showTemplate" />
        <div class="absolute mt-4 bg-white border p-4" v-if="showTemplate">
          <img class="" src="@/assets/template1/images/belStarLogo.png" alt="bel-star logo" />
          <div class="mt-4">
            <p class="text-blue-600 text-sm">目錄</p>
            <ul class="m-6">
              <li class="pb-6 text-sm"><a href="#eBill">電子帳單</a></li>
              <li class="pb-6 text-sm"><a href="#accountingInfo">帳務資訊</a></li>
              <li class="pb-6 text-sm"><a href="#creditQuota">信用額度</a></li>
              <li class="pb-6 text-sm"><a href="#creditBonus">信用卡回饋</a></li>
              <li class="pb-6 text-sm"><a href="#consumption">消費明細</a></li>
              <li class="pb-6 text-sm"><a href="#costData">消費數據</a></li>
              <li class="pb-6 text-sm"><a href="#new">最新消息/活動</a></li>
            </ul>
          </div>
          <div class="mt-4">
            <p class="text-blue-600 text-sm">其他</p>
            <ul class="m-6 transition-all">
              <li class="pb-6 text-sm">線上櫃檯</li>
              <li class="pb-6 text-sm">信用卡各項費用說明</li>
              <li class="pb-6 text-sm">退訂電子報</li>
              <li class="pb-6 text-sm">優惠</li>
              <li>聯絡我們</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full mx-auto px-4">
        <!--五月份電子帳單明細-->
        <div class="content">
          <div class="mt-7 m-auto w-full" :key="index" v-for="(item, index) in bill.personal">
            <p class="pb-4 text-xs">親愛的{{ item.name }} 卡友， 您好！</p>
            <p class="text-xs">以下為您{{ item.year }}年{{ item.month }}月份的信用卡電子帳單:</p>
          </div>
          <div class="mt-3">
            <div>
              <div class="w-full mr-6 t1_border-shadow rounded" :key="index + 'A'" v-for="(item, index) in bill.personal">
                <h2 id="emydata" class="pl-4 pt-5 text-sm">{{ item.month }}月份的信用卡電子帳單</h2>
                <div class="flex flex-row justify-between">
                  <ul class="mt-7 pl-4">
                    <li
                      class="mb-5 text-gray-500 text-xs"
                      :key="index + 'B'"
                      v-for="(item, index) in bill.cardInfo"
                      :style="item.amount ? 'color:#FF6464' : ' color:#6b7280'"
                    >
                      {{ item.title }}
                    </li>
                    <li class="mb-5 font-bold text-blue-600 text-xs" :key="index + 'C'" v-for="(item, index) in bill.cardInfo">
                      {{ item.finalTitle }}
                    </li>
                  </ul>
                  <ul class="mr-2 mt-7 pr-2">
                    <li
                      class="mb-5 text-gray-500 text-xs"
                      :key="index + 'D'"
                      v-for="(item, index) in bill.cardInfo"
                      :style="item.amount ? 'color:#FF6464' : ' color:#000000'"
                    >
                      {{ item.content }}
                    </li>
                    <li class="mb-5 font-bold text-black text-xs" :key="index + 'E'" v-for="(item, index) in bill.cardInfo">
                      {{ item.finalContent }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--按鈕-->
        <div class="flex flex-col mt-5">
          <button class="t1_button text-blue-600 mb-4 text-xs w-full">網路銀行繳款</button>
          <button class="t1_button text-blue-600 mb-4 text-xs w-full">網路ATM繳款</button>
          <button class="t1_button text-blue-600 text-xs w-full">其他繳款方式</button>
        </div>
        <!--圖1-->
        <img class="mt-5 w-full" src="@/assets/template1/images/bonus.png" alt="" />
        <!--QR Code-->
        <img class="mt-5 mb-5 w-full m-auto" src="@/assets/template1/images/qrCode.png" alt="qrCode" />
        <!--帳務資訊-->
        <div id="accountingInfo" class="t1_border-shadow mt-5">
          <h2 class="pt-3 pl-4 text-sm">帳務資訊</h2>
          <div class="flex flex-row justify-between">
            <ul class="mt-5 pl-4">
              <li class="mb-5 text-gray-500 text-xs" :key="index" v-for="(item, index) in bill.smAccountInfo">
                {{ item.title }}
              </li>
            </ul>
            <ul class="mt-5 pr-4">
              <li class="mb-5 text-gray-500 text-xs" :key="index" v-for="(item, index) in bill.smAccountInfo">
                {{ item.content }}
              </li>
            </ul>
          </div>
        </div>
        <!--圖2-->
        <img class="mt-5 w-full" src="@/assets/template1/images/starCard.png" alt="" />
        <!--信用額度-->
        <div id="creditQuota" class="t1_border-shadow mt-5">
          <div class="pr-4 pt-5 t1_border-shadow rounded">
            <h2 class="pl-4 text-sm">信用額度</h2>
            <div class="flex flex-row justify-between">
              <ul class="mt-5 pl-4">
                <li class="mb-5 text-gray-500 text-xs" :key="index" v-for="(item, index) in bill.creditQuota">
                  {{ item.title }}
                </li>
              </ul>
              <ul class="mt-5">
                <li class="mb-5 text-xs" :key="index" v-for="(item, index) in bill.creditQuota">
                  {{ item.content }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--信用回饋-->
        <div id="creditBonus" class="flex flex-row mt-5 h-60">
          <div class="mr-4 pt-5 t1_border-shadow rounded w-1/2">
            <h2 class="pl-4 text-sm">信用卡回饋</h2>
            <div class="flex flex-row justify-between">
              <ul class="mt-5 pl-4">
                <li class="mb-5 text-gray-500 text-xs" :key="index" v-for="(item, index) in bill.smCreditFeeback">
                  {{ item.title }}
                </li>
              </ul>
              <ul class="mr-2 mt-5 pr-2">
                <li class="mb-5 text-xs" :key="index" v-for="(item, index) in bill.smCreditFeeback">
                  {{ item.content }}
                </li>
              </ul>
            </div>
          </div>
          <img class="w-1/2" src="@/assets/template1/images/ad.png" alt="ad" />
        </div>
        <BillInfo></BillInfo>
        <!--消費明細表格-->
        <!--排1-->
        <div class="t1_border-shadow rounded">
          <div class="flex flex-col">
            <div class="flex flex-row border-b border-gray-200">
              <p class="text-sm w-48 ml-4 mr-8 mt-3.5 h-16">上期帳單總額</p>
              <p class="w-28 text-xs text-center mt-8">2,000</p>
              <input id="show" type="checkbox" v-model="showOne" class="hidden" />
              <label for="show" class="absolute right-6 mt-9">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1.99984L10.59 0.589844L6 5.16984L1.41 0.589843L-6.16331e-08 1.99984L6 7.99984L12 1.99984Z" fill="#999999" />
                </svg>
              </label>
            </div>
            <div v-if="showOne">
              <table class="m-0 w-full">
                <tr>
                  <th v-for="(item, index) in smsminfo.smConsumption" :key="index + 'A'" class="py-2 text-center text-gray-400 text-xs font-normal">
                    {{ item.content }}
                  </th>
                </tr>
                <tr v-for="(item, index) in sminfo.smdetail" :key="index + 'A'" class="py-2 text-center text-gray-400 text-xs font-normal">
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
              <input id="showDivTwo" type="checkbox" v-model="showTwo" class="hidden" />
              <label for="showDivTwo" class="absolute right-6 mt-9">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1.99984L10.59 0.589844L6 5.16984L1.41 0.589843L-6.16331e-08 1.99984L6 7.99984L12 1.99984Z" fill="#999999" />
                </svg>
              </label>
            </div>
            <div v-if="showTwo" class="t1_bg-pink">
              <table class="m-0 w-full">
                <tr>
                  <th v-for="(item, index) in sminfo.smConsumption" :key="index + 'B'" class="h-9 text-center text-gray-400 text-xs font-normal">
                    {{ item.content }}
                  </th>
                </tr>
                <tr v-for="(item, index) in sminfo.smdetail" :key="index + 'B'" class="h-9 text-center text-gray-400 text-xs font-normal">
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
              <input id="showDivThree" type="checkbox" v-model="showThree" class="hidden" />
              <label for="showDivThree" class="absolute right-6 mt-9">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1.99984L10.59 0.589844L6 5.16984L1.41 0.589843L-6.16331e-08 1.99984L6 7.99984L12 1.99984Z" fill="#999999" />
                </svg>
              </label>
            </div>
            <div v-if="showThree" class="t1_bg-pink">
              <table class="m-0 w-full">
                <tr>
                  <th v-for="(item, index) in sminfo.smConsumption" :key="index + 'B'" class="h-9 text-center text-gray-400 text-xs font-normal">
                    {{ item.content }}
                  </th>
                </tr>
                <tr v-for="(item, index) in sminfo.smdetail" :key="index + 'B'" class="h-9 text-center text-gray-400 text-xs font-normal">
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
              <input id="showDivFour" type="checkbox" v-model="showFour" class="hidden" />
              <label for="showDivFour" class="absolute right-6 mt-9">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1.99984L10.59 0.589844L6 5.16984L1.41 0.589843L-6.16331e-08 1.99984L6 7.99984L12 1.99984Z" fill="#999999" />
                </svg>
              </label>
            </div>
            <div v-if="showFour" class="">
              <table class="m-0 w-full">
                <tr>
                  <th v-for="(item, index) in sminfo.smConsumption" :key="index + 'B'" class="h-9 text-center text-gray-400 text-xs font-normal">
                    {{ item.content }}
                  </th>
                </tr>
                <tr v-for="(item, index) in sminfo.smdetail" :key="index + 'B'" class="h-9 text-center text-gray-400 text-xs font-normal">
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
        <!--曲線圖和廣告-->
        <div id="costData" class="flex flex-row items-center mt-5 t1_border-shadow rounded">
          <div class="mr-6 t1_flex-2 w-full">
            <div class="flex flex-row justify-between">
              <h2 class="pt-6 ml-3 text-sm">2021消費數據</h2>
              <div class="flex flex-row mt-6 mr-5">
                <div class="h-8 w-8 t1_border-shadow rounded mr-4 p-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13 5.0798C16.06 5.5198 18.48 7.9398 18.92 10.9998H21.95C21.48 6.2798 17.72 2.5198 13 2.0498V5.0798ZM18.92 12.9998C18.48 16.0598 16.06 18.4798 13 18.9198V21.9498C17.72 21.4798 21.48 17.7198 21.95 12.9998H18.92ZM11 18.9198C7.61 18.4298 5 15.5198 5 11.9998C5 8.4798 7.61 5.5698 11 5.0798V2.0498C5.95 2.5498 2 6.8098 2 11.9998C2 17.1898 5.95 21.4498 11 21.9498V18.9198Z"
                      fill="#9E8E8E"
                    />
                  </svg>
                </div>
                <div class="h-8 w-8 t1_border-shadow rounded mr-4 p-2">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.5 13.4898L7.5 7.47976L11.5 11.4798L20 1.91977L18.59 0.509766L11.5 8.47976L7.5 4.47976L0 11.9898L1.5 13.4898Z"
                      fill="#9E8E8E"
                    />
                  </svg>
                </div>
                <div class="flex flex-col">
                  <label class="text-blue-600 t1_text-size">年度</label>
                  <select class="pr-2 border-b border-gray-200 rounded text-737373 text-sm">
                    <option value="2021">2021</option>
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L4.70588 5L8 1" stroke="#797979" />
                    </svg>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="pl-4 pr-4 w-full">
                <LineChart :data="monthChartData" :options="myoptions" class="pb-6" />
              </div>
            </div>
          </div>
        </div>
        <!--廣告圖3.4-->
        <img class="w-full pb-6 mt-5" src="@/assets/template1/images/christmas.png" alt="聖誕" />
        <img class="w-full mr-6 pb-6" src="@/assets/template1/images/easyOrder.png" alt="點餐好輕鬆" />
        <!--手機版消息-->
        <h2 id="new" class="text-sm">最新消息/活動</h2>
        <div class="t1_border-shadow rounded mt-5">
          <div class="border-b border-gray-200 m-auto p-2">
            <div class="flex items-center">
              <img src="@/assets/template1/images/newsPic1.png" />
              <h3 class="text-gray-500 pl-4 pr-4 text-xs">{{ news[0].title }}</h3>
              <input id="showOne" type="checkbox" v-model="showTemplateOne" @click="arrowClick" class="hidden" />
              <label for="showOne" class="absolute right-6" :class="{ 't1_rotate-open': false, 't1_rotate-back': openDiv }">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#1A69DF" />
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
              <img src="@/assets/template1/images/newsPic2.png" />
              <h3 class="text-gray-500 pl-4 pr-4 text-xs">{{ news[1].title }}</h3>
              <input id="showTwo" type="checkbox" v-model="showTemplateTwo" @click="arrowClickTwo" class="hidden" />
              <label for="showTwo" class="absolute right-6" :class="{ 't1_rotate-open': false, 't1_rotate-back': openDivTwo }">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#1A69DF" />
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
              <img src="@/assets/template1/images/newsPic2.png" />
              <h3 class="text-gray-500 pl-4 text-xs">{{ news[2].title }}</h3>
              <input id="showThree" type="checkbox" v-model="showTemplateThree" @click="arrowClickThree" class="hidden" />
              <label
                for="showThree"
                class="absolute right-6"
                :class="{
                  't1_rotate-open': false,
                  't1_rotate-back': openDivThree,
                }"
              >
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#1A69DF" />
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
      <footer class="flex flex-col items-center pt-4 pb-4 t1_border-shadow mt-5">
        <div class="flex flex-col m-auto text-xs">
          <div class="flex flex-row m-auto">
            <p class="mr-2 text-xs">謹慎理財</p>
            <p class="text-xs">信用無價</p>
          </div>
          <p class="text-gray-400 p-4 text-xs">
            信用卡暨預借現金之各級別循環信用年利率為6.75％~15％（依本行信用評分制度定期評估，循環利率之基準日為104年9月1日）。
            <br />預借現金手續費：預借現金金額乘以3％加上新臺幣150元或美元5元，其他相關費用係依本行網站公告。
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import json from "@/assets/template1/billInfo.json";
import bar from "@/components/template1/Bar.vue";
import MyBill from "@/components/template1/MyBill.vue";
import BillInfo from "@/components/template1/BillIfo.vue";
import consumption from "@/components/template1/Consumption.vue";
import LineChart from "@/components/template1/Linechart.vue";
import sminfo from "@/assets/template1/Consumption.json";

export default {
  name: "template1",
  components: {
    bar,
    MyBill,
    BillInfo,
    consumption,
    LineChart,
  },
  data: () => ({
    news: json.newInfo,
    bill: json,
    billdata: json,
    sminfo: sminfo,
    showOne: false,
    showTwo: false,
    showThree: false,
    showFour: false,
    showTemplateOne: false,
    showTemplateTwo: false,
    showTemplateThree: false,
    openDiv: false,
    showTemplate: false,
    openDivTwo: false,
    openDivThree: false,
    monthChartData: {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
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
