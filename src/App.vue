<template>
  <div id="app">
    <PersonForm @submit="openPopup" />
    <Popup v-if="isPopupOpened" @outsideClick="closePopup" />
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
      document.body.classList.add("noscroll");
    },
    closePopup() {
      this.isPopupOpened = false;
      document.body.classList.remove("noscroll");
    },
  },
};
</script>

<style lang="scss">
body {
  color: #11122b;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  text-align: left;
  width: 100vw;
}

* {
  box-sizing: border-box;
}

.noscroll {
  overflow: hidden;
}

@media (min-width: 576px) {
  body {
    display: flex;
    justify-content: center;
  }
}
</style>
