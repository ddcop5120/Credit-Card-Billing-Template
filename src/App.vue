<template>
  <div>
    <component :is="currentView" />
  </div>
</template>

<script>
import PdfView from "@/views/PdfView.vue";
import DashBoard from "@/components/DashBoard.vue";

export default {
  components: {
    PdfView,
    DashBoard
  },
  data() {
    return {
      currentPath: window.location.href,
      routes: {
        "/": DashBoard,
        web: DashBoard,
        pdf: PdfView
      }
    };
  },
  computed: {
    currentView() {
      return this.routes[this.currentPath.split("=")[1] || "/"] || "/";
    }
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.href;
    });
  }
};
</script>
