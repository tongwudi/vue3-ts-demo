<template>
  <el-sub-menu :index="2" v-if="item.children">
    <template #title>
      <el-icon><IconMenu /></el-icon>
      <span>{{ item.name }}</span>
    </template>

    <menu-item v-for="child in item.children" :key="child.path"></menu-item>
  </el-sub-menu>

  <el-menu-item index="3" v-else>
    <el-icon><Document /></el-icon>
    <template #title>{{ item.name }}</template>
  </el-menu-item>
</template>

<script lang="ts">
export default {
  setup() {}
}
</script>

<style lang="scss" scoped></style>
