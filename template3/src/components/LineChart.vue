<script>
import { Line } from 'vue-chartjs'
import Chart from 'chart.js'
Chart.defaults.scale.gridLines.drawBorder = true
Chart.defaults.scale.gridLines.drawOnChartArea = false

export default {
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options)
  }
}
</script>

