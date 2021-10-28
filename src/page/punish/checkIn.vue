<template>
  <div class="fillcontain">
    <div class="fillcontainer" ref="fillcontainer">
      <el-row>
        <el-col v-for="item in chart" :key="item.id" :span="4">
          <el-table :data="item.children" style="width: 100%" stripe>
            <el-table-column prop="unit" :label="item.unit_d" align="center">
              <template #default="scope">
                <el-button
                  type="primary"
                  plain
                  @click="
                    addPunish(scope.column.label, scope.$index, scope.row)
                  "
                  >{{ scope.row.unit }}</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
  <punish-dialog
    v-if="punishDialog.show"
    :isShow="punishDialog.show"
    :dialogData="punishDialog.dialogData"
    @closeDialog="hidePunishDialog"
  />
</template>

<script>
import PunishDialog from "./punishDialog";
export default {
  name: "checkIn",
  components: {
    PunishDialog,
  },
  data() {
    return {
      chart: [
        {
          id: "1",
          unit_d: "执勤一大队",
          children: [
            { id: "11", unit: "执勤一中队" },
            { id: "12", unit: "执勤二中队" },
            { id: "13", unit: "尧都中队" },
            { id: "14", unit: "乡宁中队" },
            { id: "15", unit: "机动中队" },
          ],
        },
        {
          id: "2",
          unit_d: "执勤二大队",
          children: [
            { id: "21", unit: "执勤三中队" },
            { id: "22", unit: "霍州中队" },
            { id: "23", unit: "洪洞中队" },
            { id: "24", unit: "汾西中队" },
          ],
        },
        {
          id: "3",
          unit_d: "执勤三大队",
          children: [
            { id: "31", unit: "执勤四中队" },
            { id: "32", unit: "侯马中队" },
            { id: "33", unit: "曲沃中队" },
            { id: "34", unit: "翼城中队" },
          ],
        },
        {
          id: "4",
          unit_d: "执勤四大队",
          children: [
            { id: "41", unit: "吉县中队" },
            { id: "42", unit: "大宁中队" },
            { id: "43", unit: "隰县中队" },
            { id: "44", unit: "永和中队" },
            { id: "45", unit: "蒲县中队" },
          ],
        },
        {
          id: "5",
          unit_d: "执勤五大队",
          children: [
            { id: "51", unit: "襄汾中队" },
            { id: "52", unit: "古县中队" },
            { id: "53", unit: "安泽中队" },
            { id: "54", unit: "浮山中队" },
          ],
        },
        {
          id: "6",
          unit_d: "勤务保障大队",
          children: [
            { id: "61", unit: "警卫勤务中队" },
            { id: "62", unit: "卫生队" },
            { id: "63", unit: "供应保障中队" },
            { id: "64", unit: "教导队" },
          ],
        },
      ],
      punishDialog: {
        show: false,
        dialogData: {},
      },
    };
  },
  methods: {
    addPunish(dadui, index, row) {
      console.log(dadui);
      console.log(index);
      console.log(row);
      let temp = {
        unit_id: row.id,
        unit: row.unit,
        type: "",
        matter: "",
        punish_time: new Date(),
        dadui: dadui,
      };
      this.punishDialog.dialogData = { ...temp };
      this.showPunishDialog();
    },
    showPunishDialog() {
      this.punishDialog.show = true;
    },
    hidePunishDialog() {
      this.punishDialog.show = false;
    },
  },
};
</script>

<style scoped>
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
