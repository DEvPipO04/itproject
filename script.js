// JavaScript to handle the Contact Me modal

// Get the modal, button, and close button
var modal = document.getElementById("contactModal");
var btn = document.getElementById("contactBtn");
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Initially ensure the modal is hidden (this should already be handled by CSS)
modal.style.display = "none";  // Set modal to hidden on load

// When the user clicks the "Contact Me" button, open the modal
btn.onclick = function() {
    modal.style.display = "block"; // Show the modal
}

// When the user clicks the close button, hide the modal
closeBtn.onclick = function() {
    modal.style.display = "none"; // Hide the modal
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Close the modal if the user clicks outside it
    }
}
