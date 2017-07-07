<template>
  <div class="Main">
    <div id="wrapper">
      <div id="scroller">
        <div id="pullDown">
          <span class="pullDownIcon"></span>
          <span class="pullDownLabel">下拉刷新...</span>
        </div>
        <div class="content_mian">
          <div class="person_infs">
            <div class="header_bg">
              <div class="bg"><img :src="header_bg" /></div>
              <div class="user_name">
                <div class="user_header">
                  <img :src="user_header" />
                </div>
                <div class="user_inf">
                  <p>{{user_title}}</p>
                  <p>{{user_name}}</p>
                </div>
              </div>
            </div>
            <div class="nav_list oh b_fff">
              <div class="nav_list_box my_order">
                <p>{{myOrder}}</p>
              </div>
              <div class="nav_list_box my_coupon">
                <p>{{myCoupon}}</p>
              </div>
              <div class="nav_list_box my_news">
                <p>{{myNews}}</p>
              </div>
            </div>
            <div class="infs_list">
              <div class="infs_list_box my_addrs">
                {{myAddres}}
              </div>
              <div class="infs_list_box to_share">
                {{toShare}}
              </div>
              <div class="help_box">
                <div class="infs_list_box to_help">
                  {{toHelp}}
                </div>
                <div class="infs_list_box to_help_phone">
                  {{toHelpPhone}}
                </div>
              </div>
              <div class="infs_list_box to_set">
                {{toSet}}
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
import Vue from 'vue'
export default {
  name: 'personCenter',
  data () {
    return {
      header_bg: '../static/img/user_center_bg.png',
      user_header: '../static/img/user_header.png',
      user_title: '我的爱鲜蜂：',
      user_name: '18620204386',
      myOrder: '我的订单',
      myCoupon: '我的优惠券',
      myNews: '我的消息',
      myAddres: '我的收货地址',
      toShare: '把爱鲜蜂分享给好友',
      toHelp: '客服帮助',
      toHelpPhone: '客服电话',
      toSet: '设置'
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
  body{
    background: #f2f2f2;
  }
  .b_fff{
    background: #fff;
  }
  .header_bg{
    position: relative;
    width: 100%;
    height: 7rem;
  }
  .bg{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .user_header, .user_inf{
    display: inline-block;
    vertical-align: middle;
  }
  .user_header{
    width: 5rem;
    height: 5rem;
    margin: 1rem .5rem 1rem 2rem;
    border-radius: 100%;
    background: #eee;
  }
  .user_inf p{
    font-size: 1rem;
  }
  .nav_list{
    margin: 0 0 10px 0;
    text-align: center;
  }
  .nav_list_box{
    float: left;
    position: relative;
    width: 33%;
    height: 4rem;
    margin: 10px 0;
    border-right: 1px solid #ccc;
  }
  .nav_list_box:last-child{
    border-right: none;
  }
  .nav_list_box p{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 5px;
    text-align: center;
  }
  .my_order{
    background: url(../images/my_order.png) no-repeat center top 5px;
    background-size: 40px 35px;
  }
  .my_coupon{
    background: url(../images/coupon.png) no-repeat center top 5px;
    background-size: 40px 35px;
  }
  .my_news{
    background: url(../images/news.png) no-repeat center top 5px;
    background-size: 40px 35px;
  }
  .infs_list_box{
    position: relative;
    height: 42px;
    line-height: 42px;
    padding-left: 40px;
    margin-bottom: 10px;
  }
  .infs_list_box:after{
    display: inline-block;
    content: '';
    position: absolute;
    right: 10px;
    top: 6px;
    width: 22px;
    height: 30px;
    background: url(../images/arrow_icon.png) no-repeat right center #fff;
    background-size: 8px 16px;
  }
  .help_box .infs_list_box:first-child{
    margin-bottom: 0;
    height: 45px;
    line-height: 45px;
  }
  .my_addrs{
    background: url(../images/my_addrs.png) no-repeat left 5px center #fff;
    background-size: 30px 30px;
  }
  .to_share{
    background: url(../images/share.png) no-repeat left 5px center #fff;
    background-size: 30px 30px;
  }
  .to_help{
    background: url(../images/customer_service.png) no-repeat left 5px center #fff;
    background-size: 30px 30px;
  }
  .to_help_phone{
    background: url(../images/customer_phone.png) no-repeat left 5px center #fff;
    background-size: 30px 30px;
  }
  .to_set{
    background: url(../images/setting.png) no-repeat left 5px center #fff;
    background-size: 30px 30px;
  }
  /*footer.vue*/
  .person_center{
    color: #fea31e;
    background: url(../images/getMy.png) center top 5px no-repeat;
    background-size: 22px;
  }
</style>
