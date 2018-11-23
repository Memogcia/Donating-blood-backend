<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:50%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: -33.8688, lng: 151.2195 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    //this.geolocate();
    this.initAutocomplete();
    this.buildMarkers();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },

    /*
      Builds all of the markers for the hospitals
    */
    buildMarkers(){
      /*
        Initialize the markers to an empty array.
      */
      this.markers = [];

      /*
        Iterate over all of the cafes
      */
      for( var i = 0; i < this.hospitals.length; i++ ){

        /*
          Create the marker for each of the cafes and set the
          latitude and longitude to the latitude and longitude
          of the cafe. Also set the map to be the local map.
        */
        var marker = new google.maps.Marker({
          position: { lat: parseFloat( this.hospitals[i].latitude ), lng: parseFloat( this.hospitals[i].longitude ) },
          map: this.map
        });

        /*
          Push the new marker on to the array.
        */
        this.markers.push( marker );
      }
    },











    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },

    initAutocomplete: function() {

      this.geolocate();
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
      

        
    },

    callback: function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      },
    createMarker: function(place) {
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

        
    }

  }

</script>