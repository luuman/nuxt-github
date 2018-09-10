import api from '../../api';
import * as types from '../mutation-types';
import Locale from '~/locales'

const state = {
  locales: Locale(),
  locale: Locale()[0]
};

const getters = {
};

const actions = {
};

const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
