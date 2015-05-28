'use strict';

angular.module('fenixApp')
    .controller('MainCtrl', function ($scope, $log) {

        $scope.tab = 1;

        $scope.selectTab = function (tab) {
            this.tab = tab;
        };

        $scope.selectTabs = function (tabs) {
            this.tabs = tabs;

        };

        angular.forEach($scope.awesomeThings, function (awesomeThing) {
            awesomeThing.rank = Math.random();
        });
    });
