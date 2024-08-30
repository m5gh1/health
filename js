// script.js

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        const chatOutput = document.getElementById('chat-output');
        chatOutput.innerHTML += <div class="user-message">You: ${userInput}</div>;
        chatOutput.innerHTML += <div class="bot-message">Bot: ${data.response}</div>;
        document.getElementById('user-input').value = '';
        chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the bottom
    })
    .catch(error => console.error('Error:', error));
}
