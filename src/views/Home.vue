<template>
  <div>
    <!-- 轮播图 -->
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="img" src="../assets/images/77940438b45cbf8e86805eb7ee9682cd.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="img" src="../assets/images/608983d88be7b1e024c44284447e217e.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="img" src="../assets/images//06fd0f5588b67f4c4ce5dbb4ad5edb0f.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination point px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end -->

    <!-- 图标导航 -->
    <div class="nav-icon bg-white mt-3 text-center pt-3 text-grey-1">
      <div class="d-flex">
        <div class="nav-item mb-3 py-3">
          <a href="//pvp.qq.com/m/m201706/coming/index.htm">
            <i class="sprite sprite-news"></i>
            <div class="py-2">爆料站</div>
          </a>
        </div>
        <div class="nav-item mb-3 py-3">
          <a href="//pvp.qq.com/act/a20160510story/index.htm?ADTAG=PC.QrCode.TG">
            <i class="sprite sprite-story"></i>
            <div class="py-2">故事站</div>
          </a>
        </div>
        <div class="nav-item mb-3 py-3">
          <a href="//pvp.qq.com/mall/m">
            <i class="sprite sprite-mall"></i>
            <div class="py-2">周边商城站</div>
          </a>
        </div>
        <div class="nav-item mb-3 py-3" v-for="item in 7" :key="item">
          <a href="//pvp.qq.com/cp/a20161116tyf/page01.htm">
            <i class="sprite sprite-tyf"></i>
            <div class="py-2">体验服</div>
          </a>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end -->

    <!-- 新闻资讯 -->
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <!-- 拿到子组件里的category -->
      <template #items="{category}">
        <div class="py-2" v-for="(news, index) in category.newList" :key="index">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-list-card>

    <!-- 英雄列表 -->
    <m-card icon="menu1" title="英雄列表"></m-card>
    <m-card icon="menu1" title="英雄列表"></m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: { delay: 2500, disableOnInteraractuin: false },
      },
      newsCats: [
        {
          name: "热门",
          newList: new Array(5).fill({}).map((v) => ({
            //创建一个有5个元素的数组；  fill填充： 用{}填充；   map:遍历，把里面的元素换成 v 里面的对象
            categoryName: "公告",
            title: "6月2日全服不停机更新公告",
            date: "06/01",
          })),
        },
        {
          name: "新闻",
          newList: new Array(5).fill({}).map((v) => ({
            //创建一个有5个元素的数组；  fill填充： 用{}填充；   map:遍历，把里面的元素换成 v 里面的对象
            categoryName: "新闻",
            title: "6月2日全服不停机更新公告",
            date: "06/01",
          })),
        },
        {
          name: "新闻",
          newList: new Array(5).fill({}).map((v) => ({
            //创建一个有5个元素的数组；  fill填充： 用{}填充；   map:遍历，把里面的元素换成 v 里面的对象
            categoryName: "新闻",
            title: "6月2日全服不停机更新公告",
            date: "06/01",
          })),
        },
        {
          name: "新闻",
          newList: new Array(5).fill({}).map((v) => ({
            //创建一个有5个元素的数组；  fill填充： 用{}填充；   map:遍历，把里面的元素换成 v 里面的对象
            categoryName: "新闻",
            title: "6月2日全服不停机更新公告",
            date: "06/01",
          })),
        },
        {
          name: "新闻",
          newList: new Array(5).fill({}).map((v) => ({
            //创建一个有5个元素的数组；  fill填充： 用{}填充；   map:遍历，把里面的元素换成 v 里面的对象
            categoryName: "新闻",
            title: "6月2日全服不停机更新公告",
            date: "06/01",
          })),
        },
      ],
    };
  },
};
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

.nav-icon {
  border-top: 1px solid #d4d9de;
  border-bottom: 1px solid #d4d9de;

  .d-flex {
    flex-wrap: wrap;
    .nav-item {
      width: 25%;
      border-right: 1px solid #d4d9de;
      &:nth-child(4n) {
        border-right: none;
      }
    }
  }
  .sprite {
    background: url("../assets/images/index.png") no-repeat 0 0;
    background-size: 28.8462rem;
    display: inline-block;
    &.sprite-news {
      width: 1.7692rem;
      height: 1.5385rem;
      background-position: 63.546% 15.517%;
    }
    &.sprite-story {
      width: 1.7692rem;
      height: 1.5385rem;
      background-position: 90.483% 15.614%;
    }
    &.sprite-mall {
      width: 1.7692rem;
      height: 1.5385rem;
      background-position: 36.746% 0.924%;
    }
    &.sprite-tyf {
      width: 1.7692rem;
      height: 1.5385rem;
      background-position: 10.408% 15.517%;
    }
    &.sprite-arrow {
      width: 0.7692rem;
      height: 0.7692rem;
      background-position: 38.577% 52.076%;
    }
  }
}

.card {
  .card-header {
    .bg-1 {
      width: 100%;
      border-bottom: 2px solid #e3ecf5;
      padding-bottom: 1.9231rem;
    }
  }
  .card-body {
    .nav {
      justify-content: space-around;
      padding-bottom: 0.3846rem;
      .nav-item {
        border-bottom: 3px solid transparent;
        &.active {
          color: #db9e3f;
          border-block-color: #db9e3f;
        }
      }
    }

    .hero-list {
      li {
        a {
          display: inline-block;
          width: 100%;
          height: 1.74rem;
          flex: 1;
        }
      }
    }
  }
}
</style>
