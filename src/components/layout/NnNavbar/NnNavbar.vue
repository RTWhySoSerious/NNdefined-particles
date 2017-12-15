<template>
  <div class="nn-navbar">
    <nn-list :items="menuItems"/>
  </div>
</template>

<script>
  import NnList from '@/components/shared/NnList/NnList'
  import { menuItems } from './menuMock'

  export default {
    name: 'NnNavbar',
    data() {
      return {
        menuItems
      }
    },
    components: {
      NnList
    }
  }
</script>

<style scoped lang="scss">
  .nn-navbar {
    position: fixed;
    background: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    width: 200px;
    overflow: auto;
  }
</style>
