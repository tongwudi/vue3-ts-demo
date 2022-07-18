<template>
  <el-container class="home">
    <!-- <div v-show="device === 'mobile' && isCollapse"></div> -->
    <el-aside :width="menuWidth">
      <sidebar />
    </el-aside>

    <el-container
      direction="vertical"
      class="container"
      :style="{ marginLeft: menuWidth }"
    >
      <navbar />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, computed, watch, watchEffect, provide } from 'vue'
import { useStore } from 'vuex'
import { useWindowSize } from '@vueuse/core'
import sidebar from './components/sidebar.vue'
import navbar from './components/navbar.vue'
import variables from '@/assets/styles/variables.module.scss'

const store = useStore()

const isCollapse = computed(() => store.state.isCollapse)
provide('isCollapse', isCollapse)
let menuWidth = ref('')
watch(
  isCollapse,
  (val) => {
    menuWidth.value = val ? '64px' : variables.menuOpenWidth
  },
  { immediate: true }
)

const device = computed(() => store.state.device)
watch(device, (val) => {
  store.commit('toggleCollapse', val === 'mobile')
})

const { width } = useWindowSize()
const WIDTH = 990

watchEffect(() => {
  const device = width.value <= WIDTH ? 'mobile' : 'desktop'
  store.commit('toggleDevice', device)
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
  transition: margin-left 0.2s;
}
</style>
