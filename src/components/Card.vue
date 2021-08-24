<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex ai-center pb-3">
      <i class="iconfont" :class="`icon-${icon1}`"></i>
      <div class="fs-xl flex-1 px-2 title">{{title}}</div>
      <i class="iconfont" :class="`icon-${icon2}`"></i>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    icon1: { type: String},
    icon2: { type: String},
  },
};
</script>

<style lang="scss">
.card {
  border-bottom: 1px solid #e3ecf5;
  .card-header {
    border-bottom: 1px solid #e3ecf5;
    .title {
      font-weight: 700;
    }
  }
}

</style>