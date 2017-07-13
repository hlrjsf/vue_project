<template>
  <div class="Main">
    <div class="secondary_head">
		<div class="go_back" @click="$router.go(-1);">
			<img :src="goBack" alt="">
		</div>
      	<div class="header_title">{{myAddress}}</div>
    </div>
    <div id="wrapper">
      	<div id="scroller">
	        <div id="pullDown">
	          <span class="pullDownIcon"></span>
	          <span class="pullDownLabel">下拉刷新...</span>
	        </div>
	        <div class="content_mian">
    				<div class="address_list">
    					<div class="user_name">
    						<span>收 件 人 ：</span>
    						<span>{{userName}}</span>
    					</div>
              <div class="user_phone">
                <span>手机号码 ：</span>
                <span>{{userPhone}}</span>
              </div>
    					<div class="user_aree">
    						<span>所在地区 ：</span>
    						<span>{{userArea}}</span>
    					</div>
    					<div class="detail_address">
    						<span>详细地址 ：</span>
    						<span>{{detailAddress}}</span>
    					</div>
    					<div class="addrs_option">
    						<span class="address_edit"><a href="editAddress">编辑</a></span>
    						<span class="delect_address">删除</span>
    						<span class="fr b_bg choose_addrs" @click="">选择地址</span>
    					</div>
    				</div>
	        </div>
	        <div id="pullUp">
	          <span class="pullUpIcon"></span>
	          <span class="pullUpLabel"></span>
	        </div>
	    </div>
    </div>
    <div class="my_address_foter b_bg">
    	<a href="addAddress">添加新的收货地址</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'personCenter',
  data () {
    return {
    	goBack: '../static/img/Back.png',
	    myAddress: '我的收货地址',
	    userName: '黄小六',
      userPhone: '13845262439',
	    userArea: '广东省 广州市 天河区',
	    detailAddress: '车陂南启明大街南15苑6号'
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
   		margin: 10px;
   }
   .address_list{
   		border: 1px solid #ccc;
   		border-radius: 4px;
   }
   .address_list div{
	   	height: 40px;
	   	line-height: 40px;
	   	padding: 0 10px;
	   	border-bottom: 1px solid #ccc;
   }
   .address_list div:last-child{
   		border-bottom: none;
   }
   .address_edit{
   		padding: 0 10px 0 30px;
	   	background: url(../images/address_edit.png) left center no-repeat;
	    background-size: 26px 26px;
   }
   .delect_address{
   		padding: 0 10px 0 30px;
   		background: url(../images/address_del.png) left center no-repeat;
    	background-size: 26px 26px;
   }
   .choose_addrs{
   		height: 24px;
   		line-height: 24px;
   		margin: 8px 0;
   		padding: 0 5px;
   		border-radius: 4px;
   		color: #fff;
   }

  /*footer.vue*/
  .footer{
    display: none;
  }
  .my_address_foter{
  	position: fixed;
  	width: 100%;
  	height: 50px;
  	line-height: 50px;
  	bottom: 0;
  	left: 0;
  	text-align: center;
  }
  .my_address_foter a{
    display: block;
  	color: #fff;
  }
  .my_address_foter a:before{
  	display: inline-block;
  	content: '+';
  	width: 16px;
  	height: 16px;
  	line-height: 15px;
  	margin-right: 5px;
  	font-size: 1rem;
  	font-weight: bold;
  	color: #fea31e;
  	border-radius: 100%;
  	background: #fff;
  	vertical-align: middle;
  }
</style>
