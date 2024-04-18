// Function to send user message to the backend
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    appendMessage("User", userInput);

    // Send message to backend
    fetch('/send-message', {
        method: 'POST',
        body: JSON.stringify({ message: userInput }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        appendMessage("Chatbot", data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        appendMessage("Error", "Failed to communicate with the server.");
    });

    // Clear input field
    document.getElementById("user-input").value = "";
}

// Function to display messages in the chat box
function appendMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
}
