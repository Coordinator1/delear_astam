dealer.controller('CatalogsTabCtrl', function($scope, $rootScope, $stateParams, $http, $state, ROUTES) {

    $http.get(ROUTES.API + "catalogs?" + "access-token=" + $rootScope.userTokenStatic).success(function(data) {
        // console.log("success catalogs request");
        $scope.catalogsTabs = data;
        console.log("success catalogs request", $scope.catalogsTabs);
    }).error(function(error) {});

});
