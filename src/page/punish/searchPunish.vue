<template>
  <div class="search_container searchArea">
    <el-form
      :model="search_punish"
      :inline="true"
      :rules="rules"
      ref="search_punish"
    >
      <el-form-item prop="query_time" label="按时间段查找">
        <el-config-provider :locale="zhCn">
          <el-date-picker
            v-model="search_punish.query_time"
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
          @click="onSearchPunish('search_punish')"
          >筛选</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button
          v-if="btn_show"
          type="primary"
          icon="el-icon-share"
          @click="change"
          ><span v-if="detailPunishShow">图表展示</span
          ><span v-if="chartPunishShow">详情展示</span></el-button
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
  name: "searchPunish",
  components: {
    ElConfigProvider,
  },
  data() {
    return {
      zhCn,
      start_search: false,
      btn_show: false,
      search_punish: {
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
    ...mapGetters(["detailPunishShow", "chartPunishShow"]),
  },
  methods: {
    change() {
      this.$store.commit("SET_DETAIL_PUNISH", !this.detailPunishShow);
      this.$store.commit("SET_CHART_PUNISH", !this.chartPunishShow);
    },
    onSearchPunish(search_punish) {
      this.$refs[search_punish].validate((valid) => {
        if (valid) {
          this.$store.commit("SET_SEARCH_PUNISH", this.search_punish);
          this.start_search_punish = true;
          this.$store.commit("START_SEARCH_PUNISH", this.start_search_punish);
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
