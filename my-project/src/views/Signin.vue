<template>
  <div class="container">
    <Header></Header>
    <h2 class="title is-2 has-text-centered mb-6">ログイン画面</h2>
    <div class="columns is-centered">
      <div class="field is-horizontal column is-one-third">
        <div class="field-label is-normal">
          <label class="label">メールアドレス</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input is-info"
                type="emal"
                placeholder="E-mail"
                v-model="email"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="field is-horizontal column is-one-third">
        <div class="field-label is-normal">
          <label class="label">パスワード</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input is-info"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="has-text-centered">
      <button class="button is-medium is-link is-outlined mt-4" @click="signIn">
        ログイン
      </button>
    </div>
    <div class="has-text-centered">
      <router-link to="/signup" class="has-text-link"
        >新規登録はこちらから</router-link
      >
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import firebase from 'firebase/app';

export default {
  name: 'Signin',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert('ログインしました。');
          this.$router.push('/');
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
