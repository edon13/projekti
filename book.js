function filterTickets() {
    var input, filter, tickets, ticket, content, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    tickets = document.querySelectorAll(".ticket");

    tickets.forEach(function(ticket) {
        content = ticket.textContent || ticket.innerText;
        txtValue = content.toUpperCase();

        if (txtValue.indexOf(filter) > -1) {
            ticket.style.display = "";
        } else {
            ticket.style.display = "none";
        }
    });
}