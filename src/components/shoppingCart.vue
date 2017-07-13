<template>
  <div class="Main">
    <div class="select_list">
      <div class="fl ckeck_btn">{{chechAll}}</div>
      <div class="edit_all fr">{{editAll}}</div>
    </div>
    <div id="wrapper">
      <div id="scroller">
        <div id="pullDown">
          <span class="pullDownIcon"></span>
          <span class="pullDownLabel">下拉刷新...</span>
        </div>
        <div class="content_mian">
          <div class="cart_list oh" v-for="(item, index) in productList">
            <div class="ckeck_btn"></div>
            <div class="goods_infs">
              <div class="goods_pic">
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
                  数量：
                  <span class="reduce">
                    <img :src="Reduce" @click="reduceNum">
                  </span>
                  <span class="num">
                    <input type="text" v-model="item.productNum" />
                  </span>
                  <span class="add" @click="addNum">
                    <img :src="Add">
                  </span>
                </div>
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
    <div class="order_subtotal">
      <span class="order_total">
        订单小计：
        <input v-model="orderSubtotal" disabled="disabled" />
      </span>
      <a href="orderSettlement">
        <span class="go_account">去结算</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'personCenter',
  data () {
    return {
      chechAll: '全选',
      editAll: '编辑全部',
      productList: [
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm:'87g',
          productTaste: '海鲜风味',
          productNowPrice:'5.5',
          productOldPrice:'6',
          productNum: '2', 
          flag: 'null' 
        },
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm:'87g',
          productTaste: '海鲜风味',
          productNowPrice:'5.5',
          productOldPrice:'6',
          productNum: '2', 
          flag: 'null'  
        },
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm:'87g',
          productTaste: '海鲜风味',
          productNowPrice:'5.5',
          productOldPrice:'6',
          productNum: '2',
          flag: 'null'   
        },
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm:'87g',
          productTaste: '海鲜风味',
          productNowPrice:'5.5',
          productOldPrice:'6',
          productNum: '2',
          flag: 'null'   
        },
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm:'87g',
          productTaste: '海鲜风味',
          productNowPrice:'5.5',
          productOldPrice:'6',
          productNum: '2',
          flag: 'null'   
        }
      ],
      Reduce: '../static/img/reduce.png',
      Add: '../static/img/add.png',
      orderSubtotal: '1234',
      nowIndex: 'null'
    }
  },
  methods: {
    reduceNum: function(event){
      //console.log(event.target);
      //console.log(this.Reduce);
    },
    addNum: function(){
      // this.item.productNum ++;
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
  .content_mian{
    top: 40px;
  }
  #pullUp{
    margin-top: 50px;
  }
  .select_list, .order_subtotal{
    position: fixed;
    width: 100%;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 99;
  }
  .select_list{
    height: 40px;
    line-height: 40px;
    top: 50px;
  }
  .order_subtotal{
    height: 45px;
    line-height: 45px;
    bottom: 50px;
    border-top:1px solid #ccc;
  }
  .ckeck_btn{
    margin-left: 10px;
    padding-left: 30px;
    background: url(../images/ls_icon2.png) no-repeat left center;
    background-size: 25px 25px;
  }
  .edit_all{
    margin-right: 15px;
    padding-left: 20px;
    background: url(../images/info_all_icon.png) no-repeat left center;
    background-size: auto 55%;
  }
  .cart_list{
    margin: 0 10px 10px 10px;
    padding: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .cart_list .ckeck_btn, .goods_pic, .r_box{
    display: inline-block;
    vertical-align: middle;
  }
  .goods_infs{
    float: right;
    width: 88%;
  }
  .cart_list .ckeck_btn{
    width: 25px;
    height: 25px;
    margin-top: 2.3rem;
    padding-left: 0;
  }
  .goods_pic{
    width: 6rem;
    height: 6rem;
    margin: 0 3%;
    border: 1px solid #ddd;
  }
  .brand{
    padding-right: 5px;
  }
  .norm, .old_price{
    color: #777;
  }
  .now_price{
    font-size: 1.2rem;
    color: #ff4100;
  }
  .old_price{
    padding-left: 10px; 
    text-decoration: line-through;
  }
  .order_total{
    padding-left: 10px;
  }
  .order_total input{
    max-width: 50%;
    font-size: 1.2rem;
    color: #f7bc46;
  }
  .go_account{
    display: block;
    float: right;
    padding: 0 20px;
    height: 45px;
    line-height: 45px;
    color: #fff;
    background: #f7bc46;
  }
  .num input{
    display: inline-block;
    width: 40px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #ccc;
    text-align: center;
    vertical-align: middle;
  }
  .reduce, .add{
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }

  /*footer.vue*/
  .cart{
    color: #fea31e;
    background: url(../images/getCart.png) center top 5px no-repeat;
    background-size: 32px;
  }
    
</style>
