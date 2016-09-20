dealer.controller('AuthCtrl', function($scope, $rootScope, ionicDatePicker, $state, ROUTES, $http, $timeout, $location, CommunicationWithServerService) {
    console.log("AuthCtrl");
    // Location path to registration request
    $scope.goToRegisterDealer = function() {
        $state.go("app.registration_request");
    };

    // Location path to client order
    $scope.goToClientOrder = function() {
        $state.go("app.client_order");
    };

    // user data dealer object 
    $rootScope.userDataDealer = {};

    // authorization object
    $rootScope.authorization = {};

    // The initialization function and checks the user information
    $scope.initial = function() {
        $scope.showLoadingInit();

        $timeout(function() {
            $rootScope.userDataDealer = JSON.parse(localStorage.getItem('userDataDealer'));
            console.log('$rootScope.userDataDealer $timeout(function()', $rootScope.userDataDealer);
        }, 100);

        $timeout(function() {
            console.log("$rootScope.userDataDealer $timeout(function()2", $rootScope.userDataDealer);
            if (!$rootScope.userDataDealer) {
                $state.go('app.authorization');
            } else {
                $state.go('app.tabs.my_orders_tabs');
            }
            $scope.hideLoadingInit();
        }, 1000);
    };

    // Send phone number on server
    $scope.takeSmsCode = function() {
        CommunicationWithServerService.takeSmsCode().then(function(data) {
            $rootScope.code = data.data[0].code;
            console.log("$rootScope.code", $rootScope.code);
            $scope.showCodeInput = true;
            $scope.hideSmsButton = true;
            $scope.showAuthButton = true;
        }).finally(function(error) {});
    };

    // Send phone number and code on server, save access token in local storage
    $scope.sendSmsCode = function() {
        CommunicationWithServerService.getUserToken().then(function(data) {
            $rootScope.userDataDealer.userToken = data.data[0].access_token;
            console.log("$rootScope.userDataDealer.userToken", data);

            localStorage.setItem("userDataDealer", JSON.stringify($rootScope.userDataDealer));
            console.log("localStorage.setItem", $rootScope.userDataDealer);

            $location.path('app/my_orders_tabs');
        }).finally(function(error) {});
    };

    // Use this function to open date picker
    $scope.openDatePicker = function() {
        ionicDatePicker.openDatePicker(ipObj1);
    };

    // Date picker callback and options
    var ipObj1 = {
        callback: function(val) { //Mandatory
            console.log('Return value from the datepicker popup is : ' + val, new Date(val));
            $scope.date = new Date(val).getDate();
            $scope.month = new Date(val).getMonth();
            $scope.fullYear = new Date(val).getFullYear();
            $scope.inputDate = $scope.date + "-" + $scope.month + "-" + $scope.fullYear;
        },
        disabledDates: [ //Optional
            new Date(2016, 2, 16),
            new Date(2015, 3, 16),
            new Date(2015, 4, 16),
            new Date(2015, 5, 16),
            new Date('Wednesday, August 12, 2015'),
            new Date("08-16-2016"),
            new Date(1439676000000)
        ],
        from: new Date(2012, 1, 1), //Optional
        to: new Date(2016, 10, 30), //Optional
        inputDate: new Date(), //Optional
        mondayFirst: true, //Optional
        disableWeekdays: [0], //Optional
        closeOnSelect: false, //Optional
        templateType: 'popup' //Optional
    };
});
