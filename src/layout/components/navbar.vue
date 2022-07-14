<template>
  <el-header>
    <div class="collapse-btn hover-effect" @click="toggleCollapse">
      <el-icon :size="24">
        <Expand v-show="isCollapse" />
        <Fold v-show="!isCollapse" />
      </el-icon>
    </div>

    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="flex-grow"></div>

    <el-dropdown trigger="click" class="hover-effect">
      <el-avatar shape="square" :size="40" :src="avatarSrc" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item divided @click="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Expand, Fold, ArrowRight } from '@element-plus/icons-vue'

export default {
  components: { Expand, Fold },
  setup() {
    const store = useStore()
    const isCollapse = computed(() => store.state.isCollapse)

    const toggleCollapse = () => {
      store.commit('toggleCollapse', !isCollapse.value)
    }

    // const avatarSrc = require('@/assets/img/avatar.png')
    const avatarSrc = 'https://s2.loli.net/2022/04/07/gw1L2Z5sPtS8GIl.gif?imageView2/1/w/80/h/80'

    const exit = () => {}

    return {
      ArrowRight,
      isCollapse,
      toggleCollapse,
      avatarSrc,
      exit
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  height: $navHeight;
  padding: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color);
  box-shadow: var(--el-box-shadow-lighter);
}
.collapse-btn {
  height: $navHeight;
  line-height: $navHeight;
  padding: 0 15px;
  .el-icon {
    vertical-align: middle;
  }
}
.el-breadcrumb {
  margin-left: 10px;
}
.el-dropdown {
  height: $navHeight;
  // line-height: $navHeight;
  align-items: center;
  padding: 0 15px;
}
</style>
