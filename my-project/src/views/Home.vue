<template>
  <div class="container">
    <Header></Header>
    <nav class="navbar">
      <div class="navbar-brand">
        {{ loginUserData.userName }}さんようこそ！！
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">残高：{{ loginUserData.money }}</div>
          <a class="navbar-item button is-link is-outlined" @click="signOut"
            >ログアウト</a
          >
        </div>
      </div>
    </nav>
    <h2 class="title is-2 has-text-centered mb-6">ユーザ一覧</h2>
    <h3 class="title is-4">ユーザ名</h3>
    <div class="columns" v-for="userData in usersData" :key="userData.userId">
      <div class="column">
        {{ userData.userName }}
      </div>
      <div class="buttons">
        <button class="column button is-primary" @click="showWallet(userData)">
          walletを見る
        </button>
        <button class="column button is-primary">送る</button>
      </div>
      <ShowWallet
        :val="postItem"
        v-show="isWallet"
        @close="closeWallet"
      ></ShowWallet>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowWallet from '../components/ShowWallet';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    ShowWallet,
  },
  data() {
    return {
      isWallet: false,
      postItem: '',
    };
  },
  computed: {
    loginUserData() {
      return this.$store.getters.getLoginUserData;
    },
    usersData() {
      return this.$store.getters.getUsersData;
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
    },
    showWallet(userData) {
      this.postItem = userData;
      this.isWallet = true;
    },
    closeWallet() {
      this.isWallet = false;
    },
  },
};
</script>
