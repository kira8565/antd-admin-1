
export default {

  namespace: 'layout',

  state: {
      fold: true
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fold({ payload }, { call, put }) {
      yield put({ type: 'foldSuccess' , payload });
    },
  },

  reducers: {
    foldSuccess(state, action) {
      return { ...state, ...action.payload};
    },
  },

}
