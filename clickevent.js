var status = 0;
var moves = new Array();
var coo = new Array(); // coo de la case cliquee en premier

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

	if (status == 1 && my_click_is_move(id) == false)
	{
	    status = 0;
	    my_dft_bckgrnd_by_id(moves);
	}
	if (status == 0)
	{
	    if (id.length != 2)
		return (0);
	    coo = chain_to_coord(id);
	    if (isEmpty(coo[1], coo[0]) == false)
	    {
		var i = 0;
		var move_id;

		moves = movePossibs(coo[1], coo[0]); //check null
		while (i < moves.length)
		{
		    move_id = coord_to_chain(moves[i][0], moves[i][1]);
		    if (moves[i][2] == true)
			my_click(move_id, true);
		    else
			my_click(move_id, false);
		    i++;
		}
		turnId = id;
	    }
	}
    });
});

function	my_click(move_id, action)
{
    var piece = getPiece(coo[1], coo[0]);
    var tabCooFinal;
    var bckgrnd;

    if (action == true)
	bckgrnd = "img/move.jpg";
    else
	bckgrnd = "img/eat.jpg";
    status = 1;
    $("#" + move_id).css("background-image", "url(" + bckgrnd + ")");
    $("#" + move_id).on("click", function(){
	tabCooFinal = chain_to_coord(move_id);
	if (action == true)
	    piece.move(tabCooFinal[1], tabCooFinal[0]);
	else
	    alert("eat");
	$(this).css("background-image", "none");
	status = 0;
	display(blanc); ////
    });
}

function	my_click_is_move(id)
{
    var idCoo = chain_to_coord(id);
    var i = 0;

    while (i < moves.length)
    {
	if (idCoo[0] == moves[0] && idCoo[1] == moves[1])
	    return (true);
	i++;
    }
    return (false);
}

function	my_dft_bckgrnd_by_id(ids)
{
    var i = 0;
    var idStr;

    while (i < ids.length)
    {
	idStr = coord_to_chain(ids[i][0], ids[i][1]);
	$("#" + idStr).css("background-image", "none");
//	$("#" + idStr).unbind("click"); //////
	i++;
    }
}