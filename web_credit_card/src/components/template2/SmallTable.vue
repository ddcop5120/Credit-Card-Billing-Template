<template>
  <div class="flex flex-col">
    <div v-for="(item, index) in list.ConsumptionListInfo" :key="index" :class="index % 2 == 0 ? 'bg-white p-3.5' : 't2_bg-tableBlue p-3.5'">
      <div v-show="item.block" class="t2_table-td text-left">
        {{ item.text }}
      </div>

      <div v-show="item.block" class="flex justify-end">
        <div class="t2_table-td text-right mr-2">
          {{ item.twd }}
        </div>
        <svg v-show="item.block" class="mt-1.5" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.9348 1.99984L9.66839 0.589844L5.54578 5.16984L1.42318 0.589843L0.156753 1.99984L5.54578 7.99984L10.9348 1.99984Z"
            fill="#999999"
          />
        </svg>
      </div>

      <div v-show="!item.block" class="flex justify-end t2_table-td py-2">
        <div class="t2_text-belstarFontBlue">{{ item.text }}</div>
        <div class="text-right font-bold mx-4">
          {{ item.twd }}
        </div>
        <div class="t2_text-belstarFontBlue mr-4">{{ item.fcd }}</div>
        <div class="text-right font-bold pr-5">
          {{ item.convert }}
        </div>
      </div>

      <div class="t2_table-td row flex justify-start t2_text-belstarGray">
        <div class="mr-4">{{ item.day }}</div>
        <div>{{ item.start }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {};
  },
};
</script>
