// Removes "main#main"
let element = document.getElementById("main");
element.remove();

// Creates "h1#victory"
let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");