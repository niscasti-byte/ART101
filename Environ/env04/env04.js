
let environment = "The tombs of the abysal";

let environmentElements = ["mummys", "fire", "invaders", "sand"];

let mainEntity = {
    name: "A Legendary Blacksmith",
    death: "betrayl",
    mood: "suspicious",
    isMoving: false,
    favoriteElement: environmentElements[2]
};

$("#blacksmith").click(function () {
    let message = "You have awoken me from my eternal slumber what do you seek?";
    $("#environment-output").html(message);
    $("#blacksmith").toggle();
    $("button.Awoken").show();
});

$("#option-one").click(function () {
    let message = "I am a legendary blacksmith named ohan. What is your purpose here?";
    $("#environment-output").html(message);
    $("button.Awoken").hide();
    $("button.Phase-two").toggle();
});
$("#option-two").click(function () {
    let message = "I was betrayed by one of my closest allys. What is your purpose here?";
    $("#environment-output").html(message);
    $("button.Awoken").hide(); 
    $("button.Phase-two").toggle();
});
$("#option-three").click(function () {
    let message = "I find you suspicious. What is your purpose here?";
    $("#environment-output").html(message);
    $("button.Awoken").hide(); 
    $("button.Phase-two").toggle();
});

$("#option-four").click(function () {
    let message = "nothing to say? What is your purpose here?";
    $("#environment-output").html(message);
    $("button.Awoken").hide(); 
    $("button.Phase-two").toggle();
});

$("#invader").click(function () {
    let message = "You Dare Steal From The Empire of Abysal, You shall die";
    $("#environment-output").html(message);
    $("button.Phase-two").toggle();
    $("body").css("background-color", "#6b0000");
    $("h1,h2,h3").css("background-color", "#a10000");
});
$("#curiosity").click(function () {
    let message = "We are from long ago you are better off focusing on the future";
    $("#environment-output").html(message);
    $("button.Phase-two").toggle();
 $("body").css("background-color", "#686767");
    $("h1,h2,h3").css("background-color", "#b3b1b1");
});








