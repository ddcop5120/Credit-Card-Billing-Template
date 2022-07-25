<template>
  <div class="h-screen">
    <info :info="infoData"></info>
    <account-detail :accountDetail="accountDetailData"></account-detail>
  </div>
</template>

<script>
import Info from "@/views/Info.vue";
import InfoData from "@/assets/data/InfoData.json";
import AccountDetail from "@/views/AccountDetail.vue";
import AccountDetailData from "@/assets/data/AccountDetailData.json";
export default {
  components: {
    Info,
    AccountDetail
  },
  data() {
    return {
      infoData: InfoData,
      accountDetailData: AccountDetailData
    };
  }
};
</script>
