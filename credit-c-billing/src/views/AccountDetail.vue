<template>
  <a4-page>
    <div>
      <div>
        <detail
          :detailsTitle="accountDetail.detailsTitle"
          :expensesList="accountDetail.expensesList"
        ></detail>
        <slogan :info="accountDetail.slogan" class="mt-1"></slogan>
        <terms :terms="accountDetail.term"></terms>
        <bill :bill="billData"></bill>
      </div>
    </div>
  </a4-page>
</template>
<script>
import A4Page from "@/layout/A4Page.vue";
import Detail from "@/components/Detail";
import Terms from "@/components/Terms";
import Slogan from "@/components/Slogan.vue";
import Bill from "@/components/Bill.vue";
import BillData from "@/assets/data/BillData.json";
export default {
  props: ["accountDetail"],
  components: {
    A4Page,
    Detail,
    Terms,
    Slogan,
    Bill
  },
  data() {
    return {
      billData: BillData
    };
  }
};
</script>
