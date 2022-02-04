import Actions from '../../Addons/Actions'

import Import from './ImportMeshes'


export default class {
   constructor(scene) {
      this.actions = new Actions(scene)
      new Import(scene)
   }
}