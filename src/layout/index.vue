<template>
  <el-container class="home">
    <!-- <div v-show="device === 'mobile' && isCollapse"></div> -->
    <el-aside :width="isCollapse ? '64px' : variables.menuWidth">
      <sidebar />
    </el-aside>
    <el-container direction="vertical">
      <navbar />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { computed, watch, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useWindowSize } from '@vueuse/core'
import sidebar from './components/sidebar.vue'
import navbar from './components/navbar.vue'
import variables from '@/assets/styles/variables.module.scss'

const store = useStore()
const isCollapse = computed(() => store.state.isCollapse)
const device = computed(() => store.state.app.device)

const { width } = useWindowSize()
const WIDTH = 990

watch(device, (val) => {
  store.commit('toggleCollapse', val === 'mobile')
})

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
  transition: width 0.25s;
  overflow: hidden;
}
</style>
