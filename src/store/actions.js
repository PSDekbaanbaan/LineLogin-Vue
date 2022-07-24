import Axios from "axios";

const actions = {
  async actSetUser({ commit }, data){
    commit("SET_USER", data);
  },

  async actGet(store, data) {
    return await Axios.post(
      `${process.env.VUE_APP_API_URL}/userTable/get`,
      data
    )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  async actCreate(store, data) {
    return await Axios.post(
      `${process.env.VUE_APP_API_URL}/userTable/create`,
      data
    )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  async actGetCoupon(store, data) {
    return await Axios.post(
      `${process.env.VUE_APP_API_URL}/couponTable/get`,
      data
    )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

};

export default actions;
