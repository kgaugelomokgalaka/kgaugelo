function toggleChatbot() {
    const chatbotContainer = document.getElementById("chatbot-container");
    // Toggle display between 'none' and 'block'
    chatbotContainer.style.display = chatbotContainer.style.display === "none" ? "block" : "none";
}

function handleKeypress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    addMessage("user", userInput);

    const botResponse = getBotResponse(userInput);
    addMessage("bot", botResponse);

    document.getElementById("user-input").value = "";
}

function addMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
 
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
    messageElement.innerText = message;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    const responses = {
        "hi": "Hello! How can I assist you today?",
        "hello": "Hi there!",
        "how are you": "I'm here to help!",
        "name": "kgaugelo Helen Mokgalaka",
         "education": "Admission to bachelors degree from All saints and bachelors degree in information technology in business systems from Rosebank college!",
          "skills": "javaScript, HTML, CSS, SQL, communication skills , team work skills creativity skils!",
         
    };
    return responses[input.toLowerCase()] || "I'm sorry, I don't understand that.";
}