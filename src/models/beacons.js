import { message } from 'antd'
import { list } from '../services/beacons'

export default {

  namespace: 'beacons',

  state: {
    list: [],
    loading: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/beacons') {
          dispatch({
            type: 'list'
          });
        }
      });
    },
  },

  effects: {
      *list({ payload }, { select, call, put }) {
          yield put({ type: 'showLoading' });
          const { data } = yield call(list);
          const result = data.result.data.devices
          yield put({
            type: 'listSuccess',
            payload: result
          });
      }
  },

  reducers: {
    showLoading(state) {
      return { ...state, loading: true }
    },
    listSuccess(state, action) {
        return { ...state, loading: false, list:action.payload }
    }
  },

}
