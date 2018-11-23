
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map;
var word="hospital";
var infowindow;



function ChangePlaceToBanco() {
word="cruz roja";
initAutocomplete();
}

function ChangePlaceToHospital() {
word="hospital";
initAutocomplete();
}
function initAutocomplete() {
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap'
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    infowindow = new google.maps.InfoWindow();

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
    location: pos,
    radius: 15000,
    type: [word]
    }, callback);
    //infoWindow.setPosition(pos);
    //infoWindow.setContent('Location found.');
    var marker = new google.maps.Marker({position:pos});
    marker.setMap(map);
    
    map.setCenter(pos);
    }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}
// Create the search box and link it to the UI element.
var input = document.getElementById('pac-input');
var searchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
// Bias the SearchBox results towards current map's viewport.
map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
});
var markers = [];
// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.
searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    if (places.length == 0) {
    
    return;
    }
    // Clear out the old markers.
    markers.forEach(function(marker) {
    marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
    if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
    }
    var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
    };
    // Create a marker for each place.
    markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
    }));
    if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
    } else {
        bounds.extend(place.geometry.location);
    }
    });
    map.fitBounds(bounds);
});
}
function callback(results, status) {
if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
    createMarker(results[i]);
    }
}
}
function createMarker(place) {
var placeLoc = place.geometry.location;
var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
});
google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
});
}

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxOYbPBSPOsVnJRDEO06qrMvB2zr2xetE&libraries=places&callback=initAutocomplete"
    async defer></script>