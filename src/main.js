import { createApp } from "vue";
import App from "./App.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyCarousel from "@/components/UI/MyCarousel.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyCheckbox from "@/components/UI/MyCheckbox.vue";
import "./assets/main.css";

const app = createApp(App);

app.component("MyButton", MyButton);
app.component("MyCarousel", MyCarousel);
app.component("MyInput", MyInput);
app.component("MyCheckbox", MyCheckbox);

app.mount("#app");
