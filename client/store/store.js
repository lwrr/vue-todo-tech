import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

export default () => {
  const store = new Vuex.Store(
    {
      state: defaultState,
      mutations,
      getters,
      actions,
      modules: {
        a: {
          namespaced: true,
          state: {
            count: 'textA'
          },
          mutations: {
            updateCountA (state, str) {
              state.count += str
            }
          },
          getters: {
            /* state, getters, rootState其中state getters代表本模块 */
            fullNameA (state, getters, rootState) {
              console.log('getters= ', getters)
              return state.count + '32321' + rootState.b.count
            }
          },
          actions: {
            /* {state, commit, rootState}其中state commit代表本模块 */
            updateCountAsyncA ({state, commit, rootState}) {
              commit('updateCountA', 'hahahha')/* 查找本模块的mutations方法 */
              commit('updateCount', {num: 543210}, {root: true})/* 查找全局的mutations方法 */
            }
          }
        },
        b: {
          state: {
            count: 'textB'
          }
        }
      }
    }
  )
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        actions: newActions,
        getters: newGetters
      })
    })
  }
  return store
}
