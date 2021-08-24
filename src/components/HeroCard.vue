<template>
  <div>
    <!-- 技能介绍 -->
    <div class="skills-introduce">
      <div class="box d-flex">
        <div class="butt">
          <span class="iconfont icon-play icon"></span>
          <span class="font">英雄介绍视频</span>
        </div>
        <div class="butt">
          <span class="iconfont icon-tupianshangchuan icon"></span>
          <span class="font">一图识英雄</span>
        </div>
      </div>
      <div class="skills d-flex">
        <div
          class="skills-icon"
          v-for="(item, index) in model.skills"
          :key="index"
          @click="$refs.swiper.$swiper.slideTo(index), itemClick(index)"
          :class="{index1: currentIndex === index}"
        >
          <img :src="item.icon" alt />
        </div>
      </div>
      <swiper
        ref="swiper"
        @transitionStart="() => index1 = this.$refs.swiper.$swiper.activeIndex"
        :options="{autoHeight: true}"
      >
        <swiper-slide v-for="(items, indey) in model.skills" :key="indey">
          <div class="skills-info">
            <div class="d-flex">
              <div class="name">{{items.name}}</div>
              <div class="cool">(冷却值：{{items.cd}} 消耗:{{items.cost}})</div>
            </div>
            <p class="description">{{items.description}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 加点建议 -->
    <div>
      <m-card icon1="menu" title="加点建议">
        <div class="suggest d-flex">
          <div class="main d-flex">
            <span class="first">主升</span>
            <img :src="model.skills[1].icon" alt />
            <span class="name">{{model.skills[1].name}}</span>
          </div>
          <div class="main d-flex">
            <span class="first">副升</span>
            <img :src="model.skills[2].icon" alt />
            <span class="name">{{model.skills[2].name}}</span>
          </div>
          <div class="player d-flex">
            <p>召唤师技能</p>
            <div class="items d-flex">
              <div class="item d-flex border">
                <img :src="model.playerSkills[0].icon" alt />
                <span>{{model.playerSkills[0].name}}</span>
              </div>
              <div class="item d-flex">
                <img :src="model.playerSkills[1].icon" alt />
                <span>{{model.playerSkills[1].name}}</span>
              </div>
            </div>
          </div>
        </div>
      </m-card>
    </div>

    <!-- 出装推荐 -->
    <m-card icon1="menu" title="出装推荐">
      <div class="front">
        <div class="mb-3">顺风出装</div>
        <div class="d-flex hero-items">
          <div v-for="item in model.items1" :key="item.name">
            <img :src="item.icon" alt />
            <div class="fs-sm pt-1">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="back">
        <div class="mb-3">逆风出装</div>
        <div class="d-flex hero-items">
          <div v-for="item in model.items2" :key="item.name">
            <img :src="item.icon" alt />
            <div class="fs-sm pt-1">{{item.name}}</div>
          </div>
        </div>
      </div>
    </m-card>

    <!-- 各种技巧 -->
    <m-card icon1="menu" title="使用技巧">
      <div>{{model.usageTips}}</div>
    </m-card>

    <m-card icon1="menu" title="对抗技巧">
      <div>{{model.battleips}}</div>
    </m-card>

    <m-card icon1="menu" title="团站技巧">
      <div>{{model.teamTips}}</div>
    </m-card>

    <!-- 英雄关系 -->
    <m-card icon1="menu" title="英雄关系">
      <div class="fs-xl">最佳搭档</div>
      <div v-for="item in model.partners" :key="item.name" class="d-flex pt-3">
        <img :src="item.hero.avatar" alt height="50" />
        <p class="flex-1 m-0 ml-3">{{item.description}}</p>
      </div>
      <div class="border"></div>

      <div class="fs-xl">被谁克制</div>
      <div v-for="item in model.restrainted" :key="item.name" class="d-flex pt-3">
        <img :src="item.hero.avatar" alt height="50" />
        <p class="flex-1 m-0 ml-3">{{item.description}}</p>
      </div>
      <div class="border"></div>

      <div class="fs-xl">克制谁</div>
      <div v-for="item in model.restraint" :key="item.name" class="d-flex pt-3">
        <img :src="item.hero.avatar" alt height="50" />
        <p class="flex-1 m-0 ml-3">{{item.description}}</p>
      </div>
      
    </m-card>
  </div>
</template>

<script>
export default {
  props: {
    model: null,
  },
  data() {
    return {
      active: 0,
      currentIndex: 0,
    };
  },
  created() {
    console.log(this.model);
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="scss">
.card-header {
  border-bottom: none !important;
}
.index1 {
  img {
    border: 1px solid #d59b40;
    border-radius: 50%;
    padding: 0.1538rem;
  }
}
.skills-introduce {
  background-color: #fff;
  border-bottom: 1px solid #eceef0;
  .box {
    justify-content: space-around;
    font-size: 14px;
    margin-top: 0.7692rem;
    margin-bottom: 3.0769rem;
    .butt {
      border: 1px solid #eceef0;
      border-radius: 5%;
      padding: 0.7692rem 2.3077rem;
      background-color: #fcfcfc;
      .icon {
        color: #d59b40;
        font-size: 1.3846rem;
        margin-right: 0.7692rem;
      }
    }
  }

  .skills {
    justify-content: space-around;
    text-align: center;
    .skills-icon {
      img {
        width: 70%;
        height: auto;
      }
    }
  }

  .skills-info {
    padding: 0.7692rem;
    .d-flex {
      margin: 0.7692rem 0 1.9231rem 0;
      .name {
        font-size: 16px;
        font-weight: 700;
      }
      .cool {
        margin-left: 1.5385rem;
        color: #7a7a80;
      }
    }
    .description {
      font-size: 1rem;
      color: #7a7a80;
    }
  }
}
.suggest {
  position: relative;
  align-items: center;
  .main {
    flex-direction: column;
    align-items: center;
    .first {
      margin-bottom: 0.7692rem;
    }
    img {
      width: 60%;
      margin-bottom: 0.7692rem;
    }
  }
  .player {
    position: absolute;
    top: 0;
    right: -0.5385rem;
    flex-direction: column;
    align-items: center;
    p {
      margin: 0 0 0.4615rem 0;
    }
    .items {
      .item {
        flex-direction: column;
        align-items: center;
        img {
          width: 65%;
          margin-bottom: 0.7692rem;
          border-radius: 50%;
        }
      }
    }
  }
}
.front,
.back {
  border-bottom: 2px solid #eceef0;
  .hero-items {
    justify-content: space-around;
    text-align: center;
    margin-bottom: 0.7692rem;
    img {
      width: 3.4615rem;
      height: 3.4615rem;
      border-radius: 50%;
    }
  }
}
.back {
  border: none;
  margin-top: 1.5385rem;
}
.border {
  border-bottom: 2px solid #eceef0;
  margin: 1.5385rem 0 1.5385rem 0;
}
</style>