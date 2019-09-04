angular.module('task02', []).controller('task02Controller',['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) { 
    $scope.varable = "hau";
    $http({method: 'GET',url: 'http://localhost:5500/task/js/data.json'}).then(function(response) {
    $scope.showListUser = response.data;
    console.log( response);
    });
    function sumDigit(number){
      var sum = 0;
      var digit = 0;
      while(number > 0){
        digit = (number%10);
        sum += digit;
        number = (number - digit)/10;
      }
      return sum;
    }
    //var rs = sumDigit(2324);
    //var demo = 235%10;
    //console.log(demo);
    function find(num1, num2,num3){
      var arr = [num1,num2,num3];
      var kq= arr.sort(function(a, b){return a - b});
      console.log(kq);
      console.log(kq[1]);
    }
    find(3,12,11);
  }])