<template>
  <div class="login_continer">
    <div class="login_box">
      <h3 class="login_box_title">系统登录</h3>
      <el-form  ref="LoginFormRef" label-width="0px" class="login_form" :model="loginForm" :rules="loginRelus">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-unlock"></el-input>
        </el-form-item>
        <el-form-item class="box_check">
          <el-checkbox >记住密码</el-checkbox>
        </el-form-item>
        <el-form-item class="box_btns">
          <el-button type="primary" @click="login">登  录</el-button>
          <el-button type="info" @click="resetLoginform('LoginFormRef')">重  置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRelus: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      const _this = this
      this.$axios.post('/login', {
        username: this.loginForm.username,
        password: this.loginForm.password
      })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            _this.$store.commit('login', _this.loginForm)
            var path = this.$route.query.redirect
            this.$router.replace({ path: path === '/' || path === undefined ? '/index' : path })
            this.$message.success('登录成功')
            this.$router.replace({ path: '/index' })
          } else {
            this.$message.error('账户名或密码错误')
          }
          console.log(successResponse)
        })
        .catch(failResponse => {
          this.$message.error('连接失败')
          console.log(failResponse)
        })
    },
    resetLoginform (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.login_continer {
  background: url("../assets/background_1.jpg");
  height: 100%;
}
  .login_box{
    background: white;
    width: 400px;
    height: 300px;
    border-radius: 5px;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
  .login_box_title{
    text-align: center;
  }
  .login_form{
    width: 300px;
    left: 50px;
    position: absolute;
  }
  .box_check{
    margin-bottom: 10px;
    display: flex;
    justify-content:center;
  }
  .box_btns{
    display: flex;
    justify-content: center;
  }
</style>
