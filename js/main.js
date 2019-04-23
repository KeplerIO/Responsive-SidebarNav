//If anymore listenters get written, invoke them here.
function init() {
  hoverListener();
}

function hoverListener() {
  $('.menu-item').on('mouseover', function(e){
    $(this).children().find('span').addClass('menu-icon');
  });

  $('.menu-item').on('mouseleave', function(e){
    $(this).children().find('span').removeClass('menu-icon');
  });
}

init();
console.log($('.menu-item').siblings());

