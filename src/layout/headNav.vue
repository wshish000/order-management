<template>
  <header
    class="head-nav rflex"
    :style="{ width: headNavWidth + 'px' }"
    id="header_container"
  >
    <div class="right-nav" ref="rightNav"></div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "headNav",
  computed: {
    ...mapGetters(["sidebar"]),
    headNavWidth() {
      return document.body.clientWidth - this.sidebar.width;
    },
  },
};
</script>

<style lang="less" scoped>
.right-nav {
  display: flex;
  flex: 1;
  width: calc(100% - 180px);
  padding-right: 15px;
  justify-content: space-between;
  box-shadow: 0px 2px 5px 0px rgba(237, 233, 233, 0.5);
}
.head-nav {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 29;
  transition: width 0.2s;
  justify-content: space-between;
  height: 60px;
  box-sizing: border-box;
  background: #fff;
}
</style>
