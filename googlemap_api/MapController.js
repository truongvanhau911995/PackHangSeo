testApp.controller('mapController', function ($scope, $http) {  
    alert(1);
    $scope.googleMapArgs = {  
        width: '50%',  
        height: '600px',  
        allowMultipleMark:false  
    }  
  
    $scope.fnClick = function () {  
        $scope.googleMapArgs.method.setMark(51.508515, -0.125487, 'London', 'Just some content');  
    }  
  
    $scope.fnSearchAddress = function () {  
        // $http.get('http://maps.google.com/maps/api/geocode/json?address=' + $scope.address + '&sensor=false')  
        // .success(function (mapData) {  
        //     $scope.mapData = mapData.results;  
        // });
        
        $http({
            method: 'GET',
            url: 'http://maps.google.com/maps/api/geocode/json?address=' + $scope.address + '&sensor=false'
         }).then(function (response){
            $scope.mapData = response.data.results;  
            console.log(response);
         },function (error){
      
         });
    }  
  
    $scope.selectItem = function (index, item) {  
        $scope.googleMapArgs.method.setMark(item.geometry.location.lat, item.geometry.location.lng, item.formatted_address, item.formatted_address);  
    }  
});  