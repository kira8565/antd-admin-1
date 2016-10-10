import { getSelectAllAuthors } from '../services/works'
import { create, remove, update, query } from '../services/works'
import { parse } from 'qs';

export default {

  namespace: 'works',

  state: {
    list: [],
    loading: false,
    total: null,
    current: 1,
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    selectAllAuthors: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/works') {
          dispatch({
            type: 'query',
            payload: location.query
          });
        }
      });
    },
  },

  effects: {
    *query({ payload }, { select, call, put }) {
      yield put({ type: 'showLoading' })
      const {result} = yield call(getSelectAllAuthors)
      yield put({
        type: 'getSelectAllAuthorsSuccess',
        payload: result
      });

      const { data } = yield call(query, parse(payload));
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.works,
            total: data.page.total,
            current: data.page.current
          }
        });
      }
    },

    *'delete'({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });
      const data  = yield call(remove, { id: payload });
      if (data && data.success) {
        yield put({
          type: 'deleteSuccess',
          payload
        });
      }
    },

    *update({ payload }, { select, call, put }) {
      yield put({ type: 'hideModal' });
      yield put({ type: 'showLoading' });
      const id = yield select(({ works }) => works.currentItem.id);
      const newWork = { ...payload, id };
      const data = yield call(update, newWork);
      if (data && data.success) {
        yield put({
          type: 'updateSuccess',
          payload: newWork
        });
      }
    },
    *create({ payload }, { call, put }) {
      yield put({ type: 'hideModal' });
      yield put({ type: 'showLoading' });
      const data = yield call(create, payload);
      if (data && data.success) {
        yield put({
          type: 'createSuccess',
          payload: data.work
        });
      }
    },
  },










  reducers: {
    getSelectAllAuthorsSuccess(state, action){
      return { ...state, selectAllAuthors: action.payload };
    },
    showLoading(state) {
      return { ...state, loading: true };
    },
    createSuccess(state, action) {
      const newWork = action.payload;
         let dd = state.selectAllAuthors.filter(item=>{
           return item.id == newWork.AuthorId
         })
         newWork.author = dd[0].name
      return { ...state, list: [newWork, ...state.list], loading: false };
    },
    querySuccess(state, action) {
      let t = { ...state, ...action.payload, loading: false }
      t.list.map((d)=>{
         let dd = t.selectAllAuthors.filter(item=>{
           return item.id == d.AuthorId
         })
         d.author = dd[0].name
      })
      return t;
    },
    deleteSuccess(state, action) {
      const id = action.payload;
      const newList = state.list.filter(work => work.id !== id);
      return { ...state, list: newList, loading: false };
    },
    updateSuccess(state, action) {
      const updateWork = action.payload;
      const newList = state.list.map(work => {
        if (work.id === updateWork.id) {
         let dd = state.selectAllAuthors.filter(item=>{
           return item.id == updateWork.AuthorId
         })
         updateWork.author = dd[0].name

          return { ...work, ...updateWork };
        }
        return work;
      });
      return { ...state, list: newList, loading: false };
    },
  
    showModal(state, action) {
      return { ...state, ...action.payload, modalVisible: true };
    },
    hideModal(state) {
      return { ...state, modalVisible: false };
    }
  },

}
