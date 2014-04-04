/*
pieces is an array that represents all the pieces of the game

initPlayer() will create all the pieces for only one player
initGame() will create all the pieces for all players
displayCoord(color) will display the identifiers of each case (A-H;1-8)
clearTable() will clear all the table
display(color) will display all the pieces in the map
isEmpty(x, y) will return a boolean that inform us if the case map[x][y] is empty or not
getPiece(x, y) will return the piece in the case map[x][y], or false if there is no piece
getPieceColor(x, y) will return the color of the piece in the case map[x][y], or false if there is no piece
deletePiece(x, y) will delete the piece in the case map[x][y]
*/

pieces = new Array();
tour = blanc;

function    initPlayer(color)
{
	if (color == noir)
	{
		x = 0;
		pion_x = 1;
	}
	else
	{
		x = 7;
		pion_x = 6;
	}
	for (i = 0; i < 8; ++i)
		pieces.push(new Pion(i, pion_x, color));
	pieces.push(new Tour(0, x, color));
	pieces.push(new Tour(7, x, color));
	pieces.push(new Cavalier(1, x, color));
	pieces.push(new Cavalier(6, x, color));
	pieces.push(new Fou(2, x, color));
	pieces.push(new Fou(5, x, color));
	pieces.push(new Dame(3, x, color));
	pieces.push(new Roi(4, x, color));
}

function    initGame()
{
	initPlayer(blanc);
	initPlayer(noir);
}

function    tabulate_html()
{
    table = document.getElementById("echiquier");
    for (i = 0; i < 9; ++i)
    {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for (j = 0; j < 9; ++j)
        {
            var td = document.createElement("td");
            tr.appendChild(td);
        }
    }
}

function    displayCoord(color)
{
    if (color == blanc)
    {
        tr = document.querySelectorAll("tr")[0];
        for (i = 0; i < 8; ++i)
        {
            tr.querySelectorAll('td')[i + 1].innerHTML = i + 1;
        }
        for (i = 0; i < 8; ++i)
        {
            tr = document.querySelectorAll("tr")[i + 1];
            tr.querySelectorAll('td')[0].innerHTML = String.fromCharCode(65 + i);
        }
    }
    else if (color == noir)
    {
        tr = document.querySelectorAll("tr")[8];
        for (i = 8; i > 0; --i)
        {
            tr.querySelectorAll('td')[i - 1].innerHTML = 9 - i;
        }
        for (i = 8; i > 0; --i)
        {
            tr = document.querySelectorAll("tr")[i - 1];
            tr.querySelectorAll('td')[8].innerHTML =    String.fromCharCode(73 - i);
        }
    }
}

function    clearTable()
{
    td = document.querySelectorAll("td");
    for (i = 0; i < 81; ++i)
    {
        td[i].style.backgroundImage = "none";
        td[i].style.backgroundColor = "white";
        td[i].innerHTML = "";
    }
}

function    display(color)
{
    clearTable();
    displayCoord(color);
    td = document.querySelectorAll("td");
    if (color == blanc)
    {
        inc = 1;
        mult = 1;
    }
    else
    {
        inc = 7;
        mult = -1;
    }
    for (i = 0; i < 81; ++i)
    {
        cmp = 1;
        if (color == blanc)
            td[i].id = td[i - i % 9].innerHTML+td[i % 9].innerHTML;
        else
            td[i].id = td[i + (8 - i % 9)].innerHTML+(8 - i % 9);
        if (i % 2 == 1 && td[i].innerHTML == '')
            td[i].style.backgroundColor = '#202020';
    }
	for (i = 0; i < pieces.length; ++i)
	{
		x = mult * pieces[i].pos_x + inc;
		y = mult * pieces[i].pos_y + inc;
		img = 'url(img/'+pieces[i].piece+'_'+pieces[i].joueur+'.png)';
		tr = document.querySelectorAll('tr')[y];
		tr.querySelectorAll('td')[x].style.backgroundImage=img;
	}
}

function isEmpty(x, y)
{
	if (x < 0 || x >= 8 || y < 0 || y >= 8)
		return false;
	for (i = 0; i < pieces.length; i++)
    {
        if (pieces[i].pos_x == x && pieces[i].pos_y == y)
            return (false);
    }
    return (true);
}

function isEatable(x, y, joueur)
{
    if (x < 0 || x >= 8 || y < 0 || y >= 8)
        return false;
	if (!isEmpty(x, y) && (piece = getPiece(x, y)) != false)
	{
		if (piece.joueur != joueur)
			return true;
	}
	return false;
}

function getPiece(x, y)
{
	if (x < 0 || x >= 8 || y < 0 || y >= 8)
		return false;
	for (i = 0; i < pieces.length; i++)
    {
        if (pieces[i].pos_x == x && pieces[i].pos_y == y)
            return (pieces[i]);
    }
    return (false);
}

function getPieceColor(x, y)
{
	piece = getPiece(x, y);
	if (piece == false)
		return false;
	else
		return (piece.joueur);
}

function deletePiece(x, y)
{
	for (i = 0; i < pieces.length; i++)
	{
		if (pieces[i].pos_x == x && pieces[i].pos_y == y)
		{
			pieces[i].alive = false;
			pieces.splice(i, 1);
			return (true);
		}
	}
	return (false);
}

function check_end_turn(pos_x, pos_y, elem)
{
    old_pos_x = elem.pos_x;
    old_pos_y = elem.pos_y;
    elem.pos_x = pos_x;
    elem.pos_y = pos_y;
    if (isInCheck(tour) == false)
    {
        elem.pos_x = old_pos_x;
        elem.pos_y = old_pos_y;
        deletePiece(pos_x, pos_y);
        elem.pos_x = pos_x;
        elem.pos_y = pos_y;
        tour = (tour = blanc ? noir : blanc);
        display(tour);
    }
    else if (isInCheck(tour) == true)
    {
        elem.pos_x = old_pos_x;
        elem.pos_y = old_pos_y;
        display(tour);
    }
    else if (CheckMate(tour) == true)
        alert("Player"+tour+"wins");
}

tabulate_html();
initGame();
display(blanc);
