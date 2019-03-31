angular.module('todoApp', [])
  .controller('TodoListController', ['$scope', '$http', '$templateCache', function ($scope, $http, $templateCache) {

    $scope.listData = [];
    $scope.groupData = [];
    $scope.xTitle = [];
    $scope.yTitle = [];
    $scope.todos = {
      data: [],
      xAxis: 'userId',
      xTitle: '',
      yAxis: 'id',
      yTitle: '',
      dateFrom: '2013/01',
      dateTo: '2013/06',
      dataFilterChart: [],
      months:[],
      setDateMonth:[]
    };
    $scope.result = [];
    // $scope.addTodo = function () {
    //   $scope.todos.push({ text: this.todoText, done: false });
    //   $scope.todoText = '';
    // };

    // $scope.remaining = function () {
    //   var count = 0;
    //   angular.forEach($scope.todos, function (todo) {
    //     count += todo.done ? 0 : 1;
    //   });
    //   return count;
    // };

    // $scope.archive = function () {
    //   var oldTodos = $scope.todos;
    //   $scope.todos = [];
    //   angular.forEach(oldTodos, function (todo) {
    //     if (!todo.done) $scope.todos.push(todo);
    //   });
    // };


    var seperator = "/";
    window.onload = function () {
      //Reference the Table.
      // var tblForm = document.getElementById("tblForm");

      //Reference all INPUT elements in the Table.
      var inputs = document.getElementsByClassName("date-format");

      //Loop through all INPUT elements.
      for (var i = 0; i < inputs.length; i++) {
        //Check whether the INPUT element is TextBox.
        if (inputs[i].type == "text") {
          //Check whether Date Format Validation is required.
          if (inputs[i].className.indexOf("date-format") != 1) {

            //Set Max Length.
            inputs[i].setAttribute("maxlength", 7);

            //Validate Date as User types.
            inputs[i].onkeyup = function (e) {
              $scope.ValidateDateFormat(this, e.keyCode);
            };
          }
        }
      }
    };


    $scope.ValidateDateFormat = function (input, keyCode) {
      var dateString = input.value;
      if ((input.value.length == 4) && keyCode != 8) {
        input.value += '/';
      }
      var regex = /((19|20)\d\d)\/(0[1-9]|1[0-2])$/;
      //Check whether valid dd/MM/yyyy Date Format.
      if (regex.test(dateString) || dateString.length == 0) {
        $scope.ShowHideError(input, "none");
      } else {
        $scope.ShowHideError(input, "block");
      }
    };

    $scope.ShowHideError = function (textbox, display) {
      var row = textbox.parentNode.parentNode;
      var errorMsg = row.getElementsByClassName("error")[0];
      if (errorMsg != null) {
        errorMsg.style.display = display;
      }
    };

    $scope.method = 'GET';
    $scope.url = 'file:///C:/Users/MyPC/Desktop/agularjs/js/data.json';

    $scope.fetch = () =>{
      // $scope.code = null;
      //$scope.response = null;
      $http({ method: $scope.method, url: 'http://127.0.0.1:5500/js/data.json', cache: $templateCache }).
        then(function (response) {
          $scope.status = response.status;
          $scope.todos.data = response.data;
          console.log(response.data);
        }, function (response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
        });
    };
    $scope.showChart = () => {
      $scope.groupDate();
      $scope.listDate($scope.todos.dateFrom, $scope.todos.dateTo);
      $scope.coppyDate();
      Highcharts.chart('container', {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: 'Average Monthly Temperature and Rainfall in Tokyo'
        },
        subtitle: {
          text: 'Source: WorldClimate.com'
        },
        xAxis: [{
          categories:$scope.todos.months,// monthssssssssss
          crosshair: true
        }],
        yAxis: [{ // Primary yAxis
          labels: {
            format: '{value}°C',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          title: {
            text: 'Temperature',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          }
        }, { // Secondary yAxis
          title: {
            text: 'Rainfall',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          labels: {
            format: '{value} mm',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          opposite: true
        }],
        tooltip: {
          shared: true
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          x: 120,
          verticalAlign: 'top',
          y: 100,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
        },
        series: [{
          name: 'Rainfall',
          type: 'column',
          yAxis: 1,
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          tooltip: {
            valueSuffix: ' mm'
          }
        }, {
          name: 'Temperature',
          type: 'line',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
          tooltip: {
            valueSuffix: '°C'
          }
        }]
      });
    };

    // Group date
    $scope.groupDate = () =>{
      $scope.todos.dataFilterChart = [];
      var object = {};
      angular.forEach($scope.todos.data, function (data) {
        var dateSlice = data.INVOICE_DATE.slice(0, 7);
        if (dateSlice >= $scope.todos.dateFrom && dateSlice <= $scope.todos.dateTo) {
          if (!object[dateSlice]) {
            object[dateSlice] = { date: data.INVOICE_DATE, sumsalemount: 0, sumcostamount: 0, gross: 0 };
            $scope.todos.dataFilterChart.push(object[dateSlice]);
          }
          object[dateSlice].sumsalemount += data.SALE_AMOUNT;
          object[dateSlice].sumcostamount += data.COST_AMOUNT;
          object[dateSlice].gross = Math.round((object[dateSlice].sumcostamount / object[dateSlice].sumsalemount) * 100);
        }
      });
      console.log($scope.todos.dataFilterChart);
    };

    // get month
    $scope.getMonth = (value) => {
      let index = 0;
      value = value.split(""); // tách string thành mảng ký tự
      value.forEach((element, key) => { // duyệt qua mảng và lấy giá trị index của "/"
        if (element === "/") {
          index = key + 1;
        }
      });
      value = value.join(""); // kết hợp mảng ký tự lại thánh tring
      return value.slice(index); // trả ra mảng mới bắt đầu từ giá trị index + 1 => sau dấu "/"
    }

    //get year
    $scope.getYear = (value) => {
      let index = 0;
      value = value.split(""); // tách string thành mảng ký tự
      value.forEach((element, key) => { // duyệt qua mảng và lấy giá trị index của "/"
        if (element === "/") {
          index = key;
        }
      });
      value = value.join(""); // kết hợp mảng ký tự lại thánh string
      return value.slice(0, index); // trả ra mảng mới bắt đầu từ 0 -> index => trước dấu "/"     
    }

    // list date
    $scope.listDate = (dateOne, dateTwo) => {
      $scope.result=[]; //init
      var monthString = {1:'Jan',2:'Feb', 3:'Mar', 4:'Apr', 5:'May', 6:'Jun', 7:'Jul',8:'Aug', 9:'Sept', 10:'Oct', 11:'Nov',12:'Dec'};
      var monthnum = {1:'01',2:'02', 3:'03', 4:'04', 5:'05', 6:'06', 7:'07',8:'08', 9:'09', 10:'10', 11:'11',12:'12'};
      let len = Math.abs($scope.getYear(dateOne) - $scope.getYear(dateTwo)) * 12;

      if ($scope.getYear(dateOne) < $scope.getYear(dateTwo)) {
        // tính số lần lặp :  
        // len = lấy giá trị tuyệt đối của 2 năm
        // size = len - tháng của năm bé hơn + tháng của năm lớn hơn
        let size = (len - parseInt($scope.getMonth(dateOne))) + parseInt($scope.getMonth(dateTwo));
        // vòng for có 2 tham số điều kiện
        // index -> size
        // month : bắt đầu từ tháng của năm bé.
        // i : để tăng năm lên nếu month > 12    
        for (let index = 1, month = parseInt($scope.getMonth(dateOne)), i = 0; index <= size + 1; index++ , month++) {
          if (month > 12) {
            month = 1;
            i++;
          }
          $scope.result.push({"year": parseInt($scope.getYear(dateOne)) + i,"month": month,"nummonth":monthnum[month],"monstring":monthString[month]}
          );
        }
      }
      else if ($scope.getYear(dateOne) > $scope.getYear(dateTwo)) {
        let size = (len - parseInt($scope.getMonth(dateTwo))) + parseInt($scope.getMonth(dateOne));
        for (let index = 1, month = parseInt($scope.getMonth(dateTwo)), i = 0; index <= size + 1; index++ , month++) {
          if (month > 12) {
            month = 1;
            i++;
          }
          $scope.result.push({"year": parseInt($scope.getYear(dateTwo)) + i,"month": month,"nummonth":monthnum[month],"monstring":monthString[month]});
        }
      }
      else { // trường hợp năm = nhau
        if ($scope.getMonth(dateOne) < $scope.getMonth(dateTwo)) {
          for (let index = 1; index <= $scope.getMonth(dateTwo) - $scope.getMonth(dateOne) + 1; index++) {
            $scope.result.push({"year": parseInt($scope.getYear(dateOne)),"month": index,"nummonth":monthnum[index],"monstring":monthString[index]});
          }
        }
      }
      //return result;
    }

    $scope.coppyDate = ()=>{
      var groups = {};
      $scope.todos.months = [];
        angular.forEach($scope.result,function(data){
            $scope.todos.months.push(data.monstring+","+data.year);
            var d = data.year +"/"+data.nummonth;
             groups[d] = { date: d, sumsalemount: 0, sumcostamount: 0, gross: 0 };
            // groups[d].sumsalemount = $scope.todos.dataFilterChart[d].sumsalemount;
            // groups[d].sumcostamount = $scope.todos.dataFilterChart[d].sumcostamount;
            // groups[d].gross = $scope.todos.dataFilterChart[d].gross;
            $scope.todos.setDateMonth.push(groups[d]);
        });

      //   angular.forEach($scope.todos.dataFilterChart,function(data){
      //     if($scope.todos.setDateMonth[data.date.slice(0,7)] == data.date.slice(0,7)){
      //       $scope.todos.setDateMonth[d].sumsalemount = data.sumsalemount;
      //       $scope.todos.setDateMonth[d].sumcostamount = data.sumcostamount;
      //       $scope.todos.setDateMonth[d].gross = data.gross;
      //     }
      // });
      console.log($scope.todos.setDateMonth);
    }
  }]);