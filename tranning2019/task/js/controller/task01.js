angular.module('task01', []).controller('task01Controller',['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) { 
    $scope.varable = "hau";
    $http({method: 'GET',url: 'http://localhost:5500/task/js/data.json'}).then(function(response) {
    $scope.showListUser = response.data;
    console.log( response);
    });
  }])