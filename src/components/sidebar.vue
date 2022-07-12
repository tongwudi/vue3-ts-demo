<template>
  <a class="logo" href="/" title="桐无敌">
    <img
      src="../assets/img/logo.png"
      :style="{ height: isCollapse ? '40%' : '80%' }"
    />
  </a>
  <el-scrollbar>
    <el-menu
      default-active="2-1"
      :background-color="variables.menuBgColor"
      :text-color="variables.menuTextColor"
      :active-text-color="variables.menuActiveTextColor"
      :unique-opened="true"
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

    return {
      variables,
      isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: $barHeight;
  background-color: $menuBgColor;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-scrollbar {
  height: calc(100% - $barHeight);
  background-color: $menuBgColor;
}
.el-menu {
  border-right: 0;
}
.el-menu:not(.el-menu--collapse) {
  width: 240px;
}
.el-menu .el-icon {
  font-size: 20px;
}
</style>
