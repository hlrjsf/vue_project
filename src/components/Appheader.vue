<template>
  <div class="Appheader">
    <div class="header" id="header">
      <div class="logo">
        <img :src="logo"/>
      </div>
      <div class="search">
        <form action="">
          <input type="text" :placeholder="holder"  @focus="hold()" class="key_words" />
          <input type="submit" value="" class="search_submit" />
        </form>
      </div>
      <div class="scan_code">
        <a href="#"><img :src="scancode" /></a>
      </div>
      <div class="magess">
        <a href="#"><img :src="magess" /></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
        logo: '../static/img/logo.png',
        holder: "请输入商家、分类或商圈",
        scancode: '../static/img/scan_code.png',
        magess: '../static/img/magess.png'
    }
  },
  methods: {
    hold: function() {
        this.holder = "";
    }
  }
}
</script>
