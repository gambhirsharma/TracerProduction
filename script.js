$(document).ready(function(){

  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Instagram", "Vlog", "Film", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["Instagram", "Vlog", "Film", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});


function toggle(){
    let horizontal = document.getElementById('horizontal')
    let vertical = document.getElementById('vertical')

    // vertical.style.display = "flex"
    // horizontal.style. = "none";
    let checkbox = document.getElementById('price-toggle');
    let pan_input = document.getElementById('pan-input');
    if (checkbox.checked) {
       vertical.style.display = "flex";
       horizontal.style.display = "none"
    } else {
       vertical.style.display = "none";
       horizontal.style.display = "flex"
    }
 }


 function moreBtn() {
   
    var moreText = document.getElementById("video-include-more");
    var btnText = document.getElementById("moreBtn");
  
    if (moreText.style.display === "none") {
      btnText.innerHTML = "Less"; 
      moreText.style.display = "inline";
    } else {
      btnText.innerHTML = "More"; 
      moreText.style.display = "none";
    }
  }


