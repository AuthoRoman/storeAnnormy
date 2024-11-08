import { createStore } from "vuex";
import products from "./modules/product";

export const store = createStore({
  modules: {
    products,
  },
});
