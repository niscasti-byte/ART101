
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
let message = "I am a legendary blacksmith named ohan";
$("#environment-output").html(message);
$("button.Awoken").hide();
});
$("#option-two").click(function () {
let message = "I was betrayed by one of my closest allys";
$("#environment-output").html(message);
$("button.Awoken").hide();
});
$("#option-three").click(function () {
let message = "I find you suspicious";
$("#environment-output").html(message);
$("button.Awoken").hide();
});

$("#option-four").click(function () {
let message = "nothing to say?";
$("#environment-output").html(message);
$("button.Awoken").hide();
});





