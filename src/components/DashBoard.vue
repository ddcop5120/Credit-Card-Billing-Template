<template>
  <div class="w-screen h-screen bg-green-900 grid place-items-center">
    <div class="w-[1024px] h-[650px] bg-white rounded-md overflow-hidden">
      <div class="h-[10%] flex flex-col">
        <div class="bg-black flex h-6 items-center flex-none">
          <div class="rounded-full bg-red-500 w-3 h-3 ml-2"></div>
          <div class="rounded-full bg-yellow-500 w-3 h-3 mx-1"></div>
          <div class="rounded-full bg-green-500 w-3 h-3"></div>
        </div>
        <div class="bg-gray-700 flex-grow flex items-end">
          <button
            class="w-[100px] py-1 ml-1 rounded-t bg-white inline-block"
            :class="{ 'bg-gray-400': tab !== 1 }"
            @click="setTab(1)"
          >
            帳單
          </button>
          <button
            class="w-[100px] py-1 rounded-t bg-white inline-block"
            :class="{ 'bg-gray-400': tab !== 2 }"
            @click="setTab(2)"
          >
            交易紀錄
          </button>
          <button
            class="w-[100px] py-1 rounded-t bg-white inline-block"
            :class="{ 'bg-gray-400': tab !== 3 }"
            @click="setTab(3)"
          >
            自動扣款
          </button>
        </div>
      </div>
      <div class="h-[90%] flex justify-center">
        <BillBoard v-show="tab === 1" :info="InfoData" />
        <div v-show="tab === 2" class="w-[96%] mx-auto">
          <div class="text-sm text-title">5 月交易紀錄</div>
          <TableDemo v-bind="tableDemoData" />
        </div>
        <PayBill v-show="tab === 3" />
      </div>
    </div>
  </div>
</template>

<script>
import TableDemo from "@/components/TableDemo.vue";
import tableDemoData from "@/assets/data/tableDemo.json";
import InfoData from "@/assets/data/InfoData.json";
import BillBoard from "@/components/BillBoard.vue";
import PayBill from "@/components/PayBill.vue";

export default {
  components: {
    TableDemo,
    BillBoard,
    PayBill
  },
  data() {
    return {
      tableDemoData,
      InfoData,
      tab: 1
    };
  },
  methods: {
    setTab(v) {
      this.tab = v;
    }
  }
};
</script>
