dealer.controller('MyLastOrdersTabCtrl', function($scope, $stateParams, $http, $state, ROUTES) {

    // $http.get("ROUTES.API+ "actions/?" + "access-token=" + "37b51d194a7513e45b56f6524f2d51f2").success(function(data) {
    //     console.log("success answer request");
    //     $scope.lastOrders = data;
    // }).error(function(error) {
    // });

    // class to check the last item
    $scope.isLast = function(check) {
        var cssClass = check ? 'last' : null;
        return cssClass;
    };

    // Go to my orders
    $scope.goToAllOrders = function() {
        $state.go("app.my_orders");
    };

    // Go to new order
    $scope.goToNewOrder = function() {
        $state.go("app.new_order");
    };

    // Test data items,
    // when be API, change for API data
    $scope.lastOrders = [{
        "OrderTitle": "Название заказа",
        "OrderDate": "28.03.16 18:01",
        "OrderStatus": "Выдан",
        "OrderNumber": "12345",
    }, {
        "OrderTitle": "Название заказа",
        "OrderDate": "28.03.16 18:01",
        "OrderStatus": "Выдан",
        "OrderNumber": "12345",
    }, {
        "OrderTitle": "Название заказа",
        "OrderDate": "28.03.16 18:01",
        "OrderStatus": "Выдан",
        "OrderNumber": "12345",
    }, {
        "OrderTitle": "Название заказа",
        "OrderDate": "28.03.16 18:01",
        "OrderStatus": "Выдан",
        "OrderNumber": "12345",
    }, {
        "OrderTitle": "Название заказа",
        "OrderDate": "28.03.16 18:01",
        "OrderStatus": "Выдан",
        "OrderNumber": "12345",
    }];

    // Test data items,
    // when be API, change for API data
    $scope.catalogs = [{
        "catalogImg": "img/action.jpg",
        "catalogTitle": "Каталог полотен"
    }, {
        "catalogImg": "img/action.jpg",
        "catalogTitle": "Каталог арт-печати"
    }, {
        "catalogImg": "img/action.jpg",
        "catalogTitle": "Каталог 3-Д панелей"
    }, {
        "catalogImg": "img/action.jpg",
        "catalogTitle": "Каталог по декору"
    }];

});
