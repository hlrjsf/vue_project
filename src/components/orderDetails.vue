<template>
  <div class="Main">
    <div class="secondary_head">
      <div class="go_back" @click="$router.go(-1);">
        <img :src="goBack" alt="">
      </div>
      <div class="header_title">{{orderDetails}}</div>
    </div>
    <div class="content_mian">
      <div class="order_list">
          <div class="order_price">
            <div class="all_price">￥{{orderPrice}}</div>
            <div class="goods_num">共{{goodsNum}}件</div>
          </div>
          <div class="order_infs">
            <div class="order_code">单号：{{orderCode}}</div>
            <div class="order_time">日期：{{orderTime}}</div>
            <div class="order_state b_color">{{orderState}}</div>
          </div>
      </div>
      <div class="same_part_list goods_details_list">
        <div class="goods_details">商品详情</div>
        <div class="goods_list">
          <div class="goods_infs">
            <div class="goods_pic">
              <img :src="productImage">
            </div>
            <div class="r_box">
              <div class="goods_name">{{productName}}</div>
              <div class="goods_brand_norm">
                品牌：<span class="brand">{{productBrand}}</span>
                规格：<span class="norm">{{productNorm}}g</span>
              </div>
              <div class="goods_taste">
                口味：<span>{{productTaste}}</span>
              </div>
              <div class="goods_price">
                <span class="now_price">￥{{productNowPrice}}</span>
                <span class="old_price">￥{{productOldPrice}}</span>
              </div>
              <div class="goods_num">
                数量：<span class="num">{{productNum}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="same_part_list goods_details_list">
        <div class="goods_details">资费详情</div>
        <div class="infs_list">
          商品件数：<span>{{allNum}}件</span>
        </div>
        <div class="infs_list">
          商品总价：<span>￥{{totalPrice}}</span>
        </div>
        <div class="infs_list">
          商品运费：<span>￥{{allFare}}</span>
        </div>
        <div class="infs_list">
          订单总额：<span>￥{{orderTotal}}</span>
        </div>
      </div>
      <div class="same_part_list goods_details_list">
        <div class="goods_details">收货地址详情</div>
        <div class="infs_list">
          收 件 人：<span>{{userName}}</span>
        </div>
        <div class="infs_list">
          联系电话：<span>{{userPhone}}</span>
        </div>
        <div class="infs_list">
          详细地址：<span>{{userAddress}}</span>
        </div>
        <div class="infs_list">
          收件时间：<span>{{timeofReceipt}}</span>
        </div>
      </div>
      <div class="same_part_list goods_details_list">
        <div class="goods_details">支付</div>
        <div class="infs_list">
          支付方式：<span>{{payWay}}</span>
        </div>
        <div class="infs_list">
          支付状态：<span>{{payState}}</span>
        </div>
      </div>
      <div class="same_part_list goods_details_list">
        <div class="goods_details">备注</div>
        <div class="infs_list">
          配注信息：<span>( {{noteTxt}} )</span>
        </div>
      </div>
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
      orderDetails: '订单详情',
      orderPrice: 43,
      goodsNum: 6,
      orderCode: '000021707121140191298841',
      orderTime: '2017-7-4 11:40',
      orderState: '已支付',
      productImage:'../static/img/cart_goods.png', 
      productName:'合味道XO酱海鲜风味面',
      productBrand:'日清',
      productNorm: 87,
      productTaste: '海鲜风味',
      productNowPrice: 5.5,
      productOldPrice: 6,
      productNum: 6, 
      allNum: 6,
      totalPrice: 33,
      allFare: 10,
      orderTotal: 43,
      userName: '黄小六',
      userPhone: '13845262439',
      userAddress: '广东省 广州市 天河区 车陂南启明大街南15苑6号',
      timeofReceipt:'不限收货时间', 
      payWay: '支付宝',
      payState: '已支付' ,
      noteTxt: '空'
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
   .content_mian, .goods_details_list{
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
   .same_part_list{
    margin: 10px 0 0 0;
    border: 1px solid #ccc;
    border-radius: 4px;
   }
   .goods_list{
    padding: 10px 0;
   }
   .goods_details{
    margin: 5px 0;
   }
  .goods_pic, .r_box{
    display: inline-block;
    vertical-align: middle;
  }
  .goods_pic{
    width: 6rem;
    height: 6rem;
    margin: 0 3% 0 0;
    border: 1px solid #ddd;
  }
  .r_box{
    width: 60%;
  }
  .now_price{
    font-size: 1.2rem;
    color: #ff4100;
  }
  .old_price{
    padding: 0 0 0 10px;
    color: #777; 
    text-decoration: line-through;
  }
</style>
