<template>
  <div id="app">
    <Form @submit="openPopup" />
    <FormPopup v-if="isPopupOpened" @outsideClick="closePopup" />
  </div>
</template>

<script>
import Form from "./components/Form";
import FormPopup from "./components/FormPopup";

export default {
  name: "App",
  data() {
    return {
      isPopupOpened: false,
    };
  },
  components: {
    Form,
    FormPopup,
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
@import "@/styles/main.scss";
</style>
