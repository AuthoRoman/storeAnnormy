<template>
  <div class="store_header">
    <span
      :class="[filterProductsOptialActive === 'lastest' ? 'active' : '']"
      class="store_nav"
      @click="updateFilter('lastest')"
    >
      LASTEST
    </span>
    <span
      :class="[filterProductsOptialActive === 'best sellers' ? 'active' : '']"
      class="store_nav"
      @click="updateFilter('best sellers')"
    >
      BEST SELLERS
    </span>
    <span
      :class="[filterProductsOptialActive === 'special' ? 'active' : '']"
      class="store_nav"
      @click="updateFilter('special')"
    >
      SPECIAL
    </span>
    <span
      
      class="store_nav--active"
      @click=" setVisible(!getSetVisibleCreator)"
    >
      CREATE NEW PRODUCT
    </span>
    <Transition>
    <div v-if="getSetVisibleCreator">
        <PopupProductCreate />
    </div>
    </Transition>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
import  PopupProductCreate  from "./PopupProductCreate.vue";

export default {
  name: "StoreHeader",
  components:{
    PopupProductCreate
  },
  props: {
    filterProductsOptialActive: {
      type: String,
      default: "lastest",
    },
  },
  methods: {
    ...mapMutations(['setVisible']),
    updateFilter(value) {
      this.$store.dispatch("updateFilterProductsOptialActive", value);
    },
  },
  computed:{
    ...mapGetters(['getSetVisibleCreator'])
  }
};
</script>

<style lang="less" scoped>
.store_header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.store_nav {
  font-size: 25px;
  color: #bcbcbc;
  margin: 0 10px;
  transition: all 0.6s;
  font-weight: 500;
  &--active{
    font-size: 25px;
  color: #bcbcbc;
  margin: 0 10px;
  transition: all 0.6s;
  font-weight: 500;
  &:hover{
    cursor: pointer;
    color:  #C89256;
  }
  }
}

.store_nav:hover {
  cursor: pointer;
  color: #292a29;
}

.active {
  color: #292a29;
}
.v-enter-active {
  transition: opacity 0.8s ease;
}

.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
