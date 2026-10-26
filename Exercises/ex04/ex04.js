
let mood = ""
let count = 0;
let colorscount = 0
let colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque",
  "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue",
  "chartreuse", "chocolate", "coral",];

let buttonText = "";

$("#needy-button").click(function () {

  count = count + 1;
  console.log(count);
  console.log(colors[colorscount]);
  console.log("collors count is" + colorscount)

  if (count >= 16) { mood = "depressed" }
  else if (count >= 13) { mood = "sad" }
  else if (count >= 5) { mood = "happy" }
  else if (count >= 0) { mood = "neutral" }


  buttonText = "I was kicked " + count + " times and color is " + colors[colorscount] + " and im " + mood;

  $("#needy-button").html(buttonText);

  $("button").css("background-color", colors[colorscount]);
  colorscount = colorscount + 1;
  if (colorscount >= 17) { colorscount = 0; }
});





