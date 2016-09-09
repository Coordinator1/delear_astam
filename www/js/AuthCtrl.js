dealer.controller('AuthCtrl', function($scope, $rootScope, ionicDatePicker, $state, ROUTES, $http, $timeout) {
    console.log("AuthCtrl");

    $rootScope.userDataDealer = {};

    $rootScope.userTokenStatic = "37b51d194a7513e45b56f6524f2d51f2";

    // Location path to registration request
    $scope.goToRegisterDealer = function() {
        $state.go("app.registration_request");
    };

    // Location path to client order
    $scope.goToClientOrder = function() {
        $state.go("app.client_order");
    };

    // The initialization function and checks the user information
    // $scope.initial = function() {
    //     $scope.showLoading();

    //     $timeout(function(){
    //         $rootScope.userDataDealer = JSON.parse(localStorage.getItem('userDataDealer')) || {
    //             phone: undefined,
    //             accessToken: undefined
    //         };
    //         console.log('$rootScope.userDataDealer', $rootScope.userDataDealer);
    //     }, 100);

    //     $timeout(function(){
    //         $http.get(ROUTES.API + "" + "access-token=" + $rootScope.userDataDealer.accessToken).success(function(data){
    //             console.log("data", data);
    //         }).error(function(error){
    //             console.log("error", error);
    //     })}, 1500);

    //         $scope.hideLoadingInit();
    // };

    // Send phone number on server
    $scope.takeSmsCode = function() {
        $http.get(ROUTES.API + auth + 'auth?' + "login=" + $scope.authorization.phoneNumber).success(function(data) {
            console.log("data", data);
            // $scope.showCodeInput = true;
        }).error(function(error) {
            console.log("error", error);
        });
    };

    // Send phone number and code on server for authorization
    // $scope.authorization = {};

    // $scope.sendSmsCode = function() {
    //     $http.post(ROUTES.API + 'auth', {
    //         "login": $scope.authorization.phoneNumber,
    //         "code": $scope.authorization.code
    //     }).success(function(data) {
    //         $rootScope.userDataDealer.accessToken = data;
    //         console.log("userToken", $rootScope.userToken);

    //         localStorage.setItem("userDataDealer", JSON.stringify($rootScope.userDataDealer));
    //         console.log("$scope.sendCode --- success", data);

    //         $location.path('app/my_orders_tabs');
    //     }).error(function(error) {
    //         console.log("error", error);
    //     });
    // };
    // 
    // 
    
    $scope.authorization = {};

    $scope.sendSmsCode = function () {
    // use $.param jQuery function to serialize data from JSON 
        var data = $.param({
            login: $scope.authorization.phoneNumber,
            code: $scope.authorization.code
        });

        $http.post(ROUTES.API + 'auth', data)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("$scope.PostDataResponse", $scope.PostDataResponse);
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
                    console.log("$scope.ResponseDetails", $scope.ResponseDetails);
            });
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

// derective, material style for input
dealer.directive('ionMdInput', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<input type="text" required>' +
            '<span class="md-highlight"></span>' +
            '<span class="md-bar"></span>' +
            '<label>{{label}}</label>',
        scope: {
            'label': '@'
        }
    }
})
