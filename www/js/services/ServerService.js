dealer.factory('ServerService', function($rootScope, $http, ROUTES) {
    return {
        get: function() {
            return $http.get(ROUTES.API).success(function(data) {

            }).error(function(error) {});
        },
    }
});
