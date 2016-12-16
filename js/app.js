'use strict';

/**
 * @ngdoc overview
 * @name xjApp
 * @description
 * # xjApp
 *
 * Main module of the application.
 */
angular
  .module('xjApp', ['ui.router','jgr']).config(['$stateProvider',function($stateProvider){
    $stateProvider.state("jgr",{
      templateUrl:'views/jgr.html',
      url:"/jgr",
      controller:"jgr"
    }).state("lk",{
      templateUrl:'views/lk.html',
      url:"/lk",
      controller:"lk"
    })
  }]).controller("bo",["$scope","$http",function($scope,$http){
  	$http({
  		url:"http://47.90.20.200:1602/test2/",
  		method:"get"
   }).then(function(e){
    	$scope.data=e.data;
    },function(e){})
   $scope.del=function(e,e2){
     $http({
       url:"http://47.90.20.200:1602/test2/"+e.id,
       method:"delete"
     }).then(function(cbk){
       
       $scope.data.splice(e2,1)
     },function(){})
   }
   $scope.add=function(){
     $http({
       url:"http://47.90.20.200:1602/test2/",
       method:"post",
       data:$scope.abc
     }).then(function(e){
       $scope.data.push($scope.abc)
     },function(){})
   }
   
}]);

