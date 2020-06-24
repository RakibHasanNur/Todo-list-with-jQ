// Check off spicifik todos by clicking

// $('li').click(function(){
// 	$(this).css('color', 'orange')
// 	$(this).css('text-decoration', 'line-through')
// })

// with jQ the shorter style of doing the same thing done above. 
$("ul").on("click", "li", function(){
	// // if it is orange
	// if($(this).css('color')==='rgb(255, 165, 0)'){
	// // turn it black
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration: "none"
	// });
	// } 
	// // and if it is black make it orange
	//  else{
	// 	$(this).css({
	// 	color: "orange",
	// 	textDecoration: "line-through"
	// });
	// };

	// making the full code above with just one line-through
	$(this).toggleClass('completed');
});


// click on X to delete todo
$('ul').on('click', 'span', function(parameter){
	
	//to stop event firing on every contagous layer 
	parameter.stopPropagation();

	// .parant() will remove the parant of 'this', in this case which is li. So .parent() will remove the li of span.
	// $(this).parent().remove();
	$(this).parent().fadeOut(500, function(){
		// the 'this' below represent the parent() that means the li so it doesn't represent the span like the upper 'this'
		$(this).remove();
	});
});

$("input[type='text'").keypress(function(event){
		// to check if everything is ok...
		// console.log('key press');

		// process start
		if(event.which === 13){
			// alert('you hit enter');
			// grabbin new todos text from input
			let todoText = $(this).val();
			// create a new li and add to the ul 
			$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText +'</li>')
			// to clear the input {whenever we tap on enter the input will be cleared}
			$(this).val("");
		}
});

// making the + icon work
$('.fa-plus').click(function(){
	$("input[type='text'").fadeToggle();
});




