<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-table :data="tableData" style="width: 100%" align="center">
        <el-table-column prop="unit" label="中队" align="center" span="4" />
        <el-table-column
          prop="type"
          label="类型"
          align="center"
          span="4"
          sortable
        />
        <el-table-column
          prop="punish_time"
          label="时间"
          align="center"
          span="4"
          sortable
        />
        <el-table-column prop="matter" label="事由" align="center" span="4" />
        <el-table-column
          prop="dadui"
          label="所在大队"
          align="center"
          span="4"
        />
        <el-table-column prop="unit" label="所在中队" align="center" span="4" />
      </el-table>
      <pagination
        :pageTotal="pageTotal"
        @handleCurrentChange="handleCurrentChange"
        @handleSizeChange="handleSizeChange"
      />
    </div>
  </div>
</template>

<script>
import { parseToDate } from "../../utils/mUtil";
import { getDataOfChart } from "@/api/punish";
import Pagination from "@/components/pagination";
import { mapGetters } from "vuex";
import { getPunish } from "@/api/punish";
export default {
  name: "punishDetail",
  components: {
    Pagination,
  },
  data() {
    return {
      dataOfAdd: {
        data_x: [],
        data_y: [],
      },
      dataOfSub: {
        data_x: [],
        data_y: [],
      },
      tableData: [],
      punishSearch: {
        page: 1,
        limit: 10,
        query_time: "",
      },
      pageTotal: 0,
    };
  },
  computed: {
    startSearchPunish() {
      return this.$store.getters.startSearchPunish;
    },
    ...mapGetters(["searchPunish"]),
  },
  watch: {
    startSearchPunish(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
      if (newVal == true) {
        this.getPunishList();
        this.$store.commit("START_SEARCH_PUNISH", false);
      }
    },
  },
  mounted() {
    this.getPunishList(); //目前有个小bug，当从别的页面转到此页面时，还取的是之前设置的searchPunish字段，而不是默认的当日时间。后续需要修改此处。
  },
  methods: {
    // 上下分页
    handleCurrentChange(val) {
      this.punishSearch.page = val;
      this.getPunishList();
    },
    // 每页显示多少条
    handleSizeChange(val) {
      this.punishSearch.limit = val;
      this.getPunishList();
    },
    getChart() {
      const para = Object.assign({}, this.searchPunish);
      getDataOfChart(para).then((res) => {
        let info1 = res.info1;
        if (info1.length != 0) {
          let data_x = [];
          let data_y = [];
          info1.forEach(function (i) {
            data_x.push(i._id);
            data_y.push(i.total);
          });
          this.dataOfAdd.data_x = data_x;
          this.dataOfAdd.data_y = data_y;
        }
        let info2 = res.info2;
        if (info2.length != 0) {
          let data_x = [];
          let data_y = [];
          info2.forEach(function (i) {
            data_x.push(i._id);
            data_y.push(i.total);
          });
          this.dataOfSub.data_x = data_x;
          this.dataOfSub.data_y = data_y;
        }
      });
      this.$store.commit("SET_DATA_OF_ADD", this.dataOfAdd);
      this.$store.commit("SET_DATA_OF_SUB", this.dataOfSub);
    },
    getPunishList() {
      this.getChart();
      const para = Object.assign({}, this.punishSearch, this.searchPunish);
      getPunish(para).then((res) => {
        this.pageTotal = res.pageTotal;
        let table = res.punishList;
        table.forEach((item) => {
          item.punish_time = parseToDate(item.punish_time);
        });
        this.tableData = table;
      });
    },
  },
};
</script>

<style scoped></style>
