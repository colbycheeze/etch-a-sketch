/**
 * 
 */

function createGrid (rows, cols) {
	var $grid,
		$row,
		containerWidth,
		containerHeight;
	
	$grid = $('#grid');
	
	//Fill grid
	for (var i = 0; i < rows; i += 1) {
		
		$grid.append('<div class="row"></div>');
		$row = $('#grid .row').last();
		
		for (var j = 0; j < cols; j += 1) {
			
			$row.append('<div class="box"></div>');
		}
	}
	
	//Set up listeners
	$('.box').hover(function(){
		$(this).css( 'background-color', 'red');
	}, function(){
		//Do something later maybe?
	});
	
	//Resize grid to fit container
	containerWidth = $('#container').width();
	containerHeight = $('#container').height();
	
	
	$('.box').css({width: (containerWidth / rows), height: (containerHeight / cols)});
}

$(document).ready( function (){
		
	createGrid(25, 25);
	
	//Clears the grid back to starting color
	$('#resetButton').click(function(){
		$('.box').css('background-color', '#aaa');
	});
	
	//Recreates grid with custom size
	$('#resizeButton').click(function(){
			
		var rows = prompt('How many rows?');
		var cols = prompt('How many cols?');
		
		$('.row').remove();
		
		createGrid(rows, cols);
		
	});
});