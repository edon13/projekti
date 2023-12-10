console.log("hello");




function fetchBookTContent() {
    fetch('bookT.html')
        .then(response => response.text())
        .then(html => {
            const tempElement = document.createElement('div');
            tempElement.innerHTML = html;

            const ticketDivs = tempElement.querySelectorAll('.ticket');

            const sliderContainer = document.getElementById('flexcontainer');
            const sliderContainer2 = document.getElementById('flexcontainer2');

            ticketDivs.forEach(ticketDiv => {
                // Append to both containers
                sliderContainer.appendChild(ticketDiv.cloneNode(true));
                sliderContainer2.appendChild(ticketDiv.cloneNode(true));
            });
        })
        .catch(error => console.error('Error fetching bookT.html:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    fetchBookTContent();
});
