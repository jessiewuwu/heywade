var options = [
  {selector: '#activities-list', offset: 300, callback: 'Materialize.showStaggeredList("#activities-list")' },
];
Materialize.scrollFire(options);




$(document).ready(function(){
  $('.slider').slider({
  	full_width: true,
  	interval: 1500,
  	transition: 1000,
  	indicators: false
  });
   $(".button-collapse").sideNav();
   Materialize.fadeInImage('.banner-img');
});

