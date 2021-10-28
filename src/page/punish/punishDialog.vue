<template>
  <el-dialog v-model="dialogVisible" title="奖惩登记" @close="closeDialog">
    <el-form
      :model="form"
      ref="form"
      :label-width="dialog.formLabelWidth"
      :rules="form_rules"
    >
      <el-form-item label="单位">
        <el-input v-model="form.unit" disabled />
      </el-form-item>
      <el-form-item prop="type" label="类型">
        <el-select v-model="form.type" placeholder="请选择类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="matter" label="事由">
        <el-input v-model="form.matter" />
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker v-model="form.punish_time" disabled type="datetime" />
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
import { addPunish } from "@/api/punish";
export default {
  name: "punishDialog",
  data() {
    return {
      form_rules: {
        type: [{ required: true, message: "不能为空！！！", trigger: "blur" }],
        matter: [
          { required: true, message: "不能为空！！！", trigger: "blur" },
        ],
      },
      options: [
        {
          value: "+",
          label: "形象良好，加分",
        },
        {
          value: "-",
          label: "形象不好，扣分",
        },
      ],
      selectVisible: false,
      dialogVisible: this.isShow,
      dialog: {
        formLabelWidth: "120px",
      },
      form: {
        unit_id: "",
        unit: "",
        type: "",
        matter: "",
        punish_time: "",
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
    console.log(this.form);
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          //表单数据验证完成之后，提交数据
          const data = Object.assign({}, this.form);
          console.log(data);
          addPunish(data).then((res) => {
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
