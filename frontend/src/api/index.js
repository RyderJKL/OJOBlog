/**
 * Created by onejustone on 2017/3/16.
 */

(function () {
  'use strict';
  import Vue from 'Vue'
  import VueResource from 'Vue-Resource'
  Vue.use(VueResource)

  const baseUrl = 'localhost:8080'

  export default {
    getTopics: (params) => { return Vue.resource(baseUrl).get(params)}
  }
})()
