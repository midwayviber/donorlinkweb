// Function to open the popup for a hospital
function showPopup(hospitalId) {
    document.getElementById(hospitalId).style.display = "flex";
}

// Function to close the popup
function closePopup(hospitalId) {
    document.getElementById(hospitalId).style.display = "none";
}

// Function to simulate contacting the hospital
function contactHospital() {
    alert("Contact details for the hospital will be provided soon.");
}

// Search function for filtering hospitals by name
function searchHospitals() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const hospitalCards = document.getElementById('hospitalList').getElementsByClassName('hospital-card');

    Array.from(hospitalCards).forEach(card => {
        const hospitalName = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = hospitalName.includes(searchQuery) ? '' : 'none';
    });
}

// Initialize Slick Slider
$(document).ready(function () {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]
    });
});

// Show interest form for an event
function showInterestForm(eventId) {
    document.getElementById("interestForm").style.display = "flex";
}

// Close interest form
function closeInterestForm() {
    document.getElementById("interestForm").style.display = "none";
}

// Submit interest form
function submitForm(event) {
    event.preventDefault();
    alert("Thank you for showing interest!");
    closeInterestForm();
}

// Close popups when clicking outside of the content area
window.onclick = function(event) {
    const popups = document.getElementsByClassName('popup');
    Array.from(popups).forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Check and close interest form if clicked outside
    const interestForm = document.getElementById("interestForm");
    if (event.target === interestForm) {
        interestForm.style.display = 'none';
    }
}

