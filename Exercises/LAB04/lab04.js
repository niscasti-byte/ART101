let count = 0;
let buttonCreature = {
    name: "Needy Button",
    species: "interface creature",
    favoriteFood: "bananas",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused"]
};
$("#needy-button").click(function () {

    count = count + 1;
    let arrayPosition = count - 1;
    let favoriteFood=buttonCreature.f
let currentMood = buttonCreature.moods[arrayPosition];
let message = "hello im just a little guy named buttons"
message = message +"<p>You clicked me " + count + " times.</p>";
message = message + "<p>My current mood is " + currentMood + ".</p>";

$("#output").html(message);
    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
    console.log(favoriteFood)
    
});
