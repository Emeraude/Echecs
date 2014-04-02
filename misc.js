function give_x(letter)
{
	return (letter - 65);
}

function give_y(number)
{
	return (number - 1);
}

function chain_to_coord(str1, str2)
{
	if ((str1.length != 2) || (str2.length != 2))
		alert("Error : Move commad must be like : '[LETTER A - H][NUMBER 1 - 8]'. ");
	if (!(str[0] >= 'A' && str[0] <= 'H'))
		alert("Error : Move command must be like : '[LETTER A - H][NUMBER 1 - 8]'. ");
	if (!(str[1] >= '1' && str[1] <= '8'))
		alert("Error : Move command must be like : '[LETTER A - H][NUMBER 1 - 8]'. ");

	var x1 = give_x(str1[0]);
	var y1 = give_y(str1[1]);

	var x2 = give_x(str2[0]);
	var x2 = give_y(str2[1]);
}