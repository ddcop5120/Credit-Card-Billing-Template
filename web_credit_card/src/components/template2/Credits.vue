<template>
  <div class="flex flex-col py-3">
    <div v-for="(item, index) in credits.credits" :key="index" class="row flex justify-between text-sm font-bold px-7 py-3 xl:px-8 xl:py-4">
      <p class="t2_table-td font-light t2_text-belstarGray">
        {{ item.title }}
      </p>
      <span class="t2_table-td">{{ item.content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["credits"],
  data() {
    return {};
  },
};
</script>
