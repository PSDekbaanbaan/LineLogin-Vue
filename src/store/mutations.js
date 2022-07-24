const mutations = {
  SET_USER(state, data) {
    state.user = Object.assign({}, state.user, data);
  },
};

export default mutations;
