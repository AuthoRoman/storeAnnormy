<template>
  <section class="store">
    <div class="container">
      <StoreHeader
        :filterProductsOptialActive="productStore.filterProductsOptialActive"
      />
      <div class="store_body">
        <ProductList
          :search-texts="props.searchText"
          :filter="productStore.filterProductsOptialActive"
          :page="productStore.currentPage"
        />

        <StorePagination :currentPage="currentPage" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductList from "./ProductList.vue";
import StoreHeader from "./StoreHeader.vue";
import StorePagination from "./StorePagination.vue";
import { useProductStore } from "../../store/modules/product";

const props = defineProps({
  searchText: {
    type: String,
    default: "",
  },
});

const productStore = useProductStore();
</script>

<style lang="less" scoped>
.store {
  margin: 15px;
}

.store_body {
  display: flex;
  flex-wrap: wrap;
  margin-top: 45px;
  justify-content: space-between;
}
</style>
