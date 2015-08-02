'use strict';
/*global $:false */

/**
 * @ngdoc function
 * @name addressBookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the addressBookApp
 */
angular.module('addressBookApp')
    .controller('MainCtrl', function($scope, $translate) {

        // create some data test
        if (!localStorage.getItem('addressBook') || localStorage.getItem('addressBook') == '[]') {
            $scope.addressBook =
                [{
                name: 'Joseph',
                company: 'Huge Resources S.L',
                address: 'Barnard’s Inn 86 Fetter Lane, London',
                phone: '020 7946 0694',
                email: 'info@hr.co.uk',
                notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }, {
                name: 'Mark',
                company: 'Mark Company',
                address: '7C Colonnade, London',
                phone: '020 7946 0393',
                email: 'info@mc.co.uk',
                notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }];

            localStorage.setItem('addressBook', JSON.stringify($scope.addressBook));
        }

        // assign local address book to scope
        $scope.addressBook = JSON.parse(localStorage.getItem('addressBook'));

        $scope.save = {
            name: '',
            company: '',
            address: '',
            phone: '',
            email: '',
            notes: ''
        };

        $scope.predicate = 'age';
        $scope.reverse = true;
        // order data
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };

        $scope.changeLanguage = function(lang) {
            $scope.language = lang;
            localStorage.setItem('language', lang);
            $translate.use(lang);
        };

        // save and update address
        $scope.addAddress = function() {
            if ($('.btn-desactivate').length == 0) {
                $scope.addressBook.push($scope.save);
                localStorage.setItem('addressBook', JSON.stringify($scope.addressBook));
                $scope.save = {
                    name: '',
                    company: '',
                    address: '',
                    phone: '',
                    email: '',
                    notes: ''
                };
            }
        };

        $scope.row = [];

        $scope.askRemove = function(pos) {
            if ($scope.row[pos]) {
                $scope.row[pos] = false;
            } else {
                $scope.row[pos] = true;
            }
        };

        $scope.removeAddress = function(pos) {
            $scope.addressBook.splice(pos, 1);
            $scope.row[pos] = false;
            localStorage.setItem('addressBook', JSON.stringify($scope.addressBook));
        };

    })
    .filter('range', function() {
        return function(input, total) {
            total = parseInt(total);
            for (var i = 0; i < total; i++) {
                input.push(i);
            }
            return input;
        };
    });