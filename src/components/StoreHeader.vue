<template>
  <div class="store_header">
    <span
      :class="[props.filterProductsOptialActive === 'lastest' ? 'active' : '']"
      class="store_nav"
      @click="updateFilter('lastest')"
    >
      LASTEST
    </span>
    <span
      :class="[
        props.filterProductsOptialActive === 'best sellers' ? 'active' : '',
      ]"
      class="store_nav"
      @click="updateFilter('best sellers')"
    >
      BEST SELLERS
    </span>
    <span
      :class="[props.filterProductsOptialActive === 'special' ? 'active' : '']"
      class="store_nav"
      @click="updateFilter('special')"
    >
      SPECIAL
    </span>
    <span
      class="store_nav--active"
      @click="productStore.toggleVisibleCreatorPopup()"
    >
      CREATE NEW PRODUCT
    </span>
    <Transition>
      <div v-if="productStore.getSetVisibleCreator">
        <PopupProductCreate />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import PopupProductCreate from "./PopupProductCreate.vue";

import { useProductStore } from "../store/modules/product";

const props = defineProps({
  filterProductsOptialActive: {
    type: String,
    default: "lastest",
  },
});
const productStore = useProductStore();
function updateFilter(filter: string) {
  productStore.updateFilterProductsOptialActive(filter);
}
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
  &--active {
    font-size: 25px;
    color: #bcbcbc;
    margin: 0 10px;
    transition: all 0.6s;
    font-weight: 500;
    &:hover {
      cursor: pointer;
      color: #c89256;
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
