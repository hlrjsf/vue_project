<template>
  <div class="Main">
    <div class="secondary_head">
      <div class="go_back" @click="$router.go(-1);">
        <img :src="goBack" alt="">
      </div>
      <div class="header_title">{{myOrder}}</div>
    </div>
    <div id="wrapper">
      <div id="scroller">
        <div id="pullDown">
          <span class="pullDownIcon"></span>
          <span class="pullDownLabel">下拉刷新...</span>
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
        <div id="pullUp">
          <span class="pullUpIcon"></span>
          <span class="pullUpLabel">上拉加载更多...</span>
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
