import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    componentType: 'introduction',
    mainColor: 'primary'
  },
  mutations: {
    CHANGE_COMPONENT(state, type) {
      state.componentType = type
    },
    CHANGE_MAIN_COLOR(state, color) {
      state.mainColor = color
    }
  }
})

export default store
