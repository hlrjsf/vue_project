<template>
  <div class="Appfooter">
    <div class="footer" id="footer">
      <ul>
        <a href="home" class="home">
          <p>{{home}}</p>
        </a>
        <a href="flashSup" class="flashSup">
          <p>{{flashSup}}</p>
        </a>
        <a href="personCenter" class="person_center">
          <p>{{person_center}}</p>
        </a>
        <a href="shoppingCart" class="cart">
          <p>{{cart}}</p>
          <span class="cart_num">{{cartNum}}</span>
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
      cartActive: '',
      cartNum: 5
    }
  }
}
</script>
