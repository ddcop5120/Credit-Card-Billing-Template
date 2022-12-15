<template>
  <table class="w-3/5 h-[500px]">
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
        v-for="(item, index) in displayList"
        :key="index"
        class="text-belstarGray text-center text-sm break-words"
      >
        <td class="table-td">{{ item.transactionDate }}</td>
        <td class="table-td">{{ item.postingDate }}</td>
        <td class="table-td">{{ item.content }}</td>
        <td class="table-td">{{ item.currency }}</td>
        <td class="table-td">{{ item.amount }}</td>
      </tr>
    </tbody>
    <tfoot>
      <td class="table-td"></td>
      <td class="table-td"></td>
      <td class="table-td"></td>
      <td class="table-td"></td>
      <td class="table-td">
        <div class="flex justify-between items-center">
          <button
            class="py-1 px-2 border rounded hover:border-gray-800"
            @click="prevPageHandler"
          >
            Prev
          </button>
          <div>{{ currentPage }} / {{ totalPages }}</div>
          <button
            class="py-1 px-2 border rounded hover:border-gray-800"
            @click="nextPageHandler"
          >
            Next
          </button>
        </div>
      </td>
    </tfoot>
  </table>
</template>
<script>
export default {
  props: ["detailsTitle", "expensesList"],
  data() {
    return {
      currentPage: 1,
      totalPages: 1,
      defaultLength: 10
    };
  },
  computed: {
    displayList() {
      return this.expensesList.slice(
        (this.currentPage - 1) * this.defaultLength,
        (this.currentPage - 1) * this.defaultLength + this.defaultLength
      );
    }
  },

  methods: {
    prevPageHandler() {
      if (this.currentPage - 1 < 1) return;
      this.currentPage -= 1;
    },
    nextPageHandler() {
      if (this.currentPage + 1 > this.totalPages) return;
      this.currentPage += 1;
    }
  },

  mounted() {
    this.totalPages = Math.ceil(this.expensesList.length / this.defaultLength);
  }
};
</script>
