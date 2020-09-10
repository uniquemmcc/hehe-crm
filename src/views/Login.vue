<template>
  <div class="login">
    <div class="content">
      <div class="content-logo">

      </div>

      <div class="content-form">
        <div class="item">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="请输入用户账号"
            prefix-icon="el-icon-search"
          ></el-input>
        </div>
        <div class="item">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="请输入密码"
            prefix-icon="el-icon-search"
          ></el-input>
        </div>
        <div class="item check">
          <el-input v-model.number="ruleForm.age"></el-input>
          <check-code></check-code>
          <!-- <div id="imgbox"></div> -->
        </div>
        <div class="item">
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">登录</el-button>
        </div>
        <p ><span>忘记密码</span></p>
      </div>
    </div>
  </div>
</template>

<script>
// import CheckCode from "_c/CheckCode";
import axios from "axios";
export default {
  name: "login",
  components: {
    // CheckCode,
  },
  data() {
    return {
      ruleForm: [],
    };
  },
  mounted() {
    
  },
  methods: {
   
  },
};
</script>

<style lang="scss" scope>
@import '_a/css/style.scss';
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: px2rem(592);
    min-height: px2rem(565);
    background: #ffffff;
    display: flex;
    flex-direction: column;
    &-logo {
      height: px2rem(120);
      padding: 0 px2rem(16);
    }
    &-form {
      padding: 0 px2rem(55) px2rem(55) px2rem(55);

.el-input,.el-input__inner{
    height: px2rem(60);
}

      .el-button{
         height: px2rem(70);
      }
      p{
text-align: right;color:#666666;
font-size: px2rem(20);
 span {
     padding: 10px 0 10px 10px;
cursor: pointer;
 }


      }
    }
  }
}
.item {
  margin-bottom: px2rem(30);
}
.check {
  position: relative;
  #imgContainer {
    position: absolute;
    left: 0;
    right: 0;
  }
}
.el-input__inner,
.el-button {
  border-radius: 0;
}
// .el-input,
// .el-input__inner{
//       height: 60px;
//     font-size: 20px;
// }
</style>