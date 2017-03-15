let router = function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.when("", "/index");
    $stateProvider
        .state("index", {
            url: "/index",
            templateUrl: "/views/index.html"
        })
        .state("test", {
            url: "/test",
            templateUrl: "/views/test.html",
            controller: 'TestCtrl as vm'
        })
         .state("waiterRanking", {
            url: "/waiterRanking",
            templateUrl: "/views/waiterRanking.html",
            controller: 'WaiterRankingCtrl as vm'
        })
          .state("hasOrder", {
            url: "/hasOrder",
            templateUrl: "/views/hasOrder.html",
            controller: 'HasOrderCtrl as vm'
        });
       
    $urlRouterProvider.otherwise("/index");

};
export default router;