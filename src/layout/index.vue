<template>
  <!-- <el-container class="home"> -->
  <div class="home">
    <!-- <div v-show="device === 'mobile' && isCollapse"></div> -->
    <el-aside :width="menuWidth">
      <sidebar />
    </el-aside>

    <!-- <el-container
      direction="vertical"
      class="container"
      :style="{ marginLeft: menuWidth }"
    > -->
    <div class="container" :style="{ marginLeft: menuWidth }">
      <navbar />
      <el-main>
        <router-view></router-view>
      </el-main>
    </div>
    <!-- </el-container> -->
  </div>
  <!-- </el-container> -->
</template>

<script lang="ts" setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useWindowSize } from '@vueuse/core'
import sidebar from './components/sidebar.vue'
import navbar from './components/navbar.vue'
import variables from '@/assets/styles/variables.module.scss'

const store = useStore()
const isCollapse = computed(() => store.state.isCollapse)
const device = computed(() => store.state.app.device)

let menuWidth = ref('')
watch(
  isCollapse,
  (val) => {
    menuWidth.value = val ? '64px' : variables.menuOpenWidth
  },
  { immediate: true }
)

watch(device, (val) => {
  store.commit('toggleCollapse', val === 'mobile')
})

const { width } = useWindowSize()
const WIDTH = 990

watchEffect(() => {
  if (width.value <= WIDTH) {
    store.commit('app/toggleDevice', 'mobile')
  } else {
    store.commit('app/toggleDevice', 'desktop')
  }
})
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.el-aside {
  background-color: $menuBgColor;
  transition: width 0.2s;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  // overflow: hidden;
  // z-index: 1001;
}
.container {
  // flex: 1;
  transition: margin-left 0.2s;
}
</style>
