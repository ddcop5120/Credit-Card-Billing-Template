<template>
  <div>
    <!-- <DashBoard :info="InfoData" /> -->
    <info :info="InfoData"></info>
    <account-detail :accountDetail="AccountDetailData"></account-detail>
  </div>
</template>

<script>
import tableDemoData from "@/assets/data/tableDemo.json";
// import DashBoard from "@/components/DashBoard.vue";
import Info from "@/views/Info.vue";
import InfoData from "@/assets/data/InfoData.json";
import AccountDetail from "@/views/AccountDetail.vue";
import AccountDetailData from "@/assets/data/AccountDetailData.json";

export default {
  components: {
    Info,
    AccountDetail
    // DashBoard
  },
  data() {
    return {
      tableDemoData,
      InfoData,
      AccountDetailData
    };
  }
};
</script>
