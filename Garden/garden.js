
$("#apply-button").click(function () {
    // .val() reads a control's current value when Apply is clicked.
    let objectLabel = $("#object-label").val();
    let objectColor = $("#object-color").val();
    let objectShape = $("#object-shape").val();

    // .text(...) shows the label literally, including < and >.
    $("#item-names").text(objectLabel);

    // .css(property, value) changes this object's background color.
    $("#item").css("background-color", objectColor);

    // Remove the old shape class, then add the chosen one.
    $("#item").removeClass("square circle");
    $("#item").addClass(objectShape);
});


$("#apply-button").click(function () {
    // .val() reads the field; .trim() removes spaces at either end.
    let label = $("#object-label").val().trim();

    if (label == "") {
        $("#message").text("Chose a name.");
    }
    else {
        // HTML inside $(...) creates a new element, not yet on the page.
        let item = $("<li></li>");
        // .text(...) sets its label literally, including < and >.
        item.text(label);
        // .append(...) adds it after the existing list items.
        $("#items").append(item);
        // Clear the field and return focus for the next item.
        $("#object-label").val("");
        $("#object-label").focus();
        $("#message").text("");
    }
});

let x = 0;
let y = 0;
let step = 20;

// This area receives keys while focused; event.key names the pressed key.
$("#stage").keydown(function (event) {
    if (event.key == "ArrowRight") {
        x = x + step;
    }
    else if (event.key == "ArrowLeft") {
        x = x - step;
    }
    else if (event.key == "ArrowDown") {
        y = y + step;
    }
    else if (event.key == "ArrowUp") {
        y = y - step;
    }
    else {
        return; // Leave other keys to the browser.
    }
    // Arrow keys move this item instead of scrolling the page.
    event.preventDefault();

    // Leave room for the whole item at the right and bottom edges.
    let maxX = $("#stage").width() - $("#item").outerWidth();
    let maxY = $("#stage").height() - $("#item").outerHeight();
    if (x < 0) { x = 0; }
    if (x > maxX) { x = maxX; }
    if (y < 0) { y = 0; }
    if (y > maxY) { y = maxY; }

    $("#item").css("left", x);
    $("#item").css("top", y);
});