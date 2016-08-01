

$(document).ready(function(){
$("button#add").click(function(){

	if ($("input#item").val()){
	var itemToAdd = $("input#item").val();
	$("ul.toget").append("<li><i id='uncheck' class='fa fa-square-o'></i> "+itemToAdd+" <i id='trash' class='fa fa-trash-o'></i></li>");
	$("input#item").val("").focus();
	}

	$(".toget li").click(function() {
	$(this).toggleClass("clicked");
	});

	$("#trash").click(function() {
	$(".toget li").remove();

	})

	
	


	

 });


});