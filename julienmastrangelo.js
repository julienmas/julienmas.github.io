var hiddens = document.getElementByClassName('hidden');
var reads = document.getElementByClassName('read');

for (var i = 0, c = reads.length; i < c; i++)
{
	hiddens[i].style.display = 'none';
	reads[i].addEventListener('click', function(){
		hiddens[i].style.display = 'flex';
	});
}