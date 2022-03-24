const socket = io();

const messages = document.querySelector('.messages');
const chatForm = document.querySelector('#chatForm');
const chatMessage = document.querySelector('#chatMessage');
const chatWindow = document.querySelector('.chat-window');
const feedback = document.querySelector('#feedback');

const userName = new URLSearchParams(window.location.search).get('name');
document.querySelector('#me').innerText = userName;

socket.on('connect', () => {
  socket.emit('user', userName);
})

socket.on('user', data => {
  messages.innerHTML += `<p class"inline-feedback">${data}</p>`
  chatWindow.scrollTop = chatWindow.scrollHeight;
})

socket.on('message', data => {
  let position = data.id === socket.id ? 'right' : '';

  // feedback.insertAdjacentElement('beforebegin', `
  // <div class="single-message ${position}">
  //   <p class="single-message_name">${data.name}</p>
  //   <p class="single-message_msg">${data.message}</p>
  // </div>
  // `)

  messages.innerHTML += `
  <div class="single-message ${position}">
    <p class="single-message_name">${data.name}</p>
    <p class="single-message_msg">${data.message}</p>
  </div>
  `

  feedback.innerText = '';
  feedback.classList.add('d-none');
  chatWindow.scrollTop = chatWindow.scrollHeight;

})

socket.on('typing', data => {
  feedback.innerText = `${data} is typing a message...`;
  feedback.classList.remove('d-none');
})

chatForm.addEventListener('submit', e => {
  e.preventDefault();

  if(chatMessage.value.trim() !== '') {
    socket.emit('message', {
      id:socket.id,
      message: chatMessage.value,
      name: userName
    })
  }
  chatMessage.value = '';
  chatMessage.focus();
})

chatMessage.addEventListener('keypress', () => {
  socket.emit('typing', userName);
})