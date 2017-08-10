<template>
  <div class="Main">
    <div class="secondary_head">
      <div class="go_back" @click="$router.go(-1);">
        <img :src="goBack" alt="">
      </div>
      <div class="go_cart">
        <a href="shoppingCart"><img :src="goCart" alt=""></a>
      </div>
      <div class="header_title">{{orderSettlement}}</div>
    </div>
    <div class="content_mian">
      <div class="same_part_list">
        <div class="order_infs_list" @click="myAddress">
          <div class="way_of_receipt">
            <span class="sp_title">收件方式</span>
            <span class="way_receipt b_bg">快递配送</span>
          </div>
          <div class="user_infs">
            <span>{{userName}}</span>
            <span>{{userPhone}}</span>
          </div>
          <div class="user_addrs">
            {{userAddress}}
          </div>
        </div>
        <div class="order_infs_list" @click="bestTime">
          <div class="time_of_receipt sp_title">收件时间</div>
          <div class="time_txt">
            <input type="text" v-model="timeofReceipt">
          </div>
        </div>
        <div class="order_infs_list" @click="payWays">
          <div class="time_of_receipt sp_title">支付方式</div>
          <div class="pay_txt">
            <input type="text" v-model="payWay">
          </div>
        </div>
      </div>
      <div class="same_part_list goods_details_list">
        <div class="goods_details">商品详情</div>
        <div class="goods_list" v-for="(item, index) in productList">
          <div class="goods_infs">
            <div class="goods_pic" @click="goodsDetails">
              <img :src="item.productImage">
            </div>
            <div class="r_box">
              <div class="goods_name">{{item.productName}}</div>
              <div class="goods_brand_norm">
                品牌：<span class="brand">{{item.productBrand}}</span>
                规格：<span class="norm">{{item.productNorm}}</span>
              </div>
              <div class="goods_taste">
                口味：<span>{{item.productTaste}}</span>
              </div>
              <div class="goods_price">
                <span class="now_price">￥{{item.productNowPrice}}</span>
                <span class="old_price">￥{{item.productOldPrice}}</span>
              </div>
              <div class="goods_num">
                数量：<span class="num">{{item.productNum}}</span>
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
      <div class="same_part_list note_txt">
        <div>备注信息</div>
        <textarea name="noteTxt" placeholder="请输入备注信息"></textarea>
      </div>
    </div>
    <div class="order_settlement_foter">
      <div class="receipts">
        实收款：<span class="b_color">￥<input type="text" v-model="orderTotal" readonly="readonly" class="b_color"></span>
        <a href="#" class="b_bg">提交订单</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'personCenter',
  data () {
    return {
      goBack: '../static/img/Back.png',
      goCart: '../static/img/Cart.png',
      orderSettlement: '订单结算',
      userName: '黄小六',
      userPhone: '13845262439',
      userAddress: '广东省 广州市 天河区 车陂南启明大街南15苑6号',
      timeofReceipt:'不限收货时间', 
      payWay: '支付宝支付',
      productList: [
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm:'87g',
          productTaste: '海鲜风味',
          productNowPrice:'5.5',
          productOldPrice:'6',
          productNum: '2'
        },
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm:'87g',
          productTaste: '海鲜风味',
          productNowPrice:'5.5',
          productOldPrice:'6',
          productNum: '2'  
        },
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm:'87g',
          productTaste: '海鲜风味',
          productNowPrice:'5.5',
          productOldPrice:'6',
          productNum: '2' 
        }
      ],
      allNum: '6',
      totalPrice: '33',
      allFare: '10',
      orderTotal: '43'
    }
  },
  methods: {
    myAddress: function() {
      //vue router配置的动态路由，页面无法自动刷新
      this.$router.push({path: '/myAddress'});
      //刷新页面
      this.$router.go(0);
    },
    bestTime: function() {
      //vue router配置的动态路由，页面无法自动刷新
      this.$router.push({path: '/bestTime'});
      //刷新页面
      this.$router.go(0);
    },
    payWays: function() {
      //vue router配置的动态路由，页面无法自动刷新
      this.$router.push({path: '/payWays'});
      //刷新页面
      this.$router.go(0);
    },
    goodsDetails: function(){
      this.$router.push({path: '/goodsDetails'});
        //刷新页面
        this.$router.go(0);
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

   .content_mian, .goods_details_list{
     padding: 0 10px;
   }
   .same_part_list{
    margin: 10px 0 0 0;
    border: 1px solid #ccc;
    border-radius: 4px;
   }
   .order_infs_list{
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background: url(../images/arrow_icon.png) right top 10px no-repeat;
    background-size: 22px 22px;
   }
   .order_infs_list:last-child, .goods_list:last-child{
    border-bottom: none;
   }
   .order_infs_list div{
    padding: 0 0 3px 0;
   }
   .sp_title{
    color: #ababab;
   }
   .way_receipt{
    display: inline-block;
    padding: 3px 5px;
    color: #fff;
    border-radius: 4px;
   }
   .goods_list{
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
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
  .goods_details_list, .note_txt{
    padding: 10px;
  }
  .infs_list{
    padding: 5px 0 0 0;
  }
  .note_txt textarea{
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 100px;
    resize: none;
    border: 0 none;
    background: none;
  }

  /*footer.vue*/
  .footer{
    display: none;
  }
  .order_settlement_foter{
    position: fixed;
    width: 100%;
    height: 50px;
    line-height: 50px;
    left: 0;
    bottom: 0;
    border-top: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.75);
    z-index: 999;
  }
  .receipts{
    padding-left: 10px;
  }
  .receipts span, .receipts input{
    font-weight: bold;
    font-size: 1rem;
  }
  .receipts input{
    max-width: 30%;
  }
  .receipts a{
    float: right;
    padding: 0 20px;
    color: #fff;
  }
</style>
