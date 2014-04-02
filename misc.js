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

	tab[0] = give_x(str[0]);
	tab[1] = give_y(str[1]);
	
	return (tab);
}