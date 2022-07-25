<template>
  <div>
    <table class="w-full text-sm">
      <thead>
        <tr>
          <th
            v-for="(item, index) in list.ConsumptionListTitle"
            :key="index"
            class="table-title text-belstarGray mb-2 laptop:pt-14"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in list.ConsumptionListInfo"
          :key="index"
          :class="index % 2 == 0 ? 'bg-tableBlue' : 'bg-white'"
        >
          <td class="table-td py-2.5">{{ item.day }}</td>
          <td class="table-td py-2.5">{{ item.start }}</td>
          <td class="table-td py-2.5">{{ item.text }}</td>
          <td class="table-td py-2.5">{{ item.twd }}</td>
          <td class="table-td py-2.5">{{ item.number }}</td>
          <td class="table-td py-2.5">{{ item.country }}</td>
          <td class="table-td py-2.5">{{ item.currency }}</td>
          <td class="table-td py-2.5 text-belstarGray">{{ item.fcd }}</td>
          <td class="table-td py-2.5">{{ item.convert }}</td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-end font-normal laptop:my-8 text-sm">
      <div class="flex laptop:mr-32">
        <div class="text-belstarGray laptop:mr-4">本期消費</div>
        <div class="font-bold">10166</div>
      </div>
      <div class="flex laptop:pr-4">
        <div class="text-belstarGray laptop:mr-4">本期應繳總額</div>
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
