window.axios = require('axios');
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

import * as BABYLON from '@babylonjs/core';
import * as GUI from '@babylonjs/gui';
import { GridMaterial } from '@babylonjs/materials';
import "@babylonjs/loaders/glTF";
import earcut from 'earcut'
BABYLON.DracoCompression.Configuration.decoder.wasmBinaryUrl = "/draco_decoder_gltf.wasm";

//FOR VUE 3
import mainApp from './components/App.vue'
import { createApp } from 'vue';
import router from './router';
import store from './store';

window.store = store
window.router = router
window.BABYLON = BABYLON;
window.BABYLON.GUI = GUI;
window.BABYLON.GridMaterial = GridMaterial;
window.earcut = earcut

store.dispatch('getUser').then(() => {
    createApp(mainApp)
    .use(router)
    .use(store)
    .mount("#app");
}).catch(() => {
    console.clear();
    createApp(mainApp)
    .use(router)
    .use(store)
    .mount("#app");
})