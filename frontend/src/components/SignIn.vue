<template>
  <div class="form-sign-in-form">
    <div class="form-group">
      <div class="form-controller">
        <label for="userName">用户名:</label>
        <input id="userName"
               name="userName" type="text"
               v-model="userName">
      </div>

      <div class="form-group">
        <div class="controller">
          <label for="userPassword">密码:</label>
          <input type="password"
                 id="userPassword"
                 name="userPassword"
                 v-model="userPassword">
        </div>
      </div>

      <button @click="signIn()">登录</button>
    </div>
  </div>
</template>


<script>
  import api from '../api'
  export  default {
  	name: 'SignIn',
    data() {
      return {

        	userName: '',
          userPassword: '',
      }
    },
    methods: {
  		signIn () {
        const userSignInfo = {
          userName: this.userName,
          userPassword: this.userPassword
        };

        this.$store.dispatch('signIn', userSignInfo)
      }
    }
  }
</script>

