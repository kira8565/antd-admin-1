import { message } from 'antd'
import { list, create, remove } from '../services/beacons'
import { routerRedux } from 'dva/router';

export default {

  namespace: 'beacons',

  state: {
    list: [],
    loading: false,
    modalVisible: false
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
      },
      *add({ payload }, { select, call, put }) {
          yield put({ type: 'hideModal' });
          yield put({ type: 'showLoading' });
          const  {data}  = yield call(create,{groupId:1847115,deviceId: payload});
          if(data.result.errmsg === 'success.') {
            message.success(data.result.errmsg)
            yield put({ type: 'addSuccess',payload  });
          } else {
            message.error(data.result.errmsg)
            yield put({ type: 'hideLoading'  });
            
          }
          
      },
      *'delete'({ payload }, { call, put }) {
        yield put({ type: 'showLoading' });
        const {data}  = yield call(remove, {groupId:1847115,deviceId: payload});
        if(data.result.errmsg === 'success.') {
          message.success(data.result.errmsg)
        } else {
          message.error(data.result.errmsg)
        }
        yield put({ type: 'deleteSuccess',payload  });
      },

  },

  reducers: {
    showLoading(state) {
      return { ...state, loading: true }
    },
    hideLoading(state) {
      return { ...state, loading: false }
    },
    listSuccess(state, action) {
        return { ...state, loading: false, list:action.payload }
    },
    addSuccess(state, action){
      const newDevice = {device_id: parseInt(action.payload)};
      console.log(newDevice)
      return { ...state, list: [newDevice, ...state.list], loading: false };
    },
    deleteSuccess(state, action) {
      const newList = state.list.filter(beacon => beacon.device_id !== action.payload);
      return { ...state, loading: false, list:newList }
    },
    showModal(state, action) {
      return { ...state, modalVisible: true };
    },
    hideModal(state) {
      return { ...state, modalVisible: false };
    }
  },

}
