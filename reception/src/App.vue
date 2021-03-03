<template>
  <div>

    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script tppe="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import Start from './components/Start/Start.vue'
// import { reqAddress } from './api'

// Vue.component('FooterGuide', FooterGuide)
export default {
  name: 'App',
  async mounted() {
    this.$store.dispatch('getAddress')
  },
  components: { FooterGuide },
}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped></style>

