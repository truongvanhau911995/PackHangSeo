angular.module('todoApp', ['wj']).controller('TodoListController',['$scope', '$http', '$templateCache','$sce','$location', function($scope, $http, $templateCache,$sce,$location) {
  $scope.treeData = [
    {
          name: '\u00A7 JavaScript Data Types', 
          items: [
            { name: '\u261E number',task:"task01",link:"<a href='https://www.w3schools.com/js/js_datatypes.asp' target='_blank'>https://www.w3schools.com/js/js_datatypes.asp</a>",startdate:"",enddate:"",note:"Tìm hiểu cách khai báo" },
            { name: '\u261B string',task:"task01",link:"<a href='https://www.w3schools.com/js/js_datatypes.asp' target='_blank'>https://www.w3schools.com/js/js_datatypes.asp</a>" ,startdate:"",enddate:"",note:"Tìm hiểu cách khai báo" },
            { name: '\u261B boolean',task:"task01",link:"<a href='https://www.w3schools.com/js/js_datatypes.asp' target='_blank'>https://www.w3schools.com/js/js_datatypes.asp</a>" ,startdate:"",enddate:"",note:"Tìm hiểu cách khai báo" },
            { name: '\u261B array',task:"task01",link:"<a href='https://www.w3schools.com/js/js_datatypes.asp' target='_blank'>https://www.w3schools.com/js/js_datatypes.asp</a>" ,startdate:"",enddate:"",note:"Tìm hiểu cách khai báo" },
            { name: '\u261B object',task:"task01",link:"<a href='https://www.w3schools.com/js/js_datatypes.asp' target='_blank'>https://www.w3schools.com/js/js_datatypes.asp</a>",startdate:"",enddate:"",note:"Tìm hiểu cách khai báo"  },
            { name: '\u261B undefined',task:"task01",link:"<a href='https://www.w3schools.com/js/js_datatypes.asp' target='_blank'>https://www.w3schools.com/js/js_datatypes.asp</a>" ,startdate:"",enddate:"",note:"Tìm hiểu cách khai báo" },
            { name: '\u261B null',task:"task01",link:"<a href='https://www.w3schools.com/js/js_datatypes.asp' target='_blank'>https://www.w3schools.com/js/js_datatypes.asp</a>",startdate:"",enddate:"",note:"Tìm hiểu cách khai báo"  },
            { name: '\u261B typeof ',task:"task01",link:"<a href='https://www.w3schools.com/js/js_datatypes.asp' target='_blank'>https://www.w3schools.com/js/js_datatypes.asp</a>" ,startdate:"",enddate:"",note:"Tìm hiểu cách khai báo" }
          ]
    },
    {
          name: '\u266A JavaScript Functions', 
          items: [
            { name: '\u261B Hàm có return',task:"task01",link:"<a href='https://freetuts.net/ham-va-tao-ham-function-trong-javascript-274.html' target='_blank'>https://freetuts.net/ham-va-tao-ham-function-trong-javascript-274.html</a>",startdate:"",enddate:"",note:"Tìm hiểu cách khai báo" },
            { name: '\u261B Hàm không có return',task:"task01",link:"<a href='https://www.w3schools.com/js/js_functions.asp' target='_blank'>https://www.w3schools.com/js/js_functions.asp</a>",startdate:"",enddate:"",note:"Tìm hiểu cách khai báo"  },
            { name: '\u261B Hàm có tham số truyền vào' ,task:"task01",link:"<a href='https://www.w3schools.com/js/js_functions.asp' target='_blank'>https://www.w3schools.com/js/js_functions.asp</a>",startdate:"",enddate:"",note:"Tìm hiểu cách khai báo" }
          ]
    },
    {
      name: '\u266A JavaScript Operators', 
      items:[{
            name: '\u266A Arithmetic Operators', 
            items: [
              { name: '\u261B X = Y',task:"task01",link:"<a href='https://www.w3schools.com/js/js_datatypes.asp' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
              { name: '\u261B X += Y',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X + Y" },
              { name: '\u261B X -= Y',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X - Y"},
              { name: '\u261B X *= Y',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X * Y"},
              { name: '\u261B X /= Y',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>" ,startdate:"",enddate:"",note:"X = X / Y"},
              { name: '\u261B X %= Y',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>" ,startdate:"",enddate:"",note:"X = X % Y"},
              { name: '\u261B ++',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>" ,startdate:"",enddate:"",note:"X = X + 1"},
              { name: '\u261B -- ',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X - 1"}]
        },
        {
          name: '\u266A Comparison Operators', 
          items: [
              { name: '\u261B == ',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
              { name: '\u261B ===',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X + Y" },
              { name: '\u261B !=',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>" ,startdate:"",enddate:"",note:"X = X - Y"},
              { name: '\u261B !==',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>" ,startdate:"",enddate:"",note:"X = X * Y"},
              { name: '\u261B >',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>" ,startdate:"",enddate:"",note:"X = X / Y"},
              { name: '\u261B <',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>" ,startdate:"",enddate:"",note:"X = X % Y"},
              { name: '\u261B >=',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>" ,startdate:"",enddate:"",note:"X = X + 1"},
              { name: '\u261B <= ',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>" ,startdate:"",enddate:"",note:"X = X - 1"},
            { name: '\u261B ? ',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>" ,startdate:"",enddate:"",note:"X = X - 1"}
          ]
        },
        {
          name: '\u266A Logical Operators', 
          items: [
              { name: '\u261B && ',task:"task02",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
              { name: '\u261B || ',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X + Y" },
              { name: '\u261B !',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>" ,startdate:"",enddate:"",note:"X = X - Y"}
          ]
        }
      ]
    },
    {
      name: '\u266A Conditional Statements', 
      items: [
        { name: '\u261B if else and else if ',task:"task02",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B Switch Statement ',task:"task01",link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X + Y" },
      ]
    },
    {
      name: '\u266A JavaScript Loops', 
      items: [
        { name: '\u261B FOR ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B WHILE',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B DO...WHILE ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B FOR...IN ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X + Y" },
        { name: '\u261B BREAK ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B CONTINUE',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" }
      ]
    },
    {
      name: '\u266A JavaScript Number,String', 
      items: [
        { name: '\u261B FOR ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B WHILE',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B DO...WHILE ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B FOR...IN ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X + Y" },
        { name: '\u261B BREAK ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B CONTINUE',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" }
      ]
    },
    {
      name: '\u266A JavaScript Array', 
      items: [
        { name: '\u261B FOR ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B WHILE',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B DO...WHILE ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B FOR...IN ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X + Y" },
        { name: '\u261B BREAK ', link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B CONTINUE', link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" }
      ]
    },
    {
      name: '\u266A JavaScript Object', 
      items: [
        { name: '\u261B FOR ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B WHILE',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B DO...WHILE ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B FOR...IN ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X + Y" },
        { name: '\u261B BREAK ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B CONTINUE',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" }
      ]
    },
    {
      name: '\u266A basic highcharts', 
      items: [
        { name: '\u261B FOR ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B WHILE',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B DO...WHILE ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B FOR...IN ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X + Y" },
        { name: '\u261B BREAK ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B CONTINUE',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" }
      ]
    },
    {
      name: '\u266A basic wijmo', 
      items: [
        { name: '\u261B FOR ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B WHILE',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B DO...WHILE ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B FOR...IN ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:"X = X + Y" },
        { name: '\u261B BREAK ',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" },
        { name: '\u261B CONTINUE',link:"<a href='https://www.w3schools.com/js' target='_blank'>https://www.w3schools.com/js</a>",startdate:"",enddate:"",note:" X = Y" }
      ]
    }
      
  ];
  $scope.includepage = 'home.html';
  $scope.init = function (s, e) {
      s.addEventListener(s.hostElement, 'click', function(e) {
        
        var ht = s.hitTest(e);
        console.log(ht.panel);
        //if(column.binding == 'link'){
       if(ht.panel.columns[ht.col].binding == 'task'){
          if (ht.panel == s.cells) {
            var oo =  s.cells.rows[ht.row]._data["task"];
            if(oo == "task01"){
              window.open('./view/task01.html');
            }
            if(oo == "task02"){
              window.open('./view/task02.html');
            }
          // $location.link(oo);
            
          // alert(oo);
          console.log('you clicked cell ' + ht.row + ', ' + ht.col);
        } 
       }
       
      }, true); // get the event before the grid does
      s.collapseGroupsToLevel(0);
    }
   
    $scope.$watch('flex', function () {
      var flex = $scope.flex;
      if (flex) {
        var row = flex.selectedRows[0];
        row.isCollapsed = false;
        flex.hostElement.addEventListener('click', function () {
          var row = flex.selectedRows[0];
          row.isCollapsed = !row.isCollapsed;
        }, true);
      }
    });

    // formatter to add checkboxes to boolean columns
    $scope.itemFormatter = function (panel, r, c, cell) {
      if (panel.cellType === wijmo.grid.CellType.Cell) {
        var column = panel.columns[c];
        if(column.binding == 'link'){
          var html =cell.textContent;
          cell.innerHTML =  $sce.trustAsHtml(html);
         
          //console.log(column.collectionView.items[r].items[c]);
        }

      }
      //$scope.itemFormatter = function (args) {
      // if (panel.cellType == wijmo.grid.CellType.ColumnHeader) {
      //     var flex = panel.grid;
      //     var col = flex.columns[c];
  
      //     // check that this is a boolean column
      //     if (col.dataType == wijmo.DataType.Boolean) 
      //     {
  
      //         // prevent sorting on click
      //         col.allowSorting = false;
  
      //         // count true values to initialize checkbox
      //         var cnt = 0;
      //         for (var i = 0; i < flex.rows.length; i++) {
      //             if (flex.getCellData(i, c) == true) cnt++;
      //         }
  
      //         // create and initialize checkbox
      //         cell.innerHTML = '<input type="checkbox"> ' + cell.innerHTML;
  
      //         var cb = cell.firstChild;
      //         cb.checked = cnt > 0;
      //         cb.indeterminate = cnt > 0 && cnt < flex.rows.length;
  
      //         // apply checkbox value to cells
      //         cb.addEventListener('click', function (e) {
      //             flex.beginUpdate();
      //             for (var i = 0; i < flex.rows.length; i++) {
      //                 flex.setCellData(i, c, cb.checked);
      //             }
      //             flex.endUpdate();
      //         });
  
      //     }
      // }
    }
  }]).filter('trustHtml',function($sce){
    return function(html){
      return $sce.trustAsHtml(html)
    }
  });
