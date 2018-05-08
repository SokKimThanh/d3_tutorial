let ModalDemoCtrl = function ($scope, $uibModal, $log, $document) {
    var url = "https://www.w3schools.com/js/"; 
    var src_arr =[ 
      {url:url,filename:"pic_bulbon",type:".gif", title:"Turn on the light", status:1},
      {url:url,filename:"pic_bulboff",type:".gif", title:"Turn off the light",status:0}
    ]
    $scope.src = url + src_arr[1].filename+src_arr[1].type;
    $scope.title = src_arr[1].title;
    $scope.counting = 0;
    $scope.getBulbStatus =()=>{
        $scope.counting++; 
        if($scope.counting %2===0){
			$scope.src = url + src_arr[1].filename+src_arr[1].type;
            $scope.title = src_arr[1].title
        }else{
        	$scope.src = url + src_arr[0].filename+src_arr[0].type;
            $scope.title = src_arr[0].title
        }
    }
    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];
    $ctrl.animationsEnabled = true;
    $ctrl.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: false,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body', 
            templateUrl: 'views/ModalDemoCtrl/myModalContents.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            appendTo: parentElem,
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            // $ctrl.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $ctrl.openComponentModal = function () {
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            component: 'views/ModalDemoCtrl/myModalContents.html',
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            $log.info('modal-component dismissed at: ' + new Date());
        });
    };

    $ctrl.openMultipleModals = function () {
        $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title-bottom',
            ariaDescribedBy: 'modal-body-bottom',
            templateUrl: 'views/ModalDemoCtrl/stackedModal.html',
            size: 'sm',
            controller: function ($scope) {
                $scope.name = 'bottom';
            }
        });

        $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title-top',
            ariaDescribedBy: 'modal-body-top',
            templateUrl: 'views/ModalDemoCtrl/stackedModal.html',
            size: 'sm',
            controller: function ($scope) {
                $scope.name = 'top';
            }
        });
    };

    $ctrl.toggleAnimation = function () {
        $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
    };
}
// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
let ModalInstanceCtrl = function ($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: $ctrl.items[0]
    };

    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

// Please note that the close and dismiss bindings are from $uibModalInstance.

