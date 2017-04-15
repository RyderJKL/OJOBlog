<template>
  <div id="app">
    <el-row type="flex">
      <el-col :md="8">
        <el-col :span="10">
          <el-menu model="horizontal">
            <el-menu-item index="1"><router-link to="/sign-in">SignIN/SignUp</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/home">Home</router-link></el-menu-item>
          </el-menu>
        </el-col>
      </el-col>

      <el-col :md="16">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>


</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }

  html {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    max-width: 640px;
    margin: 0 auto;
    border: 1px solid red;

    body {
      width: 100%;
      background: lightgray;
    }
  }




</style>
