/*
 * The movePossibs function take a position, the position clicked before.
 * It detect which piece is at this position, and retrun an array
 * which contain an orther array made of :
 * (posX, posY, bool) correponding to :
 * the X and Y position on the map (tab) where the piece can move
 * the third parameter true or false indicate 
 * true if it is an empty cell or
 * false if an oponnent's piece is present which you can eat
 */

function movePossibs(x, y)
{
	var pion;
	var type;
	var possibs = new Array();

	pion = getpiece(x, y);
	type = pion.piece;
	switch type
	{
		case 'pion':
			possibs = calc_pion_possibs(x, y, pion); // done
			break;
		case 'cavalier':
			possibs = calc_cavalier_possibs(x, y, pion); // done
			break;
		case 'fou':
			possibs = calc_fou_possibs(x, y, pion); // done
			break;
		case 'tour':
			possibs = calc_tour_possibs(x, y, pion); // done
			break;
		case 'dame':
			possibs = calc_dame_possibs(x, y, pion); // done
			break;
		case 'roi':
			possibs = calc_roi_possibs(x, y, pion); // done
			break;
		default:
			possibs = null;
			alert('BRAIIIINFUUUCK');
			break;
	}
	return (possibs);
}

function calc_roi_possibs(x, y, pion)
{
	var possibs = new Array;
	var player = pion.joueur;

	if (isEmpty(x , y - 1))
		possibs.push(x, y - 1, true);
	else if (isEatable(x , y - 1, joueur))
		possibs.push(x , y - 1, false)
	
	if (isEmpty(x , y + 1))
		possibs.push(x , y + 1, true);
	else if (isEatable(x , y + 1, joueur))
		possibs.push(x , y + 1, false);
	
	if (isEmpty(x + 1, y))
		possibs.push(x + 1, y, true);
	else if (isEatable(x + 1, y, joueur))
		possibs.push(x + 1, y, false);
	
	if (isEmpty(x - 1, y))
		possibs.push(x - 1, y, true);
	else if (isEatable(x - 1, y, joueur))
		possibs.push(x - 1, y, false);
	
	if (isEmpty(x - 1, y - 1))
		possibs.push(x - 1, y - 1, true);
	else if (isEatable(x - 1, y - 1, joueur))
		possibs.push(x - 1, y - 1, false);
	
	if (isEmpty(x + 1, y + 1))
		possibs.push(x + 1, y + 1, true);
	else if (isEatable(x + 1, y + 1, joueur))
		possibs.push(x + 1, y + 1, false);
	
	if (isEmpty(x + 1, y - 1))
		possibs.push(x + 1, y - 1, true);
	else if (isEatable(x + 1, y - 1, joueur))
		possibs.push(x + 1, y - 1, false);
	
	if (isEmpty(x - 1, y + 1))
		possibs.push(x - 1, y + 1, true);
	else if (isEatable(x - 1, y + 1, joueur))
		possibs.push(x - 1, y + 1, false);
} 
function calc_dame_possibs(x, y, pion)
{
	var possibs = new Array;
	var tmp = new Array;

	possibs = calc_tour_possibs(x, y, pion);
	tmp = calc_fou_possibs(x, y, pion);
	possibs = possibs.concat(tmp);
	return possibs
}

function calc_tour_possibs(x, y, pion)
{
	var possibs = new Array;
	var player = pion.joueur;
	var i = 0;

	while (i < 8)
	{
		if (isEmpty(i, y))
			possibs.push(i, y, true);
		else
		{
			if (isEatable(i, y, joueur))
				possibs.push(i, y, false);
			i = 8;
		}
		i++;	
	}
	
	i = 0;
	while (i < 8)
	{
		if (isEmpty(x, i))
			possibs.push(x, i, true);
		else
		{
			if (isEatable(x, i, joueur))
				possibs.push(x, i, false);
			i = 8;
		}
		i++;	
	}
	return possibs;
}

