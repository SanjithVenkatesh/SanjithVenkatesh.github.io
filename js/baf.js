/* baf.js: -*- JS -*-  Overrides for the template.*/

$(function () {
  'use strict'

    function init_carousel() {
        var H = +($(window).height() /* -height here  */); // or $('.carousel-inner') as you want ...
        $('.carousel-inner').css('height', H + 'px');
    }
    window.onload = init_carousel;
    init_carousel();
  /*var baf_resize = function() {
    var bumper = document.getElementById("bumper");
    var height = window.innerHeight;
    bumper.style.height = height + "px";
  };
  baf_resize();
  document.body.onresize = baf_resize;*/
});

