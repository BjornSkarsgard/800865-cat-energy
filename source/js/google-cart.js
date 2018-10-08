function initMap() {
  var centerLatLng = new google.maps.LatLng(59.938638, 30.3231);
  var mapOptions = {
    center: centerLatLng,
    zoom: 16
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  // Добавляем маркер
  var marker = new google.maps.Marker({
    position: centerLatLng, // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
    // map: map,                            // Карта на которую нужно добавить маркер
    title: "CAT ENERGY" // (Необязательно) Текст выводимый в момент наведения на маркер
  });

  var marker = new google.maps.Marker({
    position: centerLatLng, // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
    map: map, // Карта на которую нужно добавить маркер
    animation: google.maps.Animation.BOUNCE,
    title: "CAT ENERGY", // (Необязательно) Текст выводимый в момент наведения на маркер,
    icon: "img/map-pin.png" // (Необязательно) Путь до изображения, которое будет выводится на карте вместо стандартного маркера
  });
}
google.maps.event.addDomListener(window, "load", initMap);
