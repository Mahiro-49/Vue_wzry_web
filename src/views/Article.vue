<template>
  <div class="article" v-if="model">
    <div class="d-flex py-3 px-2 title">
      <div class="iconfont icon-back icon" @click="back"></div>
      <strong class="flex-1">{{model.title}}</strong>
      <div class="text-grey fs-xs">2021-08-20</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true },
  },
  data() {
    return {
      model: null,
    };
  },
  created() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      const res = await this.$http.get(`/articles/${this.id}`);
      this.model = res.data;
    },

    back() {
      this.$router.push('/')
    }
  },
};
</script>

<style lang="scss">
.article {
  .title {
    border-bottom: 1px solid #d4d9de;
    padding-bottom: 0.7692rem;
    font-size: 14px;
    color: #4394e4;
    .icon-back {
      font-size: 1.5385rem ;
    }
    .icon {
      margin-right: 5px;
    }
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>