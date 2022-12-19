<template>
  <div>
    <app-bar></app-bar>
    <p class="text-xs text-right text-primary">同源客服電話：(08)8508-8408</p>
    <div class="flex items-center">
      <simple-info :simpleInfo="info.simpleInfo"></simple-info>
      <LineChart />
    </div>
    <div class="flex w-full mb-1">
      <section class="w-1/2">
        <account-info
          :infoTitles="info.accountInfo"
          class="my-1"
        ></account-info>
        <staging class="mt-4"></staging>
      </section>
      <div class="w-1/2 pl-1">
        <credits class="my-1" :credits="info.credits"></credits>
        <points class="my-1" :points="info.points"></points>
        <message class="my-1" :message="info.message"></message>
      </div>
    </div>
    <detail
      :detailsTitle="accountDetail.detailsTitle"
      :expensesList="accountDetail.expensesList"
    ></detail>
  </div>
</template>
<script>
import AppBar from "@/components/AppBar.vue";
import AccountInfo from "@/components/AccountInfo.vue";
import Credits from "@/components/Credits.vue";
import SimpleInfo from "@/components/SimpleInfo.vue";
import Points from "@/components/Points.vue";
import Message from "@/components/Message.vue";
import Staging from "@/components/Staging.vue";
import Detail from "../components/Detail.vue";
import LineChart from "@/components/Line.vue";

export default {
  props: ["info", "accountDetail"],
  components: {
    AppBar,
    AccountInfo,
    Credits,
    SimpleInfo,
    Points,
    Message,
    Staging,
    Detail,
    LineChart
  }
};
</script>
