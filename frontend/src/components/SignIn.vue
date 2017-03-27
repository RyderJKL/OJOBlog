<template>
  <div class="form/sign-in-form">
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
  	name: 'singIn',
    data() {
      return {

        	userName: '',
          userPassword: '',
      }
    },
    method: {
  		signIn () {
  			const userSignInfo = {
  				userName: this.userName,
          userPassword: this.userPassword
        }

        api.getTopics().post(userSignInfo).then( (data)
          =>
        {console.log(data)})
      }
    }
  }
</script>

