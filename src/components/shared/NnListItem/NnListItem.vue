<template>
  <div>





    <li 
      v-if="item.parent"
      class="nn-list-item"
      @click="openSubMenu(item)"
      :class="parseOpened"
    >
      <span class="nn-list-item__text">
        {{ item.text }}
      </span>
      <span class="nn-list-item__icon">
        <i class="fa fa-angle-down"/>
      </span>
      <li 
        class="nn-list-sub-item" 
        v-for="(subItem, key) in item.subItems"
        :style="parseHeight"
        @click="select(subItem)"
        :class="{'selected' : subItem === selected && item === selectedParent}"
      >
        <span class="nn-list-sub-item__text">
          {{ subItem.text }}
        </span>
      </li>
    </li>



    <li 
      v-if="!item.parent"
      class="nn-list-item"
      @click="selectOne(item)"
      :class="{'selected' : item === selected && selectedOne}"
    >
      <span class="nn-list-item__text">
        {{ item.text }}
      </span>
    </li>




  </div>
</template>

<script>
  export default {
    name: 'NnList',
    data() {
      return {
        msg: 'NnList',
        selected: '',
        showSubItem: false,
        selectedParent: '',
        selectedOne: false
      }
    },
    props: {
      item: {
        type: Object
      },
      selectItem: {
        type: Function
      }
    },
    watch: {
      showSubItem() {}
    },
    computed: {
      parseHeight() {
        return this.showSubItem ? 'height:38px!important;' : ''
      },
      parseOpened() {
        return this.showSubItem ? 'opened' : 'closed'
      }
    },
    methods: {
      select(_item) {
        this.selected = _item
        this.selectedParent = this.item
        this.$emit('selectItem', _item)
      },
      selectOne(_item) {
        this.selected = ''
        this.selectedOne = !this.selectedOne
        this.selected = _item
        this.$emit('selectItem', _item)
      },
      openSubMenu(_item) {
        this.showSubItem = !this.showSubItem
        this.$emit('selectItem', _item, this.showSubItem)
      }
    }
  }
</script>

<style scoped lang="scss">
  .openedSubMenu {
    display: flex!important;
    transition: all .2s ease-in-out; 
  }
  .opened {
    border-right: 1px solid rgb(249, 99, 50)!important;
    background: #f9f9f9;
    color: rgb(249, 99, 50);
    transition: all .2s ease-in-out;
  }
  .closed {
    background: #fff;
    transition: all .2s ease-in-out;
    // background: red;
  }
  .nn-list-item {
    padding: 0;
    position: relative;
    cursor: pointer;
    z-index: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    outline: 0;
    list-style: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    border-right: 1px solid #fff;
    transition: all .2s ease-in-out;
    &:hover {
      background: #f9f9f9;
      // border-right: 1px solid rgb(249, 99, 50);
    }
    &__text {
      width: 100%;
      height: 38px;
      line-height: 38px;
    }
    &__icon {
      height: 38px;
      line-height: 38px;
      width: 38px;
      position: absolute;
      right: 10px;
    }
  }
  .nn-list-sub-item {
    padding: 0;
    height: 0;
    position: relative;
    cursor: pointer;
    z-index: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    outline: 0;
    list-style: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: all .2s ease-in-out;
    &:hover {
      background: #f9f9f9;
      border-right: 1px solid rgb(249, 99, 50);
    }
    &__text {
      width: 100%;
      height: 38px;
      line-height: 38px;
    }
    &__icon {
      height: 38px;
      line-height: 38px;
      width: 38px;
      position: absolute;
      right: 10px;
    }
  }
  .selected {
    // color: rgb(249, 99, 50);
    border-right: 1px solid rgb(249, 99, 50)!important;
    // background: #f9f9f9;
    z-index: 2;
    transition: all .2s ease-in-out;
  }
</style>
