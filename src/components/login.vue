<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="login_avatar">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单 -->
      <div class="login_form">
        <el-form label-width="0px" ref="loginform" :model="loginform">
          <el-form-item>
            <el-input
              prefix-icon="iconfont icon-user"
              v-model="loginform.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              prefix-icon="iconfont icon-3702mima"
              v-model="loginform.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="Login">登录</el-button>
            <el-button type="info" @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginform: {
        username: "",
        password: "",
      },
    }
  },
  methods: {
    resetForm() {
      // console.log(this.$refs.loginform)
      this.$refs.loginform.resetFields()
    },
    async Login() {
      // 将data解析出来
      const { data: res } = await this.$http.post("/login", this.loginform)
      // console.log(data)
      if (res.meta.status !== 200) return this.$message.error("登录失败")
      this.$message({
        message: "登录成功",
        type: "success",
      })
      window.sessionStorage.setItem("token", res.data.token)
      // console.log(res.data.token)
      this.$router.replace({
        path: "/home",
      })
    },
  },
}
</script>

<style scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  /* text-align: center; */
}
.login_box {
  width: 450px;
  box-sizing: border-box;
  padding: 0px 15px 0px 15px;
  height: 300px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_avatar img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: #eee;
}
.login_avatar {
  border-radius: 50%;
  height: 130px;
  width: 130px;
  position: absolute;
  /* background-color: red; */
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
}
.login_form {
  margin-top: 120px;
}
/* .el-form-item{
    width: 400px;
    
} */
.btn {
  display: flex;
  justify-content: flex-end;
}
</style>
>
