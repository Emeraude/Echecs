function give_x(letter)
{
	return (letter - 65);
}

function give_y(number)
{
	return (number - 1);
}

function chain_to_coord(str)
{
	tab = new Array();
	if (str.length != 2)
		alert("Error : Move commad must be like : '[LETTER A - H][NUMBER 1 - 8]'. ");
	if (!(str[0] >= 'A' && str[0] <= 'H'))
		alert("Error : Move command must be like : '[LETTER A - H][NUMBER 1 - 8]'. ");
	if (!(str[1] >= '1' && str[1] <= '8'))
		alert("Error : Move command must be like : '[LETTER A - H][NUMBER 1 - 8]'. ");

	tab[0] = give_x(str.charAt(0));
	tab[1] = give_y(str.charAt(1));
	return (tab);
}

function give_letter_pos(x)
{
	return (x + 65);
}

function give_nbr_pos(y)
{
	return (y - 1);
}

function coord_to_chain(x, y)
{
	new_chain = "";
	new_chain = give_letter_pos(x) . give_nbr_pos(y);
	return (new_chain);
}