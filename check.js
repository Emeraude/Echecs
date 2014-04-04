/*
Here are the following functions used for cheking if there is a check of a checkmate

getKing(color) will return the king informations of the specified color
isInCheck(color) will return a boolean that inform us if the choosen player is in check
checkMate(color) will return a boolean that inform us if the choosen player is in checkmate (is that case, he loose the game)
*/

function getKing(color)
{
	for (i = 0; i < pieces.length; i++)
	{
		if (pieces[i].piece == 'roi' && pieces[i].joueur == color)
			return (pieces[i]);
	}
	return (false);
}

function isInCheck(color)
{
	king = getKing(color);
	for (j = 0; j < pieces.length; ++j)
	{
		if (pieces[j].canMove(king.pos_x, king.pos_y) && pieces[j].joueur != color)
		{
			return (true);
		}
	}
	return (false);
}

function checkMate(color)
{
	/*if (!isInCheck(color))
		return (false);*/
	king = getKing(color);
	casesAround = new Array();
	for (i = king.pos_x - 1; i <= king.pos_x + 1; ++i)
	{
		for(j = king.pos_y - 1; j <= king.pos_y + 1; ++j)
		{
			if (i >= 0 && i < 8 && j >= 0 && j < 8)
				casesAround.push(new Array(i, j));
		}
	}
	return casesAround;
}