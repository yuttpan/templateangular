var app = angular.module('myApp', ['ngRoute']);



app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'main/main.html',
                controller  : 'MainCtrl'
            })

            // route for the about page
          //  .when('/about', {
          //      templateUrl : 'pages/about.html',
           //     controller  : 'aboutController'
          //  })

            // route for the contact page
         //   .when('/contact', {
       //         templateUrl : 'pages/contact.html',
          //      controller  : 'contactController'
          //  });
    });

