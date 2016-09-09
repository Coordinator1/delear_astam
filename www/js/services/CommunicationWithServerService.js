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
    }
});
