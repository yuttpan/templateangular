var app = angular.module('myApp', ['ngRoute']);



app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/main/main.html',
                controller  : 'MainCtrl'
            })

            // route for the about page
           .when('/lab_result', {
                templateUrl : 'pages/lab_result/lab_result.html',
                controller  : 'LabResultCtrl'
            })

            // route for the contact page
         //   .when('/contact', {
       //         templateUrl : 'pages/contact.html',
          //      controller  : 'contactController'
          //  });
    });

