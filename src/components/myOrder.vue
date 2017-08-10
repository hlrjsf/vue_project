<template>
  <div class="Main">
    <div class="secondary_head">
      <div class="go_back" @click="$router.go(-1);">
        <img :src="goBack" alt="">
      </div>
      <div class="header_title">{{myOrder}}</div>
    </div>
    <div class="content_mian">
      <a href="orderDetails">
         <div class="order_list" v-for="(item, index) in orderList">
            <div class="order_price">￥{{item.orderPrice}}</div>
            <div class="order_infs">
              <div class="order_code">单号：{{item.orderCode}}</div>
              <div class="order_time">日期：{{item.orderTime}}</div>
              <div class="order_state b_color">{{item.orderState}}</div>
            </div>
        </div>
      </a>
    </div>
    <div class="order_settlement_foter">
    </div>
  </div>
</template>
<script>
export default {
  name: 'personCenter',
  data () {
    return {
      goBack: '../static/img/Back.png',
      myOrder: '我的订单',
      orderList: [
        {
          orderPrice: '43',
          orderCode: '000021707121140191298841',
          orderTime: '2017-7-4 11:40',
          orderState: '已支付'
        },
        {
          orderPrice: '43',
          orderCode: '000021707121140191298841',
          orderTime: '2017-7-4 11:40',
          orderState: '已支付'
        },
        {
          orderPrice: '43',
          orderCode: '000021707121140191298841',
          orderTime: '2017-7-4 11:40',
          orderState: '已支付'
        },
        {
          orderPrice: '43',
          orderCode: '000021707121140191298841',
          orderTime: '2017-7-4 11:40',
          orderState: '已支付'
        },
        {
          orderPrice: '43',
          orderCode: '000021707121140191298841',
          orderTime: '2017-7-4 11:40',
          orderState: '已支付'
        },
        {
          orderPrice: '43',
          orderCode: '000021707121140191298841',
          orderTime: '2017-7-4 11:40',
          orderState: '已支付'
        },
        {
          orderPrice: '43',
          orderCode: '000021707121140191298841',
          orderTime: '2017-7-4 11:40',
          orderState: '已支付'
        }
      ]
      
    }
  },
  methods: {
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
    padding: 10px;
   }
   .order_list{
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
   }
   .order_price{
    display: inline-block;
    width: 15%;
    text-align: center;
    vertical-align: middle;
    
   }
   .order_infs{
    display: inline-block;
    padding-left: 10px;
    border-left: 1px solid #ccc;
    vertical-align: middle;
   }
   .order_code{
    margin-top: 10px;
   }
   .order_state{
    margin-bottom: 10px;
   }
</style>
