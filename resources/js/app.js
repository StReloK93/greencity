window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import * as BABYLON from '@babylonjs/core';
import { GridMaterial } from '@babylonjs/materials';
import "@babylonjs/loaders/glTF";
import earcut from 'earcut'



//FOR VUE 3
import mainApp from './components/App.vue'
import { createApp } from 'vue';
import router from './router';
import store from './store';

window.store = store
window.BABYLON = BABYLON;
window.BABYLON.GridMaterial = GridMaterial;
window.earcut = earcut

createApp(mainApp)
    .use(router)
    .use(store)
    .mount("#app");