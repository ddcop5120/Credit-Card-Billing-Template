 <template>
  <div>
    <div class="text-xs text-title px-4">2021/01 ~ 2021/05 消費分析</div>
    <apexchart
      width="400"
      height="120"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      options: {
        grid: {
          padding: {
            top: 0
          }
        },
        stroke: {
          curve: "smooth"
        },
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6]
        }
      },
      series: [
        {
          name: "series-1",
          data: [2000, 3000, 4505, 3500, 2500, 2000]
        }
      ]
    };
  }
};
</script>