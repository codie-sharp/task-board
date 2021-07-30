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

function showHide(id) {
    let status = document.getElementById(id);
    if (status.style.display === "none") {
        status.style.display = "flex";
    } 
    else {
        status.style.display = "none";
    }
}
