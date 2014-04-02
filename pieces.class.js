/*
For each of the following classes :

	joueur attribute is the player, defined by the macros blanc and noir.
	pos_x and pos_y are the position of the piece.
	alive is a boolean that tell us if the piece is alive.
	piece is a string that contains the type of the piece (useful for the map)
	
	isBocked method return a boolean (the piece can move or note)
	canMove method return a boolean which tell you if you can move this piece here
	move method return a boolean (error) and try to move the piece
*/

var blanc = 'blanc';
var noir = 'noir';

function Piece(x, y, joueur)
{
	this.joueur = joueur;
	this.pos_x = x;
	this.pos_y = y;
	this.alive = true;

	this.move = function(x, y)
	{
		if (this.canMove(x, y))
		{
			this.pos_x = x;
			this.pos_y = y;
			return true;
		}
		return false;
	};
}

function Pion(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'pion';
	this.played = false;

	this.canMove = function(x, y)
	{

	};
	this.isBlocked = function()
	{

	};
}

function Cavalier(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'cavalier';
}
function Fou(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'fou';
}
function Tour(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'tour';
	this.canMove = function(x, y)
	{
		if ((x == this.pos_x && y != this.pos_y)
		{
			if (y > this.pos_y)
			{
				for ()
			}
			else
			{

			}
		}
		else if (x != this.pos_x && y == this.pos_y))
		{
			return true;
		}
		return false;
	};
	this.isBlocked = function()
	{

	};
}
function Dame(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'dame';
}
function Roi(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'roi';

	this.canMove = function(x, y)
	{
		if (x >= x - 1 && x <= x + 1) && (y >= y - 1 && y <= y + 1)
			return true;
	};
	this.isBlocked = function()
	{

	};
}