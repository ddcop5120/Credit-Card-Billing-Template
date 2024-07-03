<template>
  <div>
    <layout-full>
      <template class="font-bold" v-slot:content>
        <Info :info="data.InfoData" />
        <AccountDetail :data="data" /> </template
    ></layout-full>
  </div>
</template>

<script>
import "../assets/css/tailwind/tailwind.css";
import LayoutFull from "../components/layout-full/src/index.vue";
import Info from "./Info.vue";
import AccountDetail from "./AccountDetail.vue";
export default {
  components: {
    LayoutFull,
    Info,
    AccountDetail
  },
  data() {
    return {};
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.data = this.$root;
    }
  }
};
</script>
