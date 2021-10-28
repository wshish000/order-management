<template>
  <el-dialog v-model="dialogVisible" title="查勤登记" @close="closeDialog">
    <el-form
      :model="form"
      ref="form"
      :label-width="dialog.formLabelWidth"
      :rules="form_rules"
    >
      <el-form-item label="姓名">
        <el-input v-model="form.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-input v-model="form.type" disabled></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker
          v-model="form.inspect_time"
          disabled
          type="datetime"
        ></el-date-picker>
      </el-form-item>
      <el-form-item prop="site" label="地点">
        <el-input v-if="!selectVisible" v-model="form.site" disabled></el-input>
        <el-select
          v-if="selectVisible"
          v-model="form.site"
          placeholder="Select"
          aria-required="true"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit('form')">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { addInspect } from "@/api/inspect";
export default {
  name: "inspectDialog",
  data() {
    return {
      options: [],
      daduiOrder: [
        "执勤一大队",
        "执勤二大队",
        "执勤三大队",
        "执勤四大队",
        "执勤五大队",
        "勤务保障大队",
      ],
      form_rules: {
        site: [{ required: true, message: "不能为空！！！", trigger: "blur" }],
      },
      selectVisible: false,
      bianzhi: [
        [
          {
            value: "执勤一中队",
            label: "执勤一中队",
          },
          {
            value: "执勤二中队",
            label: "执勤二中队",
          },
          {
            value: "尧都中队",
            label: "尧都中队",
          },
          {
            value: "乡宁中队",
            label: "乡宁中队",
          },
          {
            value: "机动中队",
            label: "机动中队",
          },
        ],
        [
          {
            value: "执勤三中队",
            label: "执勤三中队",
          },
          {
            value: "霍州中队",
            label: "霍州中队",
          },
          {
            value: "洪洞中队",
            label: "洪洞中队",
          },
          {
            value: "汾西中队",
            label: "汾西中队",
          },
        ],
        [
          {
            value: "执勤四中队",
            label: "执勤四中队",
          },
          {
            value: "侯马中队",
            label: "侯马中队",
          },
          {
            value: "曲沃中队",
            label: "曲沃中队",
          },
          {
            value: "翼城中队",
            label: "翼城中队",
          },
        ],
        [
          {
            value: "吉县中队",
            label: "吉县中队",
          },
          {
            value: "大宁中队",
            label: "大宁中队",
          },
          {
            value: "隰县中队",
            label: "隰县中队",
          },
          {
            value: "永和中队",
            label: "永和中队",
          },
          {
            value: "蒲县中队",
            label: "蒲县中队",
          },
        ],
        [
          {
            value: "襄汾中队",
            label: "襄汾中队",
          },
          {
            value: "古县中队",
            label: "古县中队",
          },
          {
            value: "安泽中队",
            label: "安泽中队",
          },
          {
            value: "浮山中队",
            label: "浮山中队",
          },
        ],
        [
          {
            value: "警卫勤务中队",
            label: "警卫勤务中队",
          },
          {
            value: "卫生队",
            label: "卫生队",
          },
          {
            value: "供应保障中队",
            label: "供应保障中队",
          },
          {
            value: "教导队",
            label: "教导队",
          },
        ],
      ],
      dialogVisible: this.isShow,
      dialog: {
        formLabelWidth: "120px",
      },
      form: {
        u_id: "",
        name: "",
        type: "",
        inspect_time: "",
        site: "",
        zhongdui: "",
        dadui: "",
      },
    };
  },
  emits: ["closeDialog"], //填加此句，不会报如下警告Extraneous non-emits event listeners
  props: {
    isShow: Boolean,
    dialogData: Object,
  },
  mounted() {
    this.form = this.dialogData;
    if (this.form.zhongdui == "0") {
      this.options = this.bianzhi[this.daduiOrder.indexOf(this.form.dadui)];
      this.selectVisible = true;
      this.form.site = "";
    }
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          //表单数据验证完成之后，提交数据
          const data = Object.assign({}, this.form);
          console.log(data);
          addInspect(data).then((res) => {
            console.log(res);
            this.$message({
              message: "填加成功",
              type: "success",
            });
          });
          this.dialogVisible = false;
        }
      });
    },
    closeDialog() {
      //<el-dialog>如果不加@close，那么点击以后弹窗不能弹出第二次，不知道为什么，很奇怪。
      this.$emit("closeDialog");
    },
  },
};
</script>

<style scoped></style>
