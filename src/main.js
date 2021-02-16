import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBFXiufr6op_GiKnWlENpnQdsz1WL2cCXU",
    authDomain: "ecomm-project-572ba.firebaseapp.com",
    projectId: "ecomm-project-572ba",
    storageBucket: "ecomm-project-572ba.appspot.com",
    messagingSenderId: "708462682956",
    appId: "1:708462682956:web:89844fb6328825b3f925e9",
    measurementId: "G-F93LT0N8SJ"
};
firebase.initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount('#app')
