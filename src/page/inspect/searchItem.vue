<template>
  <div class="search_container searchArea">
    <el-form
      :model="search_data"
      :inline="true"
      :rules="rules"
      ref="search_data"
    >
      <el-form-item prop="query_time" label="按时间段查找">
        <el-config-provider :locale="zhCn">
          <el-date-picker
            v-model="search_data.query_time"
            type="datetimerange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
          >
          </el-date-picker>
        </el-config-provider>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="onSearchInspect('search_data')"
          >筛选</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button
          v-if="btn_show"
          type="primary"
          icon="el-icon-share"
          @click="change"
          ><span v-if="detailShow">图表展示</span
          ><span v-if="chartShow">详情展示</span></el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { mapGetters } from "vuex";
export default {
  name: "searchItem",
  components: {
    ElConfigProvider,
  },
  data() {
    return {
      zhCn,
      start_search: false,
      btn_show: false,
      search_data: {
        query_time: "",
      },
      rules: {
        query_time: [
          { required: true, message: "请选择时间段", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["detailShow", "chartShow"]),
  },
  methods: {
    change() {
      this.$store.commit("SET_DETAIL", !this.detailShow);
      this.$store.commit("SET_CHART", !this.chartShow);
      // this.$router.push("showDetail");
    },
    onSearchInspect(search_data) {
      this.$refs[search_data].validate((valid) => {
        if (valid) {
          this.$store.commit("SET_SEARCH", this.search_data);
          this.start_search = true;
          this.$store.commit("START_SEARCH", this.start_search);
          this.btn_show = true;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.search_container {
  margin-bottom: 20px;
}

.searchArea {
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  padding: 18px 18px 0;
}
</style>
