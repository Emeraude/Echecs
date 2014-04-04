/*
Here are the following functions used for cheking if there is a check of a checkmate

initCheck([color]) will create a new map in a check situation (developpers only)
getKing(color) will return the king informations of the specified color
isInCheck(color) will an array which contain all the pieces that checked the king, or false if there is no
*/

function initCheck(color)
{
	pieces = [];

	pieces.push(new Tour(0, 5, noir));
	pieces.push(new Fou(1, 1, noir));
	pieces.push(new Cavalier(5, 2, blanc));
	pieces.push(new Roi(5, 5, blanc));
	pieces.push(new Pion(2, 5, blanc));

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