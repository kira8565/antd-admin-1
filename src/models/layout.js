import { message } from 'antd';
import { login } from '../services/layout';

export default {

  namespace: 'layout',

  state: {
      fold: true,
      logining: false,
      logined: false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      if(localStorage.getItem('fold') === 'false'){
        dispatch({
          type: 'foldSuccess',
          payload: {
            fold: false
          }
        });
      }
      if(localStorage.getItem('logined')){
        dispatch({
          type: 'loginSuccess'
        });
      }
    },
  },

  effects: {
    *fold({ payload }, { call, put }) {
      yield put({ type: 'foldSuccess' , payload });
    },
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
        localStorage.setItem('logined', true)
        localStorage.setItem('token', data.token)
        yield put({ type: 'hideLogining' })
        yield put({ type: 'loginSuccess' })
      } else {
        message.error(data.msg)
        yield put({ type: 'hideLogining' })
      }
    },
    *logout({ payload }, { call, put }) {
        localStorage.removeItem('logined')
        localStorage.removeItem('token')
        message.success('注销成功！')
        yield put({ type: 'logoutSuccess' })
    }
  },

  reducers: {
    foldSuccess(state, action) {
      localStorage.setItem('fold', action.payload.fold)
      return { ...state, ...action.payload};
    },
    showLogining(state) {
      return { ...state, logining: true }
    },
    hideLogining(state) {
      return { ...state, logining: false }
    },
    loginSuccess(state) {
      return {...state, logined: true}
    },
    logoutSuccess(state) {
      return {...state, logined: false}
    },
  },

}
