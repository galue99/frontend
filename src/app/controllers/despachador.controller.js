'use strict';

angular.module('fenixApp')
    .controller('DespachadorCtrl', function ($scope, $log) {

        $scope.tab         = 1;
        $scope.tabs        = 1;
        $scope.show = 1;

        $scope.selectTab = function(tab){
            this.tab = tab;
        };

        $scope.selectTabs = function(tabs){
            this.tabs = tabs;
        };

        $scope.toggle = function(show) {
            this.show = show;
            console.log($scope.show);
        };

        angular.forEach($scope.awesomeThings, function(awesomeThing) {
            awesomeThing.rank = Math.random();
        });
  });
