<template>
  <div class="modal-wrapper">
    <div class="modal-overlay">
      <div class="modal-body">
        <p>あなたの残高：{{ loginUserData.money }}</p>
        <p>送る金額</p>
        <div class="control ml-2 mr-2">
          <input class="input" v-model="amountMoney" type="text" />
        </div>
        <div class="buttons is-centered mt-5">
          <button class="button is-danger" @click="$emit('send', userData)">
            送信
          </button>
          <button class="button is-danger" @click="$emit('close')">
            キャンセル
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SendMoney',
  props: ['val'],
  computed: {
    // 送金先のユーザデータ
    userData() {
      return this.val;
    },
    // 送金元のユーザデータ
    loginUserData() {
      return this.$store.getters.getLoginUserData;
    },
    // 送金する金額
    amountMoney: {
      get() {
        return this.$store.getters.getAmountMoney;
      },
      set(value) {
        this.$store.commit('setAmountMoney', value);
      },
    },
  },
};
</script>
