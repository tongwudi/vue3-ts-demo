import { createStore } from 'vuex'

export default createStore({
  state: {
    isCollapse: false
  },
  mutations: {
    changeCollapse: (state, val) => {
      state.isCollapse = val
    }
  },
  actions: {},
})