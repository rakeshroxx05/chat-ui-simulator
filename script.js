function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const userText = input.value.toLowerCase();

  if (userText === "") return;

  // show user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = input.value;
  chatBox.appendChild(userMsg);

  // bot reply
  let reply = "Sorry, I didn't understand that.";

  if (userText.includes("hello") || userText.includes("hi")) {
    reply = "Hello! 😊 How can I help you?";
  } 
  else if (userText.includes("how are you")) {
    reply = "I'm good 😄 What about you?";
  }
  else if (userText.includes("your name")) {
    reply = "I'm a Chat UI Simulator 🤖";
  }
  else if (userText.includes("help")) {
    reply = "You can ask me about projects, weather, or general questions.";
  }
  else if (userText.includes("bye")) {
    reply = "Goodbye 👋 Have a nice day!";
  }

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot-msg";
    botMsg.textContent = reply;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
}
