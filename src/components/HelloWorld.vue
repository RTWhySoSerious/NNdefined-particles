<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <nn-input 
      placeholder="Placeholder"
      label="Label"
      width="50%"
      @inputVal="userInput"
      name="name"
      :validParams="['Email']"
    /> -->
  </div>
</template>

<script>
  // import NnInput from './shared/NN-input'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      // NnInput
    },
    methods: {
      // userInput(_parsed) {
      //   console.log(_parsed)
      // }
    }
  }
</script>

<style scoped lang="scss">
  .hello {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      color: green;
    }
  }
</style>
