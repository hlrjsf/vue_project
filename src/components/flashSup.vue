<template>
  <div class="Main">
    <div class="menu_nav">
      <ul>
        <li v-for="(item, index) in items" @click="selectStyle($event, index)" :class="{'active':nowIndex ==index}">{{item.select}}</li>
      </ul>
    </div>
    <div id="wrapper">
      <div id="scroller">
        <div id="pullDown">
          <span class="pullDownIcon"></span>
          <span class="pullDownLabel">下拉刷新...</span>
        </div>
        <div class="content_mian">
          <div class="ul_right">
            <ul>
              <li v-for="(item,index) in productList">
                <div class="l_box">
                  <img :src="item.productImage">
                </div>
                <div class="r_box">
                  <div class="title_box">
                    <div class="label">{{item.productLabel}}</div>
                    <div class="p_name">{{item.productName}}</div>
                  </div>
                  <div class="buy_one_give_one">          
                    {{item.productActive}}
                  </div>
                  <div class="specifications">
                    <span class="p_price">{{item.productPrice}}</span>
                    <span class="norm">{{item.productNorm}}</span>
                  </div>
                </div>
              </li>
            </ul>
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
  name: 'flashSup',
  data () {
    return {
      items: [
　　　　{select:'优选水果1'},
　　　　{select:'优选水果2'},
　　　　{select:'优选水果3'},
　　　　{select:'优选水果4'},
        {select:'优选水果5'},
　　　　{select:'优选水果6'}
　　　], 
      nowIndex: 0,
      productList: [
        {
          productImage:'../static/img/goods_pic03.png', 
          productLabel: '精选',
          productName:'爱鲜蜂-佳沛绿奇异果', 
          productActive: '买一赠一',
          productPrice:'￥16.9',
          productNorm: '3粒/1盒',
        },
　　　　{
          productImage:'../static/img/goods_pic03.png', 
          productLabel: '精选',
          productName:'爱鲜蜂-佳沛绿奇异果', 
          productActive: '买一赠一',
          productPrice:'￥16.9',
          productNorm: '3粒/1盒',
        },
　　　　{
          productImage:'../static/img/goods_pic03.png', 
          productLabel: '精选',
          productName:'爱鲜蜂-佳沛绿奇异果', 
          productActive: '买一赠一',
          productPrice:'￥16.9',
          productNorm: '3粒/1盒',
        },
        {
          productImage:'../static/img/goods_pic03.png', 
          productLabel: '精选',
          productName:'爱鲜蜂-佳沛绿奇异果', 
          productActive: '买一赠一',
          productPrice:'￥16.9',
          productNorm: '3粒/1盒',
        },
        {
          productImage:'../static/img/goods_pic03.png', 
          productLabel: '精选',
          productName:'爱鲜蜂-佳沛绿奇异果', 
          productActive: '买一赠一',
          productPrice:'￥16.9',
          productNorm: '3粒/1盒',
        }
      ],
    }
  },
  methods: {
    selectStyle:function(event, num){
      this.nowIndex = num;
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
#wrapper {
  position:absolute; 
  z-index:1;
  top:50px; 
  bottom:51px; 
  right:0;
  width:78%;
  margin-left: 22%;
  overflow:auto;  
}
#scroller {
  position:relative;
  right: 0;
  width:100%;
  padding:0;

}
.menu_nav{
  position: fixed;
  width: 20%;
  left: 0;
  top: 50px;
  text-align: center;
}
.menu_nav ul li{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.menu_nav ul li.active{
  color: #fece02;
}
.menu_nav ul li.active:before{
  display: block;
  float: left;
  content: '';
  width: 3px;
  height: 100%;
  background: #fece02;
}
.ul_right li{
  width: 100%;
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
.l_box{
  display: inline-block;
  width: 6rem;
  height: 6rem;
  margin: 0 3%;
  border: 1px solid #ddd;
}
.r_box{
  display: inline-block;
  vertical-align: top;
  text-align: left;
}
.p_name{
  margin-top: 5px;
}
div.label{
  width: 40px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #ff4100;
  color: #ff4100;
  text-align: center;
  border-radius: 10px;
}
.buy_one_give_one{
  width: 60px;
  height: 25px;
  line-height: 25px;
  margin: 5px 0;
  color: #fff;
  background: #f85252;
  border-radius: 10px;
  text-align: center;
}
.p_price{
  padding-right: 10px;
  color: #ff4100;
}
.norm{
  color: #777;
}
/*footer.vue*/
.flashSup{
  color: #fea31e;
  background: url(../images/getflashSup.png) center top 5px no-repeat;
  background-size: 22px;
}
</style>