function calc_fou_possibs(x, y, pion)
{
	var possibs = new Array;
	var player = pion.joueur;
	var i = 1;
	while ((x + i) < 8 && (y + i) < 8)
	{
		if (isEmpty(x + i, y + i))
			possibs.push(x + i, y + i, true);
		else
		{
			if (isEatable(x + i, y + i, joueur))
				possibs.push(x + i, y + i, false);
			i = 8;
		}
		i++;
	}
	i = 1;
	while ((x + i) < 8 && (y - i) >= 0)
	{
		if (isEmpty(x + i, y - i))
			possibs.push(x + i, y - i, true);
		else 
		{
			if (isEatable(x + i, y - i, joueur))
				possibs.push(x + i, y - i, false);
			i = 8;
		}
		i++;
	}
	i = 1;
	while ((x - i) >= 0 && (y + i) < 8)
	{
		if (isEmpty(x - i, y + i))
			possibs.push(x - i, y + i, true);
		else
		{
			if (isEatable(x - i, y + i, joueur))
				possibs.push(x - i, y + i, false);
			i = 8;
		}
		i++;
	}
	i = 1;
	while ((x - i) >= 0 && (y - i) >= 0)
	{
		if (isEmpty(x - i, y - i))
			possibs.push(x - i, y - i, true);
		else
		{
			if (isEatable(x - i, y - i, joueur))
				possibs.push(x - i, y - i, false);
			i = 8;
		}
		i++;
	}
	return possibs;
}

function calc_cavalier_possibs(x, y, pion)
{
	var possibs = new Array;
	var player = pion.joueur;

	if (isEmpty(x + 1, y - 2))
		possibs.push(x + 1, y - 2, true);
	else if (isEatable(x + 1, y - 2, joueur))
		possibs.push(x + 1, y - 2, false);

	if (isEmpty(x + 1, y + 2))
		possibs.push(x + 1, y + 2, true);
	else if (isEatable(x + 1, y + 2, joueur))
		possibs.push(x + 1, y + 2, false);

	if (isEmpty(x - 1, y - 2))
		possibs.push(x - 1, y - 2, true);
	else if (isEatable(x - 1, y - 2, joueur))
		possibs.push(x - 1, y - 2, false);

	if (isEmpty(x - 1, y + 2))
		possibs.push(x - 1, y + 2, true);
	else if (isEatable(x - 1, y + 2, joueur))
		possibs.push(x - 1, y + 2, false);

	if (isEmpty(x + 2, y - 1))
		possibs.push(x + 1, y - 2, true);
	else if (isEatable(x + 1, y - 2, joueur))
		possibs.push(x + 1, y - 2, false);

	if (isEmpty(x + 2, y + 1))
		possibs.push(x + 1, y + 2, true);
	else if (isEatable(x + 1, y + 2, joueur))
		possibs.push(x + 1, y + 2, false);

	if (isEmpty(x - 2, y - 1))
		possibs.push(x - 1, y - 2, true);
	else if (isEatable(x - 1, y - 2, joueur))
		possibs.push(x - 1, y - 2, false);

	if (isEmpty(x - 2, y + 1))
		possibs.push(x - 1, y + 2, true);
	else if (isEatable(x - 1, y + 2, joueur))
		possibs.push(x - 1, y + 2, false);

	return possibs;

}

function calc_pion_possibs(x, y, pion)
{
	var possibs = new Array;
	var player = pion.joueur;
	if (joueur == 'noir')
		{
			if (isEmpty(x, y + 1))
				possibs.push(x, y + 1, true);

			if (isEatable(x + 1, y + 1, player))
				possibs.push(x + 1, y + 1, false);

			if (isEatable(x - 1, y + 1, player))
				possibs.push(x - 1, y + 1, false);

		}
	else
		{
			if (isEmpty(x, y - 1))
				possibs.push(x, y - 1, true);

			if (isEatable(x - 1, y - 1, player))
				possibs.push(x - 1, y - 1, false);

			if (isEatable(x + 1, y - 1, player))
				possibs.push(x + 1, y, false);
		}
	return (possibs);
}