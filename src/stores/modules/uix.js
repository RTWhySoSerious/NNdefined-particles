import * as types from '../mutation-types'

const state = {
  currentItem: {}
}

const getters = {
  getCurrentItem() {
    return state.currentItem
  }
}

const mutations = {
  [types.SET_CURRENT_ITEM](sub, { _item }) {
    state.currentItem = ''
    state.currentItem = {
      ..._item
    }
  }
}

const actions = {
  handleSelectItem() {
    console.log('uix')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
