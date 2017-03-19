'use strict';

export default class TestCtrl{
  constructor($state,$location,$http,$interval,baseUrlService) {
    this.$http = $http;
    this.$location = $location;
    this.$state = $state;
    this.$interval = $interval;
    this.baseUrlService = baseUrlService;

    this.smsCodeCountDown = 0;

   this.$http({
      url: baseUrlService.baseUrl + '/shop/list',
      method:'GET'
    }).then(function(res){
      console.log(res);
    },function(err){
        console.log(err);
    });
  }

  getModelValue(hello){
      alert(hello);
  }

  //获取参数
  // getParams() {
 //      let id  = this.$location.search().id;
 //      let tableCode  = this.$location.search().tableCode;
 //      alert(id);
 //      alert(tableCode);
 //    }

    //js跳转页面
     gotoPage () {
         this.$state.go('index');
         // window.location.href="#/index";
         // this.$location.path('/index')
    }

    //短信验证码倒计时
    getSmsCode() {
      let vm = this;
      vm.smsCodeCountDown = 10;
      let countDown = vm.$interval(function() {
        vm.smsCodeCountDown --;
        if (vm.smsCodeCountDown <= 0) {
          vm.$interval.cancel(countDown);
        }
      }, 1000);
    }

}

TestCtrl.$inject=['$state','$location','$http','$interval','baseUrlService']
