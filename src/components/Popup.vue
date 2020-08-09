<template>
  <div class="popup" id="j-popup">
    <div class="popup__content flex flex--center" v-click-outside="outsideClick">
      <h2 class="popup__title">Зарегистрировано</h2>
      <p class="popup__subtitle">Новый клиент успешно создан!</p>
    </div>
  </div>
</template>

<style lang="scss">
.popup {
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #90969c, $alpha: 0.5);
  display: flex;
  flex-flow: column;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  &__content {
    background-color: #f4f8fc;
    border-radius: 10px;
    box-shadow: 0px 5px 40px #c7c9ca;
    max-width: 320px;
    padding: 24px;
    z-index: 20;
  }

  &__title {
    font-size: 24px;
  }

  &__subtitle {
    font-size: 17px;
    margin-top: 16px;
  }
}
</style>

<script>
export default {
  methods: {
    outsideClick() {
      this.$emit("outsideClick");
    },
  },
};
</script>
