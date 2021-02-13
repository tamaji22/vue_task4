<template>
  <div class="container">
    <Header></Header>
    <h2 class="title is-2 has-text-centered mb-6">新規登録画面</h2>
    <div class="columns is-centered">
      <div class="field is-horizontal column is-one-third">
        <div class="field-label is-normal">
          <label class="label">ユーザ名</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input is-info"
                type="text"
                placeholder="userName"
                v-model="userName"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
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
      <button class="button is-medium is-link is-outlined mt-4" @click="signUp">
        新規登録
      </button>
    </div>
    <div class="has-text-centered">
      <router-link to="/signin" class="has-text-link"
        >ログインはこちらから</router-link
      >
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import firebase from 'firebase/app';
import db from '../plugins/firebase.config';

export default {
  name: 'Signup',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      userName: '',
      email: '',
      password: '',
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          result.user.updateProfile({
            displayName: this.userName,
          });
          db.doc(result.user.uid)
            .set({
              user_id: result.user.uid,
              user_name: this.userName,
              money: 2000,
            })
            .catch((error) => {
              alert(error.message);
            });
          this.$store.commit('setLoginUserId', result.user.uid);
          this.$store.commit('setLoginUserName', this.userName);
          this.$store.dispatch('setLoginUserMoney');
          this.$router.push('/');
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
