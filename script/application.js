var row=1,col=1;

$(document).ready(function(){
	$('input').hide();
	init();
	draw();

	$('#restart').click(function(){
		$('table').empty();
		init();
		$('table').fadeIn('slow');
		draw();
	});

});

var init = function(){
	//take value for row and columns:
	row=21;col=21;
	while(row>15){
		row = prompt("enter value for row less than 15");
	}
	while(col>15){
		col = prompt("enter value for col less than 15");
	}
	$('input').fadeIn('slow');
	//table creator:
	var string="<tr>";
	for(var i=0;i<row;i++){
		string+="<td></td>";
	}
	string+="</tr>"
	for(var i=0;i<col;++i){
		$('table').append(string);
	}
	//end
}

var draw = function(){
	//change css color property when mouse enters:
	$('td').mouseenter(function(){
		$(this).css("background-color", "blue");
	});

	$('#reset').click(function(){
		$('tr').each(function(){
			$('td').each(function(){
				$('td').css("background-color","");
			});
		});
	});
}
