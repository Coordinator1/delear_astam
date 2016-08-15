dealer.controller('NotesCtrl', function($scope, $ionicModal, $ionicPopover, ionicDatePicker) {

    // Array list which will contain the items added
    $scope.notes = [];
    $scope.newItem = {};
    var date = new Date().getDate();
    console.log("date", date);
    var month = new Date().getMonth()+1;
    console.log("month", month);
    var fullYear = new Date().getFullYear();
    console.log("fullYear", fullYear);
    
    // Open modal add new note
    $ionicModal.fromTemplateUrl('templates/modals/add_new_note.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalAddNotes = modal;
    });

    // Function to open the modal
    $scope.openModalNewNote = function() {
        $scope.modalAddNotes.show();
		$scope.newItem = {};
		$scope.newItem.inputDate = date + "-"+0+month+"-"+fullYear;
    };

    // Function to close the modal
    $scope.closeModalNotes = function() {
        $scope.modalAddNotes.hide();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modalAddNotes.remove();
    });
    
    // Create edit item object
	$scope.editItem = {};

    // Function to add items to the existing list
    $scope.AddItem = function(newItem) {
    	console.log("newItem", newItem);
        $scope.notes.push(newItem);
    	console.log("$scope.notes", $scope.notes);
        $scope.closeModalNotes();
    };

    // Access to swipe
    $scope.listCanSwipe = true;

    // Modal view edit note
    $ionicModal.fromTemplateUrl('templates/modals/edit_note.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalEditNotes = modal;
    });

    // Function to open the modal
    $scope.openModalEditNote = function(id, item) {
        console.log("id", id);
        $scope.modalEditNotes.show();
        $scope.editItem = item;
        console.log("item", item);
    };

    // Function to close the modal
    $scope.closeModalEditNotes = function() {
        $scope.modalEditNotes.hide();
    };

    // Function for edit note
    $scope.EditItem = function(editItem) {
        $scope.notes[editItem.id] = editItem.note;
        console.log("editItem", editItem);
        //data.newItem = data.editItem;
        $scope.closeModalEditNotes();
        
    };

    // Date picker callback and options
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

    // Use this function to open date picker
    $scope.openDatePicker = function() {
        ionicDatePicker.openDatePicker(ipObj1);
    };

    // Function to send notes to the server
    $scope.sendNotes = function() {
        $http.post("API", {
            submits: true, title: "АстаМ", mail: $scope.newItem
        }).success(function(data) {

        }).error(function(data) {});
    };

    // Function to send edit notes to the server
    $scope.sendNotes = function() {
        $http.post("API", {
            submits: true, title: "АстаМ", mail: $scope.editItem
        }).success(function(data) {

        }).error(function(data) {});
    };
});
