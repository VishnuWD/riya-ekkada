const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

const userImage = 'user.png';
const replyImage = 'reply.png';

const responses = {
    'riya ekkada': 'Riya evaru?',
    'domini dotor': 'Domini evaru?',
    'domini daughter': 'Domini evaru?',
    'riya mother': 'Asal vallidharu evaru?',
    'mother and dotor': 'valluevaro naku thelidhu',
    'mother and daughter': 'valluevaro naku thelidhu'
};

function addMessage(content, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (isUser) {
        messageElement.classList.add('user-message');
    }

    const imageElement = document.createElement('img');
    imageElement.src = isUser ? userImage : replyImage;
    imageElement.alt = isUser ? 'User' : 'Reply';
    imageElement.classList.add('message-image');

    const contentElement = document.createElement('div');
    contentElement.classList.add('message-content');

    const nameElement = document.createElement('div');
    nameElement.classList.add('message-name');
    nameElement.textContent = isUser ? 'Yesudasu' : 'Tejaswi Thota';

    const textElement = document.createElement('div');
    textElement.textContent = content;

    contentElement.appendChild(nameElement);
    contentElement.appendChild(textElement);

    messageElement.appendChild(imageElement);
    messageElement.appendChild(contentElement);

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleUserMessage() {
    const message = messageInput.value.trim().toLowerCase().replace(/[?]/g, '');
    if (message) {
        addMessage(messageInput.value.trim(), true);
        messageInput.value = '';

        setTimeout(() => {
            const reply = responses[message] || "Naku ardham kaaledhu, repeat chey.";
            addMessage(reply, false);
        }, 1000);
    }
}

sendButton.addEventListener('click', handleUserMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserMessage();
    }
});