window.onload = function(){ 
    let newTicketWindow = document.getElementById("newTicketWindow");
    let newTicketButton = document.getElementById("newTicketButton");
    let span = document.getElementsByClassName("close")[0];

    newTicketButton.onclick = function() {
    newTicketWindow.style.display = "block";
    }
    span.onclick = function() {
    newTicketWindow.style.display = "none";
    }
};
