(function () {
    var YardCheckListApp = angular.module("YardCheckListApp", ['ui.bootstrap']);
    var controllers = {};
    controllers.YardCheckListController = function ($scope, $http) {
        $scope.GetYardCheckList = function () {
            $scope.loading++;
            $http({
                method: 'GET',
                url: '/Home/GetYardCheckList'
            }).then(function (response) {
                $scope.YardCheckList = response.data;

                $scope.loading--;
                this.items = $scope.YardCheckList;
                if ($scope.YardCheckList.length > 0) {
                    $('.dataTables_empty').parent().remove();
                }
            });
        }
        $scope.GetDW = function () {

            $http({
                method: 'GET',
                url: '/Home/GetDW'
            }).then(function (response) {
                $scope.DWList = response.data;

            });
        }
        $scope.GetMilitryTime = function () {
            $http({
                method: 'GET',
                url: '/Home/GetMilitryTime'
            }).then(function (response) {
                $scope.MilitryTimeList = response.data;

            });
        }
        $scope.GetLocation = function () {
            $http({
                method: 'GET',
                url: '/Home/GetLocation'
            }).then(function (response) {
                $scope.LocationList = response.data;

            });
        }

        $scope.GetYardCheckList();
        $scope.GetDW();
        $scope.GetMilitryTime();
        $scope.GetLocation();
        $scope.CreateInput = function (opr, index) {
            if (opr == 1) {
                $('#tdDriverName_' + index).html('<input id="txtDriverName" type="text"  class="form-control" value="' + $scope.YardCheck.DriverName + '" />');
                $('#tdTruck_' + index).html('<input id="txtTruck" type="text" class="form-control" value="' + $scope.YardCheck.Truck + '" />');
                $('#tdProblem_' + index).html('<input id="txtProblem" type="text" class="form-control" value="' + $scope.YardCheck.Problem + '" />');
                $('#tdNote_' + index).html('<input id="txtNote" type="text" class="form-control" value="' + $scope.YardCheck.Note + '" />');
                $('#tdUnitInDate_' + index).html('<input id="txtUnitInDate" type="date" class="form-control" value="' + $scope.YardCheck.UnitInDate + '" />')
                $('#tdETAFixDate_' + index).html('<input id="txtETAFixDate" type="date" class="form-control" value="' + $scope.YardCheck.ETAFixDate + '" />');
                $('#tdNeedDate_' + index).html('<input id="txtNeedDate" type="date" class="form-control" value="' + $scope.YardCheck.NeedDate + '" />')
            }
            else {
                var newIndex = $scope.YardCheckList.length;
                $('#example>tbody').append('<tr class="table-success">                                                                                                 <td id="tdDriverName_' + newIndex + '"> <input id="txtDriverName" type="text"  class="form-control" ng-model="' + $scope.YardCheck.DriverName + '" /></td>                                                                          <td id="tdTruck_' + newIndex + '">  <input id="txtTruck" type="text"  class="form-control" ng-model="' + $scope.YardCheck.Truck + '" /></td>                                                                                           <td id="tdProblem_' + newIndex + '"> <input id="txtProblem" type="text" class="form-control" ng-model="' + $scope.YardCheck.Problem + '" /></td>                                                                                          <td id="tdNote_' + newIndex + '"> <input id="txtNote" type="text" class="form-control" ng-model="' + $scope.YardCheck.Note + '" /></td>                                                                                                     <td id="tdDW_' + newIndex + '"> dw </td>                                                                              <td id="tdUnitInDate_' + newIndex + '"> <input id="txtUnitInDate" type="date" class="form-control" ng-model="' + $scope.YardCheck.UnitInDate + '" /></td>                                                                         <td id="tdUnitInTime_' + newIndex + '"> uit</td>                                                                        <td id="tdETAFixDate_' + newIndex + '"><input id="txtFixDate" type="date" class="form-control" ng-model="' + $scope.YardCheck.ETAFixDate + '" /></td>                                                                                   <td  id="tdETATime_' + newIndex + '" >eta</td>                                                                        <td id="tdNeedDate_' + newIndex + '"> <input id="txtNeedDate" type="date" class="form-control" ng-model="' + $scope.YardCheck.NeedDate + '" /></td>                                                                                      <td id="tdNeedTime_' + newIndex + '"> nt</td>                                                                         <td id="tdReady_' + newIndex + '"> ready</td>                                                                          <td id="tdLocation_' + newIndex + '"> location</td>                                                                  <td id="' + newIndex + '"><div class="col-sm-12"><a id="insertSave" class="btn mr-1 mb-1 btn-danger btn-sm" ><span   style="color:white;" class="fa fa-save"></span></a></div><div class="col-sm-12"><a class="btn mr-1 mb-1 btn-danger btn-sm"><span id="insertCancel" style="color:white" class="fa fa-remove" ></span></a></div></td><td></td></tr>');
            }

        }
        $scope.RemoveInput = function (index) {
            $('#tdDriverName_' + index).html($scope.YardCheck.DriverName);
            $('#tdTruck_' + index).html($scope.YardCheck.Truck);
            $('#tdProblem_' + index).html($scope.YardCheck.Problem);
            $('#tdNote_' + index).html($scope.YardCheck.Note);
            $('#tdDW_' + index).html($scope.YardCheck.DW == null ? $scope.YardCheck.DW : "");
            $('#tdUnitInTime_' + index).html($scope.YardCheck.UnitInTime);
            $('#tdUnitInDate_' + index).html($scope.YardCheck.UnitInDate);
            $('#tdETATime_' + index).html($scope.YardCheck.ETATime);
            $('#tdETAFixDate_' + index).html($scope.YardCheck.ETAFixDate);
            $('#tdNeedTime_' + index).html($scope.YardCheck.NeedTime);
            $('#tdNeedDate_' + index).html($scope.YardCheck.NeedDate);
            $('#tdReady_' + index).html($scope.YardCheck.Ready);
            $('#tdLocation_' + index).html($scope.YardCheck.Location);
        }


        $scope.Add = function () {
            $scope.AddButtonDisabled = false;
            $scope.EditButtonDisabled = false;
            $scope.YardCheck = new Object();
            $scope.CreateInput(0);
        }

        $scope.Edit = function (yc, index) {
            $scope.AddButtonDisabled = false;
            $scope.YardCheck = yc;
            $scope.YardCheck.trClass = "table-danger";
            $scope.YardCheck.editing = true;
            $scope.CreateInput(1, index);
        }

        $scope.Save = function (i, opr) {

      
            $scope.YardCheck.DriverName = $('#txtDriverName').val();
            if ($scope.YardCheck.DriverName == null || $scope.YardCheck.DriverName == "") {
                toastr.error("DriverName can not be empty.");
                return;
            }
            $scope.YardCheck.Truck = $('#txtTruck').val();
            if ($scope.YardCheck.Truck == null || $scope.YardCheck.Truck == "") {
                toastr.error("Truck can not be empty.");
                return;
            }
            $scope.YardCheck.Problem = $('#txtProblem').val();
            $scope.YardCheck.Note = $('#txtNote').val();
            $scope.YardCheck.DW = $('#selectDW_' + i).val();
            $scope.YardCheck.UnitInTime = $('#txtUnitInTime' + i).val();
            $scope.YardCheck.UnitInDate = $('#txtUnitInDate').val();
            $scope.YardCheck.ETATime = $('#txtETATime' + i).val();
            $scope.YardCheck.ETAFixDate = $('#txtETAFixDate').val();
            $scope.YardCheck.NeedTime = $('#txtNeedTime' + i).val();
            $scope.YardCheck.NeedDate = $('#txtNeedDate').val();
            $scope.YardCheck.Ready = $('#txtReady' + i).val();
            $scope.YardCheck.Location = $('#txtLocation' + i).val();

            $scope.YardCheck.editing = false;
            $scope.YardCheck.trClass = "";

            $http({
                method: 'POST',
                url: '/Home/SaveYardCheck',
                params: { yardCheck: $scope.YardCheck, opr: opr }
            }).then(function (response) {
                if (response) {
                    toastr.success("YardCheck saved successfully.");
                    $scope.GetYardCheckList();
                    $scope.YardCheck = null;
                    $scope.AddButtonDisabled = true;
                    $scope.EditButtonDisabled = true;
                }
                else {
                    toastr.error("Error.");
                }
            });
           
                $scope.RemoveInput(i);
              
        }

        $scope.Cancel = function (i) {
            $scope.YardCheck.editing = false;
            $scope.YardCheck.trClass = "";
            $scope.RemoveInput(i);
            $scope.YardCheck = null;
        }
        $scope.Delete = function (id) {
            bootbox.confirm({
                message: "Are you sure you want to delete this item?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function (result) {
                    if (result) {
                        $http({
                            method: "POST",
                            url: "/Home/Delete",
                            data: {
                                id: id
                            }
                        }).then(function (data) {
                            if (data) {
                                toastr.success("YardCheck deleted  successfully.");
                                $scope.GetYardCheckList();
                            } else {
                                toastr.error("Error: " + data);
                            }

                        })
                    }
                }
            });
        }


        $("body").on("click", "#insertSave", function () {
            var index = parseInt($("#insertSave").parent().parent().attr('id'));
            $scope.Save(index, 0);
        });
        $("body").on("click", "#insertCancel", function () {
            var index = parseInt($("#insertCancel").parent().parent().attr('id'));
            $scope.Cancel(index);
        });
    }
    YardCheckListApp.filter('jsonDate', ['$filter', function ($filter) {
        return function (input, format) {
            var result = "";
            if (input!=null && input!="null") {
                var nowDate = new Date(parseInt(input.substr(6)));
                var day = nowDate.getDate();
                var month = nowDate.getMonth();
                var year = nowDate.getFullYear();

                result = month + '/' + day + '/' + year;
            
               
            }
           
            return result;

        };
    }]);

    YardCheckListApp.controller(controllers);
})();

