<template>
  <ul class="nn-list">
    <nn-list-item 
      v-if="items"
      v-for="(item, key) in items"
      :key="key"
      :item="item"
      @selectItem="selectedItem"
    />
    <!-- :class="{'selected' : item === selected}" -->
  </ul>
</template>

<script>
  import NnListItem from '../NnListItem/NnListItem'

  export default {
    name: 'NnList',
    data() {
      return {
        msg: 'NnList',
        selected: '',
        selectTrue: false,
        openedList: false
      }
    },
    props: {
      items: {
        type: Array,
        default: [1, 2, 3, 4]
      }
    },
    components: {
      NnListItem
    },
    watch: {
      selectTrue() {},
      openedList() {}
    },
    methods: {
      selectedItem(_item, _t) {
        console.log(_t)
        this.openedList = true
        this.selected = _item
      }
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
