$(document).ready(function(){
  $("a.nav-link").on('click', function(event) {
    console.log(hash);
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

function collapseNavbar() {
    if ($(".navbar").offset().top > 100) {
        $(".full-width img").addClass("logo-nav-small");

    }
    else {
        $(".full-width img").removeClass("logo-nav-small");
    }
}

$(window).scroll(collapseNavbar);
$(window).resize(collapseNavbar);
$(document).ready(collapseNavbar);

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* DAQUI PRA FRENTE É UTILIZAÇÃO DO GOOGLE MAPS*/
var map;

function initialize() {
    var latlng = new google.maps.LatLng(-10.276843, -48.334788);
    var options = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(document.getElementById("mapa"), options);
    var marker = new google.maps.Marker({
      position: latlng,
      title:"Olá, aqui é onde acontecerá o evento"
    });
    // To add the marker to the map, call setMap();
    marker.setMap(map);

}

initialize();