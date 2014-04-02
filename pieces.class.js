/*
For each of the following classes :

	joueur attribute is the player, defined by the macros blanc and noir.
	pos_x and pos_y are the position of the piece.
	alive is a boolean that tell us if the piece is alive.
	piece is a string that contains the type of the piece (useful for the map)
	
	blocked method return a boolean (the piece can move or note)
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
	this.blocked = function()
	{

	};
}

function Cavalier(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'cavalier';

	this.canMove = function(x, y)
	{
		for (var i = 0; i < pieces.length; i++) {
			if (pieces[i].pos_x == x && pieces[i].pos_y == y)
				return false;
		};
		if ((this.pos_x == x + 1 && this.pos_y == y + 2) ||
			(this.pos_x == x - 1 && this.pos_y == y + 2) ||
			(this.pos_x == x + 2 && this.pos_y == y + 1) ||
			(this.pos_x == x - 2 && this.pos_y == y + 1) ||
			(this.pos_x == x + 2 && this.pos_y == y - 1) ||
			(this.pos_x == x - 2 && this.pos_y == y - 1) ||
			(this.pos_x == x + 1 && this.pos_y == y - 2) ||
			(this.pos_x == x - 1 && this.pos_y == y - 2)) {
			return true;
		}
	return false;
	}
	this.blocked = function()
	{

	};
}
function Fou(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'fou';

	this.canMove = function(x, y)
	{

	};
	this.blocked = function()
	{

	};
}
function Tour(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'tour';

	this.canMove = function(x, y)
	{

	};
	this.blocked = function()
	{

	};
}
function Dame(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'dame';

	this.canMove = function(x, y)
	{

	};
	this.blocked = function()
	{

	};
}
function Roi(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'roi';

	this.canMove = function(x, y)
	{

	};
	this.blocked = function()
	{

	};
}