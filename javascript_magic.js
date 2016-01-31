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




// var auto;
// if (current.id==1) { //this is the only slide I want lasting 10 seconds.
//     auto=setTimeout(function(){
//        next(); 
//     },10*1000); //10 seconds for MAIN slide
// } else { // all other slides should interval every 4 seconds.
//     auto=setTimeout(function(){
//        next();
//     },4*1000);//4 seconds each other slide.
// }