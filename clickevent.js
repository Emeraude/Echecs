var status = 0; 

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

	if (status == 0)
	{
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
			my_click(move_id, true, "blue");
		    else
			my_click(move_id, false, "red");
		    i++;
		}
	    }
	}
    });
});

function	my_click(move_id, action, color)
{
    status = 1;
    $("#" + move_id).css("background-color", color);
    $("#" + move_id).on("click", function(){
	if (action == true)
	    alert("move");
	else
	    alert("eat");
	$(this).css("background-color", "white");
	status = 0;
    });
}