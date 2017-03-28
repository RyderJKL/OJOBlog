/**
 * Created by onejustone on 2017/3/16.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from  './actions'

Vue.use(Vuex)

const state = {
  userInfo: {
    userName: '',
    userPassword: ''
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
