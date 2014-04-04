/*
pieces is an array that represents all the pieces of the game

initPlayer() will create all the pieces for only one player
initGame() will create all the pieces for all players
isEmpty(x, y) will return a boolean that inform us if the case map[x][y] is empty or not
getPiece(x, y) will return the piece in the case map[x][y], or false if there is no piece
getPieceColor(x, y) will return the color of the piece in the case map[x][y], or false if there is no piece
deletePiece(x, y) will delete the piece in the case map[x][y]
*/

pieces = new Array();
tour = blanc;

function    initPlayer(color)
{
	if (color == noir)
	{
		x = 0;
		pion_x = 1;
	}
	else
	{
		x = 7;
		pion_x = 6;
	}
	for (i = 0; i < 8; ++i)
		pieces.push(new Pion(i, pion_x, color));
	pieces.push(new Tour(0, x, color));
	pieces.push(new Tour(7, x, color));
	pieces.push(new Cavalier(1, x, color));
	pieces.push(new Cavalier(6, x, color));
	pieces.push(new Fou(2, x, color));
	pieces.push(new Fou(5, x, color));
	pieces.push(new Dame(3, x, color));
	pieces.push(new Roi(4, x, color));
}

function    initGame()
{
	initPlayer(blanc);
	initPlayer(noir);
}

function isEmpty(x, y)
{
    if (getPiece(x, y) != false)
        return false;
    return (true);
}

function isEatable(x, y, joueur)
{
	if (!isEmpty(x, y) && (piece = getPiece(x, y)) != false)
	{
		if (piece.joueur != joueur)
			return true;
	}
	return false;
}

function getPiece(x, y)
{
	if (x < 0 || x >= 8 || y < 0 || y >= 8)
		return false;
	for (i = 0; i < pieces.length; i++)
    {
        if (pieces[i].pos_x == x && pieces[i].pos_y == y)
            return (pieces[i]);
    }
    return (false);
}

function getPieceColor(x, y)
{
	piece = getPiece(x, y);
	if (piece == false)
		return false;
	else
		return (piece.joueur);
}

function deletePiece(x, y)
{
	for (i = 0; i < pieces.length; i++)
	{
		if (pieces[i].pos_x == x && pieces[i].pos_y == y)
		{
			pieces[i].alive = false;
			pieces.splice(i, 1);
			return (true);
		}
	}
	return (false);
}

function check_end_turn(pos_x, pos_y, elem)
{
    old_pos_x = elem.pos_x;
    old_pos_y = elem.pos_y;
    elem.pos_x = pos_x;
    elem.pos_y = pos_y;
    if (isInCheck(tour) == false)
    {
        elem.pos_x = old_pos_x;
        elem.pos_y = old_pos_y;
        deletePiece(pos_x, pos_y);
        elem.move(pos_x, pos_y);
        tour = (tour == blanc ? noir : blanc);
        display(tour);
    }
    else if (checkMate(tour) == false)
    {
        elem.pos_x = old_pos_x;
        elem.pos_y = old_pos_y;
        alert("Player"+tour+"has to replay: isInCheck");
        display(tour);
    }
    /*if (checkMate(tour))
    {
        tour = (tour == blanc ? noir : blanc);
        alert("Player"+tour+"wins");
    }*/
}

tabulateHtml();
initGame();
display(blanc);
