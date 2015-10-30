// Ionic Starter App

angular.module('shopListApp', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleLightContent();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    .state('tab.new-list', {
        url: '/new-list',
        views: {
            'tab-new-list': {
                templateUrl: 'templates/tab-new-list.html',
                controller: 'newListCtrl'
            }
        }
    })

    .state('tab.saved', {
        url: '/saved',
        views: {
            'tab-saved': {
                templateUrl: 'templates/tab-saved.html',
                controller: 'savedCtrl'
            }
        }
    })

    .state('tab.view-list', {
        url: '/view-list',
        views: {
            'tab-view-list': {
                templateUrl: 'templates/tab-view-list.html',
                controller: 'viewListCtrl'
            }
        }
    });


    $urlRouterProvider.otherwise('/tab/new-list');

});
