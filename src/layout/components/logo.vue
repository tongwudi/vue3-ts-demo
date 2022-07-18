<template>
  <router-link class="logo" to="/" title="桐无敌">
    <img :src="logoSrc" />
    <h1 v-show="!isCollapse">桐无敌</h1>
  </router-link>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const logoSrc = require('@/assets/img/logo.png')
const isCollapse = inject('isCollapse')
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  height: $navHeight;
  line-height: $navHeight;
  text-align: center;
  img {
    height: 30px;
    vertical-align: middle;
  }
  h1 {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: $menuTextColor;
  }
}
</style>
