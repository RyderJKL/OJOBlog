/**
 * Created by onejustone on 2017/3/16.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const baseUrl = 'localhost:3000'

  export default {
    getTopics: (params) => { return Vue.resource(baseUrl).get(params)}
  }

