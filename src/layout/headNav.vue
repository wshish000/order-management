<template>
  <header
    class="head-nav rflex"
    :style="{ width: headNavWidth + 'px' }"
    id="header_container"
  >
    <div class="right-nav" ref="rightNav">
      <div class="userinfo-right rflex">
        <div class="userinfo">
          <el-dropdown>
            <span class="el-dropdown-link">
              <span class="name">hi,</span>
              <span class="name">{{ name }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "headNav",
  computed: {
    ...mapGetters(["sidebar", "name"]),
    headNavWidth() {
      return document.body.clientWidth - this.sidebar.width;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        location.reload();
      });
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
.userinfo-right {
  width: 150px;
  padding: 0 10px;
  justify-content: space-between;
}
.userinfo {
  line-height: 60px;
  text-align: right;
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
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
