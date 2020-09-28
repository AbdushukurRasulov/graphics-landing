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
  $('.gallary-scroll').removeClass('justify-content-center')

});

var slider = new KeenSlider("#my-keen-slider", {
    slidesPerView: 2,
    mode: "free-snap",
    spacing: 15,
    centered: true,
    loop: false
});



const accordion = document.querySelector('.faq-content');
const items  = accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.faq-question');

//Lets figure out what item to click
function toggleAccordion() {
  const thisItem = this.parentNode;
  
    items.forEach(item => {
      if (thisItem == item) {
        thisItem.classList.toggle('open');
        return;
    }
    item.classList.remove('open');
  });
}

questions.forEach(question => question.addEventListener('click', toggleAccordion));