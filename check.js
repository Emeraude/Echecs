/*
Here are the following functions used for cheking if there is a check of a checkmate

getKing(color) will return the king informations of the specified color
isInCheck(color) will an array which contain all the pieces that checked the king, or false if there is no
checkMate(color) will return a boolean that inform us if the choosen player is in checkmate (is that case, he loose the game)
*/

function initCheck(color)
{
	pieces = [];

	pieces.push(new Tour(0, 5, blanc));
	pieces.push(new Fou(1, 1, blanc));
	pieces.push(new Cavalier(5, 2, noir));
	pieces.push(new Roi(5, 5, noir));
	pieces.push(new Pion(2, 5, noir));

	tour = noir;

	if (color == undefined)
		display(blanc);
	else
		display(color);
}

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
	tab = new Array();
	for (j = 0; j < pieces.length; ++j)
	{
		if (pieces[j].canMove(king.pos_x, king.pos_y) && pieces[j].joueur != color)
		{
			tab.push(new Array(pieces[j].pos_x, pieces[j].pos_y));
		}
	}
	if (tab.length < 1)
		return (false);
	else
		return tab;
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