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
    <m-list-card icon1="menu" icon2="menu1" title="新闻资讯" :categories="newsCats">
      <!-- 拿到子组件里的category -->
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex mt-2"
          v-for="(news, index) in category.newsList"
          :key="index"
        >
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2 text-grey">|</span>
          <span class="flex-1 text-dark-1 titles pr-2">{{news.title}}</span>
          <span class="text-grey fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <!-- 英雄列表 -->
    <m-list-card class="cards" icon1="a-ziyuan6" icon2="menu1" title="英雄列表" :categories="heroCats">
      <!-- 拿到子组件里的category -->
      <template #items="{category}">
        <div class="d-flex heroes">
          <router-link
            tag="div"
            :to="`/heroes/${heroes._id}`"
            class="py-2 text-center hero-item"
            v-for="(heroes, index) in category.heroList"
            :key="index"
          >
            <img :src="heroes.avatar" alt />
            <div>{{heroes.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <!-- 精彩视频 -->
    <m-card icon1="play" icon2="menu1" title="精彩视频">
      <div class="video-bar">
        <div class="video-nav d-flex">
          <div
            class="nav-item"
            v-for="(item, index) in videoNav"
            :class="{active: active === index}"
            @click="$refs.swiper.$swiper.slideTo(index)"
          >
            <div class="nav-link">{{item}}</div>
          </div>
        </div>
        <swiper
          ref="swiper"
          @transitionStart="() => active = this.$refs.swiper.$swiper.activeIndex"
        >
          <swiper-slide>
            <div class="video-items d-flex" v-for="n in 4">
              <div class="video-item d-flex">
                <img src="../assets/images/video.jpg" alt />
                <span class="title">【边路通天指南】第5期：解决英雄克制的技巧</span>
                <div class="d-flex watch-date">
                  <div class="num">
                    <span class="iconfont icon-play icon"></span><span>1497</span>
                  </div>
                  <div>08-23</div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>待开发</swiper-slide>
          <swiper-slide>待开发</swiper-slide>
        </swiper>
      </div>
    </m-card>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  filters: {
    // 处理时间戳
    date(val) {
      return dayjs(val).format("MM/DD");
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: { delay: 2500, disableOnInteraractuin: false },
      },
      newsCats: [],
      heroCats: [],
      videoNav: ["精品栏目", "英雄攻略", "赛事精品"],
      active: 0,
    };
  },

  created() {
    this.getNewsCats();
    this.getHeroCats();
  },
  methods: {
    // 获取新闻数据
    async getNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },

    // 获取英雄数据
    async getHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
      console.log(res);
    },
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

.text-info {
  color: #4b67af;
}

.titles {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; // 不换行 只显示一行
}

.heroes {
  flex-wrap: wrap;

  .hero-item {
    width: 16%;
    margin: 0.3846rem 0.4615rem 0.3846rem 0.6rem;
    img {
      width: 100%;
      border: 1px solid #e3ecf5;
      border-radius: 0.3846rem;
    }
  }
}

.video-bar {
  .video-nav {
    justify-content: space-around;
    background-color: #fff;
    margin-bottom: 0.7692rem;
    .nav-item {
      &.active {
        color: #d59b40;
        border-bottom: 2px solid #d59b40;
        margin-bottom: 0.3846rem;
      }
      .nav-link {
        font-size: 14px;
        margin: 0.7692rem 0.7692rem 0.3846rem 0.7692rem;
      }
    }
  }
  .video-items {
    display: inline-block;
    width: 48%;
    height: auto;
    margin-top: 1.5385rem;
    .video-item {
      flex-direction: column;
      margin-left: 0.7692rem;
      .title {
        margin: 0.7692rem 0 0.7692rem 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .watch-date {
        justify-content: space-between;
        font-size: 0.7692rem;
        color: #a4a8ac;
        .num {
          .icon {
            font-size: 0.7692rem;
            margin-right: 0.1538rem;
          }
        }
      }
    }
  }
}
</style>
