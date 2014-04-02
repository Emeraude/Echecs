/*
pieces is an array that represents all the pieces of the game

initPlayer() will create all the pieces for only one player
initGame() will create all the pieces for all players
displayCoord(color) will display the identifiers of each case (A-H;1-8)
display(color) will display all the pieces in the map
isEmpty(x, y) will return a boolean that inform us if the case map[x][y] is empty or not
getPiece(x, y) will return the piece in the case map[x][y], or false if there is no piece
getPieceColor(x, y) will return the color of the piece in the case map[x][y], or false if there is no piece
deletePiece(x, y) will delete the piece in the case map[x][y]
*/

map = [8][8];
pieces = new Array();

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

function    clear_table()
{
    td = document.querySelectorAll("td");
    for (i = 0; i < 81; ++i)
    {
        td[i].style.backgroundImage = "none";
        td[i].innerHTML = "";
    }
}

function    display(color)
{
    clear_table();
    displayCoord(color);
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
	for (i = 0; i < pieces.length; ++i)
	{
		x = mult * pieces[i].pos_x + inc;
		y = mult * pieces[i].pos_y + inc;
		img = 'url(img/'+pieces[i].piece+'_'+pieces[i].joueur+'.png)';
		tr = document.querySelectorAll("tr")[y];
		tr.querySelectorAll('td')[x].style.backgroundImage=img;
	}
}

function isEmpty(x, y)
{
	for (i = 0; i < pieces.length; i++)
    {
        if (pieces[i].pos_x == x && pieces[i].pos_y == y)
            return (false);
    }
    return (true);
}

function getPiece(x, y)
{
	for (i = 0; i < pieces.length; i++)
    {
        if (pieces[i].pos_x == x && pieces[i].pos_y == y)
            return (pieces[i]);
    }
    return (false);
}

<<<<<<< HEAD
/*
KONAMI CODE: WEEEEEEEEEEEEEEEEEE =D
*/
jQuery(function(){
    var kKeys = [];
    function Kpress(e){
        kKeys.push(e.keyCode);
        if (kKeys.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
            jQuery(this).unbind('keydown', Kpress);
            kExec();
        }
    }
    jQuery(document).keydown(Kpress);
});
function kExec(){
   alert("KONAMI CODE !")
=======
function getPieceColor(x, y)
{
	return (getPiece(x, y).joueur);
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
>>>>>>> c335542c51029df35010eac31082fbb2273f24f5
}

initGame();
display(blanc);
