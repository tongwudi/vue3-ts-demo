import { createStore } from 'vuex'
import app from './modules/app';

const store = createStore({
  state: {
    isCollapse: false
  },
  mutations: {
    toggleCollapse: (state, val) => {
      state.isCollapse = val
    }
  },
  actions: {},
  modules: {
    app
  }
})

export default store