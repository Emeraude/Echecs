function	my_no_check(threats)
{ 
    var		alt = new Array();
    var		king = getKing(tour);
    var		piece;
    var		i = 0;

    while (i < threats.length)
    {
	piece = getPiece(threats[i][0], threats[i][1]);
	if (piece.piece == "tour")
	    alt = my_tour_alt(alt, piece, king);
	i++;
    }
}

function	my_line_alt(alt, piece, king)
{
    var		pieceMoves = movePossibs(piece.pos_x, piece.pos_y);
    var		axe = 0;
    var		i = 0;

    if (piece.pos_y == king.pos_y)
	axe = 1;
    while (i < pieceMoves.length)
    {
	if (axe == 0)
	    if (pieceMoves[axe] == king.pos_x && pieceMoves[2] == true)
		alt.push(pieceMoves[i]);
	if (axe == 1)
	    if (pieceMoves[axe] == king.pos_y && pieceMoves[2] == true)
		alt.push(pieceMoves[i]);
	i++;
    }
    return (alt);
}

function	my_queen_alt(alt, queen, king)
{
    alt = my_line_alt(alt, queen, king);
    alt = my_diag_alt(alt, queen, king);
    return (alt);
}