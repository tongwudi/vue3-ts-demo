<template>
  <div class="logo">
    <img src="../assets/img/logo.png" />
  </div>
  <el-scrollbar>
    <el-menu
      default-active="2-1"
      background-color="#313743"
      text-color="#fff"
      active-text-color="#ffd04b"
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
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
export default defineComponent({
  components: { Document, IconMenu, Location, Setting },
  setup() {
    const { state } = useStore()

    const isCollapse = computed(() => state.isCollapse)

    return {
      isCollapse
    }
  }
})
</script>

<style lang="scss" scoped>
.logo {
  text-align: center;
  background-color: #313743;
  img {
    width: 40px;
    padding: 10px 0;
    vertical-align: middle;
  }
}
.el-scrollbar {
  // height: 100%;
  height: calc(100% - 60px);
  background-color: #313743;
}
.el-menu {
  border-right: 0;
}
.el-menu:not(.el-menu--collapse) {
  width: 240px;
}
.el-icon {
  font-size: 24px;
}
</style>
