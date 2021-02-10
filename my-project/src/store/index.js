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
    // setLoginUserMoneyAction(ctx) {
    //   const money = [];
    //   db.where('fb_id', '==', ctx.state.loginUserData.fbId)
    //     .get()
    //     .then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         console.log(doc.money);
    //         money.push(doc.money);
    //       });
    //       ctx.commit('setLoginUserMoney', money[0]);
    //     });
    // },
  },
  modules: {},
});
