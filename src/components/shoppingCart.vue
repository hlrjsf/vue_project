<template>
  <div class="Main">
    <div class="select_productList">
      <div class="fl ckeck_btn" :class="{'selected': isSelectAll}" @click="checkAll">{{chechAll}}</div>
      <div class="edit_all fr" :class="{'isShow': !isSureEditAll, 'isHide': isSureEditAll}" @click="editAllInfs">编辑全部</div>
      <div class="sure_edit_all fr" :class="{'isShow': isSureEditAll, 'isHide': !isSureEditAll}" @click="sureEditAllInfs">完成</div>
    </div>
    <div class="content_mian">
      <div class="cart_productList oh" v-for="(item, index) in productList">
        <div class="ckeck_btn" :class="{'selected':item.isChecked}" @click="selectGoods(item, index)"></div>
        <div class="goods_infs">
          <div class="goods_pic" @click="goodsDetails">
            <img :src="item.productImage">
          </div>
          <div class="r_box" :class="{'isShow': !item.isShowRbox, 'isHide': item.isShowRbox}">
            <div class="goods_name">{{item.productName}}</div>
            <div class="goods_brand_norm">
              品牌：<span class="brand">{{item.productBrand}}</span>
              规格：<span class="norm">{{item.productNorm}}g</span>
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
              <span class="num">{{item.productNum}}</span>
              <span class="edit_btn" @click="editGoods(item)">编辑</span>
            </div>
          </div>
          <div class="edit_infs" :class="{'isShow': item.isShowEditInfs, 'isHide': !item.isShowEditInfs}">
            <div class="goods_name">{{item.productName}}</div>
            <div class="goods_brand_norm">
              品牌：<span class="brand">{{item.productBrand}}</span>
              规格：<span class="norm">{{item.productNorm}}g</span>
            </div>
            <div class="goods_price">
              <span class="now_price">￥{{item.productNowPrice}}</span>
              <span class="old_price">￥{{item.productOldPrice}}</span>
            </div>
            <div class="change_num">
              <span class="reduce">
                <img :src="Reduce" @click="changeNum(item, -1)">
              </span> 
              <span class="change_num">
                <input type="text" v-model="item.productNum" />
              </span>
              <span class="add" @click="changeNum(item, 1)">
                <img :src="Add">
              </span>
              <span class="delect" @click="delectGoods(item)">
                <img :src="Delect">
              </span>
            </div>
            <div class="sure_edit" @click="sureEdit(item)">完成</div>
          </div>
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
    <!-- 删除弹出层 -->
    <div class="mask" v-if="delFlag"  @touchmove.prevent>
      <div class="delect_product" :class="{'isShow': delFlag, 'isHide': !delFlag}">
        <div class="note_txt">确定要删除该商品</div>
        <div class="btn_list">
          <button class="cancel_btn" @click="move">取消</button>
          <button class="sure_btn" @click="delProduct">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shoppingCart',
  data () {
    return {
      chechAll: '全选',
      editAll: '编辑全部',
      productList: [
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm: 87,
          productTaste: '海鲜风味',
          productNowPrice: 5.5,
          productOldPrice: 6,
          productNum: 1, 
        },
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm: 87,
          productTaste: '海鲜风味',
          productNowPrice: 5.5,
          productOldPrice: 6,
          productNum: 1, 
        },
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm: 87,
          productTaste: '海鲜风味',
          productNowPrice: 5.5,
          productOldPrice: 6,
          productNum: 1,
        },
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm: 87,
          productTaste: '海鲜风味',
          productNowPrice: 5.5,
          productOldPrice: 6,
          productNum: 1,  
        },
        {
          productImage:'../static/img/cart_goods.png', 
          productName:'合味道XO酱海鲜风味面',
          productBrand:'日清',
          productNorm: 87,
          productTaste: '海鲜风味',
          productNowPrice: 5.5,
          productOldPrice: 6,
          productNum: 1, 
        }
      ],
      Reduce: '../static/img/reduce.png',
      Add: '../static/img/add.png',
      Delect: '../static/img/delect.png',
      orderSubtotal: 0, 
      isSelectAll: false,
      isSureEditAll: false,
      curProduct: '',
      delFlag:false 
    }
  },
  methods: {
    goodsDetails: function(){
      this.$router.push({path: '/goodsDetails'});
        //刷新页面
        this.$router.go(0);
    },
    editAllInfs: function(){   //编辑全部
      var _this = this;
      this.productList.forEach(function (item, index) { // 用forEach来遍历 productList
        _this.editGoods(item);
      });
      _this.isSureEditAll = true;
    },
    sureEditAllInfs: function(){   //完成编辑全部
      var _this = this;
      this.productList.forEach(function (item, index) { // 用forEach来遍历 productList
        _this.sureEdit(item);
      });
      _this.isSureEditAll = false;
    },
    editGoods: function(item){ //编辑
      var _this = this;
      if(typeof item.isShowEditInfs == 'undefined'){ // 
        _this.$set(item, "isShowEditInfs", true);
        item.isShowRbox = !item.isShowRbox;
      }else if(item.isShowEditInfs == true){  //全部编辑
        item.isShowEditInfs = true;
      }else{
        item.isShowEditInfs = !item.isShowEditInfs;
        item.isShowRbox = !item.isShowRbox;
      }
    },
    sureEdit: function(item){// 完成编辑
      var _this = this;
      if(item.isShowEditInfs == true){ 
        item.isShowEditInfs = !item.isShowEditInfs;
        item.isShowRbox = !item.isShowRbox;
      }
    },
    //数量加减
    changeNum: function(product, way){
      if(way > 0){ //当 way>0 就是点击的 +
          product.productNum++; // 数量增加  就相当于 item 的productNum
      }else {
          product.productNum--; // 否则数量减少
          if(product.productNum <= 1){ //
              product.productNum = 1;
          }
      }
      this.caleTotalPrice();
    },
    selectGoods: function(item){
      var _this = this;
      if(typeof item.isChecked == 'undefined'){ // 单选
        _this.$set(item,"isChecked",true);
      }else{
        item.isChecked = !item.isChecked;
      }
      _this.isCheckAll();
      this.caleTotalPrice();
    },
    checkAll:function (){  //全选
      var _this = this;
      if(!_this.isSelectAll){
        _this.isSelectAll = true;
        _this.isSelect();
      }else{
        _this.isSelectAll = !_this.isSelectAll;
        _this.isSelect();
      }
      this.caleTotalPrice();
    },
    isSelect: function(){   //判断单选
      var _this = this;
      this.productList.forEach(function (item, index) { // 用forEach来遍历 productList
        if(typeof item.isChecked == 'undefined'){
          _this.$set(item, "isChecked", _this.isSelectAll);
        }else{
          item.isChecked = _this.isSelectAll;
        }
      });
    },
    isCheckAll:function(){   //判断全选
      var flag = true;
      this.productList.forEach(function(good){
        if(!good.isChecked){
          flag = false;
        }
      });
      if(!flag){
        this.isSelectAll = false;
      } else {
        this.isSelectAll = true;
      }
    },
    caleTotalPrice:function () {  // 计算选中商品的总价
      var _this = this;
      this.orderSubtotal = 0;
      this.productList.forEach(function (item, index) {
          if(item.isChecked){
            _this.orderSubtotal += item.productNowPrice * item.productNum;
          }
      });
    },
    delectGoods:function (item) {  // 点击删除 出现弹框
        this.delFlag = true;
        this.curProduct = item; // 保存当前删除的对象
        this.stop();
    },
    delProduct:function () {   // 点击弹框里面的确认删除
      // 通过indexof 来搜索当前选中的商品 找到索引 index
      var index = this.productList.indexOf(this.curProduct);
      // 获取索引 后删除元素 splice(index，1) 两个参数  第一个参数索引 第二个参数 删除个数
      this.productList.splice(index, 1);// 从当前索引开始删，删除一个元素
      this.move();
      return this.productList;
    },
    mo: function(e){
      e.preventDefault();
    },
    stop: function(){  //禁止滑动
      document.body.style.overflow = 'hidden';        
      document.addEventListener("touchmove", this.mo, false);//禁止页面滑动
    },
    move: function(){   //取消滑动限制
      document.body.style.overflow = '';//出现滚动条
      document.removeEventListener("touchmove", this.mo, false); 
      this.delFlag = false; // 删除/取消删除后 弹框消失    
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .content_mian{
    margin: 90px 0 106px 0;
  }
  .select_productList, .order_subtotal{
    position: fixed;
    width: 100%;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 99;
  }
  .select_productList{
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
    background: url(../images/ls_icon1.png) no-repeat left center;
    background-size: 25px 25px;
  }  
  .ckeck_btn.selected{
    margin-left: 10px;
    padding-left: 30px;
    background: url(../images/ls_icon2.png) no-repeat left center;
    background-size: 25px 25px;
  }
  .edit_all.isShow{
    margin-right: 15px;
    padding-left: 20px;
    background: url(../images/info_all_icon.png) no-repeat left center;
    background-size: auto 55%;
  }
  .edit_all.isHide, .sure_edit_all.isHide{
    display: none;
  }
  .sure_edit_all.isShow{
    margin-right: 15px;
    padding-left: 20px;
    background: url(../images/sure_edit_all.png) no-repeat left center;
    background-size: auto 55%;
  }
  .cart_productList{
    margin: 0 10px 10px 10px;
    padding: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .cart_productList .ckeck_btn, .goods_pic, .r_box{
    display: inline-block;
    vertical-align: middle;
  }
  .edit_infs.isHide, .r_box.isHide{
    display: none;
  }
  .edit_infs.isShow{
    display: inline-block;
    vertical-align: middle;
  }
  .change_num{
    margin: 10px 0;
  }
  .sure_edit{
    text-align: right;
    color: #999;
  }
  .goods_infs{
    float: right;
    width: 88%;
  }
  .cart_productList .ckeck_btn{
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
  .edit_btn{
    float: right;
    color: #999;
    border-bottom: 1px solid #999;
    cursor: pointer;
  }
  .change_num input{
    display: inline-block;
    width: 40px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #ddd;
    text-align: center;
    vertical-align: middle;
  }
  .reduce, .add{
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
  .delect{
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-left: 10px;
  }
  .delect_product{
    position: absolute;
    width: 70%;
    height: 20%;
    top: 50%;
    left: 50%;
    margin-left: -35%;
    margin-top: -10%;
    background: #fff;
    z-index: 1000000;
  }
  .delect_product.isHide{
    display: none;
  }
  .delect_product.isShow{
    display: block;
  }
  .mask{
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999999;
  }
  .note_txt{
    text-align: center;
    margin-top: 30px;
  }
  .btn_list{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-top: 1px solid #ddd;
  }
  .sure_btn, .cancel_btn{
    float: left;
    width: 50%;
    height: 40px;
    line-height: 40px;
    border: none;
  }
  .sure_btn{
    color: #fff;
    background: #f7bc46;
  }
  .cancel_btn{
    background: #eee;
  }

  /*footer.vue*/
  .cart{
    color: #fea31e;
    background: url(../images/getCart.png) center top 5px no-repeat;
    background-size: 32px;
  }
    
</style>
