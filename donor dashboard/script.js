const donors = [
    { name: "John Doe", bloodGroup: "B+", location: "New York", healthStatus: "Mild Asthma", donations: 23, donationFrequency: "Frequent", image: "images/1.jpg" },
    { name: "Sarah Miller", bloodGroup: "AB-", location: "Chicago", healthStatus: "N/A", donations: 6, donationFrequency: "Rare", image: "images/2.jpg" },
    { name: "James Smith", bloodGroup: "A+", location: "Los Angeles", healthStatus: "Healthy", donations: 15, donationFrequency: "Occasional", image: "images/3.jpg" },
    { name: "Emily Johnson", bloodGroup: "O+", location: "New York", healthStatus: "Healthy", donations: 30, donationFrequency: "Frequent", image: "images/4.jpg" },
    { name: "Michael Brown", bloodGroup: "B+", location: "Boston", healthStatus: "Mild Asthma", donations: 23, donationFrequency: "Frequent", image: "images/5.jpg" },
    { name: "Sophia Davis", bloodGroup: "AB-", location: "Chicago", healthStatus: "N/A", donations: 6, donationFrequency: "Rare", image: "images/6.jpg" },
    { name: "Daniel Martinez", bloodGroup: "A+", location: "Los Angeles", healthStatus: "Healthy", donations: 15, donationFrequency: "Occasional", image: "images/7.jpg" },
    { name: "Olivia Wilson", bloodGroup: "O+", location: "New York", healthStatus: "Healthy", donations: 30, donationFrequency: "Frequent", image: "images/8.jpg" },
    { name: "Ethan Moore", bloodGroup: "B+", location: "New York", healthStatus: "Mild Asthma", donations: 23, donationFrequency: "Frequent", image: "images/9.jpg" },
    { name: "Charlotte Taylor", bloodGroup: "AB-", location: "Chicago", healthStatus: "N/A", donations: 6, donationFrequency: "Rare", image: "images/10.jpg" },
    { name: "Liam Lee", bloodGroup: "A+", location: "Los Angeles", healthStatus: "Healthy", donations: 15, donationFrequency: "Occasional", image: "images/11.jpg" },
    { name: "Ava Harris", bloodGroup: "O+", location: "New York", healthStatus: "Healthy", donations: 30, donationFrequency: "Frequent", image: "images/12.jpg" },
    { name: "Noah King", bloodGroup: "B+", location: "Miami", healthStatus: "Mild Asthma", donations: 23, donationFrequency: "Frequent", image: "images/13.jpg" },
    { name: "Mia Scott", bloodGroup: "AB-", location: "San Francisco", healthStatus: "N/A", donations: 6, donationFrequency: "Rare", image: "images/14.jpg" },
    { name: "Lucas Carter", bloodGroup: "A+", location: "Seattle", healthStatus: "Healthy", donations: 15, donationFrequency: "Occasional", image: "images/15.jpg" },
    { name: "Amelia Lee", bloodGroup: "O+", location: "New York", healthStatus: "Healthy", donations: 30, donationFrequency: "Frequent", image: "images/16.jpg" },
    { name: "Henry Adams", bloodGroup: "B-", location: "Austin", healthStatus: "Healthy", donations: 10, donationFrequency: "Occasional", image: "images/17.jpeg" },
    { name: "Grace Nelson", bloodGroup: "A-", location: "Dallas", healthStatus: "Healthy", donations: 18, donationFrequency: "Frequent", image: "images/18.jpeg" },
    { name: "William Green", bloodGroup: "O-", location: "San Diego", healthStatus: "Mild Allergy", donations: 8, donationFrequency: "Rare", image: "images/19.jpeg" },
    { name: "Ella Cooper", bloodGroup: "AB+", location: "Las Vegas", healthStatus: "Healthy", donations: 25, donationFrequency: "Frequent", image: "images/20.jpeg" },
    { name: "Benjamin Reed", bloodGroup: "B+", location: "Orlando", healthStatus: "Healthy", donations: 14, donationFrequency: "Occasional", image: "images/21.jpeg" },
    { name: "Isabella Ross", bloodGroup: "A+", location: "Phoenix", healthStatus: "Healthy", donations: 12, donationFrequency: "Occasional", image: "images/22.jpeg" },
    { name: "Logan Phillips", bloodGroup: "AB-", location: "Denver", healthStatus: "Healthy", donations: 9, donationFrequency: "Rare", image: "images/23.jpeg" },
    { name: "Zoe Bailey", bloodGroup: "O+", location: "Houston", healthStatus: "N/A", donations: 19, donationFrequency: "Frequent", image: "images/24.jpeg" },
    { name: "Jack Robinson", bloodGroup: "B+", location: "Philadelphia", healthStatus: "Healthy", donations: 22, donationFrequency: "Occasional", image: "images/25.jpeg" }
];


