import { createStore } from 'vuex';
import firebase from 'firebase/app';
import db from '../plugins/firebase.config';
import router from '../router';

export default createStore({
  state: {
    loginUserData: {
      userId: '',
      userName: '',
      money: 0,
    },
    usersData: [],
  },
  mutations: {
    setLoginUserId(state, userId) {
      state.loginUserData.userId = userId;
    },
    setLoginUserName(state, userName) {
      state.loginUserData.userName = userName;
    },
    setLoginUserMoney(state, money) {
      state.loginUserData.money = money;
    },
    setUsersData(state, { userId, userName, money }) {
      state.usersData.push({
        userId: userId,
        userName: userName,
        money: money,
      });
    },
  },
  getters: {
    getLoginUserData(state) {
      return state.loginUserData;
    },
    getUsersData(state) {
      return state.usersData;
    },
  },
  actions: {
    signUp({ dispatch, commit }, { userName, email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          result.user.updateProfile({
            displayName: userName,
          });
          db.doc(result.user.uid)
            .set({
              user_id: result.user.uid,
              user_name: userName,
              money: 2000,
            })
            .then(() => {
              commit('setLoginUserId', result.user.uid);
              commit('setLoginUserName', userName);
              dispatch('setLoginUserMoney');
            })
            .then(() => {
              dispatch('setUsersData');
            })
            .catch((error) => {
              alert(error.message);
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    signIn({ dispatch, commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          commit('setLoginUserId', user.user.uid);
          commit('setLoginUserName', user.user.displayName);
          dispatch('setLoginUserMoney');
        })
        .then(() => {
          dispatch('setUsersData');
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    setLoginUserMoney({ commit, state }) {
      db.doc(state.loginUserData.userId)
        .get()
        .then((userData) => {
          commit('setLoginUserMoney', userData.data().money);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          router.push('signin');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setUsersData({ commit, state }) {
      db.where('user_id', '!=', state.loginUserData.userId)
        .get()
        .then((usersData) => {
          usersData.forEach((userData) => {
            commit('setUsersData', {
              userId: userData.data().user_id,
              userName: userData.data().user_name,
              money: userData.data().money,
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
