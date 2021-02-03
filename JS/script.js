// $(document).ready(function(){
//
//   $(window).scroll(function(){
//     if($(window).scrollTop()){
//       $("nav").addClass("black");
//     }else{
//       $("nav").removeClass("black");
//     }
//   });
// });

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
