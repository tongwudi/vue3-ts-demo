<template>
  <el-header>
    <div class="collapse-btn hover-effect" @click="changeCollapse">
      <el-icon :size="24">
        <Expand v-show="isCollapse" />
        <Fold v-show="!isCollapse" />
      </el-icon>
    </div>

    <el-breadcrumb :separator-icon="ArrowRight" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="flex-grow"></div>

    <el-dropdown class="hover-effect">
      <h3 class="dropdown-text">超级管理员</h3>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { Expand, Fold, ArrowRight } from '@element-plus/icons-vue'

export default defineComponent({
  components: { Expand, Fold },
  setup() {
    const store = useStore()

    const isCollapse = ref(false)

    const changeCollapse = () => {
      isCollapse.value = !isCollapse.value
      store.commit('changeCollapse', isCollapse.value)
    }

    const exit = () => {}
    return {
      ArrowRight,
      isCollapse,
      changeCollapse,
      exit
    }
  }
})
</script>

<style lang="scss" scoped>
.el-header {
  height: $barHeight;
  padding: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color);
  box-shadow: var(--el-box-shadow-lighter);
}
.collapse-btn {
  height: $barHeight;
  line-height: $barHeight;
  padding: 0 15px;
  color: var(--el-text-color-regular);
  &:hover {
    color: var(--color);
  }
  .el-icon {
    vertical-align: middle;
  }
}
.el-breadcrumb {
  margin-left: 10px;
}
.el-dropdown {
  height: $barHeight;
  line-height: $barHeight;
  padding: 0 15px;
}
</style>
