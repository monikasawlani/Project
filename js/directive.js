var app=angular.module("myApp");

app.directive('custDir', function(){
    return {
        restrict: 'E',
        templateUrl:'views/form.html',
        controller: 'myCtrl'
    }; 
});