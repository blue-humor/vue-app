<template>
  <section class="msite">
    <Header :title="address.name ||'正在定位中...'">
      <span class="header_search"
            slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>

      <span class="header_login"
            slot="right">
        <span class="header_login_text"
              @click="$router.push('./login')">登录|注册</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container"
           v-if="categorys.length">
        <div class="swiper-wrapper">
          <!-- categorysArr -->
          <div class="swiper-slide"
               v-for="(categorys,index)  in categorysArr"
               :key="index">

            <a href="javascript:"
               class="link_to_food"
               v-for="(category,index)  in categorys"
               :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com'+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>

          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>

      <div v-else>
        <img src="./images/msite_back.svg"
             alt="">
      </div>

    </nav>

    <ShopList></ShopList>
  </section>
</template>

<script tppe="text/ecmascript-6">
import ShopList from '../../components/ShopList/ShopList.vue'

// import _ from 'lodash' //引入所有
import chunk from 'lodash/chunk' //只引入需要的工具函数
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import { mapState } from 'vuex'

export default {
  components: { ShopList },

  async mounted() {
    this.$store.dispatch('getShops')
    //  await  this.$store.dispatch('getCategorys', () => {
    //     // this.$nextTick(() => {
    //     //   // 创建Swiper对象的时机 必须在列表数据显示之后
    //     //   new Swiper('.swiper-container', {
    //     //     loop: true, // 循环模式选项
    //     //     // 如果需要分页器
    //     //     pagination: {
    //     //       el: '.swiper-pagination',
    //     //     },
    //     //   })
    //     // })
    //   })
    await this.$store.dispatch('getCategorys') //dispatch() 返回的promise在状态更新且界面更新之后执行
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  },

  // watch: {
  //   // vue处理：更新状态数据 ==> 调用监视的回调函数 ==>异步更新界面

  //   categorys() {
  //     //cateforys状态数据更新

  //     // 在此次数据变化导致状态更新之后执行
  //     // 将回调延迟到下次DOM 更新之后执行，在修改数据之后立即使用它，然后等待DOM更新
  //     this.$nextTick(() => {
  //       // 创建Swiper对象的时机 必须在列表数据显示之后
  //       new Swiper('.swiper-container', {
  //         loop: true, // 循环模式选项
  //         // 如果需要分页器
  //         pagination: {
  //           el: '.swiper-pagination',
  //         },
  //       })
  //     })
  //   },
  // },

  computed: {
    ...mapState(['address', 'categorys']),

    //  分类轮播的二维数组  小数组的长度最大为8
    categorysArr() {
      const { categorys } = this
      return chunk(categorys, 8)
    },
  },
}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/mixins.styl'
&.msite // 首页
  width 100%
.msite_nav
  bottom-border-1px(#e4e4e4)
  margin-top 45px
  height 200px
  background #fff
  .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .link_to_food
          width 25%
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              width 50px
              height 50px
          span
            display block
            width 100%
            text-align center
            font-size 13px
            color #666
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #02a774
</style>
