<template>
  <div class="phero" v-if="model">
    <!-- 顶部栏 -->
    <div class="topbar bg-black py-2 px-3 d-flex text-white">
      <img src="../assets/logo.png" height="30" />
      <div class="px-3 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link to="/" tag="div" style="fontSize: 1.2308rem; margin-right: 0.3846rem">更多英雄 &gt;</router-link>
    </div>
    <!-- 英雄大图封面 -->
    <div>
      <div class="top" :style="{'background-image': `url(${model.banner})`}">
        <div class="info text-white p-3">
          <div class="fs-sm">{{model.title}}</div>
          <h2 class="my-2">{{model.name}}</h2>
          <div class="fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
          <div class="d-flex detail pt-2">
            <div class="scores" v-if="model.scores">
              <span>难度</span>
              <span class="bg-primary bg">{{model.scores.difficult}}</span>
              <span>技能</span>
              <span class="bg-skill bg">{{model.scores.skills}}</span>
              <span>攻击</span>
              <span class="bg-attack bg">{{model.scores.attack}}</span>
              <span>生存</span>
              <span class="bg-survise bg">{{model.scores.survise}}</span>
            </div>
            <router-link to="/" tag="span" class="pifu">皮肤：2 &gt;</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="list-bar">
      <div class="nav d-flex">
        <div
          class="nav-item"
          v-for="(item, index) in navBar"
          :class="{active: active === index}"
          @click="$refs.swiper.$swiper.slideTo(index)"
        >
          <div class="nav-link">{{item}}</div>
        </div>
      </div>
      <swiper ref="swiper" @transitionStart="() => active = this.$refs.swiper.$swiper.activeIndex">
        <swiper-slide>
          <hero-card :model='model'></hero-card>
        </swiper-slide>
        <swiper-slide>待开发</swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import HeroCard from "../components/HeroCard.vue";
export default {
  components: { HeroCard },
  props: {
    id: { required: true },
  },
  data() {
    return {
      model: null,
      active: 0,
      navBar: ["初识英雄", "进阶攻略"],
    };
  },
  created() {
    this.getHeroes();
  },
  methods: {
    async getHeroes() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    },
  },
};
</script>

<style lang="scss">
.phero {
  .topbar {
    height: 3.8462rem;
    align-items: center;
    font-size: 1.1538rem;
  }
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
    .info {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end; //靠底部对齐
      background: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 1)
      ); // 渐变颜色
      .detail {
        justify-content: space-between;
        .scores {
          .bg-skill {
            background-color: #1f3695;
          }
          .bg-attack {
            background-color: #791a15;
          }
          .bg-survise {
            background-color: #666;
          }
          .bg {
            margin: 0 0.5rem;
            display: inline-block;
            width: 1rem;
            height: 1rem;
            line-height: 0.95rem;
            text-align: center;
            border-radius: 50%;
            font-size: 0.7rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        }
        .pifu {
          color: #b6afa8;
          font-size: 0.22rem;
        }
      }
    }
  }
  .list-bar {
    .nav {
      justify-content: space-around;
      border-bottom: 2px solid #d4d9de;
      background-color: #fff;

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
  }
}
</style>