<template>
  <router-link class="logo" to="/" title="桐无敌">
    <img :src="logoSrc" />
    <h1 v-show="!isCollapse">桐无敌</h1>
  </router-link>

  <el-scrollbar>
    <el-menu
      default-active="2-1"
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
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><IconMenu /></el-icon>
          <span>Navigator Two</span>
        </template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
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

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import variables from '@/assets/styles/variables.module.scss'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'

export default {
  components: { Document, IconMenu, Location, Setting },
  setup() {
    const { state } = useStore()
    const isCollapse = computed(() => state.isCollapse)

    const logoSrc = require('@/assets/img/logo.png')

    return {
      variables,
      isCollapse,
      logoSrc
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  height: $navHeight;
  line-height: $navHeight;
  text-align: center;
  background-color: $menuBgColor;
  img {
    display: inline-block;
    height: 28px;
    vertical-align: middle;
  }
  h1 {
    display: inline-block;
    margin-left: 10px;
    color: $menuTextColor;
  }
}
.el-scrollbar {
  height: calc(100% - $navHeight);
  background-color: $menuBgColor;
}
.el-menu {
  border-right: 0;
}
.el-menu:not(.el-menu--collapse) {
  width: $menuWidth;
}
</style>
