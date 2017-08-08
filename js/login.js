var app=angular.module("myApp");

app.controller("myCtrl",function($scope, $location){
  $scope.user="";
  $scope.password="";

  $scope.submit=function() {
    $location.path('/dashboard');
  };

$scope.reset = function(){
    alert("reset");
    $scope.user = null;
    $scope.password = null;
    
    
};


});



app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state("dashboard", {
    url: "/dashboard",
    templateUrl: "views/success.html"
  })
    
  .state("homepage", {
    url: "/",
    templateUrl: "views/home.html"
  });

});