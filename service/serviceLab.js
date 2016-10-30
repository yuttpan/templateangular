'use strict'

    app.service('LabService',function($http) { 

this.DashboardService99962= function(data){
var formData = data ;
console.log(formData)
var promise = $http({
    method : 'post',
    url: 'http://localhost/ksn_api/dashboard.php',
    headers: {
                'Accept': 'application/json',
                'Content-Type': 'text/plain'
            },
    data : formData
})
return promise ;
}

this.VnService = function(data){
var formData = data ;
console.log(formData)
var promise = $http({
    method : 'post',
    url: 'get_vn.php',
    data : formData
})
return promise ;
}






    });