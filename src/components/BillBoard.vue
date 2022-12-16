<template>
  <div class="w-11/12 mx-auto">
    <app-bar></app-bar>
    <p class="text-xs text-right text-primary">同源客服電話：(08)8508-8408</p>
    <div class="flex items-center mb-6">
      <simple-info :simpleInfo="info.simpleInfo"></simple-info>
      <credits :credits="info.credits"></credits>
    </div>
    <div class="flex items-end">
      <account-info
        :infoTitles="info.accountInfo"
        class="mr-1 w-1/2 h-max"
        style="height: max-content"
      ></account-info>
      <div class="w-1/2">
        <points :points="info.points" class="ml-1"></points>
      </div>
    </div>
  </div>
</template>
<script>
import AppBar from "@/components/AppBar.vue";
import AccountInfo from "@/components/AccountInfo.vue";
import Credits from "@/components/Credits.vue";
import SimpleInfo from "@/components/SimpleInfo.vue";
import Points from "@/components/Points.vue";

export default {
  props: ["info"],
  components: {
    AppBar,
    AccountInfo,
    Credits,
    SimpleInfo,
    Points
  }
};
</script>