<template>
  <div class="menu_left cflex" :style="{ width: sidebar.width + 'px' }">
    <div class="menu_page_top rflex">
      <img
        :class="['logo', { closeLogo: !sidebar.opened }]"
        :src="logo"
        alt="查勤管理系统"
      />
      <span class="title" v-show="sidebar.opened"><i>查勤管理系统</i></span>
    </div>
    <div class="menu_page_bottom is-scroll-left">
      <el-menu
        mode="vertical"
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        :background-color="menuObj.bgColor"
        :text-color="menuObj.textColor"
        :active-text-color="menuObj.activeTextColor"
        :style="{ width: sidebar.width + 'px' }"
      >
        <template v-for="(item, index) in permission_routers">
          <router-link
            v-if="!item.hidden && item.noDropdown"
            :to="item.path + '/' + item.children[0].path"
            :key="index"
          >
            <el-menu-item :index="item.path + '/' + item.children[0].path">
              <!--注意此处的顺序（一级菜单和二级菜单的区别。文档里的示例很清楚）-->
              <i v-if="item.meta.icon" :class="item.meta.icon"></i>
              <template #title>
                <span v-if="item.meta.title">{{ item.meta.title }}</span>
              </template>
            </el-menu-item>
          </router-link>
          <!--                        二级或多级菜单-->
          <el-sub-menu
            v-if="
              item.children &&
              item.children.length >= 1 &&
              !item.hidden &&
              !item.noDropdown
            "
            :index="item.path"
            :key="index"
          >
            <template class="hhh" #title>
              <i v-if="item.meta.icon" :class="item.meta.icon"></i>
              <span v-if="item.meta.title">{{ item.meta.title }}</span>
            </template>
            <router-link
              v-for="(citem, cindex) in item.children"
              :to="getIindex(citem, item)"
              :key="cindex"
            >
              <el-menu-item
                v-if="citem.meta.routerType != 'topmenu' && citem.meta.title"
                :index="getIindex(citem, item)"
              >
                <span>{{ citem.meta.title }}</span>
              </el-menu-item>
            </router-link>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import logoImg from "@/assets/img/logo.png";

export default {
  name: "leftMenu",
  data() {
    return {
      menuObj: {
        bgColor: "#fff",
        textColor: "#666",
        activeTextColor: "#419fff",
      },
      logo: logoImg,
    };
  },
  computed: {
    ...mapGetters(["permission_routers", "sidebar", "isCollapse"]),
  },
  methods: {
    getIindex(citem, item) {
      return citem.meta.titleList
        ? item.path + "/" + citem.path + "/" + citem.meta.titleList[0].path
        : item.path + "/" + citem.path;
    },
  },
};
</script>

<style lang="less" scoped>
@left-bgColor: #fff;
@icon-link: #ff6c60;
.menu_left {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}
.menu_page_top {
  width: 100%;
  height: 60px;
  background: #ffffff;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px 0px rgba(237, 233, 233, 0.5);
}
.logo {
  height: 36px;
  width: 36px;
  vertical-align: middle;
  display: inline-block;
}
.closeLogo {
  width: 30px;
  height: 30px;
}
.title {
  font-size: 22px;
  i {
    color: #419fff;
  }
}
.menu_page_bottom {
  width: 100%;
  /*overflow-y: scroll;*/
  overflow-x: hidden;
  flex: 1;
  margin-top: 3px;
  z-index: 10;
  box-shadow: 0 0 10px 0 rgba(230, 224, 224, 0.5);
}

.el-menu {
  border: none;
  height: 100%;
}
</style>
