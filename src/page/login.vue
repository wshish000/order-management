<template>
  <div class="login_page">
    <section class="form_contianer">
      <div class="titleArea rflex">
        <img class="logo" :src="logo" alt="查勤管理系统" />
        <span class="title"><i>查勤管理系统</i></span>
      </div>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        class="loginForm"
      >
        <el-form-item prop="username" label="账号" class="login-item">
          <el-input
            class="area"
            type="text"
            placeholder="用户名"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码" class="login-item">
          <el-input
            class="area"
            type="password"
            placeholder="密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('loginForm')"
            class="submit_btn"
            >SIGN IN</el-button
          >
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import logoImg from "@/assets/img/logo.png";
import { login } from "@/api/user";
import { setToken } from "../utils/auth";

export default {
  data() {
    return {
      logo: logoImg,
      loginForm: {
        username: "admin",
        password: "admin",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {},
  methods: {
    submitForm(loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          let userinfo = this.loginForm;
          login(userinfo).then((res) => {
            let userList = res.user;
            setToken("Token", userList.token);
            this.$router.push({ path: "/" });
            this.$store.dispatch("initLeftMenu"); //设置左边菜单始终为展开状态
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login_page {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #d3dce6;
  background-size: 100% 100%;
}
.form_contianer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 370px;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  .titleArea {
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 22px;
    width: 100%;
    padding-bottom: 20px;
    .logo {
      width: 40px;
      margin-right: 10px;
    }
    .title {
      i {
        color: #419fff;
      }
    }
  }

  .loginForm {
    .submit_btn {
      width: 100%;
      padding: 13px 0;
      font-size: 16px;
    }
    .el-button--primary {
      background-color: #419fff;
      border: 1px solid #419fff;
    }
  }
}
</style>
