import angular from 'angular'
import UserListsCtrl from './userLists.js'
import ModalDemoCtrl from './networkManagerCtrl.js'
import WaiterRankingCtrl from './waiterRanking.js'
import rainbowDirective from '../directives/rainbow.js'
export default angular.module('controllerModule',[])
.controller('userListsCtrl',UserListsCtrl)
.controller('ModalDemoCtrl',ModalDemoCtrl)
.controller('WaiterRankingCtrl',WaiterRankingCtrl)
.name