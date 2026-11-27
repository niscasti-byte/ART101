let correct = ""
let funfact = ["Asia is the largest continent of our planet, both in size and also when we consider the population.", "Europe is the second smallest continent in size but the third largest in population.", "North America is the third largest continent in size and the fourth largest when we consider population.", "The biggest country in South America is Brazil.", " The Australian Alps get more snow than the Swiss Alps", "Did you know that Africa is bigger than the USA, Canada and India together? Africa covers an area larger than 30 million square kilometres", "Antarctica is the least populated continent of our planet. The word 'Antarctica' comes from the Greek term 'antarktike' meaning 'the opposite to arctic' or 'opposite to north'."]
let funfactquote = ""
let continent = ["Asia", "Europe", "North America", "South America", "Austrlia", "Africa", "Antarctica"]
// .click(...) runs this function when #check-button is clicked.
$("#asia").click(function () {
    correct = continent[0];
    funfactquote = funfact[0]
    console.log(correct)
});

$("#europe").click(function () {
    correct = continent[1];
    funfactquote = funfact[1]
    console.log(correct)
});

$("#North-america").click(function () {
    correct = continent[2];
    funfactquote = funfact[2]
    console.log(correct)
});

$("#South-america").click(function () {
    correct = continent[3];
    funfactquote = funfact[3]
    console.log(correct)
});

$("#austrlia").click(function () {
    correct = continent[4];
    funfactquote = funfact[4]
    console.log(correct)
});

$("#Africa").click(function () {
    correct = continent[5];
    funfactquote = funfact[5]
    console.log(correct)
});

$("#Antarctica").click(function () {
    correct = continent[6];
    funfactquote = funfact[6]
    console.log(correct)
});

$("#check-button").click(function () {
    let input = $("#number-input").val()
    
    if (input == correct) {
        $("#result").text("You are Correct heres a fun fact about " + correct + " " + funfactquote );
        console.log("check button is working")
    }
    else{
        $("#result").text("You are incorrect" );}
   if (input == "") {
        $("#result").text("Enter a name first.");
    }

});
