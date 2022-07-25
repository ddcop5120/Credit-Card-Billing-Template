<template>
  <div>
    <div class="flex flex-col py-2">
      <div
        v-for="(item, index) in cardInfo.creditsCardInfo"
        :key="index"
        class="
          flex
          font-bold
          text-sm text-belstarGray
          justify-between
          px-7
          py-3
          laptop:px-8
          laptop:py-4
        "
        :style="item.amount ? 'font-weight : bolder' : 'font-weight : normal'"
      >
        <p
          :class="item.amount ? 'font-bold ' : 'font-light '"
          :style="item.amount ? 'color:#FF6464' : ' color:#828282'"
        >
          {{ item.title }}
        </p>

        <span
          :class="item.amount ? 'font-bold ' : 'font-light'"
          :style="item.amount ? 'color:#FF6464' : ' color:#000000'"
          >{{ item.content }}</span
        >
      </div>
    </div>
    <div class="flex justify-center pt-2 pb-4 laptop:pt-2 laptop:pb-7">
      <a href="https://www.hitrustpay.com.tw/page_embed.html">
        <button
          class="
            bg-belstarFigureBlue
            text-sm text-white
            rounded-md
            hover:bg-blue-700
            w-72
            h-10
            px-3
            py-3
            laptop:w-24
          "
        >
          我要付款
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardInfo"],
  data() {
    return {};
  },
};
</script>
