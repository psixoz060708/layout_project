$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    responsive:{
      0:{
        items:1,
        dots:true,
        nav:false
      },
      767:{
        items:2,
        dots:true,
        nav:false
      },
      1200:{
        items:3,
        dots:false
      }
    }
  });
});