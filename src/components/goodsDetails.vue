<template>
  <div class="Main">
    <div class="secondary_head">
      <div class="go_back" @click="$router.go(-1);">
        <img :src="goBack" alt="">
      </div>
      <div class="header_title">{{goodsName}}</div>
      <div class="go_cart">
        <a href="shoppingCart"><img :src="goCart" alt=""></a>
      </div>
    </div>
    <div class="content_mian">
      <div class="flash clear">
        <swiper :options="swiperOption" class="swiper-box">
          <swiper-slide class="swiper-item"><img :src="banner01"></swiper-slide>
          <swiper-slide class="swiper-item"><img :src="banner02"></swiper-slide>
          <swiper-slide class="swiper-item"><img :src="banner03"></swiper-slide>
          <swiper-slide class="swiper-item"><img :src="banner04"></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="goods_infs b_fff">
        <div class="infs_list">
          <div class="goods_name">{{goodsName}}</div>
          <div class="goods_price">
            <span class="n_price">￥{{nowPrice}}</span>
            <span class="o_price">￥{{oldPrice}}</span>
          </div>
        </div> 
        <div class="infs_list">
          <div class="brand">
            <span>{{Brand}}</span>
            <span>{{brandName}}</span>
          </div>
        </div>
        <div class="infs_list">
          <div class="norm">
            <span>{{Norm}}</span>
            <span>{{normContent}}</span>
          </div>
        </div>
        <div class="infs_list">
          <div class="taste">{{Taste}}</div>
          <div class="taste_list">
            <ul>
              <li v-for="(item, index) in items" @click="selectSort($event, index)" :class="{'active':nowIndex==index}">{{item.sort}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flash_send">
        <img :src="sendLogo">
      </div>
    </div>
    <div class="add_cart">
      <div class="blank">
        <span>{{addToCart}}</span>
        <span class="reduce">
          <img :src="Reduce" @click="reduceNum">
        </span>
        <span class="num">
          <input type="text" v-model="numValue" />
        </span>
        <span class="add" @click="addNum">
          <img :src="Add">
        </span>
      </div>
      <div class="add_cart_btn"></div>  
      <div class="add_cart_icon" @click="shoppingCart">
        <img :src="addCart">
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
      goodsName: '合味道XO酱海鲜风味面',
      /*------轮播图Start------*/
      banner01: '../static/img/goods_detail_pic01.png',
      banner02: '../static/img/goods_detail_pic02.png',
      banner03: '../static/img/goods_detail_pic03.png',
      banner04: '../static/img/goods_detail_pic04.png',
      swiperOption: {
        pagination: '.swiper-pagination',
        direction: 'horizontal',//水平轮播， vertical为垂直方向
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        autoplay: 2000
      },
      /*------轮播图End------*/
      nowPrice: '5',
      oldPrice: '6',
      Brand: '品牌',
      brandName: '日清',
      Norm: '规格',
      normContent: '87g',
      Taste: '口味',
      items: [
　　　　{sort:'海鲜风味'},
　　　　{sort:'猪骨浓汤风味'},
　　　　{sort:'意大利牛肉风味'},
　　　　{sort:'香辣牛肉风味'},
        {sort:'五香牛肉风味'},
　　　　{sort:'麻辣牛肉风味'},
        {sort:'虾仁风味'},
　　　　{sort:'咖喱牛肉风味'}
　　　],
      nowIndex: 'null',
      styles: 'unactive',
      sendLogo: '../static/img/send_logo.png',
      addCart: '../static/img/add_cart.png',
      addToCart: '添加商品：',
      Reduce: '../static/img/reduce.png',
      Add: '../static/img/add.png',
      numValue: 0
    }
  },
  methods: {
    selectSort:function(event, num){
      this.nowIndex = num;
      this.numValue = 1;
    },
    reduceNum: function(){
      if(this.numValue > 1){
        this.numValue --;
      }else{
        this.numValue = 1;
      }
    },
    addNum: function(){
      this.numValue ++;
    },
    shoppingCart: function() {
      if(this.numValue > 0){
        //vue router配置的动态路由，页面无法自动刷新
        this.$router.push({path: '/shoppingCart'});
        //刷新页面
        this.$router.go(0);
      }else{
        alert('您尚未选择商品，请选择！');
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    body{
      background: #f1f1f1;
    }
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

   /*----------------------------轮播图----------------------*/
  .flash{
    height: 10rem;
    border-bottom: 1px solid #ccc;
  }
  .n_price{
    font-size: 1.2rem;
    color: #e8470e;
  }
  .o_price{ 
    color: #777;
    text-decoration: line-through;
  }
/* --------------------------------------------------- */
.goods_infs{
  margin-bottom: 10px;
}
.infs_list{
  padding: 10px 15px;
  border-bottom: 1px solid #ccc;
}
.infs_list:last-child{
  border-bottom: none;
}
.infs_list span{
  padding-right: 10px;
}
.brand span:first-child, .norm span:first-child, .taste{
  color: #777;
}
.taste{
  margin-bottom: 10px;
}
.taste_list li{
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 5px 10px;
  color: #303030;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.taste_list li.active{
  color: #fea31e;
  border: 1px solid #fea31e;
}
.flash_send{
  height: 10rem;
  margin-bottom: 10px;
}
.footer{
  display: none;
}
.add_cart{
  position: fixed;
  width: 100%;
  height: 50px;
  line-height: 50px;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
  background: #fff; 
  z-index: 5;
}
.blank{
  position: absolute;
  width: 100%;
  height: 50px;
  background: #fff;
  z-index: 3;
}
.add_cart_btn{
  position: absolute;
  width: 70px;
  height: 70px;
  right: 10px;
  bottom: 0;
  border: 1px solid #ccc;
  border-radius: 100%;
  background: #fff;
  z-index: 2;
}
.add_cart_icon{
  position: absolute;
  width: 60px;
  height: 60px;
  right: 16px;
  bottom: 8px;
  z-index: 4;
}
.blank{
  padding-left: 10px;
}
.blank span{
  display: inline-block;
  vertical-align: middle;
}
.reduce, .add{
  width: 40px;
  height: 40px;
}
.blank input{
  width: 40px;
  height: 25px;
  height: 25px;
  border: 1px solid #ccc;
  text-align: center;
}

</style>
