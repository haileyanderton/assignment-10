var m1 = "How do you like your coffee?";
var m2 = "Pumpkin Spice Latte";
var m3 = "Cuban Latte";
var m4 = "Iced Coffee with Almond Milk";
var m5 = "Fair Trade Coldbrew";

document.getElementById("brew").onclick =
  change;


function change() {

  var url = "images/"
  var coffeePref = document.getElementsByName("crave");
  for (var i in coffeePref) {
    if (coffeePref[i].selected) {
      var selectedCraving = coffeePref[i].value;
      break;
    }
  }
  var newDrink = url + selectedCraving + ".png";

  // replace the image using the DOM
  var image = document.getElementById("drink");
  image.setAttribute("src", newDrink);

}
