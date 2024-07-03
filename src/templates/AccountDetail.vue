<template>
  <div>
    <layout-full>
      <template class="font-bold" v-slot:content>
        <Detail
          :detailsTitle="data.AccountDetailData.detailsTitle"
          :expensesList="data.AccountDetailData.expensesList"/>
        <Slogan :info="data.AccountDetailData.slogan" class="mt-1"/>
        <Terms :terms="data.AccountDetailData.term"/>
        <Bill :bill="data.BillData"/></template
    ></layout-full>
  </div>
</template>
<script>
import LayoutFull from "../components/layout-full/src/index.vue";
import Detail from "../components/Detail.vue";
import Terms from "../components/Terms.vue";
import Slogan from "../components/Slogan.vue";
import Bill from "../components/Bill.vue";
export default {
  props: { data: Object },
  components: {
    LayoutFull,
    Detail,
    Terms,
    Slogan,
    Bill
  },
  data() {
    return {};
  }
};
</script>
