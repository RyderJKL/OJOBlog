/**
 * Created by onejustone on 2017/3/16.
 */

// actions 主要用来触发事件和传入参数

import * as types from './mutation-types'

export default {
  // 注意一个小的技巧是
  // 在 mutations 里都是用大写下划线连接，而在
  // actions 里都用小写驼峰对应。

  signIn( {commit}, signUserInfo) {
    commit(types.SIGN_IN, signUserInfo)
  }
}
