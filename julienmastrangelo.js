/* jQuery */
$(function() {
  $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');
});


/* pure javascript */
var moreText = document.querySelectorAll('.more');
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
}