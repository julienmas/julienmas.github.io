/* jQuery */
$(function() {
  var readMore = function() {
    btn = $(this);
    btn.prev('.more').show(1000);
    btn.text('Read Less');
    btn.unbind('click');
    btn.bind('click', readLess);
  }

  var readLess = function() {
    btn = $(this);
    btn.prev('.more').hide(1000);
    btn.text('Read More');
    btn.unbind('click');
    btn.bind('click', readMore);
  }

  $('.btn').bind('click', readMore);
});


/* pure javascript */
/* old code */
/*var moreText = document.querySelectorAll('.more');
var btnText = document.querySelectorAll('.btn');

function readMore(i)
{
  if (moreText[i].style.display === 'inline')
  {
    btnText[i].innerHTML = 'Read more';
    moreText[i].style.display = 'none';
  }
  else
  {
    btnText[i].innerHTML = 'Read less';
    moreText[i].style.display = 'inline';
  }
}*/
