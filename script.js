

// Language popup
document.querySelector('.lang-button')?.addEventListener('click', showLanguagePopup);

function showLanguagePopup() {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    overlay.onclick = () => document.body.removeChild(overlay);

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
      <h3>Language Options Coming Soon</h3>
      <p>We are working on providing more language options. Stay tuned!</p>
    `;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);
}

// Subscription form handling
function subscribe() {
    const emailInput = document.querySelector('.subscribe-input-f input');
    if (emailInput) {
        const email = emailInput.value;
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            emailInput.value = '';
        } else {
            alert("Please enter a valid email.");
        }
    }
}

// Join Us form modal handling
function openForm() {
    const formModal = document.getElementById("joinUsFormModal");
    if (formModal) formModal.style.display = "flex";
}

function closeForm() {
    const formModal = document.getElementById("joinUsFormModal");
    if (formModal) formModal.style.display = "none";
}

function submitForm(event) {
    event.preventDefault();
    alert("We'll let you know.");
    closeForm();
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
        'default': 'I\'m sorry, I didn\'t understand that. Can you please rephrase?',
        'blood': 'We can help you find blood donors in your area!',
        'donor': 'Become a donor today to save lives.',
        'help': 'Please let us know how we can assist you!',
        'sign up': 'To sign up, fill out the form in the app and join as a donor.',
        'hospital': 'Many hospitals use Donor Link to connect with donors.',
        'default': 'I\'m sorry, I didn\'t understand that. Can you please rephrase?',
        "hello": "Hello! How can I help you with Donor Link today?",
        "hyy": "hyyy! How are you, How can I help you with Donor Link today?",
        "hi": "Hi there! How can I assist you?",
        "how are you": "I'm here to assist you with Donor Link. How can I help?",
        "what is donor link": "Donor Link is a blood donation app that connects people with local blood donors in emergencies and allows them to participate in blood donation camps.",
        "what are the features of donor link": "Donor Link allows users to register as donors, connect with other donors, receive emergency alerts, and participate in blood donation camps. Many hospitals use Donor Link to find suitable donors quickly.",
        "how to sign up as a donor": "To sign up as a donor, simply fill out the registration form with your blood type, health details, and contact information. After signing up, you’ll be listed as a donor in your locality.",
        "can i participate in blood donation camps": "Yes! Donor Link organizes blood donation camps in collaboration with hospitals. You can join these camps and help save lives.",
        "how do hospitals use donor link": "Hospitals use Donor Link to quickly find and connect with blood donors based on blood type and location, which helps save time and lives in emergencies.",
        "what is the purpose of donor link": "The purpose of Donor Link is to make it easier for patients and hospitals to find blood donors quickly during emergencies, creating a community-driven platform for life-saving blood donations.",
        "bye": "Goodbye! Feel free to ask more if you have questions about Donor Link.",
        "thank you": "You're welcome! I'm here to help whenever you need it."
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
