<script>
/* Line 為引入的圖表種類（可以參考官方文件) */
import { Doughnut, mixins } from "vue-chartjs";

const { reactiveProp } = mixins;

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ["chartData", "options"],
  data() {
    return {};
  },
  async mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
