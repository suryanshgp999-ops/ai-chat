function send() {
  let input = document.getElementById("user");
  let messages = document.getElementById("messages");

  if (input.value === "") return;

  messages.innerHTML += `<div class="message">You: ${input.value}</div>`;
  messages.innerHTML += `<div class="message">AI: Hello! I am Infinite AI 🤖</div>`;

  input.value = "";
}