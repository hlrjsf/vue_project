<template>
  <div class="Main">
    <div class="secondary_head">
      <div class="go_back" @click="$router.go(-1);">
        <img :src="goBack" alt="">
      </div>
      <div class="header_title">{{bestTime}}</div>
      <div class="go_cart">
        <a href="shoppingCart"><img :src="goCart" alt=""></a>
      </div>
    </div>
    <div class="content_mian">
      <div class="select_list" v-for="(item, index) in selectList" @click="selectStyle($event, index)" :class="{'active':nowIndex ==index}">{{item.list}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      goBack: '../static/img/Back.png',
      bestTime: '收货时间',
      goCart: '../static/img/Cart.png',
       selectList: [
        {list: '送货时间不限'},
        {list: '只要工作日（双休、节假日不送）'},
        {list: '只要双休、节假日（工作日不送）'}
      ],
      nowIndex: 0
    }
  },
  methods: {
    selectStyle:function(event, num){
      this.nowIndex = num;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.secondary_head{
    border-bottom: 1px solid #ccc;
    background: #fff;
 }
 .header_title{
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
 }
 .content_mian{
  padding: 0 10px;
 }
 .select_list{
  padding: 10px;
  margin: 0 0 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: url(../images/ls_icon1.png) no-repeat right center;
  background-size: 25px 25px;
 }
 .select_list.active{
  background: url(../images/ls_icon2.png) no-repeat right center;
  background-size: 25px 25px;
 }
/*footer.vue*/
.footer{
  display: none;
}
</style>
