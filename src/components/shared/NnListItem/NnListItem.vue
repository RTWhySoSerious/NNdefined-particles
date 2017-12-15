<template>
  <div>
    <li 
      v-if="item.parent"
      class="nn-list-item"
      @click="openSubMenu(item)"
      :class="isOpened"
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
        :key="key"
        :style="parseHeight"
        @click="selectChild(subItem)"
        :class="{'selected' : subItem === selected && subItem.parentId === currentItem.parentId}"
      >
        <span class="nn-list-sub-item__text">
          {{ subItem.text }}
        </span>
      </li>
    </li>
    <li 
      v-if="!item.parent"
      class="nn-list-item"
      @click="selectParent(item)"
      :class="{'selected' : item === selected && item.id === currentItem.id}"
    >
      <span class="nn-list-item__text">
        {{ item.text }}
      </span>
    </li>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'NnListItem',
    data() {
      return {
        selected: '',
        showSubItem: false
      }
    },
    props: {
      item: {
        type: Object
      }
    },
    mounted() {
      this.fetchCurrentItem()
    },
    watch: {
      showSubItem() {}
    },
    computed: {
      ...mapGetters({
        currentItem: 'getCurrentItem'
      }),
      parseHeight() {
        return this.showSubItem ? 'height:38px!important;' : ''
      },
      isOpened() {
        return this.showSubItem ? 'opened' : 'closed'
      }
    },
    methods: {
      ...mapActions({
        fetchCurrentItem: 'handleSelectItem'
      }),
      ...mapMutations({
        setItem: 'SET_CURRENT_ITEM'
      }),
      selectParent(_item) {
        this.selected = _item
        this.setItem({ _item })
      },
      openSubMenu() {
        this.showSubItem = !this.showSubItem
      },
      selectChild(_item) {
        this.selected = _item
        this.setItem({ _item })
      }
    }
  }
</script>

<style scoped lang="scss">
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
      color: rgb(249, 99, 50);
      border-right: 1px solid rgb(249, 99, 50);
      transition: all .2s ease-in-out;
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
    transition: all .2s ease-in-out;
    &:hover {
      color: rgb(249, 99, 50);
      border-right: 1px solid #f2f2f2;
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
  // Modifiers
  .opened {
    border-right: 1px solid rgb(249, 99, 50)!important;
    background: #f9f9f9;
    color: rgb(249, 99, 50);
    transition: all .2s ease-in-out;
  }
  .closed {
    background: #fff;
    transition: all .2s ease-in-out;
  }
  .selected {
    color: rgb(249, 99, 50);
    border-right: 1px solid rgb(249, 99, 50)!important;
    z-index: 2;
    transition: all .2s ease-in-out;
  }
</style>
