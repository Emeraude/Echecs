/*
**
** my_no_check: prend en parametre un tableau 2d des coordonnees des pieces mettant en echec
**		le roi et renvoie un tableau 2d des coordonnees qu'il faut bloquer pour
**		proteger le roi et ne plus etre en echec
** my_line_alt: verifie si le roi est en echec sur les axes horizontaux/verticaux et 
**		rajoute au tableau alt les coordonnees a bloquer sur ces axes
** my_diag_alt:	pareil que my_line_alt mais sur les diagonales
** my_queen_alt: my_line_alt et my_diag_alt
**
*/

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
	    alt = my_line_alt(alt, piece, king);
	else if (piece.piece == "fou")
	    alt = my_diag_alt(alt, piece, king);
	else if (piece.piece == "dame")
	    alt = my_queen_alt(alt, piece, king);
	i++;
    }
    return (alt);
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
	    if ((pieceMoves[i][axe] == king.pos_x && pieceMoves[i][2] == true) &&
		((pieceMoves[i][1] > piece.pos_y && pieceMoves[i][1] < king.pos_y) ||
		 (pieceMoves[i][1] < piece.pos_y && pieceMoves[i][1] > king.pos_y)))
		alt.push(pieceMoves[i]);
	if (axe == 1)
	    if ((pieceMoves[i][axe] == king.pos_y && pieceMoves[i][2] == true) &&
		((pieceMoves[i][0] > piece.pos_x && pieceMoves[i][0] < king.pos_x) ||
		 (pieceMoves[i][0] < piece.pos_x && pieceMoves[i][0] > king.pos_x)))
		alt.push(pieceMoves[i]);
	i++;
    }
    return (alt);
}

function    my_diag_alt(alt, piece, king)
{
    var possibs = new Array();

    possibs = movePossibs(piece.pos_x, piece.pos_y);
    if (piece.pos_x < king.pos_x)
    {
        if (piece.pos_y < king.pos_y)
        {
            for (i = 0; i < possibs.length; ++i)
                if (possibs[i][0] > piece.pos_x && possibs[i][0] < king.pos_x && 
		    possibs[i][1] > piece.pos_y && possibs[i][1] < king.pos_y)
                    alt.push(possibs[i]);
        }
        else
        {
            for (i = 0; i < possibs.length; ++i)
                if (possibs[i][0] > piece.pos_x && possibs[i][0] < king.pos_x && 
		    possibs[i][1] < piece.pos_y && possibs[i][1] > king.pos_y)
                    alt.push(possibs[i]);
        }
    }
    else
    {
        if (piece.pos_y < king.pos_y)
        {
            for (i = 0; i < possibs.length; ++i)
                if (possibs[i][0] < piece.pos_x && possibs[i][0] > king.pos_x && 
		    possibs[i][1] > piece.pos_y && possibs[i][1] < king.pos_y)
                    alt.push(possibs[i]);
        }
        else
        {
            for (i = 0; i < possibs.length; ++i)
                if (possibs[i][0] < piece.pos_x && possibs[i][0] > king.pos_x && 
		    possibs[i][1] < piece.pos_y && possibs[i][1] > king.pos_y)
                    alt.push(possibs[i]);
        }
    }
    return (alt);
}


function	my_queen_alt(alt, queen, king)
{
    alt = my_line_alt(alt, queen, king);
    alt = my_diag_alt(alt, queen, king);
    return (alt);
}