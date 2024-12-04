<template>
  <div class="prodList">
    <div
      v-for="(val, index) in productStore.getArray.slice(
        (productStore.getCurrentPage - 1) * 4,
        productStore.getCurrentPage * 4
      )"
      :key="index"
    >
      <ProductCard
        :suk="val.id"
        :cardText="val.card_text"
        :cardPrice="val.card_price"
        :imgs="val.img"
      />
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useProductStore } from "../../store/modules/product";
import ProductCard from "./ProductCard.vue";

const props = defineProps({
  searchTexts: {
    type: String,
    default: "",
  },
  filter: {
    type: String,
    default: "lastest",
  },
  page: Number,
});
const productStore = useProductStore();

function fetchData() {
  console.log("fetch!");
  if (productStore.getNumPage < productStore.getCurrentPage) {
    productStore.setCurrentNumberPage(1);
  }
  productStore.setFilterProductsArray({
    searchTexts: props.searchTexts,
    filter: props.filter,
  });
}

// Watch the relevant properties to call fetchData as needed
watch(
  () => [
    props.searchTexts,
    props.filter,
    productStore.getCurrentPage,
    productStore.getNumPage,
    productStore.getInitArray,
  ],
  fetchData,
  { immediate: true }
);
</script>

<style scoped>
.prodList {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
</style>
