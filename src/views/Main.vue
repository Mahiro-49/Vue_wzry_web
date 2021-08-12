<template>
  <div>
    <div class="topbar py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="35">
      <div class="px-2 flex-1 left">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs td">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    
    <div class="bg-primary pt-3 pb-2">
      <div class="nav d-flex text-white pb-1">
        <div class="nav-item active">
          <router-link class="nav-link" to="/" tag="div">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/" tag="div">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/" tag="div">赛事中心</router-link>
        </div>
      </div>
      
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
  background: url("../assets/images/index.png") no-repeat 0 87.195%;
  width: 28.8462rem;
  height: 3.4615rem;
  padding-bottom: 0.6154rem;
}

.topbar .left {
    padding-top: 0.3846rem;
    .td {
      margin-top: 0.2308rem;
    }
}

.nav {
  justify-content: space-around;
  padding-bottom: 0.3846rem;
}

</style>