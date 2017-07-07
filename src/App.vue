<template>
  <div id="app">
    <Appheader></Appheader>
      <router-view></router-view>
    <Appfooter></Appfooter>
  </div>
</template>

<script>
import Appheader from './components/Appheader'
import Appfooter from './components/Appfooter'
export default {
  name: 'app',
  components: {
    Appheader, 
    Appfooter
  }
}
</script>
