<template>
  <layout-full>
    <template class="font-bold" v-slot:content>
      <app-bar></app-bar>
      <p class="text-xs text-right  text-primary">
        同源客服電話：(08)8508-8408
      </p>
      <div class="flex items-center">
        <SimpleInfo :simpleInfo="info.simpleInfo" />
        <Credits :credits="info.credits" />
      </div>
      <div class="flex w-full">
        <div class="w-1/2">
          <AccountInfo :infoTitles="info.accountInfo" class="my-1" />
          <Staging />
          <Points :points="info.points" />
          <Message class="my-1" :message="info.message" />
          <img src="../assets/img/enjoy.jpg" class="border border-black" />
        </div>
        <div class="w-1/2 pl-1">
          <img
            src="../assets/img/delivery.jpg"
            class="my-1 border border-black"
          />
          <img
            src="../assets/img/festival.jpg"
            class="my-1 border border-black"
          />
          <img
            src="../assets/img/giveBack.jpg"
            class="my-1 border border-black"
          />
          <AdvertisingCard :advertisingCard="info.advertisingCard" />
        </div>
      </div> </template
  ></layout-full>
</template>
<script>
import LayoutFull from "../components/layout-full/src/index.vue";
import AppBar from "../components/AppBar.vue";
import AccountInfo from "../components/AccountInfo.vue";
import Credits from "../components/Credits.vue";
import SimpleInfo from "../components/SimpleInfo.vue";
import Points from "../components/Points.vue";
import Message from "../components/Message.vue";
import AdvertisingCard from "../components/AdvertisingCard.vue";
import Staging from "../components/Staging.vue";
export default {
  props: { info: Object },
  components: {
    AppBar,
    LayoutFull,
    SimpleInfo,
    Credits,
    AccountInfo,
    Staging,
    Points,
    Message,
    AdvertisingCard
  },
  data() {
    return {};
  }
};
</script>
