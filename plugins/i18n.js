import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  let data = {}
  let Locale = store.state.I18n.locales
  for (let i = 0; i < Locale.length; i++) {
    data[Locale[i]] = require(`~/locales/${Locale[i]}.json`)
  }
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.I18n.locale,
    fallbackLocale: 'en',
    messages: data
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}