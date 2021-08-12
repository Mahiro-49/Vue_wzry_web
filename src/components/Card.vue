<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex ai-center pb-3">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <i class="iconfont icon-menu1"></i>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, require: true },
    icon: { type: String, require: true },
  },
};
</script>

<style lang="scss">
.card {
  border-bottom: 1px solid #e3ecf5;
  .card-header {
    border-bottom: 1px solid #e3ecf5;
  }
}

</style>