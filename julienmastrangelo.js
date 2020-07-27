/* jQuery */
$(function() {
  /*$('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');
  var moreText = $('.more');
  var btnText = $('.btn');

  var openSlider = function() {
		link = $(this);
		var openHeight = link.prev('.entry-content').data('fullHeight') + 'px';
		link.prev('.entry-content').animate({'height': openHeight}, {duration: duration }, easing);
		link.text(lessText).addClass('open').removeClass('closed');
    	link.unbind('click', openSlider);
		link.bind('click', closeSlider);
	}
 
	var closeSlider = function() {
		link = $(this);
    	link.prev('.entry-content').animate({'height': closeHeight}, {duration: duration }, easing);
		link.text(moreText).addClass('closed').removeClass('open');
		link.unbind('click');
		link.bind('click', openSlider);
	}
  
	$('.more-link').bind('click', openSlider);*/

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


  /*$('.btn').click(function() {
    $('.more').toggle(1000);
  });*/


  /*for (var i = 0; i < $('.btn').length; i++)
  {
    var btn  = $('.btn')[i];
    more = $('.more')[i];
    btn.click(function(){
      more.toggle(1000);
    });
  }*/

  /*$(function readMore($i)
  {
    //
    if ($('.btn')[$i].text() === 'Read less')
    {
      $('.btn')[$i].text('Read more');
      $('.more')[$i].hide(1000);
    }
    else
    {
      $('.btn')[$i].text('Read less');
      $('.more')[$i].show(1000);
    }
  })*/
});


/* pure javascript */
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