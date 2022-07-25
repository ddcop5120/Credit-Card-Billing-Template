<template>
  <div class="flex flex-col pt-3 pb-6">
    <div class="text-right text-sm font-normal t2_text-belstarGray pr-6">紅利點數</div>
    <div v-for="(item, index) in feedback.feedback" :key="index" class="row flex justify-between text-sm font-bold px-7 py-3 xl:px-8 xl:py-4">
      <p class="t2_table-td font-normal t2_text-belstarGray" :style="'color :' + item.titleColor">
        {{ item.title }}
      </p>
      <span class="t2_table-td" :style="'color :' + item.contentColor">
        {{ item.content }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["feedback"],
  data() {
    return {};
  },
};
</script>
