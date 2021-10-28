<template>
  <div class="fillcontain">
    <div class="fillcontainer" ref="fillcontainer">
      <el-input v-model="filterText" placeholder="输入姓名查找" />
      <el-tree
        ref="tree"
        class="filter-tree"
        :node-key="tree"
        :data="data"
        :props="defaultProps"
        accordion
        @node-contextmenu="rightClick"
        :filter-node-method="filterNode">
        <template #default="scope">
          <div>
            <span>{{scope.node.label}}</span>
          </div>
        </template>
      </el-tree>
    </div>
  </div>
  <div id="contextmenu" v-show="menuVisible" class="menu">
    <div class="contextmenu_item" @click="cha(currentData)">查哨</div>
    <div class="contextmenu_item" @click="shang(currentData)">上哨</div>
  </div>

  <inspect-dialog
    v-if="inspectDialog.show"
    :isShow="inspectDialog.show"
    :dialogData="inspectDialog.dialogData"
    @closeDialog="hideInspectDialog"
  ></inspect-dialog>
</template>

<script>
import InspectDialog from "./inspectDialog";
export default {
  name: "register",
  components: {
    InspectDialog,
  },
  data() {
    return {
      inspectDialog: {
        show: false,
        dialogData: {},
      },
      tree: "tree",
      menuVisible: false,
      currentData: "",
      filterText: "",
      data: [
        {
          id: 1,
          label: "执勤一大队",
          children: [
            {
              id: 101,
              uid: "101",
              label: "一零一",
              zhongdui: "0",
              dadui: "执勤一大队",
            },
            {
              id: 102,
              uid: "102",
              label: "一零二",
              zhongdui: "0",
              dadui: "执勤一大队",
            },
            {
              id: 103,
              uid: "103",
              label: "一零三",
              zhongdui: "0",
              dadui: "执勤一大队",
            },
            {
              id: 110,
              label: "执勤一中队",
              children: [
                {
                  id: 111,
                  uid: "111",
                  label: "一一一",
                  zhongdui: "执勤一中队",
                  dadui: "执勤一大队",
                },
                {
                  id: 112,
                  uid: "112",
                  label: "一一二",
                  zhongdui: "执勤一中队",
                  dadui: "执勤一大队",
                },
                {
                  id: 113,
                  uid: "113",
                  label: "一一三",
                  zhongdui: "执勤一中队",
                  dadui: "执勤一大队",
                },
              ],
            },
            {
              id: 120,
              label: "执勤二中队",
              children: [
                {
                  id: 121,
                  uid: "121",
                  label: "一二一",
                  zhongdui: "执勤二中队",
                  dadui: "执勤一大队",
                },
                {
                  id: 122,
                  uid: "122",
                  label: "一二二",
                  zhongdui: "执勤二中队",
                  dadui: "执勤一大队",
                },
                {
                  id: 123,
                  uid: "123",
                  label: "一二三",
                  zhongdui: "执勤二中队",
                  dadui: "执勤一大队",
                },
              ],
            },
            {
              id: 130,
              label: "尧都中队",
              children: [
                {
                  id: 131,
                  uid: "131",
                  label: "一三一",
                  zhongdui: "尧都中队",
                  dadui: "执勤一大队",
                },
                {
                  id: 132,
                  uid: "132",
                  label: "一三二",
                  zhongdui: "尧都中队",
                  dadui: "执勤一大队",
                },
                {
                  id: 133,
                  uid: "133",
                  label: "一三三",
                  zhongdui: "尧都中队",
                  dadui: "执勤一大队",
                },
              ],
            },
            {
              id: 140,
              label: "乡宁中队",
              children: [
                {
                  id: 141,
                  uid: "141",
                  label: "一四一",
                  zhongdui: "乡宁中队",
                  dadui: "执勤一大队",
                },
                {
                  id: 142,
                  uid: "142",
                  label: "一四二",
                  zhongdui: "乡宁中队",
                  dadui: "执勤一大队",
                },
                {
                  id: 143,
                  uid: "143",
                  label: "一四三",
                  zhongdui: "乡宁中队",
                  dadui: "执勤一大队",
                },
              ],
            },
            {
              id: 150,
              label: "机动中队",
              children: [
                {
                  id: 151,
                  uid: "151",
                  label: "一五一",
                  zhongdui: "机动中队",
                  dadui: "执勤一大队",
                },
                {
                  id: 152,
                  uid: "152",
                  label: "一五二",
                  zhongdui: "机动中队",
                  dadui: "执勤一大队",
                },
                {
                  id: 153,
                  uid: "153",
                  label: "一五三",
                  zhongdui: "机动中队",
                  dadui: "执勤一大队",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "执勤二大队",
          children: [
            {
              id: 201,
              uid: "201",
              label: "二零一",
              zhongdui: "0",
              dadui: "执勤二大队",
            },
            {
              id: 202,
              uid: "202",
              label: "二零二",
              zhongdui: "0",
              dadui: "执勤二大队",
            },
            {
              id: 203,
              uid: "203",
              label: "二零三",
              zhongdui: "0",
              dadui: "执勤二大队",
            },
            {
              id: 210,
              label: "执勤三中队",
              children: [
                {
                  id: 211,
                  uid: "211",
                  label: "二一一",
                  zhongdui: "执勤三中队",
                  dadui: "执勤二大队",
                },
                {
                  id: 212,
                  uid: "212",
                  label: "二一二",
                  zhongdui: "执勤三中队",
                  dadui: "执勤二大队",
                },
                {
                  id: 213,
                  uid: "213",
                  label: "二一三",
                  zhongdui: "执勤三中队",
                  dadui: "执勤二大队",
                },
              ],
            },
            {
              id: 220,
              label: "霍州中队",
              children: [
                {
                  id: 221,
                  uid: "221",
                  label: "二二一",
                  zhongdui: "霍州中队",
                  dadui: "执勤二大队",
                },
                {
                  id: 222,
                  uid: "222",
                  label: "二二二",
                  zhongdui: "霍州中队",
                  dadui: "执勤二大队",
                },
                {
                  id: 223,
                  uid: "223",
                  label: "二二三",
                  zhongdui: "霍州中队",
                  dadui: "执勤二大队",
                },
              ],
            },
            {
              id: 230,
              label: "洪洞中队",
              children: [
                {
                  id: 231,
                  uid: "231",
                  label: "二三一",
                  zhongdui: "洪洞中队",
                  dadui: "执勤二大队",
                },
                {
                  id: 232,
                  uid: "232",
                  label: "二三二",
                  zhongdui: "洪洞中队",
                  dadui: "执勤二大队",
                },
                {
                  id: 233,
                  uid: "233",
                  label: "二三三",
                  zhongdui: "洪洞中队",
                  dadui: "执勤二大队",
                },
              ],
            },
            {
              id: 240,
              label: "汾西中队",
              children: [
                {
                  id: 241,
                  uid: "241",
                  label: "二四一",
                  zhongdui: "汾西中队",
                  dadui: "执勤二大队",
                },
                {
                  id: 242,
                  uid: "242",
                  label: "二四二",
                  zhongdui: "汾西中队",
                  dadui: "执勤二大队",
                },
                {
                  id: 243,
                  uid: "243",
                  label: "二四三",
                  zhongdui: "汾西中队",
                  dadui: "执勤二大队",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          label: "执勤三大队",
          children: [
            {
              id: 301,
              uid: "301",
              label: "三零一",
              zhongdui: "0",
              dadui: "执勤三大队",
            },
            {
              id: 302,
              uid: "302",
              label: "三零二",
              zhongdui: "0",
              dadui: "执勤三大队",
            },
            {
              id: 303,
              uid: "303",
              label: "三零三",
              zhongdui: "0",
              dadui: "执勤三大队",
            },
            {
              id: 310,
              label: "执勤四中队",
              children: [
                {
                  id: 311,
                  uid: "311",
                  label: "三一一",
                  zhongdui: "执勤四中队",
                  dadui: "执勤三大队",
                },
                {
                  id: 312,
                  uid: "312",
                  label: "三一二",
                  zhongdui: "执勤四中队",
                  dadui: "执勤三大队",
                },
                {
                  id: 313,
                  uid: "313",
                  label: "三一三",
                  zhongdui: "执勤四中队",
                  dadui: "执勤三大队",
                },
              ],
            },
            {
              id: 320,
              label: "侯马中队",
              children: [
                {
                  id: 321,
                  uid: "321",
                  label: "三二一",
                  zhongdui: "侯马中队",
                  dadui: "执勤三大队",
                },
                {
                  id: 322,
                  uid: "322",
                  label: "三二二",
                  zhongdui: "侯马中队",
                  dadui: "执勤三大队",
                },
                {
                  id: 323,
                  uid: "323",
                  label: "三二三",
                  zhongdui: "侯马中队",
                  dadui: "执勤三大队",
                },
              ],
            },
            {
              id: 330,
              label: "曲沃中队",
              children: [
                {
                  id: 331,
                  uid: "331",
                  label: "三三一",
                  zhongdui: "曲沃中队",
                  dadui: "执勤三大队",
                },
                {
                  id: 332,
                  uid: "332",
                  label: "三三二",
                  zhongdui: "曲沃中队",
                  dadui: "执勤三大队",
                },
                {
                  id: 333,
                  uid: "333",
                  label: "三三三",
                  zhongdui: "曲沃中队",
                  dadui: "执勤三大队",
                },
              ],
            },
            {
              id: 340,
              label: "翼城中队",
              children: [
                {
                  id: 341,
                  uid: "341",
                  label: "三四一",
                  zhongdui: "翼城中队",
                  dadui: "执勤三大队",
                },
                {
                  id: 342,
                  uid: "342",
                  label: "三四二",
                  zhongdui: "翼城中队",
                  dadui: "执勤三大队",
                },
                {
                  id: 343,
                  uid: "343",
                  label: "三四三",
                  zhongdui: "翼城中队",
                  dadui: "执勤三大队",
                },
              ],
            },
          ],
        },
        {
          id: 4,
          label: "执勤四大队",
          children: [
            {
              id: 401,
              uid: "401",
              label: "四零一",
              zhongdui: "0",
              dadui: "执勤四大队",
            },
            {
              id: 402,
              uid: "402",
              label: "四零二",
              zhongdui: "0",
              dadui: "执勤四大队",
            },
            {
              id: 403,
              uid: "403",
              label: "四零三",
              zhongdui: "0",
              dadui: "执勤四大队",
            },
            {
              id: 410,
              label: "吉县中队",
              children: [
                {
                  id: 411,
                  uid: "411",
                  label: "四一一",
                  zhongdui: "吉县中队",
                  dadui: "执勤四大队",
                },
                {
                  id: 412,
                  uid: "412",
                  label: "四一二",
                  zhongdui: "吉县中队",
                  dadui: "执勤四大队",
                },
                {
                  id: 413,
                  uid: "413",
                  label: "四一三",
                  zhongdui: "吉县中队",
                  dadui: "执勤四大队",
                },
              ],
            },
            {
              id: 420,
              label: "大宁中队",
              children: [
                {
                  id: 421,
                  uid: "421",
                  label: "四二一",
                  zhongdui: "大宁中队",
                  dadui: "执勤四大队",
                },
                {
                  id: 422,
                  uid: "422",
                  label: "四二二",
                  zhongdui: "大宁中队",
                  dadui: "执勤四大队",
                },
                {
                  id: 423,
                  uid: "423",
                  label: "四二三",
                  zhongdui: "大宁中队",
                  dadui: "执勤四大队",
                },
              ],
            },
            {
              id: 430,
              label: "隰县中队",
              children: [
                {
                  id: 431,
                  uid: "431",
                  label: "四三一",
                  zhongdui: "隰县中队",
                  dadui: "执勤四大队",
                },
                {
                  id: 432,
                  uid: "432",
                  label: "四三二",
                  zhongdui: "隰县中队",
                  dadui: "执勤四大队",
                },
                {
                  id: 433,
                  uid: "433",
                  label: "四三三",
                  zhongdui: "隰县中队",
                  dadui: "执勤四大队",
                },
              ],
            },
            {
              id: 440,
              label: "永和中队",
              children: [
                {
                  id: 441,
                  uid: "441",
                  label: "四四一",
                  zhongdui: "永和中队",
                  dadui: "执勤四大队",
                },
                {
                  id: 442,
                  uid: "442",
                  label: "四四二",
                  zhongdui: "永和中队",
                  dadui: "执勤四大队",
                },
                {
                  id: 443,
                  uid: "443",
                  label: "四四三",
                  zhongdui: "永和中队",
                  dadui: "执勤四大队",
                },
              ],
            },
            {
              id: 450,
              label: "蒲县中队",
              children: [
                {
                  id: 451,
                  uid: "451",
                  label: "四五一",
                  zhongdui: "蒲县中队",
                  dadui: "执勤四大队",
                },
                {
                  id: 452,
                  uid: "452",
                  label: "四五二",
                  zhongdui: "蒲县中队",
                  dadui: "执勤四大队",
                },
                {
                  id: 453,
                  uid: "453",
                  label: "四五三",
                  zhongdui: "蒲县中队",
                  dadui: "执勤四大队",
                },
              ],
            },
          ],
        },
        {
          id: 5,
          label: "执勤五大队",
          children: [
            {
              id: 501,
              uid: "501",
              label: "五零一",
              zhongdui: "0",
              dadui: "执勤五大队",
            },
            {
              id: 502,
              uid: "502",
              label: "五零二",
              zhongdui: "0",
              dadui: "执勤五大队",
            },
            {
              id: 503,
              uid: "503",
              label: "五零三",
              zhongdui: "0",
              dadui: "执勤五大队",
            },
            {
              id: 510,
              label: "襄汾中队",
              children: [
                {
                  id: 511,
                  uid: "511",
                  label: "五一一",
                  zhongdui: "襄汾中队",
                  dadui: "执勤五大队",
                },
                {
                  id: 512,
                  uid: "512",
                  label: "五一二",
                  zhongdui: "襄汾中队",
                  dadui: "执勤五大队",
                },
                {
                  id: 513,
                  uid: "513",
                  label: "五一三",
                  zhongdui: "襄汾中队",
                  dadui: "执勤五大队",
                },
              ],
            },
            {
              id: 520,
              label: "古县中队",
              children: [
                {
                  id: 521,
                  uid: "521",
                  label: "五二一",
                  zhongdui: "古县中队",
                  dadui: "执勤五大队",
                },
                {
                  id: 522,
                  uid: "522",
                  label: "五二二",
                  zhongdui: "古县中队",
                  dadui: "执勤五大队",
                },
                {
                  id: 523,
                  uid: "523",
                  label: "五二三",
                  zhongdui: "古县中队",
                  dadui: "执勤五大队",
                },
              ],
            },
            {
              id: 530,
              label: "安泽中队",
              children: [
                {
                  id: 531,
                  uid: "531",
                  label: "五三一",
                  zhongdui: "安泽中队",
                  dadui: "执勤五大队",
                },
                {
                  id: 532,
                  uid: "532",
                  label: "五三二",
                  zhongdui: "安泽中队",
                  dadui: "执勤五大队",
                },
                {
                  id: 533,
                  uid: "533",
                  label: "五三三",
                  zhongdui: "安泽中队",
                  dadui: "执勤五大队",
                },
              ],
            },
            {
              id: 540,
              label: "浮山中队",
              children: [
                {
                  id: 541,
                  uid: "541",
                  label: "五四一",
                  zhongdui: "浮山中队",
                  dadui: "执勤五大队",
                },
                {
                  id: 542,
                  uid: "542",
                  label: "五四二",
                  zhongdui: "浮山中队",
                  dadui: "执勤五大队",
                },
                {
                  id: 543,
                  uid: "543",
                  label: "五四三",
                  zhongdui: "浮山中队",
                  dadui: "执勤五大队",
                },
              ],
            },
          ],
        },
        {
          id: 6,
          label: "勤务保障大队",
          children: [
            {
              id: 601,
              uid: "601",
              label: "六零一",
              zhongdui: "0",
              dadui: "勤务保障大队",
            },
            {
              id: 602,
              uid: "602",
              label: "六零二",
              zhongdui: "0",
              dadui: "勤务保障大队",
            },
            {
              id: 603,
              uid: "603",
              label: "六零三",
              zhongdui: "0",
              dadui: "勤务保障大队",
            },
            {
              id: 610,
              label: "警卫勤务中队",
              children: [
                {
                  id: 611,
                  uid: "611",
                  label: "六一一",
                  zhongdui: "警卫勤务中队",
                  dadui: "勤务保障大队",
                },
                {
                  id: 612,
                  uid: "612",
                  label: "六一二",
                  zhongdui: "警卫勤务中队",
                  dadui: "勤务保障大队",
                },
                {
                  id: 613,
                  uid: "613",
                  label: "六一三",
                  zhongdui: "警卫勤务中队",
                  dadui: "勤务保障大队",
                },
              ],
            },
            {
              id: 620,
              label: "卫生队",
              children: [
                {
                  id: 621,
                  uid: "621",
                  label: "六二一",
                  zhongdui: "卫生队",
                  dadui: "勤务保障大队",
                },
                {
                  id: 622,
                  uid: "622",
                  label: "六二二",
                  zhongdui: "卫生队",
                  dadui: "勤务保障大队",
                },
                {
                  id: 623,
                  uid: "623",
                  label: "六二三",
                  zhongdui: "卫生队",
                  dadui: "勤务保障大队",
                },
              ],
            },
            {
              id: 630,
              label: "供应保障中队",
              children: [
                {
                  id: 631,
                  uid: "631",
                  label: "六三一",
                  zhongdui: "供应保障中队",
                  dadui: "勤务保障大队",
                },
                {
                  id: 632,
                  uid: "632",
                  label: "六三二",
                  zhongdui: "供应保障中队",
                  dadui: "勤务保障大队",
                },
                {
                  id: 633,
                  uid: "633",
                  label: "六三三",
                  zhongdui: "供应保障中队",
                  dadui: "勤务保障大队",
                },
              ],
            },
            {
              id: 640,
              label: "教导队",
              children: [
                {
                  id: 641,
                  uid: "641",
                  label: "六四一",
                  zhongdui: "教导队",
                  dadui: "勤务保障大队",
                },
                {
                  id: 642,
                  uid: "642",
                  label: "六四二",
                  zhongdui: "教导队",
                  dadui: "勤务保障大队",
                },
                {
                  id: 643,
                  uid: "643",
                  label: "六四三",
                  zhongdui: "教导队",
                  dadui: "勤务保障大队",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },

  methods: {
    hideInspectDialog() {
      this.inspectDialog.show = false;
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    rightClick(key, data) {
      if (data.children && data.children != null) {
        this.menuVisible = false;
      } else {
        this.currentData = data;
        this.menuVisible = false; // 先把模态框关死，目的是 第二次或者第n次右键鼠标的时候 它默认的是true
        this.menuVisible = true; // 显示模态窗口，跳出自定义菜单栏
        key.preventDefault(); //关闭浏览器右键默认事件,key就相当于event
        console.log(data);
        var menu = document.querySelector(".menu");
        this.styleMenu(key, menu);
      }
    },
    foo() {
      // 取消鼠标监听事件 菜单栏
      this.menuVisible = false;
      document.removeEventListener("click", this.foo); // 关掉监听，
    },
    styleMenu(key, menu) {
      document.addEventListener("click", this.foo); // 给整个document新增监听鼠标事件，点击任何位置执行foo方法
      console.log(key.clientX);
      menu.style.left = key.clientX - 180 + 10 + "px";
      menu.style.top = key.clientY - 50 - 10 + "px";
    },
    cha(currentData) {
      console.log(currentData);
      let temp = {
        u_id: currentData.uid,
        name: currentData.label,
        type: "查哨",
        inspect_time: new Date(),
        site: currentData.zhongdui,
        zhongdui: currentData.zhongdui,
        dadui: currentData.dadui,
      };
      this.inspectDialog.dialogData = { ...temp };
      this.showInspectDialog();
      console.log(this.inspectDialog.show);
    },
    shang(currentData) {
      console.log(currentData);
      let temp = {
        u_id: currentData.uid,
        name: currentData.label,
        type: "上哨",
        inspect_time: new Date(),
        site: currentData.zhongdui,
        zhongdui: currentData.zhongdui,
        dadui: currentData.dadui,
      };
      this.inspectDialog.dialogData = { ...temp };
      this.showInspectDialog();
    },
    showInspectDialog() {
      this.inspectDialog.show = true;
    },
  },
};
</script>

<style scoped>
.menu {
  position: absolute;
  background-color: #fff;
  width: 100px;
  /*height: 106px;*/
  font-size: 12px;
  color: #444040;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  white-space: nowrap;
  z-index: 1000;
}
.contextmenu_item {
  display: block;
  line-height: 34px;
  text-align: center;
}
.contextmenu_item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.contextmenu_item:hover {
  cursor: pointer;
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
</style>
