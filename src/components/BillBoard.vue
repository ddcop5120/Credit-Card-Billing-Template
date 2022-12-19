<template>
  <div class="w-11/12 mx-auto pt-4">
    <app-bar></app-bar>
    <p class="text-xs text-right text-primary">同源客服電話：(08)8508-8408</p>
    <div class="flex items-center">
      <simple-info-mock
        class="w-1/2"
        :simpleInfo="info.simpleInfo"
      ></simple-info-mock>
      <div class="w-1/2 flex justify-center">
        <LineChart />
      </div>
    </div>
    <div class="flex items-start">
      <account-info
        :infoTitles="info.accountInfo"
        class="mr-1 w-1/2 h-max"
        style="height: max-content"
      ></account-info>
      <div class="w-1/2">
        <CreditsMock :credits="info.credits" class="ml-1 mb-1"></CreditsMock>
        <PointsMock :points="info.points" class="ml-1"></PointsMock>
      </div>
    </div>
  </div>
</template>
<script>
import AppBar from "@/components/AppBar.vue";
import AccountInfo from "@/components/AccountInfo.vue";
import CreditsMock from "@/components/CreditsMock.vue";
import SimpleInfoMock from "@/components/SimpleInfoMock.vue";
import PointsMock from "@/components/PointsMock.vue";
import LineChart from "@/components/Line.vue";

export default {
  props: ["info"],
  components: {
    AppBar,
    AccountInfo,
    CreditsMock,
    SimpleInfoMock,
    PointsMock,
    LineChart
  }
};
</script>