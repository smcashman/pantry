

$(document).ready(function(){
$("button#add").click(function(){

	if ($("input#item").val()){
	var itemToAdd = $("input#item").val();
	$("ul.toget").append("<li><i class='fa fa-square-o'></i> "+itemToAdd+"</li>");
	$("input#item").val("").focus();

	$("ul.toget li").click(function(){
		var itemClicked = $(this).text();
		$("ul.got").append("<li><i class='fa fa-check-square-o'></i>"+itemClicked+"<i class='fa fa-trash-o'></i></li>"); 
		$(this).remove();

	$("ul.got li").click(function(){
		var removeItem = $(this).text();
		$(this).remove();

	})
	})
	}

 });


});