'use strict';

export default class WaiterRankingCtrl{
    constructor($http) {
    	this.$http = $http;

    	this.list  = [
		   {
		     "name": "张三",
		     "sex": 0,
		     "score": 80,
		     "date": 1483523354510
		   },
		   {
		     "name": "尼古拉斯赵四",
		     "sex": 0,
		     "score": 99,
		     "date": 1483423254510
		   },
		   {
		     "name": "王五",
		     "score": 76,
		     "sex": 1,
		     "date": 1483723454510
		   },
		    {
		     "name": "田七",
		     "score": 77,
		     "sex": 1,
		     "date": 1483926354510
		   }
		];

		//https://cnodejs.org/api
    	//https://cnodejs.org/api/v1/topics
    	let vm = this;
	    this.$http({
	        url: 'https://cnodejs.org/api/v1/topics',
	        method:'GET',
	        params: {limit:10}
	    }).then(function(res){
	    	console.log(res.data.data);
	        vm.topicList = res.data.data;
	    },function(err){
	        console.log(err);
	    });

    }

    //加载更多
    loadMore(){
    	alert("loadMore");
    }



}

WaiterRankingCtrl.$inject=['$http']
