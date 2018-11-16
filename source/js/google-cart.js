function initMap() {
  var centerLatLng = new google.maps.LatLng(59.938638, 30.3231);
  var mapOptions = {
    center: centerLatLng,
    zoom: 16
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
    position: centerLatLng,
    title: "CAT ENERGY"
  });

  var marker = new google.maps.Marker({
    position: centerLatLng,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    title: "CAT ENERGY",
    icon: "img/map-pin.png"
  });
}
google.maps.event.addDomListener(window, "load", initMap);
