/**
 * 
 */

function createGrid (rows, cols) {
	var $container,
		$row,
		containerWidth,
		containerHeight;
	
	$('body').append('<div id="container"></div>');
	
	$container = $('#container');
	
	for (var i = 0; i < rows; i += 1) {
		
		$container.append('<div class="row"></div>');
		$row = $('#container .row').last();
		
		for (var j = 0; j < cols; j += 1) {
			//$('#container .row').last().append('<div class="box">' + j + '</div>');
			$row.append('<div class="box"></div>');
		}
	}
	
	containerWidth = $('#container').width();
	containerHeight = $('#container').height();
	
	
	$('.box').css({width: (containerWidth / rows), height: (containerHeight / cols)});
}

$(document).ready( function (){
	
	var rows = prompt('How many rows?');
	var cols = prompt('How many cols?');
	
	createGrid(rows, cols);
	
	$('.box').hover(function(){
		$(this).css( 'background-color', 'red');
	}, function(){
		//Do something later maybe?
	});
	
	$('#resetButton').click(function(){
		$('.box').css('background-color', '#aaa');
	});
});