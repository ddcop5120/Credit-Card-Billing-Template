<template>
  <div>
    <slogan :info="accountDetail.slogan" class="mt-1"></slogan>
    <terms :terms="accountDetail.term"></terms>
    <bill :bill="billData"></bill>
  </div>
</template>
<script>
import Terms from "@/components/Terms";
import Slogan from "@/components/Slogan.vue";
import Bill from "@/components/Bill.vue";
import BillData from "@/assets/data/BillData.json";
export default {
  props: ["accountDetail"],
  components: {
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
