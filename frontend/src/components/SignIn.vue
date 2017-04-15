<template>
  <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="100px">
    <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="ruleForm.userName" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="userPassword" >
      <el-input type="password" v-model="ruleForm.userPassword" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass" >
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age" >
      <el-input v-model.number="ruleForm.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<!--<style lang="scss" scope>-->
  <!--.form-box {-->

  <!--}-->
<!--</style>-->
<script>
//  import api from '../api'
  export  default {
  	name: 'SignIn',
    data() {
      let checkAge = (rule, value, callback) => {
          if (!value) {
              return callback(new Error('年龄不能为空'))
          }

          setTimeout( () => {
              if (!Number.isInteger(value)) {
                callback(new Error('请输入数值'))
              } else {
                  if (value < 18) {
                      callback(new Error('必须年满 18岁'))
                  } else {
                      callback()
                  }
              }
          }, 1000)
      }

      let validatePass = (rule, value, callback) => {
          if (value === ''){
              callback(new Error('请输入密码'))
          } else {
              if (this.ruleForm.checkPass !== '') {
                  this.$refs.ruleForm.validateField('checkPass')
              }

              callback()
          }
      };

      let validatePass2 = (rule, value, callback) => {
          if (value === '') {
              callback(new Error('请再次输入密码'));
          } else if ( value !== this.ruleForm.userPassword) {
              callback(new Error('两次密码输入不一致'))
          } else {
              callback()
          }
      };

      return {
        labelPosition: 'top',
        ruleForm: {
          userName: '',
          userPassword: '',
          checkPass: '',
          age: ''
        },
        rules: {
            pass: [
              { validator: validatePass, trigger: 'blur'}
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur'}
            ],
           age: [
            { validator: checkAge, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
  	    submitForm(formName) {
  	        this.$refs[formName].validate((valid) => {
  	          if (valid) {
  	              alert('submit')
                this.$store.dispatch('signIn', this.ruleForm)
              } else {
  	              console.log('error submit')
                 return false;
              }
          })
        },
        resetForm(formName) {
  	        this.$refs[formName].resetFields();
        }
    }
  }
</script>

