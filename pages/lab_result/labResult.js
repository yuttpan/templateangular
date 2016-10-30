app.controller('LabResultCtrl', function ($scope,$interval) {
  $scope.name = "";
  console.log("LAB")

   $interval.cancel($scope.interval) ;

})