<template>
  <div class="pagination">
    <el-pagination
      v-if="pageTotal > 0"
      background
      v-model:currentPage="paginations.pageIndex"
      :page-size="paginations.pageSize"
      :layout="paginations.layout"
      :total="pageTotal"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "pagination",
  data() {
    return {
      paginations: {
        pageIndex: 1, //当前位于哪页
        pageSize: 10, //1页显示多少条
        layout: "total,prev,pager,next,jumper", //翻页属性
      },
    };
  },
  emits: ["handleSizeChange", "handleCurrentChange"],
  props: {
    pageTotal: Number,
  },
  methods: {
    //上下分页pageIndex
    handleCurrentChange(page) {
      this.$emit("handleCurrentChange", page);
    },
    //每页多少条切换pageSize
    handleSizeChange(page_size) {
      this.$emit("handleSizeChange", page_size);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: right;
  padding: 10px 18px;
}
</style>
