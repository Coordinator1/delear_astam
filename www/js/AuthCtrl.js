dealer.controller('AuthCtrl', function($scope, ionicDatePicker, $location) {
    // Location path to registration request
    $scope.goToRegisterDealer = function(){
        $location.path("/app/registration_request");
    }

    // Location path to client order
    $scope.goToClientOrder = function(){
        $location.path("/app/client_order");
    }

    // Date picker callback and options
    var ipObj1 = {
        callback: function(val) { //Mandatory
            console.log('Return value from the datepicker popup is : ' + val, new Date(val));
            $scope.date = new Date(val).getDate();
            $scope.month = new Date(val).getMonth();
            $scope.fullYear = new Date(val).getFullYear();
            $scope.inputDate = $scope.date + "-"+0+$scope.month+"-"+$scope.fullYear;
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

    // Use this function to open date picker
    $scope.openDatePicker = function() {
        ionicDatePicker.openDatePicker(ipObj1);
    };
});