dealer.controller('ActionsTabCtrl', function($scope, $rootScope, $stateParams, $http, $location, $state, ROUTES, CommunicationWithServerService) {
    
    // Go to action details
    $scope.goToActionDetails = function(detailsId) {
        console.log("$stateParams.detailsId", detailsId);
        $location.path("app/action_details/" + detailsId);
    };

    $scope.showLoading();
    
    // The request to the service to receive all shares
    CommunicationWithServerService.getActions().then(function(data){
        $scope.actionsTabs = data.data;
        console.log("success actions request", $scope.actionsTabs);
    }).finally(function() {});

    // Function on the request to the service to share details
    $scope.actionDetails = function() {
        $scope.showLoading();
        CommunicationWithServerService.getActionsDetails().then(function(data){
            $scope.actionDetails = data.data;
            console.log("detailsTabs", $scope.actionDetails);
        }).finally(function() {});
    };
});
