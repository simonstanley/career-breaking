function init(){if($(window).resize(function(){$(window).width()<size_threshold?$("html").hasClass("small")||($("html").addClass("small"),$(document).trigger("small-screen")):$("html").hasClass("small")&&($("html").removeClass("small"),$(document).trigger("normal-screen"))}),$(window).width()<size_threshold){$("html").addClass("small"),$(document).trigger("small-screen");var a=window.location.href,b=a.split("#");if(2==b.length){var c=b[1];window.location.hash="#",window.location.hash="#"+c}}}var size_threshold=730;$.fn.rotate=function(a,b,c,d,e){return this.each(function(){var f=$(this);$({deg:a}).animate({deg:b},{duration:c,easing:d,step:function(a){f.css({"-moz-transform":"rotate("+a+"deg)","-webkit-transform":"rotate("+a+"deg)","-o-transform":"rotate("+a+"deg)","-ms-transform":"rotate("+a+"deg)",transform:"rotate("+a+"deg)"})},complete:e||$.noop})})},$(document).ready(function(){init()});
