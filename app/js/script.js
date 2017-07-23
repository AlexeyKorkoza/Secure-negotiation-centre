/* spoiler */
const spoiler = $(".spoiler");
spoiler.click((e) => {
  e.preventDefault();
  spoiler.not(this).siblings('div').animate({
    height: 'hide'
  }, 500);

 const cItem = $(this).siblings('div');
  if (cItem.css('display') == 'none') {
    $(".spoiler").html('<span>HIDE</span><img class="arrow_top" src="img/arrow.png" alt="arrow">');
    cItem.animate({
      height: 'show'
    }, 500);
  } else {
    $(".spoiler").html('<span>SHOW</span><img class="arrow_bottom" src="img/arrow.png" alt="arrow">');
    cItem.animate({
      height: 'hide'
    }, 500);
  }
});