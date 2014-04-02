/*
pieces is an array that represents all the pieces of the game

initPlayer() will create all the pieces for only one player
initGame() will create all the pieces for all players
display() will display all the pieces in the map
isEmpty(x, y) will return a boolean that inform us if the case map[x][y] is empty or not
*/

map = [8][8];
pieces = Array();

function initPlayer(color)
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

function initGame()
{
	initPlayer(blanc);
	initPlayer(noir);
}

function displayCoord()
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

function display()
{
	for (i = 0; i < pieces.length; ++i)
	{
		/*
		that's a tmp test function. it must be rewrited

		pieces images are in the img directory
		files names are : img/[piece]_[color].png
		*/
		x = pieces[i].pos_x + 1;
		y = pieces[i].pos_y + 1;
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

initGame();
displayCoord();
display();