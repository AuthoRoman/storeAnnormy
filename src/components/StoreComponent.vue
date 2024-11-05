<template>
  <section class="store">
    <div class="container">
      <StoreHeader :filterProductsOptialActive="filterProductsOptialActive" />
      <div class="store_body">
        <ProductList
          :search-texts="searchText"
          :filter="filterProductsOptialActive"
          :page="currentPage"
        />

        <StorePagination :currentPage="currentPage" />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import ProductList from "./ProductList.vue";
import StoreHeader from "./StoreHeader.vue";
import StorePagination from "./StorePagination.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "StoreComponent",
  props: {
    searchText: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  components: {
    StoreHeader,
    ProductList,
    StorePagination,
  },
  computed: {
    ...mapGetters(["filterProductsOptialActive"]),
  },
});
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
