const headerscroll = document.querySelector('.header-content')

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 50) {
    headerscroll.classList.add('header-content-fixed');
  } else {
    headerscroll.classList.remove('header-content-fixed');
  }
}


$(document).ready(function(){
  $('select').formSelect();
});

