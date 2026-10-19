//the button program
let count = 0;

$("#needy-button").click(function (){ count = count+1; $("#needy-button").html("i was clicked " + count + " times") ;})
