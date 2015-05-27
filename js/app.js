$(document).ready(function(){


console.log(' Set Variables');
var submissions = 0;
var check = '<span class="check"> </span>';
var del = '<span  class="delete"> </span>';


  function getItem() {
        $('#item').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }

    getItem();



function postItem() {
	console.log(postItem);
	var item = $('#item').val();
	var work = '<p class="list-item no-strikethrough">' + del + item + check + '</p>';

	$('.shopping-list').prepend(work);
	$('#item').val('');
	$('.shopping-list p:first-child').css("opacity" ,'0' ).css("margin-top" , '-20px')

	.animate( {opacity : '1'} ,
				{queue: true , duration: 'slow'}

				)
	.animate(

			{marginTop: '0px'},
			{queue: false , duration: 'slow'}

		);

}

function crossOff() {

	$('.check').toggle(function(){

		$(this).closest('p').addClass("strikethrough");

	}, function(){

		$(this).closest('p').removeClass("active");
	});
}

});


/* Clear Items  */

$(document).on("click" , "#reset" , function(){

	$('.shopping-list').empty();
	submissions = 0;

});

/* Delete Items */

$(document).on('click', ".delete" , function(){

	$(this).closest('p').fadeOut(300);

});


/* check off items */ 

$(document).on('click', '.check' , function(){

	if (!$(this).closest('p').hasClass('strikethrough')) {

		console.log('working');
		$(this).closest('p').addClass("strikethrough");

	} else {

			console.log('still owrking');
			$(this).closest('p').removeClass('strikethrough')
	}

});