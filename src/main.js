import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js';
import components from '@/components/UI'
import router from './router/router.js'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyB42SzJphrYYbfdMzihkDEo6iKditd117s",
  authDomain: "todo-riidcor.firebaseapp.com",
  databaseURL: "https://todo-riidcor-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-riidcor",
  storageBucket: "todo-riidcor.appspot.com",
  messagingSenderId: "772246302780",
  appId: "1:772246302780:web:840bf87665f6d21c035339",
  measurementId: "G-WXWC81X7WN"
};

let app

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
   if (!app) {
    app = createApp(App)
    components.forEach(component => {
        app.component(component.name, component)
    })
    app
.use(store)
.use(router)
.mount('#app')
   }
})




