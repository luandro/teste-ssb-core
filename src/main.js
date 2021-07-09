import { createApp } from "vue";
import App from "./App.vue";

let SSB
let err
if (window.getSSBSingleton) {
  const ssbSingleton = window.getSSBSingleton();
  [err, SSB] = ssbSingleton.getSSB();
} else {
  console.log('Bundle not loaded!')
}
console.log('SSB', SSB, err)

if (SSB) {
  console.log('Postando')
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
}

createApp(App).mount("#app");
