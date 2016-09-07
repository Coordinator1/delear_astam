dealer.controller('ActionsTabCtrl', function($scope, $rootScope, $stateParams, $http, $location, $state, ROUTES) {
    // Go to action details
    $scope.goToActionDetails = function(detailsId) {
        console.log("$stateParams.detailsId", detailsId);
        $location.path("app/action_details/" + detailsId);
    }

    $scope.actionDetails = function() {
    $scope.showLoading();
        $http.get(ROUTES.API + "actions/" + $stateParams.detailsId + "?" + "access-token=" + $rootScope.userTokenStatic).success(function(data) {
            // console.log("success answer request");
            $scope.actionDetails = data;
            console.log("detailsTabs", $scope.actionDetails);
        }).error(function(error) {});
    }

    $scope.showLoading();
    $http.get(ROUTES.API + "actions?" + "access-token=" + $rootScope.userTokenStatic).success(function(data) {
        // console.log("success answer request");
        $scope.actionsTabs = data;
        console.log("success actions request", $scope.actionsTabs);
    }).error(function(error) {});

});
