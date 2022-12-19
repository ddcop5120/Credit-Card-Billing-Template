<template>
  <div>
    <app-bar></app-bar>
    <p class="text-xs text-right text-primary">同源客服電話：(08)8508-8408</p>
    <div class="flex items-center">
      <simple-info :simpleInfo="info.simpleInfo"></simple-info>
      <credits :credits="info.credits"></credits>
    </div>
    <div class="flex w-full">
      <section class="w-1/2">
        <account-info
          :infoTitles="info.accountInfo"
          class="my-1"
        ></account-info>
        <staging></staging>
        <points :points="info.points"></points>
        <message class="my-1" :message="info.message"></message>
      </section>
      <div class="w-1/2 pl-1">
        <img src="@/assets/img/delivery.jpg" class="my-1 border border-black" />
        <img src="@/assets/img/festival.jpg" class="my-1 border border-black" />
        <img src="@/assets/img/giveBack.jpg" class="my-1 border border-black" />
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
    Detail
  }
};
</script>
