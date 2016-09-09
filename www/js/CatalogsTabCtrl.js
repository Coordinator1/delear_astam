dealer.controller('CatalogsTabCtrl', function($scope, $rootScope, $stateParams, $http, $state, ROUTES, CommunicationWithServerService) {

    // The request to the service to receive catalogs
    CommunicationWithServerService.getCatalogs().then(function(data) {
        $scope.catalogsTabs = data.data;
        console.log("success catalogs request", $scope.catalogsTabs);
    }).finally(function(error) {});
});
