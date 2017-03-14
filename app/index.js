import './styles/common.scss';
import './styles/nav.scss';
import './styles/main.scss';

import 'angular';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

import routerconfig from './scripts/routers/router.js';
import controllerModule from './scripts/controllers/controller.js'
export default angular.module('epartyApp',['ui.router','ngAnimate',controllerModule])
.config(routerconfig)
.controller('appCtrl', function ($scope,$state,$stateParams) {
  $scope.$state=$state;
}).name