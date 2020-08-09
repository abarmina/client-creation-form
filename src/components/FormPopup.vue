<template>
  <div class="popup" id="j-popup">
    <div class="popup__content flex flex--center" v-click-outside="outsideClick">
      <h2 class="popup__title">Зарегистрировано</h2>
      <p class="popup__subtitle">Новый клиент успешно создан!</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    outsideClick() {
      this.$emit("outsideClick");
    },
  },
};
</script>
