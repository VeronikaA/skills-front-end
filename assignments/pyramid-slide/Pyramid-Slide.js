var formElem = document.getElementById("draw-form");


function sliderFunction(height) {
    document.getElementById("slidervalue").innerHTML = height;

    formElem.oninput = function(event) {
        event.preventDefault();
    }
    drawPyramid(height);
}

function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var j = 0; j < numBricks; j++) {
            rowStr += "#";
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
