angular.module('todoApp', [])
  .controller('TodoListController', ['$scope', '$http', '$templateCache', function ($scope, $http, $templateCache) {
    $http({method: 'GET',url: 'http://localhost:5500/js/data.json'
    }).then(function(response) {
      $scope.showListUser = response.data;
      console.log( response);
      });
      
      $scope.addnew={};
      $scope.edit= function(ix){
        $scope.addnew = $scope.showListUser[ix];
        console.log($scope.addnew);
      }
  }]);
