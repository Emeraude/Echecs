$(document).ready(function(){
    $("#echiquier td").on({
	mouseenter: function(){
	    if ($(this).attr("id").length == 2)
		$(this).css("border-color", "red");
	},
	
	mouseleave: function(){
	    if ($(this).attr("id").length == 2)
		$(this).css("border-color", "black");
	}
    });

    $("#echiquier td").on("click", function(){
	var id = $(this).attr("id");
	if (id.length != 2)
	    return (0);
	var coo = chain_to_coord(id);
	if (isEmpty(coo[1], coo[0]) == false)
	{
	    var moves = movePossibs(coo[1], coo[0]);
	    var i = 0;
	    var move_id;

	    while (i < moves.length)
	    {
		move_id = coord_to_chain(moves[i][0], moves[i][1]);
		if (moves[i][2] == true)
		{
		    $("#" + move_id).css("background-color", "blue");
		    $("#" + move_id).on("click", function(){
			alert("move");
			$(this).css("background-color", "white");
		    });
		}
		else
		{
		    $("#" + move_id).css("background-color", "red");
		    $("#" + move_id).on("click", function(){
			alert("eat");
			$("#" + move_id).css("background-color", "white");
		    });
		}
		i++;
	    }
	}
    });
});