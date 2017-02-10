document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#myElement').addEventListener('click', () => {
    document.querySelectorAll('header nav ul').classList.toggle('show_menu');
    document.querySelector('#menu_icon').classList.toggle('close_menu');
    return false;
  });
  var hw = document.querySelectorAll('header').style.width + 50;
  var mw = document.querySelector('#map').style.width;
  var wh = document.querySelector(window).style.height;
  var ww = document.querySelector(window).style.width;
  document.querySelector('#map').style.maxWidth = mw;
  document.querySelector('#map').style.height = wh;

  if (ww > 1100) {
    document.querySelector('#map').style.marginLeft = hw;
  }


  document.querySelectorAll('a').addEventListener('mouseover', () => {

  });


});
