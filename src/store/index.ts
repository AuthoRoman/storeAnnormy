import { createStore } from "vuex";
import products from "./modules/product";

const store = createStore({
  modules: {
    products,
  },
});

export default store;
