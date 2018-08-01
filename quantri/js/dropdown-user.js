$(document).ready(function() {
	$('#btnclick').click(function() {
		if($(".drop-user:visible").length==0){
			$('.drop-user').show();
		}else{
			$('.drop-user').hide();
		}
	});
});