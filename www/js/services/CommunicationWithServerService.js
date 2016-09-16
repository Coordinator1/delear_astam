dealer.factory('CommunicationWithServerService', function($rootScope, $http, ROUTES, $stateParams) {
    return {
        getActions: function() {
            return $http.get(ROUTES.API + "actions?" + "access-token=" + $rootScope.userTokenStatic).success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getActions", error);
            });
        },
        getActionsDetails: function() {
            return $http.get(ROUTES.API + "actions/" + $stateParams.detailsId + "?" + "access-token=" + $rootScope.userTokenStatic).success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getActionsDetails", error);
            });
        },
        getCatalogs: function() {
            return $http.get(ROUTES.API + "catalogs?" + "access-token=" + $rootScope.userTokenStatic).success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getCatalogs", error);
            });
        },
       /* getUserToken: function() {
            var data = $.param({
                login: $scope.authorization.phoneNumber,
                code: $scope.authorization.code
            });

            return $http.post(ROUTES.API + 'auth', data)
                .success(function(data, status, headers, config) {
                    $rootScope.userDataDealer.userToken = data;
                    console.log("$scope.PostDataResponse", $rootScope.userDataDealer.userToken);
                })
                .error(function(data, status, header, config) {
                    $scope.ResponseDetails = "Data: " + data +
                        "<hr />status: " + status +
                        "<hr />headers: " + header +
                        "<hr />config: " + config;
                    console.log("$scope.ResponseDetails", $scope.ResponseDetails);
                });
        },*/
    }
});
