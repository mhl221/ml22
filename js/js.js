angular.module("app",[]).directive("autoplay",[function(){
    	return{
    		restrict:'ECMA',
    		template:'<div><ul><li ng-repeat="x in data">{{x.title}}</li></ul><div ng-repeat="y in img1"><img ng-src="{{y.img}}" alt=""></div></div>',
    		scope:{data:"=jin",data2:"@jin2"},
    		replace:true,
    		link:function(s,e,a){
    			e.find(".carousel").carousel({
				  interval: 1000
				})
    		}
    	}
    }]).filter("f",[function(){
    	return function(e){
    		if(e == "jgr"){
    			return "***"
    		}else{
    			return e
    		}
    		
    	}
}]);