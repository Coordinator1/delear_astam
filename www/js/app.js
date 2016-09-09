// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var dealer = angular.module('starter', ['ionic', 'ionic-datepicker', 'ngCordova'])

.run(function($ionicPlatform, $rootScope, ROUTES, $ionicLoading) {
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

  $rootScope.showLoading = function() {
    $ionicLoading.show({
      template: '<p>Загрузка..</p><ion-spinner icon="spiral"></ion-spinner>',
      showBackdrop: true,
      duration: 1500
    });
  };

  $rootScope.hideLoadingInit = function() {
    $ionicLoading.hide();
  };
})

.constant('ROUTES', (function(){
  return {
    API: "http://berkov.com.ua/",

    MAIN: '/app',

    TABS: '/tabs',

    INIT: '/initial',
    AUTH: '/authorization',
    REGREQUEST: '/registration_request',
    PASSRECOVERY: '/password_recovery',
    PERSONALCABINET: '/personal_cabinet',
    
    CLIENTORDER: '/client_order',
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
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

  var tpl = "templates/";
  var auth = "templates/auth/";
  var ords = "templates/orders/";
  var tabs = "templates/tabs/";

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
        templateUrl: auth +'authorization.html',
        controller: "AuthCtrl"
      }
    }
  })

  .state('app.registration_request', {
    url: ROUTES.REGREQUEST,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: auth +'registration_request.html',
        controller: "AuthCtrl"
      }
    }
  })

  .state('app.client_order', {
    url: ROUTES.CLIENTORDER,
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: ords +'client_order.html',
        controller: "AuthCtrl"
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
        templateUrl: tabs +'tabs.html',
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
        templateUrl: tabs +'my_orders_tabs.html',
        controller: "MyLastOrdersTabCtrl"
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
        templateUrl: tabs +'actions_tabs.html',
        controller: "ActionsTabCtrl"
      }
    }
  })

  .state('app.action_details', {
    url: ROUTES.ACTIONDETAILS  + "/:detailsId",
    cache: false,
    views: {
      cache: false,
      'menuContent': {
        cache: false,
        templateUrl: tabs +'action_details.html',
        controller: "ActionsTabCtrl"
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
        templateUrl: tabs +'catalogs_tabs.html',
        controller: "CatalogsTabCtrl"
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
        templateUrl: ords +'new_order.html',
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
        templateUrl: ords +'order.html',
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
        templateUrl: ords +'photo_order.html',
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
        templateUrl: ords +'my_orders.html',
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
        templateUrl: ords +'details_of_order.html',
        controller: "OrdersCtrl"
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
        //controller: "PersonalCabinetCtrl"
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
        templateUrl: tpl + 'notes.html',
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
});
