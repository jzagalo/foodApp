$(function(){

var rel = $('body[rel]').attr('rel');

$('#menu a:eq('+ rel +') , #m_menu > a:eq('+rel+')').addClass('active');

		
$('#m_btn').click(function(e){

	e.preventDefault();
	
	$('#m_menu').sidebar('toggle');

});

$('.pop').popup();

$('#centered').on('click', function(event){
	event.preventDefault();
	$('.image.pop').transition({
		animation: 'tada',
		duration: '2000ms',
		complete: function(){
			console.log('done')
		}
	});
	//$('.image.pop').transition('tada', '2000ms').transition('pulse');

});

		
	
});