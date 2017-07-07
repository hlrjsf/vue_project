<template>
  <div class="Main">
    <div id="wrapper">
      <div id="scroller">
        <div id="pullDown">
          <span class="pullDownIcon"></span>
          <span class="pullDownLabel">下拉刷新...</span>
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
          <div class="nav_list clear">
            <ul>
              <li class="lottery">
                <a href="#">
                  <p>{{lottery}}</p>
                </a>
              </li>
              <li class="exchange">
                <a href="#">
                  <p>{{exchange}}</p>
                </a>
              </li>
              <li class="promotion">
                <a href="#">
                  <p>{{promotion}}</p>
                </a>
              </li>
              <li class="flash_sup">
                <a href="#">
                  <p>{{flashSup}}</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="goods">
            <div class="goods_list clear" v-for="(item,index) in productList">
                <div class="fl">
                <div class="title01 red_color">{{item.productName}}</div>
                <div class="goods_active">
                  <div class="top_cont">
                    <span>{{item.productsubName}}</span>
                    <span class="red_color title01">{{item.productPrice}}</span>
                    <span>{{yuan}}</span>
                    <span class="red_color">/{{item.productNum}}</span>
                    <span>{{item.productUnit}}</span>
                  </div>
                  <div class="botton_cont">
                    <span class="more_offer">{{more_offer}}</span>
                    <span>{{item.productDiscount}}</span>
                  </div>
                </div>
              </div>
              <div class="fr goods_box">
                <img :src="item.productImage">
              </div>
            </div>
          </div>
        </div>
        <div id="pullUp">
          <span class="pullUpIcon"></span>
          <span class="pullUpLabel">上拉加载更多...</span>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
        /*------轮播图Start------*/
        banner01: '../static/img/banner01.png',
        banner02: '../static/img/banner02.png',
        banner03: '../static/img/banner03.png',
        banner04: '../static/img/banner04.png',
        swiperOption: {
          pagination: '.swiper-pagination',
          direction: 'horizontal',//水平轮播， vertical为垂直方向
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          mousewheelControl: true,
          autoplay: 2000
        },
        yuan: '元',
        more_offer: '更多优惠',
        discount: '低至5折',
        productList: [
        {
          productImage:'../static/img/goods_pic01.png', 
          productName:'Flash 奶',
          productsubName:'光明畅优乳杆菌',
          productPrice:'6',
          productNum: '2',  
          productUnit: '瓶',
          productDiscount: '低至5折'
        },
        {
          productImage:'../static/img/goods_pic02.png', 
          productName:'Flash 奶',
          productsubName:'光明畅优乳杆菌',
          productPrice:'6',
          productNum: '2',  
          productUnit: '瓶',
          productDiscount: '低至5折'
        },
        {
          productImage:'../static/img/goods_pic01.png', 
          productName:'Flash 奶',
          productsubName:'光明畅优乳杆菌',
          productPrice:'6',
          productNum: '2',  
          productUnit: '瓶',
          productDiscount: '低至5折'
        },
        {
          productImage:'../static/img/goods_pic02.png', 
          productName:'Flash 奶',
          productsubName:'光明畅优乳杆菌',
          productPrice:'6',
          productNum: '2',  
          productUnit: '瓶',
          productDiscount: '低至5折'
        },
        {
          productImage:'../static/img/goods_pic01.png', 
          productName:'Flash 奶',
          productsubName:'光明畅优乳杆菌',
          productPrice:'6',
          productNum: '2',  
          productUnit: '瓶',
          productDiscount: '低至5折'
        },
        {
          productImage:'../static/img/goods_pic02.png', 
          productName:'Flash 奶',
          productsubName:'光明畅优乳杆菌',
          productPrice:'6',
          productNum: '2',  
          productUnit: '瓶',
          productDiscount: '低至5折'
        }
      ],
        /*------轮播图End------*/
        lottery: '抽奖',
        exchange: '兑换',
        promotion: '促销',
        flashSup: '闪送超市',
    }
  }
}
var myScroll,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset,
    generatedCount = 0;

    /**
     * 下拉刷新 （自定义实现此方法）
     * myScroll.refresh();      // 数据加载完成后，调用界面更新方法
     */
    function pullDownAction () {
        setTimeout(function () {     //setTimeout，调试作用，实际由Ajax请求数据
            myScroll.refresh();     //数据加载完成后，调用界面更新方法 
        }, 1000);
    }

    /**
     * 滚动翻页 （自定义实现此方法）
     * myScroll.refresh();      // 数据加载完成后，调用界面更新方法
     */
        function pullUpAction () {
            setTimeout(function () {    //setTimeout，调试作用，实际由Ajax请求数据
                myScroll.refresh();     // 数据加载完成后，调用界面更新方法
            }, 1000);   
        }

    /**
     * 初始化iScroll控件
     */
    function loaded() {
        pullDownEl = document.getElementById('pullDown');
        pullDownOffset = pullDownEl.offsetHeight;
        pullUpEl = document.getElementById('pullUp');   
        pullUpOffset = pullUpEl.offsetHeight;

        myScroll = new iScroll('wrapper', {
            scrollbarClass: 'myScrollbar', /* 重要样式 */
            useTransition: false, /* 此属性不知用意，本人从true改为false */
            topOffset: pullDownOffset,
            onRefresh: function () {
                if (pullDownEl.className.match('loading')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                } else if (pullUpEl.className.match('loading')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                }
            },
            onScrollMove: function () {
                if (this.y > 5 && !pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'flip';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
                    this.minScrollY = 0;
                } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                    this.minScrollY = -pullDownOffset;
                } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'flip';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
                    this.maxScrollY = this.maxScrollY;
                } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                    this.maxScrollY = pullUpOffset;
                }
            },
            onScrollEnd: function () {
                if (pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';                
                    pullDownAction();   // Execute custom function (ajax call?)
                } else if (pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'loading';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';                
                    pullUpAction(); // Execute custom function (ajax call?)
                }
            }
        });
    }

    //初始化绑定iScroll控件 
    document.addEventListener('touchmove', function (e) {
      e.preventDefault(); 
    }, false);
    document.addEventListener('DOMContentLoaded', loaded, false); 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

