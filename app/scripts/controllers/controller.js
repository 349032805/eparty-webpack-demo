import baseUrlService from '../config/baseUrl.js'
import sessionService from '../config/sessionService.js'

import WaiterRankingCtrl from './waiterRanking.js'
import rainbowDirective from '../directives/rainbow.js'
import HasOrderCtrl from './hasOrder.js'
import TestCtrl from './test.js'

export default angular.module('controllerModule',[rainbowDirective])
.service('baseUrlService',baseUrlService)
.service('sessionService',sessionService)
.controller('WaiterRankingCtrl',WaiterRankingCtrl)
.controller('HasOrderCtrl',HasOrderCtrl)
.controller('TestCtrl',TestCtrl)
.name