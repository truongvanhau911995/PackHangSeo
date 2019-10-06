angular.module('todoApp', [])
  .controller('TodoListController', ['$scope', '$http', '$templateCache','$compile', function ($scope, $http, $compile, $templateCache) {
console.log(google.maps);

    var cities = [
        {
            city : 'India',
            desc : 'This is the best country in the world!',
            lat : 23.200000,
            long : 79.225487
        },
        {
            city : 'New Delhi',
            desc : 'The Heart of India!',
            lat : 28.500000,
            long : 77.250000
        },
        {
            city : 'Mumbai',
            desc : 'Bollywood city!',
            lat : 19.000000,
            long : 72.90000
        },
        {
            city : 'Kolkata',
            desc : 'Howrah Bridge!',
            lat : 22.500000,
            long : 88.400000
        },
        {
            city : 'Chennai  ',
            desc : 'Kathipara Bridge!',
            lat : 13.000000,
            long : 80.250000
        }
    ];
    var myCenter = new google.maps.LatLng(28.500000, 77.250000);

    var map, infoWindow;
    var menuBox = null;
    var markers = {
        makersData:[],
        makersSearch:[]
    };
    $scope.variableConfig = {
        search:'viet nam'
    }
    var mapConfigs = {
        center:myCenter,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
    };
    function initMap() {
        
        if (map === undefined) {
            map = new google.maps.Map(document.getElementById('map'), mapConfigs);
        }
        for (i = 0; i < cities.length; i++){
            createMarker(cities[i]);
        }
        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }
         // Try HTML5 geolocation.
         if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
  
              infoWindow.setPosition(pos);
              infoWindow.setContent('Location found.');
              infoWindow.open(map);
              map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }

          map.addListener("click", function(e) {
            if (menuDisplayed == true) {
              menuBox.style.display = "none";
            }
          });
          
    }
    function searchLocations() {
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({'address':  $scope.variableConfig.search}, function(results, status) {
        if (status === 'OK') {
            console.log(results);
            map.setCenter(results[0].geometry.location);
                new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            window.alert('Geocode was not successful for the following reason: ' +
                status);
        }
        });
      }
    $scope.refesh = function(){
        initMap();
        searchLocations();
    }
   
    function clearLocations() {
        infoWindow.close();
        for (var i = 0; i < markers.makersSearch.length; i++) {
          markers.makersSearch[i].setMap(null);
        }
        markers.makersSearch.length = 0;

        locationSelect.innerHTML = "";
        var option = document.createElement("option");
        option.value = "none";
        option.innerHTML = "See all results:";
        locationSelect.appendChild(option);
      }
    function createMarker(info){
        infoWindow = new google.maps.InfoWindow();    
        var marker = new google.maps.Marker({
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: 'red',
                fillOpacity: .5,
                strokeColor: 'white',
                strokeWeight: .5,
                scale: 7
            },
            map: map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        marker.setMap(map);
        marker.addListener('rightclick', function(e){
            // infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            // infoWindow.open(map, marker);
            for (prop in e) {
                if (e[prop] instanceof MouseEvent) {
                  var pxl = e.pixel.x;
                  var pxr = e.pixel.y;
                  mouseEvt = e[prop];
                  var left = mouseEvt.clientX;
                  var top = mouseEvt.clientY;
          
                  menuBox = document.getElementById("contextMenu");
                  menuBox.style.left = left + "px";
                  menuBox.style.top = top + "px";
                  menuBox.style.background = "white";
                  menuBox.style.display = "block";
          
                  mouseEvt.preventDefault();
          
                  menuDisplayed = true;
                }
              }
        });
        markers.makersData.push(marker);
    }   
  

//https://embed.plnkr.co/RNyB3r5PMMpNgoxUZgX3/
//https://jsfiddle.net/Xeoncross/k5c2ndyL/

//https://www.allprogrammingtutorials.com/tutorials/google-maps-using-angularjs.php

//https://codepen.io/MarcMalignan/pen/jABfk?editors=1010

  }]);
