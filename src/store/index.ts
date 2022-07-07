import { createStore } from 'vuex'

const store = createStore({
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

export default store