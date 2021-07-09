import { createApp } from 'vue'
import App from './App.vue'

const ssbSingleton = window.getSSBSingleton()
console.log("🚀 ~ file: main.js ~ line 5 ~ ssbSingleton", ssbSingleton)

// ssbSingleton.onError(function(err) {
//     document.body.classList.add('ssbError')
//     document.getElementById("modalErrorMessage").innerHTML = err
//   })
//   ssbSingleton.onSuccess(function() {
//     document.body.classList.remove('ssbError')
//   });

//   console.log("🚀 ~ file: main.js ~ line 7 ~ SSB", SSB)
//   console.log("🚀 ~ file: main.js ~ line 7 ~ err", err)
// SSB.db.publish({
//     type: 'post',
//     text: 'oioi'
//   }, (err) => {
//     console.log("🚀 ~ file: main.js ~ line 12 ~ err", err)
//       console.log('Postado')
//   })

createApp(App).mount('#app')
