/*
here are all the functions used for displaying

tabulateHtml() will create the table used for display the game
displayCoord(color) will display the identifiers of each case (A-H;1-8)
clearTable() will clear all the table
display(color) will display all the pieces in the map
*/

function    tabulateHtml()
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
        td[i].removeAttribute("style");
        td[i].removeAttribute("id");
        td[i].innerHTML = "";
        td[i].style.borderColor = "black";
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
        {
            if ((8 - i % 9) != 0)
                td[i].id = td[i + (8 - i % 9)].innerHTML+(8 - i % 9);
            else
                td[i].id = td[i + (8 - i % 9)].innerHTML;
        }
        if (i % 2 == 1 && td[i].innerHTML == '')
        {
            td[i].style.backgroundColor = '#202020';
            td[i].style.color = '#202020';
        }
        else if (td[i].innerHTML != '')
        {
            td[i].style.backgroundColor = blanc;
            td[i].style.color = 'none';
        }
        else
            td[i].style.color = 'white';
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
