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
			deletePiece(x, y);
			this.pos_x = x;
			this.pos_y = y;
			if (this.piece == 'pion')
				this.played = true;
			return true;
		}
		return false;
	};

	this.canMove = function(x, y)
	{
		possibilities = movePossibs(this.pos_x, this.pos_y);
		for (i = 0; i < possibilities.length; ++i)
		{
			if (possibilities[i][0] == x && possibilities[i][1] == y)
				return true;
		}
		return false;
	}

	this.isBlocked = function()
	{
		if (movePossibs(this.pos_x, this.pos_y).length < 1)
			return false;
		return true;
	}
}

function Pion(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'pion';
	this.played = false;

	/*this.canMove = function(x, y)
	{
		if (x == this.pos_x)
		{
			if (joueur == "noir")
			{
			if ((this.played == false && y <= this.pos_y + 2) ||
				(this.played == true && y <= this.pos_y + 1))
				return true;
			}
			else
			{
			if ((this.played == false && y >= this.pos_y - 2) ||
				(this.played == true && y >= this.pos_y - 1))
				return true;				
			}
		}
		return false;
	};
	this.blocked = function()
	{

	};*/
}

function Cavalier(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'cavalier';

	/*this.canMove = function(x, y)
	{
		for (var i = 0; i < pieces.length; i++) {
			if (pieces[i].joueur == this.joueur && 
				pieces[i].pos_x == x &&
				pieces[i].pos_y == y)
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

	};*/
}

function Fou(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'fou';

	/*this.canMove = function(x, y)
	{
		var x_tmp = this.pos_x;
		var y_tmp = this.pos_y;

		if (Math.abs(this.pos_x - x) == Math.abs(this.pos_y - y))
		{
			while (x_tmp != x && y_tmp != y)
			{
				if (!isEmpty(x_tmp, y_tmp))
					return false;
				x_tmp < x ? x_tmp++ : x_tmp--;
				y_tmp < y ? y_tmp++ : y_tmp--;
			}
			if (isEmpty(x, y) || isEatable(x, y, joueur))
				return true;
		}
		return false;
	};
	this.blocked = function()
	{
	};*/
}

function Tour(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'tour';

	/*this.canMove = function(x, y)
	{
		if (x == this.pos_x && y != this.pos_y)
		{
			var y_tmp = this.pos_y;
			while (y_tmp != y)
			{
				if (!isEmpty(x, y_tmp))
					return false;
				y_tmp = (y_tmp < y) ? y_tmp++ : y_tmp--;
			}
			return true;
		}
		else if (x != this.pos_x && y == this.pos_y)
		{
			var x_tmp = this.pos_x;
			while (x_tmp != x)
			{
				if (!isEmpty(x_tmp, y))
					return false;
				x_tmp = (x_tmp < x) ? x_tmp++ : x_tmp--;
			}
			if (isEmpty(x, y) || isEatable(x, y, joueur))
				return true;
		}
		return false;
	};
	this.blocked = function()
	{
	};*/
}

function Dame(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'dame';

	/*this.canMove = function(x, y)
	{
		tour = new Tour(this.pos_x, this.pos_y, joueur).canMove(x, y);
		fou = new Fou(this.pos_x, this.pos_y, joueur).canMove(x, y);

		if (tour || fou)
			return true;
		return false;
	};
	this.blocked = function()
	{

	};*/
}

function Roi(x, y, joueur)
{
	this.parent = Piece;
	this.parent(x, y, joueur);
	this.piece = 'roi';

	/*this.canMove = function(x, y)
	{
		if ((x >= this.pos_x - 1 && x <= this.pos_x + 1) && (y >= this.pos_y - 1 && y <= this.pos_y + 1))
			return true;

		for (var i = 0; i < pieces.length; i++) {
			if (pieces[i].joueur == this.joueur && 
				pieces[i].pos_x == x &&
				pieces[i].pos_y == y)
				return false;
		};
	return false;
	};
	this.blocked = function()
	{

	};*/
}