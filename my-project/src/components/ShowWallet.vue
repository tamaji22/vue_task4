<template>
  <div class="modal-wrapper">
    <div class="modal-overlay">
      <div class="modal-body">
        <p>{{ userData.userName }}さんの残高</p>
        <p>{{ userData.money }}</p>
        <button class="button is-danger" @click="$emit('close')">close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowWallet',
  props: ['val'],
  computed: {
    userData() {
      return this.val;
    },
  },
};
</script>
