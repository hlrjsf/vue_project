<template>
  <div class="Appfooter">
    <div class="footer" id="footer">
      <ul>
        <a href="home">
          <li class="home">
              <p>{{home}}</p>
          </li>
        </a>
        <a href="flashSup">
          <li class="flashSup">
              <p>{{flashSup}}</p>
          </li>
        </a>
        <a href="personCenter">
          <li class="person_center">
              <p>{{person_center}}</p>
          </li>
        </a>
        <a href="shoppingCart">
          <li class="cart">
              <p>{{cart}}</p>
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      home: '首页',
      flashSup: '闪送超市',
      person_center: '我的',
      cart: '￥0元起送',
      nowIndex: 0,
      homeActive: 'true',
      flashSupActive: '',
      personCenterActive: '',
      cartActive: ''
    }
  }
   // methods: {
   //    goHome: function() {
   //      //vue router配置的动态路由，页面无法自动刷新
   //      this.$router.push({path: '/home'});
   //      //刷新页面
   //      this.$router.go(0);
   //    },
   //     goflashSup: function() {
   //      //vue router配置的动态路由，页面无法自动刷新
   //      this.$router.push({path: '/flashSup'});
   //      //刷新页面
   //      this.$router.go(0);
   //    },
   //     gopersonCenter: function() {
   //      //vue router配置的动态路由，页面无法自动刷新
   //      this.$router.push({path: '/personCenter'});
   //      //刷新页面
   //      this.$router.go(0);
   //    },
   //    goCart: function() {
   //      //vue router配置的动态路由，页面无法自动刷新
   //      this.$router.push({path: '/shoppingCart'});
   //      //刷新页面
   //      this.$router.go(0);
   //    }
   //  },
}
</script>
