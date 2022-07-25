<script>
/* Line 為引入的圖表種類（可以參考官方文件) */
import { Bar, mixins } from "vue-chartjs";

const { reactiveProp } = mixins;

export default {
  extends: Bar,
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
