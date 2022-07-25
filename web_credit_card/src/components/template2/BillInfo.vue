<template>
  <div class="flex flex-col py-2.5">
    <div v-for="(item, index) in bill.billInfo" :key="index" class="row flex justify-between text-sm font-bold px-7 py-3 xl:px-8 xl:py-3.5">
      <p class="t2_table-td font-light t2_text-belstarGray">
        {{ item.title }}
      </p>
      <span class="t2_table-td">{{ item.content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bill"],
  data() {
    return {};
  },
};
</script>
