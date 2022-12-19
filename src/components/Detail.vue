<template>
  <table class="w-full">
    <thead>
      <tr>
        <th
          v-for="(item, index) in detailsTitle"
          :key="index"
          class="bg-ruri py-1 text-white font-light"
        >
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in expensesList"
        :key="index"
        class="text-belstarGray text-center text-sm break-words"
      >
        <td class="table-td">{{ item.transactionDate }}</td>
        <td class="table-td">{{ item.postingDate }}</td>
        <td class="table-td">{{ item.content }}</td>
        <!-- <td class="border-gray-200">{{ item.area }}</td> -->
        <!-- <td class="border-gray-200">{{ item.conversionDay }}</td> -->
        <td class="table-td">{{ item.currency }}</td>
        <!-- <td class="border-gray-200">{{ item.origin }}</td> -->
        <td class="table-td">{{ item.amount }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ["detailsTitle", "expensesList"]
};
</script>
