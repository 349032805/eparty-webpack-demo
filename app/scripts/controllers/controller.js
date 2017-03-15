
import UserListsCtrl from './userLists.js'
import ModalDemoCtrl from './networkManagerCtrl.js'
import WaiterRankingCtrl from './waiterRanking.js'
import rainbowDirective from '../directives/rainbow.js'

export default angular.module('controllerModule',[rainbowDirective])
.controller('WaiterRankingCtrl',WaiterRankingCtrl)
.name