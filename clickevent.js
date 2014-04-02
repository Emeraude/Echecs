$(document).ready(function(){
    $("#echiquier td").on({
	mouseenter: function(){
	    $(this).css("border-color", "red");
	},

	mouseleave: function(){
	    $(this).css("border-color", "black");
	}
    });

    $("#echiquier td").on("click", function(){
    });
});