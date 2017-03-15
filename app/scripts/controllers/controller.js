
import WaiterRankingCtrl from './waiterRanking.js'
import rainbowDirective from '../directives/rainbow.js'
import HasOrderCtrl from './hasOrder.js'
import TestCtrl from './test2.js'

export default angular.module('controllerModule',[rainbowDirective])
.controller('WaiterRankingCtrl',WaiterRankingCtrl)
.controller('HasOrderCtrl',HasOrderCtrl)
.controller('TestCtrl',TestCtrl)
.name