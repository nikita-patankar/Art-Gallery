document.addEventListener('DOMContentLoaded', () => {
    let Home = document.querySelector('#Home');
    let Banner = document.querySelector('.Banner');
    let scrollLink = document.querySelector('#scrollLink'); // Ensure this is defined

    if (scrollLink) {
        scrollLink.addEventListener('click', (event) => { // Use 'click' (lowercase)
            event.preventDefault();
            Home.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Add event listener for the "Buy" buttons
    let buyItems = document.querySelectorAll('.card-price'); // Select all elements with the class 'card-price'

    buyItems.forEach((item) => {
        item.addEventListener('click', () => {
            window.location.href = 'buy-item.html'; // Navigate to buy-item.html
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let scrollLink = document.querySelectorAll('#scrollLink');

    scrollLink.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            let targetId = link.getAttribute('data-target');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});