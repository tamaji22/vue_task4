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
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
  computed: {
    loginUserData() {
      return this.$store.getters.getLoginUserData;
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      this.$router.go({ path: this.$router.currentRoute.path, force: true });
    },
  },
};
</script>
