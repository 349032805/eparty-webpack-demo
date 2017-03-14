var router=function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.when("", "/index");
    $stateProvider
        .state("index", {
            url: "/index",
            templateUrl: "/views/index.html"
        })
        .state("test", {
            url: "/test",
            templateUrl: "/views/test.html"
        })
         .state("waiterRanking", {
            url: "/waiterRanking",
            templateUrl: "/views/waiterRanking.html"
        })
          .state("hasOrder", {
            url: "/hasOrder",
            templateUrl: "/views/hasOrder.html"
        });
       
    $urlRouterProvider.otherwise("/index");

};
export default router;