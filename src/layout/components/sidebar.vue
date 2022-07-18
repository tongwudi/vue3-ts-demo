<template>
  <Logo />

  <el-scrollbar>
    <el-menu
      default-active="4"
      :background-color="variables.menuBgColor"
      :text-color="variables.menuTextColor"
      :active-text-color="variables.menuActiveTextColor"
      :unique-opened="false"
      :collapse-transition="false"
      :collapse="isCollapse"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">one</el-menu-item>
        <el-menu-item index="1-2">two</el-menu-item>
        <el-menu-item index="1-3">three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><IconMenu /></el-icon>
          <span>Navigator Two</span>
        </template>
        <el-menu-item index="2-1">four</el-menu-item>
        <el-menu-item index="2-2">five</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon><Document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><Setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import Logo from './logo.vue'
import variables from '@/assets/styles/variables.module.scss'

const isCollapse = inject('isCollapse')
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: calc(100% - $navHeight);
}
.el-menu {
  border-right: 0;
}
// .el-menu:not(.el-menu--collapse) {
//   width: $menuOpenWidth;
// }
</style>
