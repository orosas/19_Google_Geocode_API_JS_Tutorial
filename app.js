// Nota: Google Maps requiere activar la cuenta de usuario para obtener la API Key
//     y activar la cuenta para pago.API

//     Existe un crédito mensual de $ 200 USD, (JULIO 2020). Los costos adicionales
//     se calculan en la sección de Dynamic Maps:
//     https://cloud.google.com/maps-platform/pricing/sheet/

// Para crear una API Key entrar <a href="http://" target="_blank" rel="noopener noreferrer"></a>
// https://console.developers.google.com/

// Google Maps JavaScript API v3 Reference:
// https://developers.google.com/maps/documentation/javascript/reference

// Referencia: Google Maps markers
// https://developers.google.com/maps/documentation/javascript/markers

var map;
function initMap() {
    

    // Map options
    let options = {
      // Nota: Entre más grande el valor, más "cercana" es la imagen
      //     del map o con MÁS ZOOM.
        zoom: 15,
        center: {lat: 19.432778, lng: -99.133333}
    }

  // Creación del Mapa
  let map = new google.maps.Map(document.getElementById("map"), options);
  
  
  // // ******* Nota: Crea marker en el mapa
  // let coordBellasArtes = {lat: 19.4356000, lng: -99.1413000};
  
  // const imagen = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  // let bellasArtesMarker = new google.maps.Marker({
  //   position: coordBellasArtes,
  //   map: map,
  //   title: 'Palacio de Bellas Artes',
  //   icon: imagen
  // });
  // // ***********************

  // // ++++++++++++++ Info window
  // // Nota: Se requiere un addEventListener
  // let infoWindow = new google.maps.InfoWindow({
  //   content:'<h1>Bellas Artes</h1>'
  // });
  // bellasArtesMarker.addListener('click', function(){
  //   console.log('Dentro de infoWindow');
  //   infoWindow.open(map, bellasArtesMarker);
  // })
  // // ++++++++++++++++



  // >>>>> Multiple Markers
  addMarker({lat: 19.4356000, lng: -99.1413000}); // Bellas Artes
  addMarker({lat: 19.432778, lng: -99.133333}); // Zócalo CDMX
  addMarker({lat: 19.431270, lng: -99.141998}); // Zócalo CDMX



  // Add marker function
  function addMarker(coords) {
      // ******* Nota: Crea marker en el mapa

      const imagen = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  let bellasArtesMarker = new google.maps.Marker({
    position: coords,
    map: map,
    title: 'Palacio de Bellas Artes',
    icon: imagen
  });
  }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


}