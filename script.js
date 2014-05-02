$(document).ready(function(){
	var todoCount = 0;

	$('.button-block').on('click', function(){
		$('.add-content-event').hide();
		$('.event-button').show();
		$('.task-add-button').show();
  		$(this).toggleClass('canceled');
  		$('.add-content').slideToggle('slow');
	});

	$('.event-button').on('click', function(){
		$('.add-content-event').slideDown('slow');
		$(this).hide();
		$('.task-add-button').hide();
	});

	$('.task-add-button').on('click', function(){
  		$('.button-block').toggleClass('canceled');
  		$('.added-todo').slideToggle(200);
  		$('.add-content').slideToggle('slow');
	});

	$('.event-add-button').on('click', function(){
  		$('.button-block').toggleClass('canceled');
  		$('.add-content').slideToggle('slow');
  		$('.added-event').slideToggle('slow');
  		$('.fourth').toggleClass('move-event');
	});

	$('.event').on('click', function(){
		var cName = $(this).attr('class').substring(6);
		var editDiv = cName + "-edit";
		$('#display-overlay').css('display', 'block');
		$('.' + editDiv).slideDown(500);
	});

	$('.edit-button').on('click', function(){
		$(this).parent().parent().css('display', 'none');
		$('#display-overlay').css('display', 'none');
	});

	$('.delete-button').on('click', function(){
		var cName = $(this).parent().parent().attr('class').substring(19);
		var cLength = cName.length;
		var editDiv = cName.substring(0, cLength - 5);
		$('.' + editDiv).hide();
		$(this).parent().parent().css('display', 'none');
		$('#display-overlay').css('display', 'none');
	});

	$( ".todo" ).resizable({handles: "n, s"}, {maxHeight: 350}, {minHeight: 100});

	$( ".todo-list img" ).on('click', function(){
		if ($(this).attr('src') == 'images/list-empty.png'){
			todoCount ++;
			$(this).attr('src', 'images/list-full.png');
		}
		else {
			todoCount --;
			$(this).attr('src', 'images/list-empty.png');
		}
		$(this).parent().toggleClass('full');
		$('.todo').css('background', '#767676 url(images/' + todoCount +'.png) no-repeat center');
	});

	$('.check-this').on('click', function(){
		$('.check-this img').attr({src:'images/list-full.png'});
		$(this).toggleClass('full');
		$('.todo').toggleClass('todo-after');
	});

	$( ".explore" ).click(function() {
		$( ".explore" ).hide();
  		$('.stepone').show("slide", { direction: "left" }, 500);
	});

	$('.next').on('click', function(){
		$(this).parent().hide("slide", { direction: "right" }, 500);
  		$(this).parent().parent().next('.walkthrough').delay(1).show("slide", { direction: "left" }, 500);
  	});

  	$('.back-to-explore').on('click', function(){
		$(this).parent().hide("slide", { direction: "right" }, 500);
  		$('.explore').show(100);
  	});

  	$('.calendar-icon').on('click', function(){
  		$('.calendar-view').toggle();
  		$('.calendar-icon').toggle();
  		$('.today-icon').toggle();
  	});

  	$('.today-icon').on('click', function(){
  		$('.calendar-view').toggle();
  		$('.calendar-icon').toggle();
  		$('.today-icon').toggle();
  	});
});