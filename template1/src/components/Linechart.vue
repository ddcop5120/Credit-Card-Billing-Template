<script>
import { Line } from "vue-chartjs";
import Chart from "chart.js";

Chart.defaults.scale.gridLines.drawBorder = true;
Chart.defaults.scale.gridLines.drawOnChartArea = false;

export default {
  extends: Line,
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
</script>