dealer.controller('OrdersCtrl', function($scope, ionicDatePicker, $location, $cordovaCamera, $ionicModal) {
    
    /* ============== New order  ============== */
    $scope.goToOrder = function(){
        $location.path("/app/order");
    };

    $scope.goToPhotoOrder = function(){
        $location.path("/app/photo_order");
    };

    /* ============== My orders  ============== */
    var ipObj1 = {
        callback: function(val) { //Mandatory
            console.log('Return value from the datepicker popup is : ' + val, new Date(val));
            $scope.date = new Date(val).getDate();
            $scope.month = new Date(val).getMonth();
            $scope.fullYear = new Date(val).getFullYear();
            $scope.inputDate = $scope.date + "-"+0+$scope.month+"-"+$scope.fullYear;
        },
        disabledDates: [ //Optional
            new Date(2016, 2, 16),
            new Date(2015, 3, 16),
            new Date(2015, 4, 16),
            new Date(2015, 5, 16),
            new Date('Wednesday, August 12, 2015'),
            new Date("08-16-2016"),
            new Date(1439676000000)
        ],
        from: new Date(2012, 1, 1), //Optional
        to: new Date(2016, 10, 30), //Optional
        inputDate: new Date(), //Optional
        mondayFirst: true, //Optional
        disableWeekdays: [0], //Optional
        closeOnSelect: false, //Optional
        templateType: 'popup' //Optional
    };

    $scope.openDatePicker = function() {
        ionicDatePicker.openDatePicker(ipObj1);
    };

    /* ============== Photo order  ============== */
   	$scope.takePicture = function() {
        var options = {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true
        };

        // Save photo on screen and system folder
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
        
        // Save photo in gallery
        // $cordovaCamera.getPicture(options).then(function(imageURI) {
        //     var image = document.getElementById('myImage');
        //     image.src = imageURI;
        // }, function(err) {
        //     // error
        // });
    };
    // End Take picture

    // $scope.selectPicture = function() {
    //     var options = {
    //         limit: 3,
    //         quality: 100,
    //         destinationType: Camera.DestinationType.FILE_URI,
    //         sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    //     };

    //   $cordovaCamera.getPicture(options).then(
    //     function(imageURI) {
    //         window.resolveLocalFileSystemURI(imageURI, function(fileEntry) {
    //             convertImgToBase64(fileEntry.nativeURL);

                /*$scope.user.fotoDriver = fileEntry.nativeURL;
                $rootScope.userData.fotoDriver = fileEntry.nativeURL;
                window.localStorage['userData'] = angular.toJson($rootScope.userData);*/

                // $scope.ftLoad = true;
    //             var image = document.getElementById('myImage');
    //             image.src = fileEntry.nativeURL;
    //         });
    //         $ionicLoading.show({template: 'Foto acquisita...', duration:500});
    //     },
    //     function(err){
    //         $ionicLoading.show({template: 'Errore di caricamento...', duration:500});
    //     })
    // };
   
    $ionicModal.fromTemplateUrl('templates/modals/add_param_photo_order.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalAddParam = modal;
    });

    $scope.openModalAddParam = function() {
        $scope.modalAddParam.show();
    };

    $scope.closeModalAddParam = function() {
        $scope.modalAddParam.hide();
    };
    // End modal

    /* ============== Add param order  ============== */
    $ionicModal.fromTemplateUrl('templates/modals/add_param_order.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalOrder = modal;
    });

    $scope.openModalOrder = function() {
        $scope.modalOrder.show();
    };

    $scope.closeModalOrder = function() {
        $scope.modalOrder.hide();
    };
});
