window.onload = function() {
  s = document.createElement("style");
  s.innerHTML = "#title { font-size: 350% }";
  document.head.appendChild(s);

  document.querySelector("#ingredients").onclick = function() {
    this.classList.toggle("showMe");
  }

  document.querySelector("#equipment").onclick = function() {
    this.classList.toggle("showMe");
  }

  document.querySelector("#directions").onclick = function() {
    this.classList.toggle("showMe");
  }

  document.querySelector("#extra").onclick = function() {
    this.classList.toggle("showMe");
  }

  document.querySelector("#directions ol").innerHTML += "<li>Enjoy your cookies and have a magical day!</li>";

  loadFileInto("ingredients.html", "#ingredients ul");

  loadFileInto("equipment.html", "#equipment ul");

  loadFileInto("instructions.html", "#directions ol");
}


//tp6 js and ajax

function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML += this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();

}