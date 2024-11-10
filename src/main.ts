import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./HomePage.vue";

createApp(App).use(createPinia()).mount("#app");
