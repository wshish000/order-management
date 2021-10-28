<template>
  <div :id="id" class="orderArea"></div>
</template>

<script>
import { mapGetters } from "vuex";
import * as echarts from "echarts"; //否则报错"export ‘default’ (imported as ‘echarts’) was not found in ‘echarts’
export default {
  name: "subChart",
  data() {
    return {
      id: "subChart",
      myChart: null,
    };
  },
  mounted() {
    this.loadChart();
  },
  beforeUnmount() {
    if (!this.myChart) return;
    this.myChart.dispose();
    this.myChart = null;
  },
  computed: {
    ...mapGetters(["dataOfSub"]),
  },
  methods: {
    loadChart() {
      this.myChart = echarts.init(document.getElementById(this.id));
      this.myChart.setOption({
        title: {
          text: "各中队违纪排名",
        },
        tooltip: {},
        xAxis: {
          data: this.dataOfSub.data_x,
        },
        yAxis: {},
        series: [
          {
            name: "次数",
            type: "bar",
            data: this.dataOfSub.data_y,
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.orderArea {
  width: 100%;
  height: 300px;
  background: #fff !important;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 10px;
  padding-top: 40px;
  overflow: hidden;
}
</style>
