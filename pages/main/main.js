app.controller('MainCtrl', function ($scope,LabService,$interval) {
  $scope.name = "Test";
  console.log("test")

  


var hcode = {

  'hcode' : '99962' 
}



 $scope.incrementCounter = function(){
   LabService.DashboardService99962(hcode).success(function($data){
  $scope.HcodeData1 = angular.extend($data);
  $scope.v1 = $scope.HcodeData1 ;
  // $scope.myData = response.data.records;
console.log($scope.v1);
})
 
}


$scope.incrementCounter() ;
//$scope.interval = $interval($scope.incrementCounter, 1000);
    

});