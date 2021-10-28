<template>
  <div class="bread_container rflex" id="bread_container">
    <span @click="handleLeftMenu" class="bars">
      <span v-if="changeBarDirection === false">
        <i class="el-icon-s-fold"></i>
      </span>
      <span v-else>
        <i class="el-icon-s-unfold"></i>
      </span>
    </span>
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item v-for="(name, index) in matchedArr" :key="index">
        {{ name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "breadNav",
  data() {
    return {
      changeBarDirection: false,
    };
  },
  computed: {
    matchedArr() {
      let temp = [],
        temps = [];
      this.$route.matched.filter((item) => {
        if (item.meta.title) {
          const name = item.meta.title;
          temp.push(name);
        }
      });
      temp.filter((item) => {
        if (!temps.includes(item)) {
          temps.push(item);
        }
      });
      return temps;
    },
  },
  methods: {
    handleLeftMenu() {
      this.$store.dispatch("setLeftCollapse"); // 折叠菜单
      this.$store.dispatch("handleLeftMenu"); // 改变菜单宽度 180->35/35-180
      this.changeBarDirection = !this.changeBarDirection;
    },
  },
};
</script>

<style scoped lang="less">
.bread_container {
  background-color: #eaebec;
  width: 100%;
  .bars {
    fload: left;
    margin: 4px 10px;
    cursor: pointer;
    .isactive {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      transition: 0.38s;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
  }
  .breadcrumb {
    height: 30px;
    line-height: 30px;
    .breadbutton {
      float: left;
      margin: 4px 5px 0 0;
    }
  }
}
</style>
