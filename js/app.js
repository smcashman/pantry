

$(document).ready(function(){
$("button#add").click(function(){

	if ($("input#item").val()){
	var itemToAdd = $("input#item").val();
	$("ul.toget").append("<li><i class='fa fa-square-o'></i> "+itemToAdd+"</li>");
	$("input#item").val("").focus();

	$(".toget li").click(function(){
		var itemClicked = $(this).text();
		$(".got").append("<li><i id='box' class='fa fa-check-square-o'></i>"+itemClicked+" <i id='trash' class='fa fa-trash-o'></i></li>");
		$(this).remove();

	$("#trash").click(function(){
		var removeItem = $(this).text();
		$(".got li").remove();

	$("i #box").click(function(){
		var returnItem = $(this).text();
		$("ul.toget").append("<li><i class='fa fa-square-o'></i> "+returnItem+"</li>");
		$(this).remove();
	})

	})
	})
	}

 });


});