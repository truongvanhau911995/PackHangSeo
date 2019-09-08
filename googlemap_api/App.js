var testApp = angular.module('TestApp', []);  
testApp.directive('googleMap', function (googleMapApi) {  
    return {  
        restrict: 'EA',  
        scope: {  
            param: '='  
        },  
        template: '<div id="googlemaps" data-ng-style={"border":"solid","border-color":"red","width":param.width,"height":param.height}>' +  
                  '</div>',  
        replace: true,  
        controller: function ($scope, $element, $attrs, googleMapApi) {  
            var infoWindow;  
            var markers = []; 
            var method = function () {  
                var initAttribute = function () {  
                    if (!angular.isDefined($scope.param)) {  
                        $scope.param = {};  
                    }  
  
                    if (!angular.isDefined($scope.param.height)) {  
                        $scope.param.height = '100%';  
                    }  
  
                    if (!angular.isDefined($scope.param.width)) {  
                        $scope.param.width = '100%';  
                    }  
                    if (!angular.isDefined($scope.param.autoZoom)) {  
                        $scope.param.autoZoom = true;  
                    }  
                    if (!angular.isDefined($scope.param.allowMultipleMark)) {  
                        $scope.param.allowMultipleMark = true;  
                    }  
                    googleMapApi.then(mapConfig);  
                }  
  
                var assignMethod = function () {  
                    $scope.param.method = {  
                        setMark: function (latitude, longitude, title, desc) {  
                            setMapMarker($scope.map, new google.maps.LatLng(latitude, longitude), title, desc)  
                        }  
                    }  
                }  
                var mapConfig = function () {  
                    $scope.mapOptions = {  
                        center: new google.maps.LatLng(50, 2),  
                        zoom: 4,  
                        mapTypeId: google.maps.MapTypeId.ROADMAP,  
                        scrollwheel: $scope.param.autoZoom  
                    };  
                    method.initMap();  
                }  
  
                var initMap = function () {  
                    console.log($element[0]);
                    if ($scope.map === undefined) {  
                        $scope.map = new google.maps.Map($element[0], $scope.mapOptions);  
                    }  
                }  
  
                var setMapMarker = function (map, position, title, content) {  
                    var marker;  
                    var markerOptions = {  
                        position: position,  
                        map: map,  
                        title: title,  
                        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'  
                    };  
  
                    marker = new google.maps.Marker(markerOptions);  
                    if ($scope.param.allowMultipleMark)  
                        $scope.markers.push(marker);  
                    else  
                        $scope.markers = marker;  
  
                    google.maps.event.addListener(marker, 'click', function () {  
                        // close window if not undefined  
                        if (infoWindow !== undefined) {  
                            infoWindow.close();  
                        }  
                        // create new window  
                        var infoWindowOptions = {  
                            content: content  
                        };  
                        infoWindow = new google.maps.InfoWindow(infoWindowOptions);  
                        infoWindow.open($scope.map, marker);  
                    });  
                }  
  
                return {  
                    initAttribute: initAttribute,  
                    mapConfig: mapConfig,  
                    initMap: initMap,  
                    assignMethod: assignMethod  
                }  
            }();  
  
            var init = function () {  
                method.initAttribute();  
                method.assignMethod();  
            }();  
        }  
    };  
});  

testApp.service('googleMapApi', function googleMapApi($window, $q) {  
  
    function loadScript() {  
        console.log('loadScript')  
        // use global document since Angular's $document is weak  
        var s = document.createElement('script')  
        s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD8I86PjEk8OX3i5qb39hzMUd7l8ikE75w&callback=initMap'  
        document.body.appendChild(s);  
    }  
  
    var deferred = $q.defer()  
  
    $window.initMap = function () {  
        deferred.resolve()  
    }  
  
    if ($window.attachEvent) {  
        $window.attachEvent('onload', loadScript)  
    } else {  
        $window.addEventListener('load', loadScript, false)  
    }  
  
    return deferred.promise  
});  