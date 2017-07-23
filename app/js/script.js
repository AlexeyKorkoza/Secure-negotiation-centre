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

function offer() {
  const value = document.getElementById('pount').value;
  if (value.search(/\d{1,3}(,\d{3})*(\,\d{2})?$/) === 0) {
    const obj = {
      'price': value
    }
    document.getElementById('incorrect_input').style.display = 'none';
    console.log(obj);
  } else {
    document.getElementById('incorrect_input').style.display = 'block';
  }
}