// Wait until the page is fully loaded
window.onload = function () {
  // Get all the buttons on the page
  var buttons = document.getElementsByTagName("button");

  // Loop through all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      alert("Item has been added to your cart!");
    };
  }
};