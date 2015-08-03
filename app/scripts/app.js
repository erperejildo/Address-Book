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
    .directive('numbersOnly', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function(inputValue) {
                    if (inputValue == undefined) return ''
                    var transformedInput = inputValue.replace(/[^0-9]/g, '');
                    if (transformedInput != inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }

                    return transformedInput;
                });
            }
        };
    })
    // for 300ms mobile touch delay
    .run(function() {
        FastClick.attach(document.body);
    });