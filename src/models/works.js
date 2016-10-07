
export default {

  namespace: 'works',

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
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put }) {
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
