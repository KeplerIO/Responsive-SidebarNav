//Begin listeners
init();

//Runs functions that aren't invoked/called (listeners)
function init() {
  hoverListener();
}

//Menu item hover styling is handled with a script to
//be consistant across different device views
function hoverListener() {
  $('.menu-item').on('mouseover', function(e){
    $(this).children().find('span').addClass('menu-icon');
  });

  $('.menu-item').on('mouseleave', function(e){
    $(this).children().find('span').removeClass('menu-icon');
  });
}

console.log($('.menu-item').siblings());