let visibleDonors = 10; // Number of donors initially visible

function loadDonors() {
    const donorContainer = document.getElementById('donorContainer');
    donorContainer.innerHTML = ''; // Clear previous donor cards

    const filteredDonors = donors.slice(0, visibleDonors);

    // Create donor cards dynamically
    filteredDonors.forEach(donor => {
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card-wrapper');

        const card = document.createElement('div');
        card.classList.add('donor-card');
        card.innerHTML = `
            <div class="donor-top-section">
                <div class="blood-group-circle">${donor.bloodGroup}</div>
                <div class="donor-image-container">
                    <img src="${donor.image}" alt="${donor.name}" class="donor-image">
                </div>
            </div>
            <p class="donor-name">${donor.name}</p>
            <p class="donor-health">Health Status :</p>
            <p class="donor-status">${donor.healthStatus}</p>
            <p class="donor-donations">Donations: ${donor.donations}</p>
        `;

        // Create location button with donor's actual location
        const locationButton = document.createElement('button');
        locationButton.classList.add('location-button');
        locationButton.innerHTML = `
            ${donor.location} <img src="images/location.png" alt="Location Icon" class="location-icon">
        `;

        // Append the card and button to the cardWrapper
        cardWrapper.appendChild(card);
        cardWrapper.appendChild(locationButton);

        // Append the wrapper to the container
        donorContainer.appendChild(cardWrapper);
    });
}

// Modify the filterDonors function to categorize by donation frequency and filter based on inputs
function filterDonors() {
    const bloodGroup = document.getElementById('bloodGroupFilter').value;
    const location = document.getElementById('locationFilter').value;
    const health = document.getElementById('healthFilter').value;
    const frequency = document.getElementById('donationFrequencyFilter').value;

    const filtered = donors.filter(donor => {
        // Categorize donation frequency based on donations
        let donorFrequency = "";
        if (donor.donations > 20) donorFrequency = "Frequent";
        else if (donor.donations >= 10) donorFrequency = "Occasional";
        else donorFrequency = "Rare";

        return (!bloodGroup || donor.bloodGroup === bloodGroup) &&
            (!location || donor.location === location) &&
            (!health || donor.healthStatus === health) &&
            (!frequency || donorFrequency === frequency);
    });

    visibleDonors = filtered.length;
    loadFilteredDonors(filtered);
}

