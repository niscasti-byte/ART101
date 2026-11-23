let correct = ""
let continent = ["Asia", "Europe", "North America", "South America", "Austrlia", "Africa", "Antarctica"]
// .click(...) runs this function when #check-button is clicked.
$("#asia").click(function () {
    correct = continent[0]
    console.log(correct)
});

$("#europe").click(function () {
    correct = continent[1]
    console.log(correct)
});

$("#North-america").click(function () {
    correct = continent[2]
    console.log(correct)
});

$("#South-america").click(function () {
    correct = continent[3]
    console.log(correct)
});

$("#austrlia").click(function () {
    correct = continent[4]
    console.log(correct)
});

$("#Africa").click(function () {
    correct = continent[5]
    console.log(correct)
});

$("#Antarctica").click(function () {
    correct = continent[6]
    console.log(correct)
});

$("#check-button").click(function () {
    let input = $("#number-input").val()
    
    if (input == correct) {
        $("#result").text("You are Correct");
        console.log("check button is working")
    }
    else{
        $("#result").text("You are incorrect");}
   if (input == "") {
        $("#result").text("Enter a name first.");
    }

});
