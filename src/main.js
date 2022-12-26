import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);


// global components
import HeaderComponent from "./components/Header.vue";
app.component('app-header', HeaderComponent);

import FooterComponent from "./components/Footer.vue";
app.component('app-footer', FooterComponent);

import RouteContainerComponent from "./components/RouteContainer.vue";
app.component('app-content', RouteContainerComponent);


app.mount("#app");