// Load donors based on filter results
function loadFilteredDonors(filteredDonors) {
    const donorContainer = document.getElementById('donorContainer');
    donorContainer.innerHTML = ''; // Clear previous donor cards

    // Loop through filtered donors and create cards
    filteredDonors.slice(0, visibleDonors).forEach(donor => {
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card-wrapper');

        const card = document.createElement('div');
        card.classList.add('donor-card');
        card.innerHTML = `
            <div class="donor-top-section">
                <div class="blood-group-circle">${donor.bloodGroup}</div>
                <div class="donor-image-container">
                    <img src="${donor.image}" alt="${donor.name}" class="donor-image">
                </div>
            </div>
            <p class="donor-name">${donor.name}</p>
            <p class="donor-health">Health Status :</p>
            <p class="donor-status">${donor.healthStatus}</p>
            <p class="donor-donations">Donations: ${donor.donations}</p>
        `;

        const locationButton = document.createElement('button');
        locationButton.classList.add('location-button');
        locationButton.innerHTML = `
            ${donor.location} <img src="images/location.png" alt="Location Icon" class="location-icon">
        `;

        cardWrapper.appendChild(card);
        cardWrapper.appendChild(locationButton);
        donorContainer.appendChild(cardWrapper);
    });
}

// Event listeners for filters
document.getElementById('bloodGroupFilter').addEventListener('change', filterDonors);
document.getElementById('locationFilter').addEventListener('change', filterDonors);
document.getElementById('healthFilter').addEventListener('change', filterDonors);
document.getElementById('donationFrequencyFilter').addEventListener('change', filterDonors);

// Function to load more donors when "Show more" is clicked
function loadMore() {
    visibleDonors += 5; // Load 5 more donors each time
    loadDonors();
}

// Initial load of donors
loadDonors();


// Event listener for language button (if applicable)
document.querySelector('.lang-button').addEventListener('click', function() {
    alert('Language options coming soon!');
});

// script.js
function showLanguagePopup() {
    // Create an overlay for the popup
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
  
    // Remove the overlay when clicked
    overlay.onclick = () => document.body.removeChild(overlay);
  
    // Create the popup content
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
      <h3>Language Options Coming Soon</h3>
      <p>We are working on providing more language options. Stay tuned!</p>
    `;
  
    // Append the popup to the overlay
    overlay.appendChild(popup);
  
    // Append the overlay to the body
    document.body.appendChild(overlay);
  }

  function subscribe() {
    const emailInput = document.querySelector('.subscribe-input-f input');
    const email = emailInput.value;
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = '';
    } else {
        alert("Please enter a valid email.");
    }
}


// Chatbot functionality
const chatbotBtn = document.getElementById('chatbot-btn');
const chatbotModal = document.getElementById('chatbot-modal');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatbox = document.getElementById('chatbox');

if (chatbotBtn) {
    chatbotBtn.onclick = openChatbot;
}

function openChatbot() {
    if (chatbotModal) {
        chatbotModal.style.display = 'block';
        if (userInput) userInput.focus();
    }
}

function closeChatbot() {
    if (chatbotModal) chatbotModal.style.display = 'none';
}

// Response handling based on keywords
function getChatbotResponse(message) {
    const responses = {
        'blood': 'We can help you find blood donors in your area!',
        'donor': 'Become a donor today to save lives.',
        'help': 'Please let us know how we can assist you!',
        'sign up': 'To sign up, fill out the form in the app and join as a donor.',
        'hospital': 'Many hospitals use Donor Link to connect with donors.',
        'default': 'I\'m sorry, I didn\'t understand that. Can you please rephrase?'
    };

    let response = responses['default'];
    for (let keyword in responses) {
        if (message.toLowerCase().includes(keyword)) {
            response = responses[keyword];
            break;
        }
    }
    return response;
}

// Send message and display response
function sendMessage() {
    if (!userInput || !chatbox) return;

    const message = userInput.value.trim();
    if (!message) return; // Don't send empty messages

    // Display user's message in chatbox
    chatbox.innerHTML += `<p class="user-msg">User: ${message}</p>`;
    userInput.value = ''; // Clear input field

    // Get chatbot response and display it
    const response = getChatbotResponse(message);
    chatbox.innerHTML += `<p class="bot-msg">Bot: ${response}</p>`;

    // Scroll chatbox to latest message
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Event listeners for sending messages
if (sendBtn) sendBtn.onclick = sendMessage;
if (userInput) {
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });
}
