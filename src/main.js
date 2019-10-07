import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'
// Add the Firebase services that you want to use
// Required for side-effects
//require("firebase/firestore");
import "firebase/firestore";


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDDRr7ArCzp30iusmcF3P92adhlq4-E7gE",
  authDomain: "vue-fire-local-chat-db.firebaseapp.com",
  databaseURL: "https://vue-fire-local-chat-db.firebaseio.com",
  projectId: "vue-fire-local-chat-db",
  storageBucket: "",
  messagingSenderId: "1872610551",
  appId: "1:1872610551:web:c47c9d83854aede5083ff2",
  measurementId: "G-4TSV0T9Z4P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/* firebase.analytics();*/ 
// initialize cloud firestores through firebase
var db = firebase.firestore();

window.db = db;

// disable deprecated features
db.settings({
  timestampsInSnapshots: true
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
