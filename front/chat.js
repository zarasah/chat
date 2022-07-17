const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
const nameBlock=document.getElementById('name');
const userName = prompt("Enter your Name");
nameBlock.innerHTML=userName;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', {info: input.value, name: userName});
      input.value = '';
    }
});

socket.on('chat message backend', (info) => {
    const item = document.createElement('li');
    item.textContent = info.name + ': ' + info.info;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
