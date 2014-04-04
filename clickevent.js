/*
** variables globales:
**	moves:	tableau 2d des possibilites d'action de la piece selectionnee
**		sous-tableau contient les coordonnees de la case et l'action concernee (x, y, boo)
**		boo: true, l'action est un deplacement, false, l'action est manger un pion adverse
**
**	selectedPieceCoo: tableau contenant les coordonnees de la piece selectionnee (x, y)
**
** fonctions:
**	my_click_is_move(id): prend un id et retourne -1 si la case n'est pas une action possible (move, eat)
**			      retourne 1 si c'est un move, 2 si c'est un eat
**	my_moves_op(action): prend un booleen, si action == true, affiche les possibilites,
**			     si action == false, les cache
**	my_is_playable_cell(id): prend un id, retourne true si la case est une case jouable 
**				 (qui n'est pas une coordonnee), sinon false
**
*/

var moves = new Array();
var selectedPieceCoo = new Array();

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
	var moveType = 0;
	var coo;

	if (my_is_playable_cell(id) == false)
	    return (-1);
	coo = chain_to_coord(id);
	moveType = my_click_is_move(id);
	if (isEmpty(coo[0], coo[1]) == true)
	{
	    var piece = getPiece(selectedPieceCoo[0], selectedPieceCoo[1]);

	    my_moves_op(false);
	    if (moveType == 1) // move
		check_end_turn(coo[0], coo[1], piece);
	    moves.length = 0;
	}
	else
	{
	    if (moveType == 2) // eat
	    {
		var piece = getPiece(selectedPieceCoo[0], selectedPieceCoo[1]);

		check_end_turn(coo[0], coo[1], piece);
		moves.length = 0;
	    }
	    else
	    {
		my_moves_op(false);
		moves = movePossibs(coo[0], coo[1]); // have to check return value
		selectedPieceCoo = coo;
		my_moves_op(true);
	    }
	}
    });
});

function	my_click_is_move(id)
{
    var idCoo = chain_to_coord(id);
    var i = 0;

    while (i < moves.length)
    {
	if (idCoo[0] == moves[i][0] && idCoo[1] == moves[i][1])
	{
	    if (moves[i][2] == true)
		return (1);
	    else
		return (2);
	}
	i++;
    }
    return (-1);
}

function	my_moves_op(action)
{
    var i = 0;
    var id;

    while (i < moves.length)
    {
	id = coord_to_chain(moves[i][0], moves[i][1]);
	if (action == true)
	{
	    if (moves[i][2] == true)
		$("#" + id).css("background-image", "url(img/blue.png)");
	    else
		$("#" + id).css("background-image", "url(img/red.png)");
	}
	else
	    $("#" + id).css("background-image", "none");
	i++;
    }
}

function	my_is_playable_cell(id)
{
    if (id.length == 2)
	return (true);
    return (false);
}
