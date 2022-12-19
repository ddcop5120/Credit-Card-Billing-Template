<template>
  <a4-page class="break-inside break-after">
    <info :info="InfoData" :accountDetail="AccountDetailData"></info>
    <account-detail :accountDetail="AccountDetailData"></account-detail>
  </a4-page>
</template>

<script>
import A4Page from "@/layout/A4Page.vue";
import tableDemoData from "@/assets/data/tableDemo.json";
import Info from "@/views/Info.vue";
import InfoData from "@/assets/data/InfoData.json";
import AccountDetail from "@/views/AccountDetail.vue";
import AccountDetailData from "@/assets/data/AccountDetailData.json";

export default {
  components: {
    Info,
    AccountDetail,
    A4Page
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
