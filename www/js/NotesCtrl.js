dealer.controller('NotesCtrl', function($scope, $ionicModal, $ionicPopover, ionicDatePicker) {

    // array list which will contain the items added
    $scope.notes = [];
    $scope.newItem = {};
    var date = new Date().getDate();
    console.log("date", date);
    var month = new Date().getMonth()+1;
    console.log("month", month);
    var fullYear = new Date().getFullYear();
    console.log("fullYear", fullYear);
    
    //init the modal
    $ionicModal.fromTemplateUrl('templates/modals/add_new_note.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalAddNotes = modal;
    });

    // function to open the modal
    $scope.openModalNewNote = function() {
        $scope.modalAddNotes.show();
		$scope.newItem = {};
		$scope.newItem.inputDate = date + "-"+0+month+"-"+fullYear;
    };

    // function to close the modal
    $scope.closeModalNotes = function() {
        $scope.modalAddNotes.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modalAddNotes.remove();
    });
    
	$scope.editItem = {};

    console.log("$scope.notes", $scope.notes);
    //function to add items to the existing list
    $scope.AddItem = function(newItem) {
    	console.log("newItem", newItem);
        $scope.notes.push(newItem);
    	console.log("$scope.notes", $scope.notes);
        $scope.closeModalNotes();
    };

    $scope.listCanSwipe = true;

    //$scope.data = {};

    $ionicModal.fromTemplateUrl('templates/modals/edit_note.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalEditNotes = modal;
    });

    // function to open the modal
    $scope.openModalEditNote = function(id, item) {
        console.log("id", id);
        $scope.modalEditNotes.show();
        $scope.editItem = item;
        console.log("item", item);
    };

    // function to close the modal
    $scope.closeModalEditNotes = function() {
        $scope.modalEditNotes.hide();
    };

    $scope.EditItem = function(editItem) {
        $scope.notes[editItem.id] = editItem.note;
        console.log("editItem", editItem);
        //data.newItem = data.editItem;
        $scope.closeModalEditNotes();
        
    };

    /*End add and edit note*/
    var ipObj1 = {
        callback: function(val) { //Mandatory
            console.log('Return value from the datepicker popup is : ' + val, new Date(val));
            $scope.date = new Date(val).getDate();
            $scope.month = new Date(val).getMonth()+1;
            $scope.fullYear = new Date(val).getFullYear();
            $scope.newItem.inputDate = $scope.date + "-"+0+$scope.month+"-"+$scope.fullYear;
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
    /*End date picker*/

});
