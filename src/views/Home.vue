<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="img" src="../assets/images/77940438b45cbf8e86805eb7ee9682cd.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="img" src="../assets/images/608983d88be7b1e024c44284447e217e.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="img" src="../assets/images//06fd0f5588b67f4c4ce5dbb4ad5edb0f.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination point px-3 pb-2" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
        }
    }
  }
}
</script>

<style lang="scss">
.img {
  width: 100%;
}

.point {
  text-align: right;
   .swiper-pagination-bullet {
     opacity: 1;
     border-radius: 0.1538rem;
     background: white;
     &.swiper-pagination-bullet-active {
       background: #4b67af;
     }
   }
}

</style>
