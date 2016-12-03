
export default {

  namespace: 'layout',

  state: {
      fold: true
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
    },
  },

  effects: {
    *fold({ payload }, { call, put }) {
      yield put({ type: 'foldSuccess' , payload });
    },
  },

  reducers: {
    foldSuccess(state, action) {
      localStorage.setItem('fold', action.payload.fold)
      return { ...state, ...action.payload};
    },
  },

}
