dealer.controller('TabsCtrl', function($scope, $stateParams, $location) {
    
    /* =============== My last order =============== */
    $scope.isLast = function(check) {
        var cssClass = check ? 'last' : null;
        return cssClass;
    };

    $scope.goToAllOrders = function(){
        $location.path("/app/my_orders");
    }

    /* =============== Action details =============== */
    $scope.goToActionDetails = function(){
        $location.path("/app/action_details");
    }
});