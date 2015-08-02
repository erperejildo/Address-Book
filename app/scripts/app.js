'use strict';

/**
 * @ngdoc overview
 * @name addressBookApp
 * @description
 * # addressBookApp
 *
 * Main module of the application.
 */
angular
    .module('addressBookApp', [
        'ngRoute',
        'pascalprecht.translate'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(function($translateProvider) {
        var lang = 'EN';
        if (localStorage.getItem('languaje')) {
            var lang = localStorage.getItem('languaje');
        }

        $translateProvider
            .translations('ES', langES)
            .translations('EN', langEN)
            .preferredLanguage(lang);
    })
    // for 300ms mobile touch delay
    .run(function() {
        FastClick.attach(document.body);
    });