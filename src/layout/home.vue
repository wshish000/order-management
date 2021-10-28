<template>
  <div class="home rflex">
    <left-menu></left-menu>
    <div
      class="menu_right wflex el-scrollbar"
      ref="menu_right"
      :style="{ left: sidebar.width + 'px' }"
    >
      <head-nav></head-nav>
      <div class="menu_content" ref="menu_content">
        <bread-nav></bread-nav>
        <router-view></router-view
        ><!--页面渲染入口-->
      </div>
      <footerNav></footerNav>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./leftMenu";
import BreadNav from "./breadNav";
import HeadNav from "./headNav";
import FooterNav from "./footerNav";
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: { FooterNav, HeadNav, BreadNav, LeftMenu },
  computed: {
    ...mapGetters(["sidebar"]),
  },
};
</script>

<style scoped lang="less">
.home {
  .menu_right {
    overflow: auto;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f6f7fc;
    .menu_content {
      position: relative;
      margin-top: 60px;
      width: 100%;
      background: #f0f2f5;
    }
  }
}
</style>
