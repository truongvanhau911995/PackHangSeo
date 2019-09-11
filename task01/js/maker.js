 // // place a marker
    // function setMarker(map, position, title, content) {
    //   var marker;
    //   var markerOptions = {
    //       position: position,
    //       map: map,
    //       title: title,
    //       icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
    //   };

    //   marker = new google.maps.Marker(markerOptions);
    //   markers.push(marker); // add marker to array
      
    //   google.maps.event.addListener(marker, 'click', function () {
    //       // close window if not undefined
    //       if (infoWindow !== undefined) {
    //           infoWindow.close();
    //       }
    //       // create new window
    //       var infoWindowOptions = {
    //           content: content
    //       };
    //       infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    //       infoWindow.open(map, marker);
    //   });
    // }

        //    setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
    //    setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
    //    setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', 'Text here');

    function initmacker(){
        $scope.cities = [
          { title: 'London', lat: 51.508515, lng: -0.125487 },
          { title: 'Melbourne', lat: 52.370216, lng: 4.895168 }
      ];
      $scope.infowindow = new google.maps.InfoWindow({
          content: ''
      });
      for (var i = 0; i < $scope.cities.length; i++) {
          var marker = new google.maps.Marker({
              position: new google.maps.LatLng($scope.cities[i].lat, $scope.cities[i].lng),
              map: $scope.map,
              title: $scope.cities[i].title
          });

          var content = '<a ng-click="cityDetail(' + i + ')" class="btn btn-default">View details</a>';
          var compiledContent = $compile(content)($scope)

          google.maps.event.addListener(marker, 'click', (function(marker, content, scope) {
              return function() {
                  scope.infowindow.setContent(content);
                  scope.infowindow.open(scope.map, marker);
              };
          })(marker, compiledContent[0], $scope));

      }
  }

  $scope.cityDetail = function(index) {
      alert(JSON.stringify($scope.cities[index]));
  }


