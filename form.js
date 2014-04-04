function form_nempty(value)
{
	if (value == "")
		{
			alert("Error : At least one move field is empty." + "\n"
				+ "Fill it.");
			return (false);
		}
	return (true);
}

function form_valid_lenght(value)
{
	if (value.length != 2)
		{
			alert("Error : This move is not available.");
			return (false);
		}
	return (true);
}

function form_valid_pattern(value)
{
	if (!((value[0] >= 'A') && (value[0] <= 'H'))
		|| (!((value[1] >= 1) && (value[1] <= 8))))
		{
			alert("Error : This move is unvailable.");
			return (false);
		}
	return (true);
}

function form_not_same_value(value1, value2)
{
	if (value1 == value2)
		{
			alert("Error : Depart and value can't have the same value.");
			return (false);
		}
	return (true);
}

function is_mov_ok(ret_mov_ok, a_coord)
{
	for (i = 0; i < ret_mov_ok.length; i++)
	{
		if (a_coord[0] == ret_mov_ok[i][0])
			if (a_coord[1] == ret_mov_ok[i][1])
				return (true);
	}
	alert("This move is impossible.");
	return (false);
}

function get_data_form()
{
	var depart = document.getElementById("depart").value;
	var arrivee = document.getElementById("arrivee").value;


	if ((form_nempty(depart) == false) || (form_nempty(arrivee) == false))
		return (false);
	if ((form_valid_lenght(depart) == false) || (form_valid_lenght(arrivee) == false))
		return (false);
	if ((form_valid_pattern(depart) == false) || (form_valid_pattern(arrivee) == false))
		return (false);
	if ((form_not_same_value(depart, arrivee)) == false)
		return (false);

	var d_coord;
	var a_coord;
	var ret_mov_ok = new Array();
	var piece;

	d_coord = chain_to_coord(depart);
	a_coord = chain_to_coord(arrivee);
	ret_mov_ok = movePossibs(d_coord[0], d_coord[1]);
	if (is_mov_ok(ret_mov_ok, a_coord) == false)
		return (false);

	piece = getPiece(d_coord[0], d_coord[1]);
	check_end_turn(a_coord[0], a_coord[1], piece);
}