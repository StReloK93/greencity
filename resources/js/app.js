window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders/glTF";
import earcut from 'earcut'
window.BABYLON = BABYLON;
window.earcut = earcut
window.Animate = function (mesh,parametr,property,keysArr,callback = ()=>{}){
    const anim = new BABYLON.Animation(`${mesh.name + parametr}`, parametr, 60, property, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
    anim.setKeys(keysArr)
    const animationGroup = new BABYLON.AnimationGroup(`${mesh.name + parametr}`);
    animationGroup.addTargetedAnimation(anim, mesh);
    animationGroup.play()
    animationGroup.onAnimationEndObservable.add(function(){
        callback()
    })
}


//FOR VUE 3
import mainApp from './components/App.vue'
import { createApp } from 'vue';
import router from './router';
import store from './store';
window.store = store

createApp(mainApp)
    .use(router)
    .use(store)
    .mount("#app");