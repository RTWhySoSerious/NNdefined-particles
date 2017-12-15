<template>
  <ul class="nn-list" v-if="items">
    <nn-list-item
      v-for="(item, key) in items"
      :key="key"
      :item="item"
    />
  </ul>
</template>

<script>
  import NnListItem from '../NnListItem/NnListItem'

  export default {
    name: 'NnList',
    props: {
      items: {
        type: Array,
        default: [1, 2, 3, 4]
      }
    },
    components: {
      NnListItem
    }
  }
</script>

<style scoped lang="scss">
  .nn-list {
    display: block;
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    color: #495060;
    font-size: 14px;
    position: relative;
    z-index: 900;
  }
</style>
