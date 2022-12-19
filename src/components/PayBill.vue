<template>
  <div
    class="
      grid
      place-items-center
      bg-gradient-to-b
      from-white
      via-blue-100
      to-blue-200
    "
  >
    <div
      class="
        relative
        w-5/6
        h-[90%]
        border border-gray-300
        p-4
        bg-white
        rounded-md
      "
    >
      <h5 class="mb-2 text-lg font-bold">帳單自動扣款申請</h5>
      <div>
        <h5 class="text-lg font-bold">身份認證</h5>
        <div class="h-[0.1px] bg-gray-700 mb-4"></div>
        <form class="flex">
          <div class="flex flex-col justify-around bg-gray-200 p-2 mr-2">
            <label for="" class="mb-2 mt-2">★身分證編號</label>
            <label for="" class="mb-2">★出生日期(民國)</label>
            <label for="">★動態驗證碼</label>
          </div>
          <div class="flex flex-col">
            <div class="mb-2 mt-2">
              <input
                type="text"
                placeholder="如：A123456789"
                class="border border-gray-400 rounded p-1"
              />
            </div>
            <div class="mb-2">
              <input
                type="text"
                placeholder="如：082023"
                class="border border-gray-400 rounded p-1"
              />
              <span> 例如：民國72年1月5日，請輸入0720105 </span>
            </div>
            <div>
              <input type="text" class="border border-gray-400 rounded p-1" />
              <span class="border text-pink-400 p-1 ml-1">H87L</span>
              <button class="ml-1">重新產生</button>
            </div>
          </div>
        </form>
      </div>

      <div class="mt-4">
        <h5 class="text-lg font-bold">同意事項</h5>
        <div class="h-[0.1px] bg-gray-700"></div>

        <div class="pt-4 text-sm">
          <p class="p-2 bg-gray-200 mb-1">
            立約人使用本服務，為確保您的權益，請詳細閱讀本約定條款所載事項，當您點選畫面下方我已閱讀上述條款，即視同已審閱、瞭解玉山銀行線上申辦金融服務約定條款，並同意遵守本約定條款所載之規範事項。惟關於個人網路銀行網站提供之服務項目，本人知悉應另行申請始得使用。
          </p>
          <p class="p-2 bg-gray-200">
            玉山銀行茲依據銀行法及個人資料保護法等相關法令之規定，說明本行蒐集、處理、利用及/或國際傳輸本人個人資料之管理方針，以及本人所享有之權利或服務如說明：
            個人資料運用告知聲明
          </p>
        </div>

        <label class="my-2 text-blue-800 text-sm">
          <input type="checkbox" />
          我已閱讀並同意上述條款
        </label>
      </div>

      <div
        class="flex justify-center items-end absolute bottom-[5%] left-0 w-full"
      >
        <button class="bg-gray-100 text-blue-600 w-40 p-1 rounded mr-3">
          清除
        </button>
        <button class="bg-blue-600 text-white w-40 p-1 rounded">送出</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>