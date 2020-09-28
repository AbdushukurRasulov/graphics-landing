$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });
  
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    $('.gallary-scroll').addClass('justify-content-center')
  }
  $(this).addClass("active");
  console.log(this)
  $('.gallary-scroll').removeClass('justify-content-center')

});

jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
          768: {
              items: 2
          },
          1170: {
              items: 3
          }
      }
  });
});


class KeenSlider {
    constructor(s, param2) {
        
    }

}

let slider = new KeenSlider("#my-keen-slider", {
    slidesPerView: 2,
    mode: "free-snap",
    spacing: 15,
    centered: true,
    loop: false
});
