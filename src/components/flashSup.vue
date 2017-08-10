<template>
  <div class="Main">
    <div class="menu_nav">
      <ul>
        <li v-for="(item, index) in items" @click="selectStyle($event, index)" :class="{'active':nowIndex ==index}">{{item.select}}</li>
      </ul>
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.menu_nav{
  position: fixed;
  width: 20%;
  left: 0;
  top: 50px;
  text-align: center;
}
.content_mian{
  float: right;
  width: 80%;
  margin: 0 0 50px 0;
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
.ul_right li:last-child{
  border-bottom: none;
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
