 $("ul").on("click", "li", function(){

	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css("color", "black");
		$(this).css("text-decoration","none");
	}
	else{
	$(this).css({                        //creating object
		color: "grey",
		textDecoration: "line-through"
	});
}
	//else we could just write $(this).toggleClass("completed");

});
 //clik on x to del
 $("ul").on("click", "span", function(event){
 	$(this).parent().fadeOut(500,function(){  //$(this) is the span
 		$(this).remove();					//$(this) is the li, since we used parent()
 	})
 	event.stopPropagation();

 });
 $("input[type='text']").keypress(function(event){
 	if(event.which===13){                 //event code for enter key
 		var todoText= $(this).val();
 		$(this).val("");
 		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> "+todoText+"</li>");
 	}
 });

 $(".fa-plus").click(function(){
 	$("input[type='text']").fadeToggle();
 });
