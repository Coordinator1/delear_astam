dealer.controller('TabsCtrl', function($scope, $stateParams, $location) {
    
    /*************************************************/
    //                  My last order                //
    /*************************************************/

    // class to check the last item
    $scope.isLast = function(check) {
        var cssClass = check ? 'last' : null;
        return cssClass;
    };

    // Location path to my orders
    $scope.goToAllOrders = function(){
        $location.path("/app/my_orders");
    };

    // Test data items, 
    // when be API, change for API data
    $scope.lastOrders = [{
        "OrderTitle":"Название заказа",
        "OrderDate":"28.03.16 18:01",
        "OrderStatus":"Выдан",
        "OrderNumber":"12345",
    },{
        "OrderTitle":"Название заказа",
        "OrderDate":"28.03.16 18:01",
        "OrderStatus":"Выдан",
        "OrderNumber":"12345",
    },{
        "OrderTitle":"Название заказа",
        "OrderDate":"28.03.16 18:01",
        "OrderStatus":"Выдан",
        "OrderNumber":"12345",
    },{
        "OrderTitle":"Название заказа",
        "OrderDate":"28.03.16 18:01",
        "OrderStatus":"Выдан",
        "OrderNumber":"12345",
    },{
        "OrderTitle":"Название заказа",
        "OrderDate":"28.03.16 18:01",
        "OrderStatus":"Выдан",
        "OrderNumber":"12345",
    }];

    /*************************************************/
    //                  Action                       //
    /*************************************************/

    // Location path to action details
    $scope.goToActionDetails = function(){
        $location.path("/app/action_details");
    }

    // Test data items, 
    // when be API, change for API data
    $scope.actionTabs = [{
        "actionImg":"img/action.jpg",
        "actionTitle":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta labore, molestiae. Ullam quos, maiores quae nesciunt veritatis quibusdam enim eius iure nostrum nihil veniam perferendis unde consequuntur natus, explicabo asperiores."
    },{
        "actionImg":"img/action.jpg",
        "actionTitle":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta labore, molestiae. Ullam quos, maiores quae nesciunt veritatis quibusdam enim eius iure nostrum nihil veniam perferendis unde consequuntur natus, explicabo asperiores."
    },{
        "actionImg":"img/action.jpg",
        "actionTitle":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta labore, molestiae. Ullam quos, maiores quae nesciunt veritatis quibusdam enim eius iure nostrum nihil veniam perferendis unde consequuntur natus, explicabo asperiores."
    },{
        "actionImg":"img/action.jpg",
        "actionTitle":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta labore, molestiae. Ullam quos, maiores quae nesciunt veritatis quibusdam enim eius iure nostrum nihil veniam perferendis unde consequuntur natus, explicabo asperiores."
    },{
        "actionImg":"img/action.jpg",
        "actionTitle":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta labore, molestiae. Ullam quos, maiores quae nesciunt veritatis quibusdam enim eius iure nostrum nihil veniam perferendis unde consequuntur natus, explicabo asperiores."
    }];

    /*************************************************/
    //                  Catalogs                     //
    /*************************************************/

    // Test data items, 
    // when be API, change for API data
    $scope.catalogs = [{
        "catalogImg":"img/action.jpg",
        "catalogTitle":"Каталог полотен"
    },{
        "catalogImg":"img/action.jpg",
        "catalogTitle":"Каталог арт-печати"
    },{
        "catalogImg":"img/action.jpg",
        "catalogTitle":"Каталог 3-Д панелей"
    },{
        "catalogImg":"img/action.jpg",
        "catalogTitle":"Каталог по декору"
    }];
    
});