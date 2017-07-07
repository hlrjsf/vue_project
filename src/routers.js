import Home from './components/home.vue'
import flashSup from './components/flashSup.vue'
import personCenter from './components/personCenter.vue'
import goodsDetails from './components/goodsDetails.vue'
import shoppingCart from './components/shoppingCart.vue'

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
]
export default routers