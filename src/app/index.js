'use strict';

angular.module('fenixApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/main/main.html',
        controller: 'MainCtrl'
      })
      .state('ficha', {
        url: '/ficha',
        templateUrl: 'app/views/ficha/ficha.html',
        controller: 'FichaCtrl'
      })
      .state('despachador', {
        url: '/despachador',
        templateUrl: 'app/views/despachador/despachador.html',
        controller: 'DespachadorCtrl'
      })
      .state('agencia', {
        url: '/agencia',
        templateUrl: 'app/views/agencia/agencia.html',
        controller: 'AgenciaCtrl'
      })
      .state('agencia1', {
        url: '/agencia1',
        templateUrl: 'app/views/agencia/agencia1.html',
        controller: 'Agencia1Ctrl'
      })
      .state('agencia2', {
        url: '/agencia2',
        templateUrl: 'app/views/agencia/agencia2.html',
        controller: 'Agencia1Ctrl'
      })
      .state('bandeja', {
        url: '/bandeja',
        templateUrl: 'app/views/bandeja/bandeja.html',
        controller: 'BandejaCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/views/login/login.html',
        controller: 'BandejaCtrl'
      })
      .state('screenlock', {
        url: '/screenlock',
        templateUrl: 'app/views/screenlock/screenlock.html',
        controller: 'BandejaCtrl'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'app/views/404/404.html',
        controller: 'BandejaCtrl'
      })
      .state('500', {
        url: '/500',
        templateUrl: 'app/views/500/500.html',
        controller: 'BandejaCtrl'
      });
      
    $urlRouterProvider.otherwise('/');
  });
