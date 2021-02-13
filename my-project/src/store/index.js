import { createStore } from 'vuex';
import db from '../plugins/firebase.config';

export default createStore({
  state: {
    loginUserData: {},
  },
  mutations: {
    setLoginUserId(state, userId) {
      state.loginUserData.userId = userId;
    },
    setLoginUserName(state, userName) {
      state.loginUserData.userName = userName;
    },
    setLoginUserMoney(state) {
      db.doc(state.loginUserData.userId)
        .get()
        .then((userData) => {
          state.loginUserData.money = userData.data().money;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getLoginUserData(state) {
      return state.loginUserData;
    },
  },
  actions: {
    setLoginUserMoney({ commit }) {
      commit('setLoginUserMoney');
    },
  },
  modules: {},
});
