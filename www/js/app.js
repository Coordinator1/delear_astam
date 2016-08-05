// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var dealer = angular.module('starter', ['ionic', 'ionic-datepicker', 'ngCordova'])

.run(function($ionicPlatform, $rootScope, ROUTES) {
  $rootScope.ROUTES = ROUTES;
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant('ROUTES', (function(){
  return {
    MAIN: '/app',

    TABS: '/tabs',

    INIT: '/initial',
    AUTH: '/authorization',
    REGREQUEST: '/registration_request',
    PASSRECOVERY: '/password_recovery',
    PERSONALCABINET: '/personal_cabinet',

    NEWORDER: '/new_order',
    ORDER: '/order',
    PHOTOORDER: '/photo_order',
    MYORDERS: '/my_orders',
    MYORDERSTABS: '/my_orders_tabs',
    DETAILSOFORDER: '/details_of_order',

    CATALOGSTABS: '/catalogs_tabs',

    ACTIONSTABS: '/actions_tabs',
    ACTIONDETAILS: '/action_details',

    NOTES: '/notes'
  };
})())

.config(function($stateProvider, $urlRouterProvider, ROUTES, $httpProvider, $ionicConfigProvider, ionicDatePickerProvider) {
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  var tpl = "templates/";

  $stateProvider

  .state('app', {
    url: ROUTES.MAIN,
    abstract: true,
    templateUrl: tpl + 'menu.html',
    controller: 'AppCtrl'
  })

  .state('app.authorization', {
    url: ROUTES.AUTH,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: tpl + 'authorization.html',
        // controller: ""
      }
    }
  })

  .state('app.tabs', {
    url: ROUTES.TABS,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: tpl + 'tabs.html',
        controller: "TabsCtrl"
      }
    }
  })

  .state('app.tabs.actions_tabs', {
    url: ROUTES.ACTIONSTABS,
    cache: false,
    views: {
      cache: false,
      'action_tabs': {
        cache: false,
        templateUrl: tpl+'actions_tabs.html',
        controller: "TabsCtrl"
      }
    }
  })

  .state('app.tabs.my_orders_tabs', {
    url: ROUTES.MYORDERSTABS,
    cache: false,
    views: {
      cache: false,
      'my_orders_tabs': {
        cache: false,
        templateUrl: tpl + 'my_orders_tabs.html',
        controller: "TabsCtrl"
      }
    }
  })

  .state('app.tabs.catalogs_tabs', {
    url: ROUTES.CATALOGSTABS,
    cache: false,
    views: {
      cache: false,
      'catalogs_tabs': {
        cache: false,
        templateUrl: tpl + 'catalogs_tabs.html',
        controller: "TabsCtrl"
      }
    }
  })

  .state('app.personal_cabinet', {
    url: ROUTES.PERSONALCABINET,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: tpl + 'personal_cabinet.html',
        //controller: "ActionCtrl"
      }
    }
  })

  .state('app.action_details', {
    url: ROUTES.ACTIONDETAILS,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: tpl+'action_details.html',
        controller: "NotesCtrl"
      }
    }
  })

  .state('app.new_order', {
    url: ROUTES.NEWORDER,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: tpl + 'new_order.html',
        controller: "OrdersCtrl"
      }
    }
  })

  .state('app.order', {
    url: ROUTES.ORDER,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: tpl + 'order.html',
        controller: "OrdersCtrl"
      }
    }
  })

  .state('app.photo_order', {
    url: ROUTES.PHOTOORDER,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: tpl + 'photo_order.html',
        controller: "OrdersCtrl"
      }
    }
  })

  .state('app.my_orders', {
    url: ROUTES.MYORDERS,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: tpl + 'my_orders.html',
        controller: "OrdersCtrl"
      }
    }
  })

  .state('app.details_of_order', {
    url: ROUTES.DETAILSOFORDER,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: tpl + 'details_of_order.html',
        controller: "OrdersCtrl"
      }
    }
  })

  .state('app.notes', {
    url: ROUTES.NOTES,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: tpl+'notes.html',
        controller: "NotesCtrl"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/tabs');


  /* ============ Date picker tabs ============*/
  var datePickerObj = {
      inputDate: new Date(),
      setLabel: 'Задать',
      todayLabel: 'Сегодня',
      closeLabel: 'Закрыть',
      mondayFirst: true,
      weeksList: ["В", "П", "В", "С", "Ч", "П", "С"],
      monthsList: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      templateType: 'popup',
      from: new Date(2012, 8, 1),
      to: new Date(2018, 8, 1),
      showTodayButton: true,
      dateFormat: 'dd MMMM yyyy',
      closeOnSelect: false,
      //disableWeekdays: [6]
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
    /*End date picker*/
});
