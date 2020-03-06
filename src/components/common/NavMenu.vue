<template>
  <el-menu
    :default-active="activeIndex"
    router
    class="navbar"
    mode="horizontal"
    background-color="write">
    <el-menu-item class="navbar-menu" v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
    <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
    <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">分布式机群监控系统</span>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      activeIndex: '/index',
      navList: [
        { name: '/index', navItem: '监控页面' }
      ]
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
  .navbar{
    margin: 20px;
    border-radius: 6px;
    box-shadow: 0 0 5px 3px #999;
  }
  .navbar-menu{
    display: inline-block;
    padding: 10px;
    margin: 10px;
    position: relative;
    color: #555;
    border-bottom: none;
    line-height: 1.3;
    vertical-align: top;
    outline: none;
  }
</style>
