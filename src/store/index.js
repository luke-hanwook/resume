import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    componentType: 'introduce'
  },
  mutations: {
    CHANGE_COMPONENT(state, type) {
      state.componentType = type
    }
  }
})

export default store
