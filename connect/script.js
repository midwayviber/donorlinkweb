let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  const sliderWidth = document.querySelector(".slider").clientWidth;
  document.querySelector(".slides").style.transform = `translateX(-${index * sliderWidth}px)`;
}

// Function to move slides
function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Automatically cycle through slides (optional)
setInterval(() => {
  moveSlide(1); // Move to the next slide every 3 seconds
}, 3000);

document.addEventListener("DOMContentLoaded", () => {
  const quoteContainer = document.querySelector(".quote-container");
  setTimeout(() => {
    quoteContainer.classList.add("show");
  }, 500);
});

// Add hover effect to reviews
const counters = document.querySelectorAll('.counter');
const observerOptions = {
    root: null, // Use the viewport as the container
    threshold: 0.1 // Trigger when 10% of the counter is in view
};

const updateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 100; // Adjust speed here

    const countInterval = setInterval(() => {
        if (count < target) {
            count = Math.ceil(count + increment);
            counter.innerText = count;
        } else {
            clearInterval(countInterval);
            counter.innerText = target;
        }
    }, 10);
};

const handleIntersection = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            counter.classList.add('visible');
            counter.classList.remove('hidden');
            updateCounter(counter);
            observer.unobserve(counter); // Stop observing once counted
        }
    });
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);
counters.forEach(counter => {
    counter.classList.add('hidden'); // Start hidden
    observer.observe(counter); // Observe each counter
});

// Add hover effect to reviews
const reviews = document.querySelectorAll('.review');

reviews.forEach(review => {
    review.addEventListener('mouseenter', () => {
        review.style.transform = 'scale(1.05)'; // Scale up on hover
    });

    review.addEventListener('mouseleave', () => {
        review.style.transform = 'scale(1)'; // Scale back on mouse leave
    });
});
// Get references to the form and the popup
const contactForm = document.getElementById('contactForm');
const thankYouPopup = document.getElementById('thankYouPopup');
const closePopup = document.getElementById('closePopup');

// Handle form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear the input fields
    contactForm.reset(); // Reset the form fields

    // Show the popup
    thankYouPopup.style.display = 'flex';
});

// Handle closing the popup
closePopup.addEventListener('click', function() {
    thankYouPopup.style.display = 'none'; // Hide the popup
});

// Close the popup when clicking outside of it
thankYouPopup.addEventListener('click', function(event) {
    if (event.target === thankYouPopup) {
        thankYouPopup.style.display = 'none'; // Hide the popup
    }
});


