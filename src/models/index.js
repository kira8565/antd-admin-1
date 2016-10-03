import { message } from 'antd'
import { login } from '../services/index'

export default {

  namespace: 'index',

  state: {
    logining: false,
    isLogin: false
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *login({ payload }, { call, put }) {
      yield put({ type: 'showLogining' })
      const { data } = yield call(login, payload)
      if( !data ) {
        message.error('服务器异常！')
        yield put({ type: 'hideLogining' })
        return
      }
      if (data.success) {
        message.success(data.msg)
        yield put({ type: 'hideLogining' })
        yield put({ type: 'loginSuccess' })
      } else {
        message.error(data.msg)
        yield put({ type: 'hideLogining' })
      }
    }
  },

  reducers: {
    showLogining(state) {
      return { ...state, logining: true }
    },
    hideLogining(state) {
      return { ...state, logining: false }
    },
    loginSuccess(state) {
      return {...state, isLogin: true}
    },
    fetch(state, action) {
      return { ...state, ...action.payload }
    },
  },

}
