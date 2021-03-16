<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">屌爆了外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;"
             :class="{on:loginWay}"
             @click="loginWay=true">短信登录</a>
          <a href="javascript:;"
             :class="{on:!loginWay}"
             @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:loginWay}">
            <section class="login_message">
              <input type="tel"
                     maxlength="11"
                     placeholder="手机号"
                     v-model="phone"
                     name="phone"
                     v-validate="{required: true,regex: /^1\d{10}$/}">
              <span style="color: red;"
                    v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
              <button :disabled="!isRightPhone || computedTime>0"
                      class="get_verification"
                      :class="{right_phone_number:isRightPhone }"
                      @click.prevent="sendCode">{{computedTime>0?`短信已发送${computedTime}s`:'发送验证码'}}</button>
            </section>
            <section class="login_verification">
              <input type="tel"
                     maxlength="8"
                     placeholder="验证码"
                     v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册屌爆了外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>

          <div :class="{on:!loginWay}">
            <section>
              <section class="login_message">
                <input type="tel"
                       maxlength="11"
                       placeholder="手机/邮箱/用户名"
                       name="name"
                       v-validate="{required:true}"
                       v-model="name">
                <span style="color: red;"
                      v-show="errors.has('name')">{{ errors.first('name') }}</span>
              </section>
              <section class="login_verification">
                <input :type="isShowPwd ? 'text' : 'password'"
                       maxlength="8"
                       placeholder="密码"
                       name="pwd"
                       v-validate="{required:true}"
                       v-model="pwd">
                <span style="color: red;"
                      v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
                <div class="switch_button off"
                     :class="isShowPwd?'on':'off'"
                     @click="isShowPwd=!isShowPwd">
                  <div class="switch_circle"
                       :class="{right:isShowPwd}"></div>
                  <span class="switch_text">{{isShowPwd?'abc':''}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text"
                       maxlength="11"
                       placeholder="验证码"
                       v-model="captcha">
                <img ref="captcha"
                     class="get_verification"
                     src="http://localhost:4000/captcha"
                     alt="captcha"
                     @click="updateCaptcha">
              </section>
            </section>
          </div>

          <button class="login_submit"
                  @click.prevent="login">{{$t('login_login')}}</button>
        </form>
        <a href="javascript:;"
           class="about_us">{{$t('login_aboutUs')}}</a>

        <br>
        <button class="login_submit"
                @click.prevent="toggleLocale">切换语言</button>
      </div>
      <a href="javascript:"
         class="go_back"
         @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>

  </section>
</template>


<script tppe="text/ecmascript-6">
import { Toast, MessageBox } from 'mint-ui'

import '../../validate.js'
import { reqSendCode } from '../../api'
export default {
  components: {},
  data() {
    return {
      loginWay: true, //true是短信验证  false是密码验证
      phone: '', //手机号
      code: '', // 短信验证码
      name: '', // 用户名
      pwd: '', // 密码
      captcha: '', // 图形验证码
      computedTime: 0, //计算剩余时间
      isShowPwd: false, //是否显示密码
    }
  },

  methods: {
    /* 发送短信验证码 */
    async sendCode() {
      // alert('短信发送成功'),
      // 设置computedTime为最大值
      this.computedTime = 30
      // 启动循环定时器，每隔1s将omputedTime-1
      const intervalId = setInterval(() => {
        this.computedTime--
        if (this.computedTime <= 0) {
          // 当计时 为01时候停止计时
          clearInterval(intervalId)
        }
      }, 1000)

      // 发请求 => 发短信验证码的接口
      const result = await reqSendCode(this.phone)
      if (result.code === 0) {
        Toast('短信发送成功')
        // Toast('Upload Complete');
      } else {
        //  短信发送失败停止计时
        this.computedTime = 0
        // alert(result.msg)
        MessageBox('提示', result.msg)
      }
    },

    /* 更新图形验证码 */
    updateCaptcha() {
      // this.$refs.captcha.src = 'http://localhost:4000/captcha' //因为这里的值和以前一模一样  利用了缓存，然后就没法请求
      this.$refs.captcha.src =
        'http://localhost:4000/captcha?time=' + Date.now() //迷惑浏览器给个参数time，后台不需要
    },

    /* 切换语言 */
    toggleLocale() {
      const locale = this.$i18n.locale === 'en' ? 'zh_CN' : 'en'
      this.$i18n.locale = locale
      localStorage.setItem('locale_key', locale)
    },

    /* 短信验证 */
    async login() {
      let result
      const { loginWay, phone, code, name, pwd, captcha } = this
      // 发密码请求
      if (!loginWay) {
        result = await this.$API.reqPwdLogin({ name, pwd, captcha })

        if (result.code != 0) {
          //登录失败
          // 更新图形验证码
          this.updateCaptcha()
          this.captcha = ''
        }
        //  发送短信请求
      } else {
        result = await this.$API.reqLoain_sms(phone, code)

        // 请求结束后需要停止计时
        this.computedTime = 0
      }
      // 根据请求结果进行处理
      if (result.code === 0) {
        // 登录请求成功
        const user = result.data
        // console.log(user)
        //保存user到state（内存）里面去
        this.$store.dispatch('saveUser', user)
        // 跳转到个人中心
        this.$router.replace('/profile')
      } else {
        //登陆失败
        MessageBox.alert(result.msg)
      }
    },
  },

  computed: {
    /* 判断phone是否是正确的手机号 */
    isRightPhone() {
      return /^1\d{10}$/.test(this.phone)
    },
  },

  // 在当前组件对象创建前调用
  // 进入登录界面是，如果已经登录了，自动跳转到个人中心
  beforeRouteEnter(to, from, next) {
    next((component) => {
      //在组件对象创建之后执行，且会将组件对象传入
      // 如果已经登录，自动跳转到profile
      if (component.$store.state.user.token) {
        next('/profile')
      } else {
        // 否则放行
        next()
      }
    })
  },
}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/mixins.styl'
.loginContainer
  width 100%
  height 100%
  background #fff
  .loginInner
    padding-top 60px
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        font-size 40px
        font-weight bold
        color #4662d9
        text-align center
      .login_header_title
        padding-top 40px
        text-align center
        >a
          color #333
          font-size 14px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color #4662d9
            font-weight 700
            border-bottom 2px solid #4662d9
    .login_content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid #4662d9
          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
              &.right_phone_number // 父级引用
                color black
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color 0.3s, border-color 0.3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background #4662d9
              >.switch_circle
                // transform translateX(27px)
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.1)
                transition transform 0.3s
                &.right
                  transform translateX(27px)
          .login_hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color #4662d9
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background #4662d9
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
      .about_us
        display block
        font-size 12px
        margin-top 20px
        text-align center
        color #999
    .go_back
      position absolute
      top 5px
      left 5px
      width 30px
      height 30px
      >.iconfont
        font-size 20px
        color #999
</style>
