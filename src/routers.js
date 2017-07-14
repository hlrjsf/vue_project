import Home from './components/home.vue'
import flashSup from './components/flashSup.vue'
import personCenter from './components/personCenter.vue'
import goodsDetails from './components/goodsDetails.vue'
import shoppingCart from './components/shoppingCart.vue'
import orderSettlement from './components/orderSettlement.vue'
import myAddress from './components/myAddress.vue'
import editAddress from './components/editAddress.vue'
import addAddress from './components/addAddress.vue'
import myOrder from './components/myOrder.vue'
import orderDetails from './components/orderDetails.vue'
import payWays from './components/payWays.vue'
import bestTime from './components/bestTime.vue'




const routers = [
  { path: '/home',name: 'home', component: Home },
  { path: '/', component: Home },
  { path: '/flashSup', name: 'flashSup', component: flashSup },
  { path: '/', component: flashSup },
  { path: '/personCenter', name: 'personCenter', component: personCenter },
  { path: '/', component: personCenter },
  { path: '/goodsDetails', name: 'goodsDetails', component: goodsDetails },
  { path: '/', component: goodsDetails },
  { path: '/shoppingCart', name: 'shoppingCart', component: shoppingCart },
  { path: '/', component: shoppingCart },
  { path: '/orderSettlement', name: 'orderSettlement', component: orderSettlement },
  { path: '/', component: orderSettlement },
  { path: '/myAddress', name: 'myAddress', component: myAddress },
  { path: '/', component: myAddress },
  { path: '/editAddress', name: 'editAddress', component: editAddress },
  { path: '/', component: editAddress },
  { path: '/addAddress', name: 'addAddress', component: addAddress },
  { path: '/', component: addAddress },
  { path: '/myOrder', name: 'myOrder', component: myOrder },
  { path: '/', component: myOrder },
  { path: '/orderDetails', name: 'orderDetails', component: orderDetails },
  { path: '/', component: orderDetails },
  { path: '/payWays', name: 'payWays', component: payWays },
  { path: '/', component: payWays },
  { path: '/bestTime', name: 'bestTime', component: bestTime },
  { path: '/', component: bestTime },
]
export default routers