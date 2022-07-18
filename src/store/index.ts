import { createStore } from 'vuex'
// import app from './modules/app';

const store = createStore({
  state: {
    isCollapse: false,
    device: 'desktop'
  },
  mutations: {
    toggleCollapse: (state, val) => {
      state.isCollapse = val
    },
    toggleDevice(state, val) {
      state.device = val
    }
  },
  actions: {},
  // modules: {
  //   app
  // }
})

export default store