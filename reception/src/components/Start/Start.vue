<template>
  <div>
    <div class="star star-24"
         :class="'star-'+size">
      <span class="star-item on"
            v-for="(sc, index) in satarClasses"
            :class="sc"
            :key="index"></span>

    </div>
  </div>
</template>

<script tppe="text/ecmascript-6">
export default {
  name: 'Start',

  components: {},
  props: {
    score: Number,
    size: Number,
  },
  computed: {
    //所有星星类名组成的数组
    // 3.5 = 3+1+1
    satarClasses() {
      const { score } = this
      const arr = []

      //  向arr中添加n个on
      const screInteger = Math.floor(score) //取整
      for (let index = 0; index < screInteger; index++) {
        arr.push('on')
      }
      // 向arr中添加1/0个half
      if (score * 10 - screInteger * 10 >= 5) {
        arr.push('half')
      }
      // 向arr中添加m个off
      while (arr.length < 5) {
        arr.push('off')
      }
      return arr
    },
  },
}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/mixins.styl'
.star // 2x图 3x图
  float left
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star48_on')
      &.half
        bg-image('./images/stars/star48_half')
      &.off
        bg-image('./images/stars/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star36_on')
      &.half
        bg-image('./images/stars/star36_half')
      &.off
        bg-image('./images/stars/star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star24_on')
      &.half
        bg-image('./images/stars/star24_half')
      &.off
        bg-image('./images/stars/star24_off')
</style>
