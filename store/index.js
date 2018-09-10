// import Locale from '~/locales'

// export const state = () => ({
//   locales: Locale(),
//   locale: Locale()[0]
// })

// export const mutations = {
//   SET_LANG(state, locale) {
//     if (state.locales.indexOf(locale) !== -1) {
// 	  	console.log(locale)
//       state.locale = locale
//     }
//   }
// }
// console.log('Locale')
import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

const createStore = () => {
  return new Vuex.Store({
    modules
  })
}

// import Vue from 'vue';
// import Vuex from 'vuex';
// import modules from './modules';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   modules
// });


export default createStore

// import Vue from 'vue';
// import Vuex from 'vuex';
// import modules from './modules';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     modules
// });
