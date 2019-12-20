
//     console.log('fire');

// var menuList = document.querySelectorAll('#menu-list button');

// console.log(menuList);

// var i;

// for (i=0; i < menuList.length; i++){

//     console.log(menuList[i]);
// }

// console.log(menuList[0]);

// var main = document.querySelector('.main');

// var about = document.querySelector('.about');
// var professional = document.querySelector('.professional');
// var funStuff = document.querySelector('.fun-stuff');
// var blog = document.querySelector('.blog');
// var contact = document.querySelector('.contact');

// function toAbout(){
//     var main = document.querySelector('.main');

//     var about = document.querySelector('.about');

//     about.className += " slide-0";
//     main.className += " slide-plus-100";
// };
// function toProf(){
//     var main = document.querySelector('.main');
//     var professional = document.querySelector('.professional');
//     var about = document.querySelector('.about');
//     about.className += " slide-plus-100";
//     main.className += " slide-plus-100";
//     professional.className += " slide-0";


// };
// function toFun(){
//     var main = document.querySelector('.main');
// var funStuff = document.querySelector('.fun-stuff');
// funStuff.className += " slide-0";
// main.className += " slide-minus-100";

// };
// function toBlog(){
//     var funStuff = document.querySelector('.fun-stuff');
//     var main = document.querySelector('.main');
//     var blog = document.querySelector('.blog');
//     main.className += " slide-minus-200";
//     funStuff.className += " slide-minus-100";
//     blog.className += " slide-0";
// };
// function toContact(){
//     var funStuff = document.querySelector('.fun-stuff');
//     var main = document.querySelector('.main');
//     var blog = document.querySelector('.blog');
//     var contact = document.querySelector('.contact');
//     main.className += " slide-minus-200";
//     funStuff.className += " slide-minus-100";
//     blog.className += " slide-0";
//     contact.className += " slide-minus-300"
// };

// function backToHome(){
//     document.querySelectorAll('back-button');
// }

jQuery(document).ready(function($) {
  // $(function() {
  //   $("button").each(function() {
  //     var $parent = $(this).closest("section"),
  //            same = $parent.hasClass($(this).attr("class"));
  //     $(this).toggle(!same);
  //   });


  // });
  var fixed = document.querySelector('.slide-container');

  fixed.addEventListener('touchmove', function(e) {
  
          e.preventDefault();
  
  }, false);

  
  var navArrow = document.querySelector('#nav-arrow span')
  function arrowPulse(){

    navArrow.classList.toggle('expand');
  }

  setInterval( arrowPulse , 1000 )

//   var nav = document.querySelector('.nav');
//   var toggle = document.querySelector('.hamburger');
//   var navItems = nav.querySelectorAll('.nav__link');
  
//   toggle.addEventListener('click', toggleNav);

// function toggleNav() {
  
//   // Show Nav
//   nav.classList.toggle('active');
  
//   // Transform Hamburger into 'X'
//   toggle.classList.toggle('active');
  
//   // Show Nav Items
//   for (var i = 0, ii = navItems.length; i < ii; i++) {
//     navItems[i].classList.toggle('active');
//   }
// }
$(document).delegate('.open', 'click', function(event){
  $(this).addClass('oppenned');
  event.stopPropagation();
  $('#nav-arrow span').addClass('hide');


})
$(document).delegate('body', 'click', function(event) {
  $('.open').removeClass('oppenned');
})
$(document).delegate('.cls', 'click', function(event){
  $('.open').removeClass('oppenned');
  event.stopPropagation();
});
// $(".nav_link").on("click", function() {
//   var valueClicked = $(this).data("home"); // Get the data-value clicked

//   $(".nav_link").each(function() { // Loop through all elements of the class 'nav-link'
//      var v = $(this).data("home");
//      if (v == valueClicked) {
//       console.log(this)
//          $(this).removeClass("nav-visibility"); 
      
//      } else {
//          $(this).addClass("nav-visibility"); 
//          console.log('add')
//      }
//     })

// })

let hover = document.querySelectorAll(".center-nav a");
for (var i=0; i< hover.length; i++){
  hover[i].addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    event.target.style.color = "purple";
    $(this).addClass("hover");
    // reset the color after a short delay
    // setTimeout(function() {
    //   event.target.style.color = "";
    // }, 500);
  }, false);
  
  hover[i].addEventListener("mouseleave", function( event ) {   
    // highlight the mouseenter target
    event.target.style.color = "";
    $(this).removeClass("hover");
  console.log('leave')
    // reset the color after a short delay
    // setTimeout(function() {
    //   event.target.style.color = "";
    // }, 500);
  }, false);
  


}


});



// const menuClass = document.querySelector('.menu-total');
// const navTag = document.querySelector('nav');
// const hamburgerX = document.querySelector('.hamburger');
function slideTo(slideId) {
    const slide = document.getElementById(slideId);


    slide.scrollIntoView({
      behavior: 'smooth'
    })


    // setTimeout(function(){

    //   if ('"'+slide.id+'"'==='"'+ "slide-2" +'"'){
    //     menuClass.style.opacity = "0";
    //   } else{
    //     menuClass.style.opacity = "1";
    //     //added so can delay if person leaves the menu too fast
    //     navTag.classList.add('mouseleave');
    //   }
    //   navTag.classList.remove('active');
    // hamburgerX.classList.remove('active');
    // },500);
 
    // let nonHome = document.querySelectorAll('.slide-container section');
    // let nonHomeID = document.getElementById('slide-2');


    // var i;
    // setTimeout(function(){
    //   for (i=0; i < nonHome.length; i++ ){
    //     if (nonHome[i].id != nonHomeID){
    //       nonHome[i].classList.add("nav-visibility");
    //       console.log('add')
    //     } else{
    //       nonHomeID.classList.remove("nav-visibility");
    //         console.log('rem')
    //     }
  
    //   }
    // }, 1000)

    // let nonHome = document.querySelectorAll(".slide-container section");

  
    // var i;
    // setTimeout(function() {
    //   for (i = 0; i < nonHome.length; i++) {
    //     if (nonHome[i].id != nonHome) {
    //       nonHome[2].classList.add("nav-visibility");
    //       console.log("add");
    //     } else {
    //       nonHome[i].classList.remove("nav-visibility");
    //       console.log("rem");
    //     }
    //   }
    // }, 1000);

  }
  // const mouseLeave = document.querySelector('.mouseleave');
 
  // navTag.addEventListener('mouseleave', e => {
  //   // mouseLeave.style.opacity = "0";
  //   setTimeout(function() {
  //   navTag.classList.remove("active");
  //   hamburgerX.classList.remove("active");
  //   }, 500);
  // });

  function init() {
    const landing = document.getElementById('slide-2');
    landing.scrollIntoView();
    
  }
  
  
  document.addEventListener('DOMContentLoaded', init);
