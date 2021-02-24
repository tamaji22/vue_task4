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

<style scoped lang="scss">
.modal-wrapper {
  bottom: 0;
  left: 0;
  padding: 60px 10px;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 900;
}

.modal-overlay {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 910;
}

.modal-body {
  background-color: rgb(255, 255, 255);
  padding-bottom: 1em;
  padding-top: 1em;
  text-align: center;
  width: 15%;
  z-index: 920;
}

.modal-body > p {
  padding-bottom: 10px;
}
</style>
