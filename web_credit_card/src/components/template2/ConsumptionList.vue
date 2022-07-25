<template>
  <div>
    <table class="w-full text-sm">
      <thead>
        <tr>
          <th v-for="(item, index) in list.ConsumptionListTitle" :key="index" class="t2_table-title t2_text-belstarGray mb-2 xl:pt-14">
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list.ConsumptionListInfo" :key="index" :class="index % 2 == 0 ? 't2_bg-tableBlue' : 'bg-white'">
          <td align="center" class="t2_table-td py-2.5">{{ item.day }}</td>
          <td align="center" class="t2_table-td py-2.5">{{ item.start }}</td>
          <td align="center" class="t2_table-td py-2.5">{{ item.text }}</td>
          <td align="center" class="t2_table-td py-2.5">{{ item.twd }}</td>
          <td align="center" class="t2_table-td py-2.5">{{ item.number }}</td>
          <td align="center" class="t2_table-td py-2.5">{{ item.country }}</td>
          <td align="center" class="t2_table-td py-2.5">{{ item.currency }}</td>
          <td align="center" class="t2_table-td py-2.5 t2_text-belstarGray">{{ item.fcd }}</td>
          <td align="center" class="t2_table-td py-2.5">{{ item.convert }}</td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-end font-normal xl:my-8 text-sm">
      <div class="flex xl:mr-32">
        <div class="t2_text-belstarGray xl:mr-4">本期消費</div>
        <div class="font-bold">10166</div>
      </div>
      <div class="flex xl:pr-4">
        <div class="t2_text-belstarGray xl:mr-4">本期應繳總額</div>
        <div class="font-bold">10166</div>
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
