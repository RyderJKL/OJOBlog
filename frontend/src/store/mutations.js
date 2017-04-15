/**
 * Created by onejustone on 2017/3/16.
 */

import Vue from 'vue'
import VueResource from 'vue-resource'
import * as types from './mutation-types'
// import api from '../api'

Vue.use(VueResource);
// Vue.http.options.root = 'localhost:3000'
// 设置请求根路径
Vue.http.options.credentials = true;
// 发送带凭证的请求，因为每次请求都要带上cookie中的connect.id

Vue.http.headers.common["Content-Type"] = 'application/x-www-form-urlencoded；charset=UTF-8';
// 设置content type

// 如果服务器无法处理application/json类型，则以下设置参数
/*
*Vue.http.options.emulateJSON = true;
* */

let baseUrl = 'http://localhost:4010'

export default {
  // 登陆
  [types.SIGN_IN] (state, info) {
    "use strict";
    let data = JSON.stringify(info)
    Vue.http.post(baseUrl + '/signin',data).then(response => {
      console.log(response.body + 'are you sure??')
      state.userInfo.userName = 'chenrong'
      state.userInfo.userPassword = '124'
    })


  }
}
