<template>
  <div id="app">
    <PersonForm />
  </div>
</template>

<script>
import PersonForm from './components/PersonForm'

export default {
  name: 'App',
  components: {
    PersonForm
  }
}
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
