import './style/common.scss';
import './style/nav.scss';
import './style/main.scss';

import 'angular';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

import routerconfig from './js/routers/router.js';
import controllerModule from './js/controllers/controller.js'
export default angular.module('epartyApp',['ui.router','ui.bootstrap','ngAnimate',controllerModule])
.config(routerconfig)
.controller('appCtrl', function ($scope,$state,$stateParams) {
  $scope.$state=$state;
}).name