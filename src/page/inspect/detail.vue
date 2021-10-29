<template>
  <div class="table_container">
    <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column prop="name" label="姓名" align="center" span="4" />
      <el-table-column
        prop="type"
        label="类型"
        align="center"
        span="4"
        sortable
      />
      <el-table-column
        prop="inspect_time"
        label="时间"
        align="center"
        span="4"
        sortable
      />
      <el-table-column prop="site" label="地点" align="center" span="4" />
      <el-table-column prop="dadui" label="所在大队" align="center" span="4" />
      <el-table-column
        prop="zhongdui"
        label="所在中队"
        align="center"
        span="4"
      />
    </el-table>
    <pagination
      :pageTotal="pageTotal"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    />
  </div>
</template>

<script>
import { parseToDate } from "../../utils/mUtil";
import { getChaOfD, getChaOfZ, getShangOfD, getShangOfZ } from "@/api/inspect";
import Pagination from "@/components/pagination";
import { mapGetters } from "vuex";
import { getInspect } from "@/api/inspect";
export default {
  name: "detail",
  components: {
    Pagination,
  },
  data() {
    return {
      relation: {
        101: "一零一",
        102: "一零二",
        103: "一零三",
        111: "一一一",
        112: "一一二",
        113: "一一三",
        121: "一二一",
        122: "一二二",
        123: "一二三",
        131: "一三一",
        132: "一三二",
        133: "一三三",
        141: "一四一",
        142: "一四二",
        143: "一四三",
        151: "一五一",
        152: "一五二",
        153: "一五三",
        201: "二零一",
        202: "二零二",
        203: "二零三",
        211: "二一一",
        212: "二一二",
        213: "二一三",
        221: "二二一",
        222: "二二二",
        223: "二二三",
        231: "二三一",
        232: "二三二",
        233: "二三三",
        241: "二四一",
        242: "二四二",
        243: "二四三",
        301: "三零一",
        302: "三零二",
        303: "三零三",
        311: "三一一",
        312: "三一二",
        313: "三一三",
        321: "三二一",
        322: "三二二",
        323: "三二三",
        331: "三三一",
        332: "三三二",
        333: "三三三",
        341: "三四一",
        342: "三四二",
        343: "三四三",
        401: "四零一",
        402: "四零二",
        403: "四零三",
        411: "四一一",
        412: "四一二",
        413: "四一三",
        421: "四二一",
        422: "四二二",
        423: "四二三",
        431: "四三一",
        432: "四三二",
        433: "四三三",
        441: "四四一",
        442: "四四二",
        443: "四四三",
        451: "四五一",
        452: "四五二",
        453: "四五三",
        501: "五零一",
        502: "五零二",
        503: "五零三",
        511: "五一一",
        512: "五一二",
        513: "五一三",
        521: "五二一",
        522: "五二二",
        523: "五二三",
        531: "五三一",
        532: "五三二",
        533: "五三三",
        541: "五四一",
        542: "五四二",
        543: "五四三",
        601: "六零一",
        602: "六零二",
        603: "六零三",
        611: "六一一",
        612: "六一二",
        613: "六一三",
        621: "六二一",
        622: "六二二",
        623: "六二三",
        631: "六三一",
        632: "六三二",
        633: "六三三",
        641: "六四一",
        642: "六四二",
        643: "六四三",
      },
      dataChaOfD: {
        data_x: [],
        data_y: [],
      },
      dataChaOfZ: {
        data_x: [],
        data_y: [],
      },
      dataShangOfD: {
        data_x: [],
        data_y: [],
      },
      dataShangOfZ: {
        data_x: [],
        data_y: [],
      },
      tableData: [],
      inspectSearch: {
        page: 1,
        limit: 10,
        query_time: "",
      },
      pageTotal: 0,
    };
  },
  computed: {
    startSearch() {
      return this.$store.getters.startSearch;
    },
    ...mapGetters(["searchData"]),
  },
  watch: {
    startSearch(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
      if (newVal == true) {
        this.getInspectList();
        this.$store.commit("START_SEARCH", false);
      }
    },
  },
  mounted() {
    this.getInspectList();
  },

  methods: {
    // 上下分页
    handleCurrentChange(val) {
      this.inspectSearch.page = val;
      this.getInspectList();
    },
    // 每页显示多少条
    handleSizeChange(val) {
      this.inspectSearch.limit = val;
      this.getInspectList();
    },
    getDetail() {
      const para = Object.assign({}, this.searchData);
      getChaOfD(para).then((res) => {
        this.t1 = res.info;
        let info = res.info;
        if (info.length != 0) {
          let data_x = [];
          let data_y = [];
          info.forEach(function (i) {
            data_x.push(i._id);
            data_y.push(i.total);
          });
          let tmp = [];
          data_x.forEach((value) => tmp.push(this.relation[value]));
          this.dataChaOfD.data_x = tmp;
          this.dataChaOfD.data_y = data_y;
        }
      });
      getChaOfZ(para).then((res) => {
        this.t2 = res.info;
        let info = res.info;
        if (info.length != 0) {
          let data_x = [];
          let data_y = [];
          info.forEach(function (i) {
            data_x.push(i._id);
            data_y.push(i.total);
          });
          let tmp = [];
          data_x.forEach((value) => tmp.push(this.relation[value]));
          this.dataChaOfZ.data_x = tmp;
          this.dataChaOfZ.data_y = data_y;
        }
      });
      getShangOfD(para).then((res) => {
        this.t3 = res.info;
        let info = res.info;
        let data_x = [];
        let data_y = [];
        if (info.length != 0) {
          info.forEach(function (i) {
            data_x.push(i._id);
            data_y.push(i.total);
          });
          let tmp = [];
          data_x.forEach((value) => tmp.push(this.relation[value]));
          this.dataShangOfD.data_x = tmp;
          this.dataShangOfD.data_y = data_y;
        }
      });
      getShangOfZ(para).then((res) => {
        this.t4 = res.info;
        let info = res.info;
        let data_x = [];
        let data_y = [];
        if (info.length != 0) {
          info.forEach(function (i) {
            data_x.push(i._id);
            data_y.push(i.total);
          });
          let tmp = [];
          data_x.forEach((value) => tmp.push(this.relation[value]));
          this.dataShangOfZ.data_x = tmp;
          this.dataShangOfZ.data_y = data_y;
        }
      });
      this.$store.commit("SET_COD", this.dataChaOfD);
      this.$store.commit("SET_COZ", this.dataChaOfZ);
      this.$store.commit("SET_SOD", this.dataShangOfD);
      this.$store.commit("SET_SOZ", this.dataShangOfZ);
    },
    getInspectList() {
      this.getDetail();
      const para = Object.assign({}, this.inspectSearch, this.searchData);
      getInspect(para).then((res) => {
        this.pageTotal = res.pageTotal;
        let table = res.inspectList;
        table.forEach((item) => {
          item.inspect_time = parseToDate(item.inspect_time);
        });
        this.tableData = table;
      });
    },
    // getTodayList() {
    //   let queryData = {
    //     query_time: [
    //       new Date(new Date().setHours(0, 0, 0, 0)), //当日零点
    //       new Date(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1), //当日23:59:59
    //     ],
    //   };
    //   const para = Object.assign({}, this.inspectSearch, queryData);
    //   getInspect(para).then((res) => {
    //     console.log(res);
    //     this.pageTotal = res.pageTotal;
    //     this.tableData = res.inspectList;
    //   });
    // },
  },
};
</script>

<style scoped></style>
