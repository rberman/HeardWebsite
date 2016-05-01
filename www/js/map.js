/**
 * Created by codymolho on 4/30/16.
 */

//some code from http://www.labnol.org/internet/embed-google-maps-background/28457/

// The center of the map
var position = [44.939013, -93.168399];


function addPins(map) {
    var client = new XMLHttpRequest();
    var url = 'https://safecarlhacks2016.herokuapp.com/reports.json';

    client.onreadystatechange = function() {
        if (client.readyState == 4 && client.status == 200) {
            var arr = JSON.parse(client.responseText);
            displayMarkers(arr);
        }
    };

    client.open("GET", url);
    client.send();

    // Display the markers on the map (used in initMap)
    function displayMarkers(reports) {
        // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
        for (var i = 0; i < reports.length; i++) {
            var latlng = new google.maps.LatLng(reports[i].latitude, reports[i].longitude);
            var description = reports[i].description;
            var icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + getColor(reports[i].category_id);
            new google.maps.Marker({
                map: map,
                position: latlng,
                title: description,
                icon: icon
            });
        }
    }

    function getColor(category_id) {
        if (category_id == 1) return '11c1f3'; // verbal calm
        if (category_id == 2) return 'ffc900'; // physical energized
        if (category_id == 3) return '886aea'; // systemic royal
        if (category_id == 4) return '387ef5'; // other positive
    }
}

function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[0], position[1]);

    var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng,
        scrollwheel: false
    };

    map = new google.maps.Map(document.getElementById('googlemap'),
        mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });

    addPins(map);
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);