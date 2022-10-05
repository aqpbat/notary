ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
      center: [43.24323430864972, 76.89238807000882],
      zoom: 17
    }, {
      searchControlProvider: 'yandex#search'
    });

  myMap.geoObjects
    .add(new ymaps.Placemark([43.243052, 76.892080], {
      balloonContent: '<b>БЦ "МТС",</b><br>3 этаж,<br>офис 322'
    }, {
      preset: 'islands#icon',
      iconColor: '#ff0000'
    }));
}
