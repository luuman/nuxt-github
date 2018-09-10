<template lang="html">
  <div class="footer original">
    <div id="footer-logo">
      <a target="_blank">
        <i class="fa fa-github"></i>
        <span id="version" @click="showLocal">
          {{Locale}}
        </span>
      </a>
    </div>
    <div id="footer-credit" v-html="$t('footer.credit')"></div>
    <div class="footer-local" v-show="isLocal">
      <ul>
        <li v-for="(item, index) in Locales" :key="index" @click="Localed(item)" :class="{active: item == Locale}">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Locale from '~/locales'

export default {
  data() {
    return {
      isLocal: false,
      Locale: this.$i18n.locale,
      Locales: Locale()
    }
  },
  methods: {
    showLocal () {
      this.isLocal = true
    },
    Localed (name) {
      this.isLocal = false
      this.$i18n.locale = name
      this.Locale = name
      this.$store.commit('SET_LANG', name)
    }
  }
}
</script>

<style lang="scss">
  .footer {
    height: 35px;
    background-color: #0f2035;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    z-index: 1;
    position: relative;
  .footer-local{
    position: absolute;
    left: 0;
    // background-color: #0f2035;
    background-image: linear-gradient(to bottom, #224365, #0a1b30);
    bottom: 65px;
    width: 100%;
    ul{
      margin: auto;
      padding: 15px;
      overflow: hidden;
    }
    li{
      color: #FFF;
      line-height: 20px;
      list-style: none;
      float: left;
      width: 25%;
    }
    .active{
      color: #aeb6c0;
    }
  }
  #footer-logo {
    font-size: 38px;
    line-height: 38px;
    position: relative;
    a {
      color: #ffffff;
    }
  }
  #footer-credit {
    opacity: 0.6;
    font-family: GothamPro;
    font-size: 13px;
    line-height: 1.5;
    letter-spacing: 0.3px;
    text-align: right;
    color: #aeb6c0;
  }
  #version {
    font-size: 12px;
    vertical-align: middle;
    margin-left: 10px;
  }
}
</style>
