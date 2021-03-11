<template>
  <router-view />
</template>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
#app {
  label {
    text-align: center;
    width: 120px;
  }

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
}
</style>
