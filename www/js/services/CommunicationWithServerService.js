dealer.factory('CommunicationWithServerService', function($rootScope, $http, ROUTES) {
    return {
        takeSmsCode: function() {
            return $http.get(ROUTES.API + 'auth?' + "login=" + $rootScope.authorization.phoneNumber).success(function(data) {
                return data;
                console.log("takeSmsCode success", data);
            }).error(function(error) {
                console.log("takeSmsCode error", error);
            });
        },
        getUserToken: function() {
            var data = $.param({
                "login": $rootScope.authorization.phoneNumber,
                "code": $rootScope.authorization.code
            });
            return $http.post(ROUTES.API + 'auth', data).success(function(data) {
                return data;
                console.log("getUserToken success", data);
            }).error(function(error) {
                console.log("getUserToken error", error);
            });
        },
        getActions: function() {
            return $http.get(ROUTES.API + "actions?" + "access-token=" + $rootScope.userDataDealer.userToken).success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getActions error", error);
            });
        },
        getActionsDetails: function() {
            return $http.get(ROUTES.API + "actions/" + $stateParams.detailsId + "?" + "access-token=" + $rootScope.userDataDealer.userToken).success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getActionsDetails error", error);
            });
        },
        getCatalogs: function() {
            return $http.get(ROUTES.API + "catalogs?" + "access-token=" + $rootScope.userDataDealer.userToken).success(function(data) {
                return data;
            }).error(function(error) {
                console.log("getCatalogs error", error);
            });
        },
    }
});
