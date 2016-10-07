import { create, remove, update, query } from '../services/authors'
import { parse } from 'qs';

export default {

  namespace: 'authors',

  state: {
    list: [],
    loading: false,
    total: null,
    current: 1,
    currentItem: {},
    modalVisible: false,
    modalType: 'create'
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/authors') {
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
      yield put({ type: 'showLoading' });
      const { data } = yield call(query, parse(payload));
      console.log(1)
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.authors,
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
      const id = yield select(({ authors }) => authors.currentItem.id);
      const newAuthor = { ...payload, id };
      const data = yield call(update, newAuthor);
      if (data && data.success) {
        yield put({
          type: 'updateSuccess',
          payload: newAuthor
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
          payload: data.author
        });
      }
    },
  },

  reducers: {
    showLoading(state) {
      return { ...state, loading: true };
    },
    createSuccess(state, action) {
      const newAuthor = action.payload;
      return { ...state, list: [newAuthor, ...state.list], loading: false };
    },
    querySuccess(state, action) {
      return { ...state, ...action.payload, loading: false };
    },
    deleteSuccess(state, action) {
      const id = action.payload;
      const newList = state.list.filter(author => author.id !== id);
      return { ...state, list: newList, loading: false };
    },
    updateSuccess(state, action) {
      const updateAuthor = action.payload;
      const newList = state.list.map(author => {
        if (author.id === updateAuthor.id) {
          return { ...author, ...updateAuthor };
        }
        return author;
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
