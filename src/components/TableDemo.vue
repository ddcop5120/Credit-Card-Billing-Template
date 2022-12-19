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
      <td class="table-td" colspan="3">
        <div class="flex items-center justify-end">
          <button
            class="py-1 px-2 border rounded hover:border-gray-800"
            @click="currentPage = 1"
          >
            &#60;&#60;
          </button>
          <button
            class="mx-1 py-1 px-2 border rounded hover:border-gray-800"
            @click="prevPageHandler"
          >
            &#60;
          </button>
          <div class="mx-1 flex">
            <div v-show="currentPage >= paginationMid">
              <button
                class="mx-1 py-1 px-2 border rounded hover:border-gray-800"
                @click="currentPage = 1"
              >
                1
              </button>
              ...
            </div>
            <div
              :key="index"
              v-for="index in totalPages"
              v-show="
                index === currentPage ||
                index === currentPage + 1 ||
                index === currentPage - 1
              "
            >
              <button
                class="mx-1 py-1 px-2 border rounded hover:border-gray-800"
                :class="{ 'bg-gray-600 text-white': index === currentPage }"
                @click="currentPage = index"
              >
                {{ index }}
              </button>
            </div>

            <div v-show="currentPage <= paginationMid">
              ...
              <button
                class="mx-1 py-1 px-2 border rounded hover:border-gray-800"
                @click="currentPage = totalPages"
              >
                {{ totalPages }}
              </button>
            </div>
          </div>
          <button
            class="mx-1 py-1 px-2 border rounded hover:border-gray-800"
            @click="nextPageHandler"
          >
            &#62;
          </button>
          <button
            class="py-1 px-2 border rounded hover:border-gray-800"
            @click="currentPage = totalPages"
          >
            &#62;&#62;
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
      defaultLength: 15
    };
  },
  computed: {
    displayList() {
      return this.expensesList.slice(
        (this.currentPage - 1) * this.defaultLength,
        (this.currentPage - 1) * this.defaultLength + this.defaultLength
      );
    },
    paginationMid() {
      return Math.floor(this.totalPages / 2) + 1;
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
