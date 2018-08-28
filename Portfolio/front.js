$(document).ready(function () {
$(function(){
	$('li').hide();
})
$('#burger').on('click', function(){
	$('li').toggle();
});
});