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
      if(localStorage.getItem('isLogin')){
        dispatch({
          type: 'loginSuccess'
        });
      }
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
        localStorage.setItem('isLogin', true)
        localStorage.setItem('token', data.token)
        yield put({ type: 'hideLogining' })
        yield put({ type: 'loginSuccess' })
      } else {
        message.error(data.msg)
        yield put({ type: 'hideLogining' })
      }
    },
    *logout({ payload }, { call, put }) {
        localStorage.removeItem('isLogin')
        localStorage.removeItem('token')
        message.success('注销成功！')
        yield put({ type: 'logoutSuccess' })
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
    logoutSuccess(state) {
      return {...state, isLogin: false}
    },
    fetch(state, action) {
      return { ...state, ...action.payload }
    },
  },

}
