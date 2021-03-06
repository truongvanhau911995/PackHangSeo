angular.module('todoApp', [])
    .controller('TodoListController', ['$scope', '$http', '$templateCache', '$compile', function ($scope, $http, $compile, $templateCache) {
        var mapStyle = [];
        var configMap = {
            coordinates: [],
            countAmountPoint: 1000,
            cusPlotData: [{
                fieldId: 'year',
                dataModelName: 'year',
                type: 'date',
                colorPoints: [
                    {
                        value: 2018,
                        operator: '=',
                        color: 'navy'
                    },
                    {
                        value: 2016,
                        operator: '=',
                        color: 'yellow'
                    }
                ]
            }]
        }
        var configStyle = {
            fieldId: 'year',
            dataModelName: 'year',
            type: '',
            colorPlot: [
                {
                    value: 2018,
                    operator: '=',
                    color: 'blue'
                },
                {
                    value: 2016,
                    operator: '=',
                    color: 'red'
                }
            ]
        };

        var configDataChain = [
            {
                name: 'data chain',

            }
        ];
        var cities = [
            {
                city: 'India',
                desc: 'This is the best country in the world!',
                year: 2018,
                lat: 23.200000,
                long: 79.225487
            },
            {
                city: 'New Delhi',
                desc: 'The Heart of India!',
                year: 2017,
                lat: 28.500000,
                long: 77.250000
            },
            {
                city: 'Mumbai',
                desc: 'Bollywood city!',
                year: 2019,
                lat: 19.000000,
                long: 72.90000
            },
            {
                city: 'Kolkata',
                desc: 'Howrah Bridge!',
                year: 2016,
                lat: 22.500000,
                long: 88.400000
            },
            {
                city: 'Chennai  ',
                desc: 'Kathipara Bridge!',
                year: 2020,
                lat: 13.000000,
                long: 80.250000
            },
            {
                city: 'Hau  ',
                desc: 'Hau Bridge!',
                year: 2018,
                lat: 13.000000,
                long: 82.300000
            },
            {
                city: 'vietnamiss  ',
                desc: 'Hau vn Bridge!',
                year: 2018,
                lat: 12.000000,
                long: 75.300000
            }
        ];
        var myCenter = new google.maps.LatLng(28.500000, 77.250000);

        var map, infoWindow, menuDisplayed;
        var menuBox = null;
        var markers = {
            makersData: [],
            makersSearch: []
        };
        $scope.variableConfig = {
            search: 'viet nam'
        }
        var mapConfigs = {
            center: myCenter,
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
        function controlColorPoint() {
            var fieldId = configStyle.fieldId;
            mapStyle[fieldId] = configStyle;
        }

        function convertData(dataConfig) {
            var lenDataConfig = dataConfig.length;
            for (var i = 0; i < lenDataConfig; i++) {
                var fieldId = dataConfig[i].fieldId;
                mapStyle[fieldId] = dataConfig[i].colorPoints;
            }
        }
        /**
         * get
         * @param {*} index 
         */
        function setColorPlotData(index) {
            var color = '';
            for (var key in cities[index]) {
                if (mapStyle[key]) {
                    var idx = _.findIndex(mapStyle[key], ['value', cities[index][key]]);
                    if (idx > -1) {
                        color = mapStyle[key][idx].color;
                    } else {
                        color = 'red';
                    }
                }
            }
            return color;
        }
        var useGmaps = false; /* set to not use by default */
        function gm_Loaded() {
            // var service = new google.maps.places.AutocompleteService();
            // service.getPlacePredictions({
            //     input: 'Brisbane,Australia',
            //     types: ['(cities)']
            // },
            // function(predictions, status) {
            //     if (status == google.maps.places.PlacesServiceStatus.OK) {
            //         useGmaps = true; /* status is ok so set flag to use Google Maps */
            //     }
            // });
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'address': "viet nam" }, function (results, status) {
                if (status === 'OK') {
                    // map.setCenter(results[0].geometry.location);
                    // new google.maps.Marker({
                    //     map: map,
                    //     position: results[0].geometry.location
                    // });
                    useGmaps = true; /* status is ok so set flag to use Google Maps */
                } else {
                    window.alert('Geocode was not successful for the following reason: ' +
                        status);
                }
            });
        };
        gm_Loaded();
        function initMap() {
            // controlColorPoint();
            
            // if (useGmaps === true && typeof(google) !== 'undefined') {
            //     console.log("ok");
            // }else{
            //     console.log("false");
            // }
            function gm_authFailure() { console.log("fail") };
            convertData(configMap.cusPlotData);
            if (map === undefined) {
                map = new google.maps.Map(document.getElementById('map'), mapConfigs);
            }
            var colors = '';
            for (var i = 0; i < cities.length; i++) {
                colors = setColorPlotData(i);
                createMarker(cities[i], colors, i);
            }
            $scope.openInfoWindow = function (e, selectedMarker) {
                e.preventDefault();
                google.maps.event.trigger(selectedMarker, 'click');
            }
            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent('Location found.');
                    infoWindow.open(map);
                    map.setCenter(pos);
                }, function (error) {
                    console.log(error + 'hau');
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                console.log(error + 'hau');
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }

            map.addListener("click", function (e) {
                if (menuDisplayed == true) {
                    menuBox.style.display = "none";
                }
            });

        }
        function searchLocations() {
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'address': $scope.variableConfig.search }, function (results, status) {
                if (status === 'OK') {
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
        $scope.refesh = function () {
            checkAPIKey();
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
        function pinSymbolColorPlot(color) {
            return {
                path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
                fillColor: color,
                fillOpacity: 4,
                strokeColor: '#000',
                strokeWeight: 2,
                scale: 1
            };
        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.log("User Denied Geolocation");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("Location Data Unavailable");
                    break;
                case error.TIMEOUT:
                    console.log("Request Timed Out");
                    break;
                case error.UNKNOWN_ERROR:
                    console.log("Unknown Error Occurred");
                    break;
            }
        }

        function setContextMenu(pxl1, pxr2, position) {
            menuBox = document.getElementById("contextMenu");
            menuBox.style.left = pxl1 + "px";
            menuBox.style.top = pxr2 + "px";
            menuBox.style.background = "white";
            menuBox.style.display = "block";
            menuBox.style.position = position;
            menuDisplayed = true;
        }
        function createMarker(info, color, idx) {
            infoWindow = new google.maps.InfoWindow();
            var marker = new google.maps.Marker({
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: color,
                    fillOpacity: 2,
                    strokeColor: 'white',
                    strokeWeight: .5,
                    scale: 12
                },
                map: map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city + info.year
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            marker.setMap(map);
            var isMobile = window.orientation > -1;
            var eventClick = isMobile ? "click" : "rightclick";
            marker.addListener(eventClick, function (e) {

                //infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                //infoWindow.open(map, marker);
                //map.setCenter({lat: info.lat, lng: info.long});
                // var pxl = e.pixel.x;
                //  alert(e);
                console.log(e);
                console.log(e.ya.screenX + " / " + e.ya.screenY);
                marker.setPosition({ lat: info.lat, lng: info.long });



                if (isMobile) {
                    var left1 = e.ya.clientX;
                    var top2 = e.ya.clientY;
                    var pxl1 = e.pixel.x + 450;
                    var pxr2 = e.pixel.y + 320;
                    console.log(pxl1 + " " + pxr2 + "/" + left1 + " " + top2);
                    setContextMenu(pxl1, pxr2, "fixed");
                } else {
                    for (prop in e) {
                        if (e[prop] instanceof MouseEvent) {
                            var pxl = e.pixel.x;
                            var pxr = e.pixel.y;
                            mouseEvt = e[prop];

                            var left = mouseEvt.clientX;
                            var top = mouseEvt.clientY;
                            console.log(pxl + " " + pxr + "/" + left + " " + top);
                            // menuBox = document.getElementById("contextMenu");
                            // menuBox.style.left = left + "px";
                            // menuBox.style.top = top + "px";
                            // menuBox.style.background = "white";
                            // menuBox.style.display = "block";
                            // menuBox.style.position = "fixed";
                            setContextMenu(left, top, "fixed");
                            mouseEvt.preventDefault();

                            menuDisplayed = true;
                        }
                    }
                }


            });
            markers.makersData.push(marker);

        }

        ////////////////////////////////////////////////////////
        function checkAPIKey() {
            var apikey  = 'AIzaSyCuJtivKgsoTh24Jlxg6jldRbXcive4J6c1';
            var address = 111; 
            var lat = 10;
            var long = 10;
            var headerJS = {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
              };
            var query = 'https://maps.googleapis.com/maps/api/js?key=' + apikey;
            //var query = 'https://maps.googleapis.com/maps/api/geocode/json?latlng= '+lat+','+long+'&key=' + apikey;
            
            $.getJSON(query, headerJS, function (data) {
                console.log(data);
                if (data.status === 'OK') { 
                    var geo_data = data.results[0];
                    console.log(data);
                } 
                else{
                    console.log(data.status);
                }
               
            })
        }
        
        
        //https://embed.plnkr.co/RNyB3r5PMMpNgoxUZgX3/
        //https://jsfiddle.net/Xeoncross/k5c2ndyL/

        //https://www.allprogrammingtutorials.com/tutorials/google-maps-using-angularjs.php

        //https://codepen.io/MarcMalignan/pen/jABfk?editors=1010

    }]);
