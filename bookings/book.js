// Animations using GSAP
gsap.from("header", {duration: 1, y: -100, opacity: 0, ease: "power2.out"});
gsap.from("main", {duration: 1, delay: 0.5, y: 100, opacity: 0, ease: "power2.out", stagger: 0.2});
gsap.from("footer", {duration: 1, delay: 1, y: 100, opacity: 0, ease: "power2.out"});

// Additional animations for booking sections
gsap.from(".booking-section", {duration: 1, delay: 0.6, y: 100, opacity: 0, ease: "power2.out", stagger: 0.2});

document.addEventListener('DOMContentLoaded', function () {
    // Get the form sections
    const flightSection = document.querySelector('#flight');
    const trainSection = document.querySelector('#train');
    const hotelSection = document.querySelector('#hotels');
    const rentalSection = document.querySelector('#rentals');

    // Add event listener to the flight icon
    flightSection.addEventListener('click', function () {
        flightSection.classList.toggle('show-form');
        trainSection.classList.remove('show-form'); // Hide other forms
        hotelSection.classList.remove('show-form'); // Hide other forms
        rentalSection.classList.remove('show-form'); // Hide other forms
    });

    // Add event listener to the train icon
    trainSection.addEventListener('click', function () {
        trainSection.classList.toggle('show-form');
        flightSection.classList.remove('show-form'); // Hide other forms
        hotelSection.classList.remove('show-form'); // Hide other forms
        rentalSection.classList.remove('show-form'); // Hide other forms
    });

    // Add event listener to the hotel icon
    hotelSection.addEventListener('click', function () {
        hotelSection.classList.toggle('show-form');
        flightSection.classList.remove('show-form'); // Hide other forms
        trainSection.classList.remove('show-form'); // Hide other forms
        rentalSection.classList.remove('show-form'); // Hide other forms
    });

    // Add event listener to the rentals icon
    rentalSection.addEventListener('click', function () {
        rentalSection.classList.toggle('show-form');
        flightSection.classList.remove('show-form'); // Hide other forms
        trainSection.classList.remove('show-form'); // Hide other forms
        hotelSection.classList.remove('show-form'); // Hide other forms
    });
});
