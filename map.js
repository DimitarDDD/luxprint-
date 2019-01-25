function initMap() {
  var myLatLng = {lat:42.61239 , lng:25.37794};  

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });
  
  map.setOptions({draggable: false});

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}