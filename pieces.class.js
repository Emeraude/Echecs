/*
For each of the following classes :

	joueur attribute is the player, defined by the macros blanc and noir.
	pos_x and pos_y are the position of the piece.
	alive is a boolean that tell us if the piece is alive.
	piece is a string that contains the type of the piece (useful for the map)
	
	isBlocked method return a boolean (the piece can move or note)
	canMove method return a boolean which tell you if you can move this piece here
	move method return a boolean (error) and try to move the piece
*/

var blanc = 'blanc';
var noir = 'noir';
function Pion(x, y, joueur)
{
	this.joueur = joueur;
	this.piece = 'pion';
	this.pos_x = x;
	this.pos_y = y;
	this.alive = true;
	this.played = false;

	this.canMove = function(x, y)
	{
		if (isEmpty(x, y))
		{
			if ()
			{
				
				return true;
			}
		}
		return false;
	};
	this.isBlocked = function()
	{

	};
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
function Cavalier(x, y, joueur)
{
	this.joueur = joueur;
	this.piece = 'cavalier';
	this.pos_x = x;
	this.pos_y = y;
	this.alive = true;
}
function Fou(x, y, joueur)
{
	this.joueur = joueur;
	this.piece = 'fou';
	this.pos_x = x;
	this.pos_y = y;
	this.alive = true;
}
function Tour(x, y, joueur)
{
	this.joueur = joueur;
	this.piece = 'tour';
	this.pos_x = x;
	this.pos_y = y;
	this.alive = true;
}
function Dame(x, y, joueur)
{
	this.joueur = joueur;
	this.piece = 'dame';
	this.pos_x = x;
	this.pos_y = y;
	this.alive = true;
}
function Roi(x, y, joueur)
{
	this.joueur = joueur;
	this.piece = 'roi';
	this.pos_x = x;
	this.pos_y = y;
	this.alive = true;
}