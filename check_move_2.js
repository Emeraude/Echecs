function    my_diag_alt(alt, piece, king)
{
    var possibs = new Array();
    var result = new Array();
    possibs = movePossibs(piece.pos_x, piece.pos_y);
    if (piece.pos_x < king.pos_x)
    {
        if (piece.pos_y < king.pos_y)
        {
            for (i = 0; i < possibs.length; ++i)
            {
                if (possibs[i][0] > piece.pos_x && possibs[i][0] < king.pos_x && possibs[i][1] > piece.pos_y && possibs[i][1] < king.pos_y)
                    alt.push(possibs[i]);
            }
        }
        else
        {
            for (i = 0; i < possibs.length; ++i)
            {
                if (possibs[i][0] > piece.pos_x && possibs[i][0] < king.pos_x && possibs[i][1] < piece.pos_y && possibs[i][1] > king.pos_y)
                    alt.push(possibs[i]);
            }
        }
    }
    else
    {
        if (piece.pos_y < king.pos_y)
        {
            for (i = 0; i < possibs.length; ++i)
            {
                if (possibs[i][0] < piece.pos_x && possibs[i][0] > king.pos_x && possibs[i][1] > piece.pos_y && possibs[i][1] < king.pos_y)
                    alt.push(possibs[i]);
            }    
        }
        else
        {
            for (i = 0; i < possibs.length; ++i)
            {
                if (possibs[i][0] < piece.pos_x && possibs[i][0] > king.pos_x && possibs[i][1] < piece.pos_y && possibs[i][1] > king.pos_y)
                    alt.push(possibs[i]);
            }
        }
    }
}