/*轮播图*/
.flash{
  height: 8.5rem;
}

/* --------------------------------------------------- */

.nav_list ul{
  padding: 0 20px;
}
.nav_list ul li{
  float: left;
  display: block;
  width: 25%;
  height: 5rem;
  margin: 0 0 15px 0;
}
.nav_list ul li a{
  float: left;
  position: relative;
  width: 100%;
  height: 100%;
}
.lottery a{
  background: url(../images/lottery.png) center top 15px no-repeat;
  background-size: 46px;
}
.exchange a{
  background: url(../images/exchange.png) center top 15px no-repeat;
  background-size: 46px;
}
.promotion a{
  background: url(../images/promotion.png) center top 15px no-repeat;
  background-size: 46px;
}
.flash_sup a{
  background: url(../images/flash_sup.png) center top 15px no-repeat;
  background-size: 46px;
}
.nav_list ul li a p{
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
}

/* --------------------------------------------------- */

.goods{
  border-top: 1px solid #ddd;
}
.goods_list{
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.goods_active{
  margin: 10px 0 0 0;
}
.red_color{
  color: #f04e92;
}
.blue_color{
  color: #3bd7f9;
}
.top_cont{
  border-bottom: 1px solid #333;
}
.botton_cont{
  color: #777;
}
.more_offer{
  padding: 0 10px 0 0;
}
.goods_box{
  width: 30%;
}
/*footer.vue*/
.home{
  color: #fea31e;
  background: url(../images/getHome.png) center top 5px no-repeat;
  background-size: 22px;
}
</style>
