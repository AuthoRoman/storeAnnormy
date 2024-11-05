import { createApp } from "vue";
import App from "./HomePage.vue";
import { store } from "./store";

const app = createApp(App);
app.use(store);
app.mount("#app");
