import { createApp } from "vue";
import App from "./App.vue";

let SSB
if (window.getSSBSingleton) {
  const ssbSingleton = window.getSSBSingleton();
  SSB = ssbSingleton.getSSB();
} else {
  console.log('Bundle not loaded!')
}

SSB.db.publish(
  {
    type: "post",
    text: "oioi",
  },
  (err) => {
    console.log("🚀 ~ file: main.js ~ line 12 ~ err", err);
    console.log("Postado");
  }
);

createApp(App).mount("#app");
