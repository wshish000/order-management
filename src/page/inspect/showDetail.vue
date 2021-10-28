<template>
  <div class="fillcontain">
    <div class="fillcontainer">
      <el-row :gutter="10">
        <el-col :span="12">
          <bar-chart></bar-chart>
        </el-col>
        <el-col :span="12">
          <bar-chart2></bar-chart2>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12">
          <bar-chart3></bar-chart3>
        </el-col>
        <el-col :span="12">
          <bar-chart4></bar-chart4>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import BarChart from "./echarts/barChart";
import BarChart2 from "./echarts/barChart2";
import BarChart3 from "./echarts/barChart3";
import BarChart4 from "./echarts/barChart4";
export default {
  name: "showDetail",
  components: {
    BarChart,
    BarChart2,
    BarChart3,
    BarChart4,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
