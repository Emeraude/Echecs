function give_x(letter)
{
	letter = letter.charCodeAt(letter) - 17;
	letter = String.fromCharCode(letter);
	return (letter);
}

function give_y(number)
{
	return (number - 1);
}

function chain_to_coord(str)
{
	var tab = new Array();
	if (str.length != 2)
		alert("Error : Move commad must be like : '[LETTER A - H][NUMBER 1 - 8]'. ");
	if (!(str[0] >= 'A' && str[0] <= 'H'))
		alert("Error : Bad letter : [A - H]");
	if (!(str[1] >= '1' && str[1] <= '8'))
		alert("Error : Bad number : [1 - 8]");

	tab[0] = give_x(str.charAt(0));
	tab[1] = give_y(str.charAt(1));
	return (tab);
}

function give_letter_pos(y)
{
	y = String.fromCharCode(65 + y);
	return (y);
}

function give_nbr_pos(x)
{
	return (x + 1);
}

function coord_to_chain(x, y)
{
	x = give_nbr_pos(x);
	y = give_letter_pos(y);
	new_chain = y + x;
	return (new_chain);
}