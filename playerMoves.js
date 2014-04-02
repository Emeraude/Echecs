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
			possibs = calc_fou_possibs(x, y, pion);
			break;
		case 'tour':
			possibs = calc_tour_possibs(x, y, pion);
			break;
		case 'dame':
			possibs = calc_dame_possibs(x, y, pion);
			break;
		case 'roi':
			possibs = calc_roi_possibs(x, y, pion);
			break;
		default:
			possibs = null;
			alert('BRAIIIINFUUUCK');
			break;
	}
	return (possibs);
}


function calc_cavalier_possibs(x, y, pion)
{
	var possibs = new Array;
	var player = pion.joueur;
	if (joueur == 'noir')
		{
			if (isEmpty(x + 1, y - 2))
				possibs.push(x + 1, y - 2, true);
			else if (isEatable(x + 1, y - 2))
				possibs.push(x + 1, y - 2, false);

			if (isEmpty(x + 1, y + 2))
				possibs.push(x + 1, y + 2, true);
			else if (isEatable(x + 1, y + 2))
				possibs.push(x + 1, y + 2, false);

			if (isEmpty(x - 1, y - 2))
				possibs.push(x - 1, y - 2, true);
			else if (isEatable(x - 1, y - 2))
				possibs.push(x - 1, y - 2, false);

			if (isEmpty(x - 1, y + 2))
				possibs.push(x - 1, y + 2, true);
			else if (isEatable(x - 1, y + 2))
				possibs.push(x - 1, y + 2, false);

			if (isEmpty(x + 2, y - 1))
				possibs.push(x + 1, y - 2, true);
			else if (isEatable(x + 1, y - 2))
				possibs.push(x + 1, y - 2, false);
			if (isEmpty(x + 2, y + 1))
				possibs.push(x + 1, y + 2, true);
			else if (isEatable(x + 1, y + 2))
				possibs.push(x + 1, y + 2, false);
			if (isEmpty(x - 2, y - 1))
				possibs.push(x - 1, y - 2, true);
			else if (isEatable(x - 1, y - 2))
				possibs.push(x - 1, y - 2, false);
			if (isEmpty(x - 2, y + 1))
				possibs.push(x - 1, y + 2, true);
			else if (isEatable(x - 1, y + 2))
				possibs.push(x - 1, y + 2, false);

}

function calc_pion_possibs(x, y, pion)
{
	var possibs = new Array;
	var player = pion.joueur;
	if (joueur == 'noir')
		{
			if (isEmpty(x, y + 1) == true)
				possibs.push(x, y + 1, true);

			if (isEatable(x + 1, y + 1, player) == true)
				possibs.push(x + 1, y + 1, false);

			if (isEatable(x - 1, y + 1, player) == true)
				possibs.push(x - 1, y + 1, false);

		}
	else
		{
			if (isEmpty(x, y - 1) == true)
				possibs.push(x, y - 1, 0);

			if (isEatable(x - 1, y - 1, player) == true)
				possibs.push(x - 1, y - 1, false);

			if (isEatable(x + 1, y - 1, player) == true)
				possibs.push(x + 1, y, false);
		}
	return (possibs);
}