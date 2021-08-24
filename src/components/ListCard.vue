<template>
  <m-card :icon1="icon1" :icon2="icon2" :title="title">
    <div class="nav d-flex mt-4">
      <div
        class="nav-item"
        :class="{active: active === index}"
        v-for="(category,index) in categories"
        :key="index"
        @click="$refs.swiper.$swiper.slideTo(index)"
      >
        <!-- 点击跳转到对应分类资讯 -->
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <div class="pt-3">
      <!-- autoHeight 自动调节卡片高度 -->
      <swiper
        ref="swiper"
        :options="{autoHeight: true}"
        @transitionStart="() => active = this.$refs.swiper.$swiper.activeIndex"
      >
        <!-- 滑动更改头部active -->
        <swiper-slide v-for="(category, index) in categories" :key="index">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon1: { type: String },
    icon2: { type: String },
    title: { type: String },
    categories: { type: Array },
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>