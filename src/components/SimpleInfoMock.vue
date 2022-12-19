<template>
  <div class="w-full text-title p-4">
    <section class="text-sm">
      <div class="flex justify-between">
        <h3 class="font-bold">
          下期帳單累計金額
          <span>結帳日（2021/05/13）</span>
        </h3>
        <div class="flex justify-between">
          <div>7,746</div>
          <div class="ml-2">TWD</div>
        </div>
      </div>
      <div class="flex justify-between">
        <h3 class="font-bold">
          目前可用餘額
          <span>(總額度:20,000) </span>
        </h3>
        <div class="flex justify-between">
          <div>20,000</div>
          <div class="ml-2">TWD</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["simpleInfo"]
};
</script>
