/*
Here are the following functions used for cheking if there is a check of a checkmate

initCheck() will create a new map in a check situation (developpers only)
getKing(color) will return the king informations of the specified color
isInCheck() will an array which contain all the pieces that checked the king, or false if there is no
canWeEatThatSucker(x, y) will return an array which contains coordonates of pieces which can eat the piece (located in (x,y)) threating the king
kingEscape() will return true if the king can move without being check, false if not
*/

function initCheck()
{
	pieces = [];

	pieces.push(new Tour(0, 5, noir));
	pieces.push(new Fou(1, 1, noir));
	pieces.push(new Cavalier(5, 2, blanc));
	pieces.push(new Roi(5, 5, blanc));
	pieces.push(new Pion(2, 5, blanc));
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

function isInCheck()
{
	king = getKing(tour);
	tab = new Array();
	for (j = 0; j < pieces.length; ++j)
	{
		if (pieces[j].joueur != tour && pieces[j].canMove(king.pos_x, king.pos_y))
		{
			tab.push(new Array(pieces[j].pos_x, pieces[j].pos_y));
		}
	}
	if (tab.length < 1)
		return (false);
	else
		return tab;
}

function canBlockCheck(dangerousPositions, color)
{
	oldPieces = pieces.slice(0);
	tab = new Array();

	for (j = 0; j < dangerousPositions.length; ++j)
	{
		tmpPos = dangerousPositions[j];
		pieces = oldPieces.slice(0);
		for (k = 0; k < pieces.length; ++k)
		{
			if (pieces[k].joueur != color || pieces[k].piece == 'roi')
				continue ;
			console.log(pieces[k].canMove(tmpPos[0], tmpPos[1]))
			if (pieces[k].canMove(tmpPos[0], tmpPos[1]))
			{
				console.log('['+tmpPos[0]+';'+tmpPos[1]+'] '+pieces[k].piece);
				console.log(pieces[k]);
				old_x = pieces[k].pos_x;
				old_y = pieces[k].pos_y;
				pieces[k].pos_x = tmpPos[0];
				pieces[k].pos_y = tmpPos[1];
				console.log(pieces[k]);
				if (isInCheck(color) == false)
				{
					tab.push(tmpPos);
					console.log('there is a solution');
				}
				pieces[k].pos_x = old_x;
				pieces[k].pos_y = old_y;
				console.log(pieces[k]);
			}
		}
	}
	pieces = oldPieces.slice(0);
	return tab;
}

function canWeEatThatSucker(x, y)
{
	var sucker = getPiece(x, y);
	var whoCan = new Array();

	for (i in pieces)
	{
		if (pieces[i].joueur == tour && pieces[i].alive == true)
		{
			tmp_x = pieces[i].pos_x;
			tmp_y = pieces[i].pos_y;
			possibs = movePossibs(tmp_x, tmp_y);
			for (key in possibs)
			{
				if (possibs[key][0] == x && possibs[key][1] == y)
					whoCan.push(Array(tmp_x, tmp_y));
			}
		}
	}
	return whoCan;
}

function kingEscape()
{
	king = getKing(tour);
	x = king.pox_x;
	y = king.pos_y;

	possibs = movePossibs(king.pos_x, king.pos_y);
	for (i in possibs)
	{
		king.pos_x = possibs[i][0];
		king.pos_y = possibs[i][1];
		if (isInCheck())
		{
			king.pos_x = x;
			king.pos_y = y;
			return true;
		}
	}
	king.pos_x = x;
	king.pos_y = y;
	return false;
}