
$("#apply-button").click(function () {
    // .val() reads a control's current value when Apply is clicked.
    let objectLabel = $("#object-label").val();
    let objectColor = $("#object-color").val();
    let objectShape = $("#object-shape").val();

    // .text(...) shows the label literally, including < and >.
    $("#preview-label").text(objectLabel);
    // .css(property, value) changes this object's background color.
    $("#object").css("background-color", objectColor);

    // Remove the old shape class, then add the chosen one.
    $("#object").removeClass("square circle");
    $("#object").addClass(objectShape);
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