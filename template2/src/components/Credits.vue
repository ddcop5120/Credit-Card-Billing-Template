<template>
  <div class="flex flex-col py-3">
    <div
      v-for="(item, index) in credits.credits"
      :key="index"
      class="
        row
        flex
        justify-between
        text-sm
        font-bold
        px-7
        py-3
        laptop:px-8
        laptop:py-4
      "
    >
      <p class="table-td font-light text-belstarGray">
        {{ item.title }}
      </p>
      <span class="table-td">{{ item.content }}</span>
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
