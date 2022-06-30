<template>
  <el-container class="home">
    <el-aside :width="isCollapse ? '64px' : '240px'">
      <sidebar />
    </el-aside>
    <el-container>
      <el-header>
        <navbar />
      </el-header>
      <el-main>
        <el-breadcrumb :separator-icon="ArrowRight" separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">promotion management</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import navbar from '@/components/navbar.vue'
import sidebar from '@/components/sidebar.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const { state } = useStore()
const isCollapse = computed(() => state.isCollapse)
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.el-header {
  border-bottom: 1px solid var(--el-border-color);
  box-shadow: var(--el-box-shadow-lighter);
}
.el-aside {
  transition: width 0.25s;
  overflow: hidden;
}
</style>
