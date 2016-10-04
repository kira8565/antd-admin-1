
export default {

  namespace: 'authors',

  state: {
    list: [
      {
        id:1,
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        id:2,
        name: '李四',
        age: 24,
        address: '杭州'
      },
      {
        id:3,
        name: '王五',
        age: 25,
        address: '上海'
      }, {
        id:4,
        name: '张三',
        age: 23,
        address: '成都'
      },
      {
        id:5,
        name: '李四',
        age: 24,
        address: '杭州'
      }
    ],
    loading: false,
    total: null,
    current: 1,
    currentItem: {},
    modalVisible: false,
    modalType: 'create'
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put }) {
    },
  },

  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload };
    },
    showModal(state, action) {
      return { ...state, ...action.payload, modalVisible: true };
    },
    hideModal(state) {
      return { ...state, modalVisible: false };
    }
  },

}
