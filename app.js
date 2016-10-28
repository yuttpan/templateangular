'use strict';

var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope,indexService) { 
    $scope.name = "Test" ;
    console.log("test") 
})