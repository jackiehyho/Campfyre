function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("same-location");
    // Get the output text
    var text = document.getElementById("drop-off");
    var pickuplabel = document.getElementById("pick-up-label");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "none";
        pickuplabel.textContent = "Pick-Up & Drop-Off Location";

    } 
    
    else {
        text.style.display = "block";
        pickuplabel.textContent = "Pick-Up Location";
    }
  }