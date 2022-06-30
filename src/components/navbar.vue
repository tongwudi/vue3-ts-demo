<template>
  <el-menu class="header-menu" :ellipsis="false" mode="horizontal">
    <el-button link @click="changeCollapse">
      <el-icon :size="24">
        <Expand v-show="isCollapse" />
        <Fold v-show="!isCollapse" />
      </el-icon>
    </el-button>
    <el-sub-menu index="1">
      <template #title>超级管理员</template>
      <el-menu-item index="1-1">设置</el-menu-item>
      <el-menu-item index="1-2">个人中心</el-menu-item>
      <el-menu-item index="1-3" @click="exit">退出</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { useStore } from 'vuex'

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
      isCollapse,
      changeCollapse,
      exit
    }
  }
})
</script>

<style lang="scss" scoped>
.header-menu {
  border-bottom: 0;
  align-items: center;
  justify-content: space-between;
}
::v-deep .el-sub-menu__title {
  padding: 0;
}
.el-popper {
  text-align: center;
}
</style>
