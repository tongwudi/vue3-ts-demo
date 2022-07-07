<template>
  <el-container class="home">
    <el-aside :width="isCollapse ? '64px' : '240px'">
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
import sidebar from '@/components/sidebar.vue'
import navbar from '@/components/navbar.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const { state } = useStore()
const isCollapse = computed(() => state.isCollapse)
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
