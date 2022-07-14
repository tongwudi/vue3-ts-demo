export interface AppState {
  device: string,
}

export default ({
  namespaced: true,
  state: {
    device: 'desktop'
  },
  mutations: {
    toggleDevice(state: AppState, val: string) {
      state.device = val
    }
  }
})