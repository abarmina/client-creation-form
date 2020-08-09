<template>
  <div id="app">
    <PersonForm @submit="openPopup" />
    <Popup v-if="isPopupOpened" />
  </div>
</template>

<script>
import PersonForm from "./components/PersonForm";
import Popup from "./components/Popup";

export default {
  name: "App",
  data() {
    return {
      isPopupOpened: false,
    };
  },
  components: {
    PersonForm,
    Popup,
  },
  methods: {
    openPopup() {
      this.isPopupOpened = true;
    },
    closePopup() {},
  },
};
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  font-size: 16px;
  color: #11122b;
}

* {
  box-sizing: border-box;
}

@media (min-width: 576px) {
  body {
    display: flex;
    justify-content: center;
  }
}
</style>
